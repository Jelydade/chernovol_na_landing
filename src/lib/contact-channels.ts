import { type ServiceId, serviceLabels, site } from "@/lib/site-data";

export type ContactChannel = "telegram" | "whatsapp" | "max" | "email" | "phone";

export type ApplicationFormState = {
  name: string;
  contact: string;
  service: ServiceId;
  format: "online" | "offline" | "any";
  topic: string;
  consent: boolean;
  contactChannel: ContactChannel;
};

export const contactChannels: { id: ContactChannel; label: string }[] = [
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "max", label: "MAX" },
  { id: "email", label: "Почта" },
  { id: "phone", label: "Телефон" },
];

export const channelActionLabels: Record<ContactChannel, string> = {
  telegram: "Открыть Telegram",
  whatsapp: "Открыть WhatsApp",
  max: "Открыть MAX",
  email: "Открыть почту",
  phone: "Позвонить",
};

export const channelSuccessHints: Record<ContactChannel, string> = {
  telegram: "Должен открыться Telegram с текстом сообщения — останется нажать «Отправить».",
  whatsapp: "Должен открыться WhatsApp с текстом сообщения — останется нажать «Отправить».",
  max: "Откроется ваш чат в MAX. Текст заявки скопирован — вставьте его в поле сообщения (Ctrl+V).",
  email: "Должно открыться приложение почты с готовым письмом — проверьте и отправьте его.",
  phone: "Должно открыться приложение для звонка. Текст заявки скопирован — можно продиктовать при звонке.",
};

const normalize = (value: string) => value.trim();

const formatLabel = (format: ApplicationFormState["format"]) => {
  if (format === "online") return "онлайн";
  if (format === "offline") return "очно";
  return "любой";
};

const phoneDigits = (value: string) => value.replace(/\D/g, "");

const getTelegramUsername = () => {
  const match = site.telegram.match(/t\.me\/([^/?]+)/i);
  return match?.[1] ?? null;
};

export const buildApplicationMessage = (state: ApplicationFormState) => {
  const lines = [
    "Здравствуйте! Хочу записаться.",
    "",
    `Имя: ${normalize(state.name)}`,
    `Мой контакт для ответа: ${normalize(state.contact)}`,
    `Услуга: ${serviceLabels[state.service]}`,
    `Формат: ${formatLabel(state.format)}`,
    "",
    "Комментарий:",
    normalize(state.topic) || "—",
  ];
  return lines.join("\n");
};

export const buildChannelHref = (state: ApplicationFormState) => {
  const message = buildApplicationMessage(state);

  switch (state.contactChannel) {
    case "telegram": {
      const username = getTelegramUsername();
      if (username) {
        return `https://t.me/${username}?text=${encodeURIComponent(message)}`;
      }
      return `https://t.me/share/url?text=${encodeURIComponent(message)}`;
    }
    case "whatsapp": {
      const digits = phoneDigits(site.whatsapp || site.phone);
      return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
    }
    case "max": {
      if (site.max) {
        return site.max;
      }
      return `https://max.ru/:share?text=${encodeURIComponent(message)}`;
    }
    case "email": {
      const subject = `Запись: ${serviceLabels[state.service]} — ${normalize(state.name)}`;
      return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
    case "phone": {
      const digits = phoneDigits(site.phone);
      return digits ? `tel:+${digits}` : `tel:${site.phone}`;
    }
  }
};

export const openExternal = (href: string) => {
  const link = document.createElement("a");
  link.href = href;
  const isNativeScheme = href.startsWith("tel:") || href.startsWith("mailto:");
  if (!isNativeScheme) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  document.body.appendChild(link);
  link.click();
  link.remove();
};
