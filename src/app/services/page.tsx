import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { services } from "@/lib/site";
import s from "@/styles/site.module.css";
import type { Metadata } from "next";
import Link from "next/link";

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
            <div className={s.ctaBand} style={{ marginTop: 24 }}>
              <h2 className={s.h2}>Хотите познакомиться лично?</h2>
              <p className={s.sub}>Запишитесь на консультацию или игру.</p>
              <Link className={s.btnPrimary} href="/contacts">
                Записаться
              </Link>
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
                <Link className={s.link} href="/contacts">
                  Записаться →
                </Link>
              </article>
              <article className={s.card}>
                <h2 className={s.h3}>Трансформационные игры</h2>
                <p className={s.cardText}>
                  Индивидуально — 5 000 ₽ (1,5–2 часа). Группа до 5 человек —
                  3 000 ₽/чел. (3–4 часа). Очно.
                </p>
                <Link className={s.link} href="/games">
                  Смотреть игры →
                </Link>
              </article>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
