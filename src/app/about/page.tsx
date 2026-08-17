import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import s from "@/styles/site.module.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Черновол Наталья Александровна — психолог, специалист в гештальт-подходе, ведущая трансформационных игр и групп.",
};

export default function AboutPage() {
  return (
    <div className={s.page}>
      <Header activePath="/about" />

      <main className={s.main}>
        <section className={s.pageHero}>
          <div className={s.container}>
            <h1 className={s.h1}>Обо мне</h1>
            <div className={styles.bio}>
              <h2 className={styles.bioName}>
                Черновол Наталья Александровна
              </h2>
              <p className={styles.bioRole}>
                Психолог, работаю в гештальт-подходе.
                <br />
                Ведущая трансформационных игр и групп.
              </p>

              <h2 className={styles.educationTitle}>Моё образование</h2>
              <ul className={styles.educationList}>
                <li>
                  Клиническая психология, психология личности — Кубанский
                  государственный университет.
                </li>
                <li>
                  Обучение гештальт-подходу — Московский гештальт-институт.
                </li>
                <li>Обучение методу Psy 2.0, Москва.</li>
                <li>
                  Более 500 часов групповой и личной терапии, а также
                  супервизии.
                </li>
                <li>Более пяти лет практики.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={styles.gallery}>
              <figure className={styles.photoItem}>
                <div className={`${s.photo} ${styles.portrait}`}>
                  <Image
                    src="/photos/portrait-red.jpg"
                    alt={`${site.name}, ${site.title.toLowerCase()}`}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    className={styles.portraitImage}
                    priority
                  />
                </div>
                <figcaption className={styles.caption}>{site.name}</figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/professional-event.jpg"
                  alt={`${site.name} на профессиональном мероприятии`}
                  width={501}
                  height={750}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Участие в профессиональных мероприятиях
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/group-work.jpg"
                  alt={`${site.name} во время групповой работы`}
                  width={579}
                  height={1024}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Работа с участниками группы
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <div className={styles.workspace}>
                  <img
                    src="/photos/workspace-cabinet.jpg"
                    alt="Кабинет для очных консультаций"
                    className={styles.workspaceImage}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className={styles.caption}>
                  Уютный кабинет для офлайн встреч
                </figcaption>
              </figure>

              <figure className={`${styles.photoItem} ${styles.photoItemWide}`}>
                <div className={`${s.photoWide} ${styles.conference}`}>
                  <Image
                    src="/photos/conference.png"
                    alt={`${site.name} на гештальт-конференции`}
                    width={768}
                    height={1024}
                    sizes="(max-width: 600px) 100vw, 1120px"
                    className={styles.conferenceImage}
                  />
                </div>
                <figcaption className={styles.caption}>
                  Обучение и профессиональное сообщество
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/gestalt-intensive.jpg"
                  alt={`${site.name} на гештальт-интенсиве`}
                  width={815}
                  height={1024}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Гештальт-интенсив «Атмосфера гештальта»
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/training-certificate.jpg"
                  alt={`${site.name} после профессионального обучения`}
                  width={768}
                  height={1024}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Профессиональное обучение и повышение квалификации
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/psychology-graduation.jpg"
                  alt={`${site.name} с дипломами об образовании`}
                  width={768}
                  height={1024}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Получение диплома по психологии
                </figcaption>
              </figure>

              <figure className={styles.photoItem}>
                <Image
                  src="/photos/group-facilitation.jpg"
                  alt={`${site.name} во время ведения группы`}
                  width={766}
                  height={999}
                  sizes="(max-width: 600px) 100vw, 440px"
                  className={styles.additionalPortrait}
                />
                <figcaption className={styles.caption}>
                  Ведение групп и трансформационных игр
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <div className={s.grid2}>
              <div>
                <h2 className={s.h2}>Чем руководствуюсь в работе</h2>
                <div className={s.prose} style={{ marginTop: 16 }}>
                  <p>
                    Для меня терапия — это безопасное пространство, где можно быть
                    собой: со слабостью, сомнениями, злостью, надеждой и со всем спектром переживаний. Я не даю
                    готовых рецептов, но помогаю услышать себя и найти опору.
                  </p>
                  <p>
                    Важны честность, уважение к вашему темпу и глубина. Я сама
                    регулярно в процессе — личная терапия, супервизия, интенсивы, конференции, обучение для меня
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
                    внутри вас в момент сессии, и не только.
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
            <div className={styles.concerns}>
              <h2 className={s.h2}>Если вам знакомо...</h2>

              <div className={styles.concernGroups}>
                <article className={styles.concernGroup}>
                  <h3 className={s.h3}>В отношениях</h3>
                  <ul className={styles.concernList}>
                    <li>«Мы живём как соседи», «Секс стал обязанностью».</li>
                    <li>
                      «Ссоры из-за денег и быта», «Я чувствую себя нянькой для
                      взрослого».
                    </li>
                    <li>
                      «После измены мир рухнул», «Не могу перестать прокручивать
                      картинки в голове».
                    </li>
                    <li>
                      «Я растворяюсь в партнёре и теряю себя».
                    </li>
                  </ul>
                </article>

                <article className={styles.concernGroup}>
                  <h3 className={s.h3}>В самооценке и идентичности</h3>
                  <ul className={styles.concernList}>
                    <li>
                      «Меня вот-вот раскроют, хотя я хороший специалист».
                    </li>
                    <li>
                      «Я себя ненавижу», «Смотрю в зеркало и хочу провалиться
                      сквозь землю».
                    </li>
                    <li>
                      «Сравниваю себя с другими: у всех всё есть, а у меня —
                      ничего, хотя объективно всё хорошо».
                    </li>
                    <li>
                      «Не знаю, чего хочу. Мне 30+, а я играю роль, которую
                      выбрали за меня родители».
                    </li>
                  </ul>
                </article>

                <article className={styles.concernGroup}>
                  <h3 className={s.h3}>В эмоциях и теле</h3>
                  <ul className={styles.concernList}>
                    <li>
                      «Панические атаки: страх смерти и ком в горле на ровном
                      месте».
                    </li>
                    <li>
                      «Просыпаюсь в четыре утра с сердцебиением и не могу
                      уснуть».
                    </li>
                    <li>
                      «Эмоциональное выгорание: встаю с кровати, как будто
                      разгружала вагоны».
                    </li>
                    <li>
                      «Апатия: мне всё безразлично, я ничего не чувствую, даже
                      радости».
                    </li>
                  </ul>
                </article>

                <article className={styles.concernGroup}>
                  <h3 className={s.h3}>В детстве и семейных сценариях</h3>
                  <ul className={styles.concernList}>
                    <li>«Мама до сих пор решает, как мне жить».</li>
                    <li>
                      «Повторяю судьбу матери и выбираю отношения, похожие на
                      отношения моих родителей».
                    </li>
                  </ul>
                </article>

                <article className={styles.concernGroup}>
                  <h3 className={s.h3}>В глубинных страхах</h3>
                  <ul className={styles.concernList}>
                    <li>
                      «Понимаю, что половина жизни прошла, а я так и не начал(а)
                      жить по-настоящему».
                    </li>
                  </ul>
                </article>
              </div>

              <div className={styles.concernClosing}>
                <p>
                  Вы можете не оставаться с этим в одиночестве. Как сказал
                  Дональд Винникотт: «Раны формируются в отношениях — и лечатся
                  в отношениях».
                </p>
                <p>
                  Поэтому я приглашаю вас в новый, исцеляющий и конструктивный
                  опыт терапевтических отношений.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={s.sectionAlt}>
          <div className={s.container}>
            <div className={s.ctaBand}>
              <h2 className={s.h2}>Хотите познакомиться лично?</h2>
              <p className={s.sub}>Запишитесь на консультацию или игру.</p>
              <Link className={s.btnPrimary} href="/contacts">
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
