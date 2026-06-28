import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { services } from "@/lib/site";
import s from "@/styles/site.module.css";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description:
    "Консультации психолога и трансформационные игры: форматы, длительность и стоимость.",
};

export default function ServicesPage() {
  return (
    <div className={s.page}>
      <Header activePath="/services" />

      <main className={s.main}>
        <section className={s.pageHero}>
          <div className={s.container}>
            <h1 className={s.h1}>Услуги и цены</h1>
            <p className={s.lead} style={{ marginTop: 12 }}>
              Психологическое консультирование и трансформационные игры — с
              понятными форматами и стоимостью.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th>Услуга</th>
                    <th>Формат</th>
                    <th>Длительность</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.format}</td>
                      <td>{item.duration}</td>
                      <td className={s.tablePrice}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <div className={s.grid2}>
              <article className={s.card}>
                <h2 className={s.h3}>Консультация психолога</h2>
                <p className={s.cardText}>
                  Индивидуальная работа с запросом: отношения, самореализация,
                  тревога, поиск себя. Очно или онлайн — 60 минут, 3 000 ₽.
                </p>
                <Link className={s.link} href="/contacts#signup">
                  Записаться →
                </Link>
              </article>
              <article className={s.card}>
                <h2 className={s.h3}>Трансформационные игры</h2>
                <p className={s.cardText}>
                  Индивидуально — 5 000 ₽ (1,5–2 часа). Группа до 5 человек —
                  3 000 ₽/чел. (3–4 часа). Онлайн.
                </p>
                <Link className={s.link} href="/#games">
                  Смотреть игры →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={s.ctaBand}>
              <h2 className={s.h2}>Не знаете, что выбрать?</h2>
              <p className={s.sub}>
                Напишите — помогу подобрать формат под ваш запрос.
              </p>
              <Link className={s.btnPrimary} href="/contacts#signup">
                Записаться
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
