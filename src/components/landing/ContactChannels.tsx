import { site } from "@/lib/site";
import s from "@/components/landing/ContactChannels.module.css";

type ContactChannelItem = {
  id: string;
  label: string;
  href: string;
  value: string;
  iconSrc: string;
  external?: boolean;
};

const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${site.whatsapp}`;

const channels: ContactChannelItem[] = [
  {
    id: "phone",
    label: "Телефон",
    href: phoneHref,
    value: `Позвонить ${site.phone}`,
    iconSrc: "/icons/phone-metro.png?v=2",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: site.telegram,
    value: "Написать в Телеграм",
    iconSrc: "/icons/telegram-logo.png",
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: whatsappHref,
    value: "Написать в WhatsApp",
    iconSrc: "/icons/whatsapp.png",
    external: true,
  },
  {
    id: "max",
    label: "MAX",
    href: site.max,
    value: "Написать в MAX",
    iconSrc: "/icons/max.png",
    external: true,
  },
];

export const ContactChannels = () => (
  <div className={s.grid}>
    {channels.map((channel) => (
      <article key={channel.id} className={s.card}>
        <img
          className={s.icon}
          src={channel.iconSrc}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
        />
        <h2 className={s.title}>{channel.label}</h2>
        <a
          className={s.link}
          href={channel.href}
          {...(channel.external
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {channel.value}
        </a>
      </article>
    ))}
  </div>
);
