import { ContactChannels } from "@/components/landing/ContactChannels";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import s from "@/styles/site.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Телефон, Telegram, WhatsApp, MAX и запись на консультацию или игру.",
};

export default function ContactsPage() {
  return (
    <div className={s.page}>
      <Header activePath="/contacts" />

      <main className={s.main}>
        <section className={s.pageHeroCompact}>
          <div className={s.container}>
            <h1 className={s.h1}>Контакты</h1>
            <p className={s.lead} style={{ marginTop: 12 }}>
              Свяжитесь удобным способом или заполните форму записи.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <ContactChannels />
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <h2 className={s.h2}>{site.city}</h2>
            <p className={s.sub} style={{ marginTop: 8 }}>
              {site.address} — очные встречи по предварительной записи.
            </p>
            <div className={s.map} style={{ marginTop: 20 }}>
              <iframe
                title="Карта — г. Краснодар, ул. Коммунаров, 266, 3 этаж (рядом с Центром Города)"
                src={site.mapEmbedUrl}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="signup" className={s.section}>
          <div className={s.container}>
            <div className={s.sectionHeader}>
              <h2 className={s.h2}>Записаться</h2>
              <p className={s.sub}>Выберите услугу и формат встречи.</p>
            </div>
            <div className={s.card}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
