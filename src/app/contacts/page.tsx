import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/landing/ContactForm";
import { site } from "@/lib/site";
import s from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Телефон, Telegram, Instagram и запись на консультацию или игру.",
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
            <div className={s.grid3}>
              <div className={s.card}>
                <h2 className={s.h3}>Телефон</h2>
                <a className={s.link} href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </div>
              <div className={s.card}>
                <h2 className={s.h3}>Telegram</h2>
                <a className={s.link} href={site.telegram} target="_blank" rel="noreferrer">
                  {site.telegramHandle}
                </a>
              </div>
              <div className={s.card}>
                <h2 className={s.h3}>Instagram</h2>
                <a className={s.link} href={site.instagram} target="_blank" rel="noreferrer">
                  {site.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <h2 className={s.h2}>{site.city}</h2>
            <p className={s.sub} style={{ marginTop: 8 }}>
              {site.address} — очные встречи по договорённости.
            </p>
            <div className={s.map} style={{ marginTop: 20 }}>
              <iframe
                title="Карта"
                src={site.mapEmbedUrl}
                allowFullScreen
              />
            </div>
            <p className={s.sub} style={{ marginTop: 12, fontSize: 13 }}>
              Замените embed-ссылку в <code>src/lib/site.ts</code> на вашу карту Яндекс или Google.
            </p>
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
