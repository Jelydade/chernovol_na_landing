"use client";

import { useMemo, useState } from "react";
import { type ServiceId, serviceLabels } from "@/lib/site-data";
import {
  type ApplicationFormState,
  type ContactChannel,
  buildApplicationMessage,
  buildChannelHref,
  channelActionLabels,
  channelSuccessHints,
  contactChannels,
  openExternal,
} from "@/lib/contact-channels";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  defaultService?: ServiceId;
};

const MAX_TOPIC_LEN = 600;

const normalize = (value: string) => value.trim();

const getErrors = (state: ApplicationFormState) => {
  const next: Partial<Record<keyof ApplicationFormState, string>> = {};
  if (!normalize(state.name)) next.name = "Укажите имя.";
  if (!normalize(state.contact)) next.contact = "Как с вами связаться?";
  if (!state.consent) next.consent = "Нужно согласие на обработку данных.";
  if (state.topic.length > MAX_TOPIC_LEN)
    next.topic = `Сократите текст до ${MAX_TOPIC_LEN} символов.`;
  return next;
};

export const ContactForm = ({ defaultService = "consultation" }: ContactFormProps) => {
  const [state, setState] = useState<ApplicationFormState>({
    name: "",
    contact: "",
    service: defaultService,
    format: "any",
    topic: "",
    consent: true,
    contactChannel: "telegram",
  });
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const errors = useMemo(() => getErrors(state), [state]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);
  const channelHref = useMemo(() => buildChannelHref(state), [state]);

  const setField = <K extends keyof ApplicationFormState>(
    key: K,
    value: ApplicationFormState[K],
  ) => {
    setSubmitted(false);
    setCopied(false);
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const copyMessage = async (message: string) => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      return true;
    } catch {
      return false;
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);

    const nextErrors = getErrors(state);
    if (Object.keys(nextErrors).length > 0) return;

    const message = buildApplicationMessage(state);
    await copyMessage(message);
    setSubmitted(true);
    openExternal(buildChannelHref(state));
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>Заявка готова</p>
        <p className={styles.successText}>{channelSuccessHints[state.contactChannel]}</p>
        {copied ? (
          <p className={styles.successNote}>Текст заявки скопирован в буфер обмена.</p>
        ) : null}
        <div className={styles.actions}>
          <a
            className={styles.submit}
            href={channelHref}
            target={state.contactChannel === "phone" ? undefined : "_blank"}
            rel={state.contactChannel === "phone" ? undefined : "noopener noreferrer"}
          >
            {channelActionLabels[state.contactChannel]}
          </a>
        </div>
        <button
          type="button"
          className={styles.reset}
          onClick={() => {
            setSubmitted(false);
            setTouched(false);
            setCopied(false);
          }}
        >
          Изменить данные
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span className={styles.label}>Имя</span>
          <input
            className={styles.input}
            value={state.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Как к вам обращаться"
            autoComplete="name"
          />
          {touched && errors.name ? (
            <span className={styles.error}>{errors.name}</span>
          ) : null}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Ваш контакт для ответа</span>
          <input
            className={styles.input}
            value={state.contact}
            onChange={(e) => setField("contact", e.target.value)}
            placeholder="Telegram / телефон / e-mail"
            autoComplete="tel"
          />
          {touched && errors.contact ? (
            <span className={styles.error}>{errors.contact}</span>
          ) : null}
        </label>
      </div>

      <fieldset className={styles.radioGroup}>
        <legend className={styles.label}>Как связаться с вами</legend>
        <div className={styles.radioRow}>
          {contactChannels.map(({ id, label }) => (
            <label
              key={id}
              className={
                state.contactChannel === id
                  ? `${styles.radioOption} ${styles.radioOptionActive}`
                  : styles.radioOption
              }
            >
              <input
                type="radio"
                name="contactChannel"
                value={id}
                checked={state.contactChannel === id}
                onChange={() => setField("contactChannel", id as ContactChannel)}
                className={styles.radioInput}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.field}>
        <span className={styles.label}>Услуга</span>
        <select
          className={styles.select}
          value={state.service}
          onChange={(e) => setField("service", e.target.value as ServiceId)}
        >
          {(Object.keys(serviceLabels) as ServiceId[]).map((id) => (
            <option key={id} value={id}>
              {serviceLabels[id]}
            </option>
          ))}
        </select>
      </label>

      <fieldset className={styles.segmented} aria-label="Формат">
        <legend className={styles.label}>Формат</legend>
        <div className={styles.segRow}>
          {(
            [
              ["any", "Любой"],
              ["online", "Онлайн"],
              ["offline", "Очно"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={
                state.format === value ? `${styles.seg} ${styles.segActive}` : styles.seg
              }
              onClick={() => setField("format", value)}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <label className={styles.field}>
        <span className={styles.label}>Комментарий (необязательно)</span>
        <textarea
          className={styles.textarea}
          value={state.topic}
          onChange={(e) => setField("topic", e.target.value)}
          placeholder="Кратко о запросе или удобном времени"
          rows={4}
        />
        {touched && errors.topic ? (
          <span className={styles.error}>{errors.topic}</span>
        ) : null}
      </label>

      <label className={styles.check}>
        <input
          type="checkbox"
          checked={state.consent}
          onChange={(e) => setField("consent", e.target.checked)}
        />
        <span>Согласен(на) на обработку персональных данных для обратной связи.</span>
      </label>
      {touched && errors.consent ? (
        <div className={styles.error}>{errors.consent}</div>
      ) : null}

      <div className={styles.actions}>
        <button className={styles.submit} type="submit" disabled={!isValid}>
          Записаться
        </button>
      </div>

      <p className={styles.hint}>
        После отправки откроется выбранный способ связи с готовым сообщением.
      </p>
    </form>
  );
};
