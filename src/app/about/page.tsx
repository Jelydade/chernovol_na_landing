import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { education, site } from "@/lib/site";
import s from "@/styles/site.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Гештальт-психолог: биография, образование, супервизия и подход к работе.",
};

export default function AboutPage() {
  return (
    <div className={s.page}>
      <Header activePath="/about" />

      <main className={s.main}>
        <section className={s.pageHero}>
          <div className={s.container}>
            <h1 className={s.h1}>Обо мне</h1>
            <p className={s.lead} style={{ marginTop: 12 }}>
              {site.name} — {site.title.toLowerCase()}. Работаю с взрослыми людьми,
              которые ищут не «поговорить», а системную работу с запросом.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={styles.gallery}>
              <div className={s.photo}>Портрет</div>
              <div className={s.photo}>Рабочее место</div>
              <div className={s.photoWide}>На обучении / супервизии</div>
            </div>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <div className={s.grid2}>
              <div>
                <h2 className={s.h2}>Чем руковожусь в работе</h2>
                <div className={s.prose} style={{ marginTop: 16 }}>
                  <p>
                    Для меня терапия — это безопасное пространство, где можно быть
                    собой: со слабостью, сомнениями, злостью и надеждой. Я не даю
                    готовых рецептов, но помогаю услышать себя и найти опору.
                  </p>
                  <p>
                    Важны честность, уважение к вашему темпу и глубина. Я сама
                    регулярно в процессе — личная терапия и супервизия для меня
                    не формальность, а часть профессиональной этики.
                  </p>
                </div>
              </div>
              <div>
                <h2 className={s.h2}>Почему гештальт</h2>
                <div className={s.prose} style={{ marginTop: 16 }}>
                  <p>
                    Гештальт позволяет работать с целостным опытом — не только с
                    «головой», но и с телом, чувствами, образами. Это подход
                    «здесь и сейчас»: мы исследуем, что происходит между нами и
                    внутри вас в момент сессии.
                  </p>
                  <p>
                    Именно поэтому я выбрала его: он даёт глубину и одновременно
                    опирается на живой контакт, а не на сухие схемы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.h2}>Образование и повышение квалификации</h2>
            <ul className={styles.list} style={{ marginTop: 20 }}>
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <div className={s.ctaBand}>
              <h2 className={s.h2}>Хотите познакомиться лично?</h2>
              <p className={s.sub}>Запишитесь на консультацию или игру.</p>
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
