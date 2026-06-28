"use client";

import { useMemo, useState } from "react";
import { type ServiceId, serviceLabels, site } from "@/lib/site-data";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  contact: string;
  service: ServiceId;
  format: "online" | "offline" | "any";
  topic: string;
  consent: boolean;
};

type ContactFormProps = {
  defaultService?: ServiceId;
};

const MAX_TOPIC_LEN = 600;

const formatLabel = (format: FormState["format"]) => {
  if (format === "online") return "онлайн";
  if (format === "offline") return "очно";
  return "любой";
};

const buildMailto = (state: FormState) => {
  const subject = `Запись: ${serviceLabels[state.service]} — ${state.name || "без имени"}`;
  const lines = [
    `Имя: ${state.name || "—"}`,
    `Контакт: ${state.contact || "—"}`,
    `Услуга: ${serviceLabels[state.service]}`,
    `Формат: ${formatLabel(state.format)}`,
    "",
    "Комментарий:",
    state.topic || "—",
  ];
  const url = new URL(`mailto:${site.email}`);
  url.searchParams.set("subject", subject);
  url.searchParams.set("body", lines.join("\n"));
  return url.toString();
};

const normalize = (value: string) => value.trim();

export const ContactForm = ({ defaultService = "consultation" }: ContactFormProps) => {
  const [state, setState] = useState<FormState>({
    name: "",
    contact: "",
    service: defaultService,
    format: "any",
    topic: "",
    consent: true,
  });
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!normalize(state.name)) next.name = "Укажите имя.";
    if (!normalize(state.contact)) next.contact = "Как с вами связаться?";
    if (!state.consent) next.consent = "Нужно согласие на обработку данных.";
    if (state.topic.length > MAX_TOPIC_LEN)
      next.topic = `Сократите текст до ${MAX_TOPIC_LEN} символов.`;
    return next;
  }, [state]);

  const isValid = Object.keys(errors).length === 0;
  const mailto = useMemo(() => buildMailto(state), [state]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    window.location.href = mailto;
  };

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
          <span className={styles.label}>Контакт</span>
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
        <button className={styles.submit} type="submit">
          Записаться
        </button>
        <a className={styles.ghost} href={mailto}>
          Открыть письмо
        </a>
      </div>

      <p className={styles.hint}>
        Или напишите в{" "}
        <a className={styles.link} href={site.telegram} target="_blank" rel="noreferrer">
          Telegram
        </a>
        .
      </p>
    </form>
  );
};
