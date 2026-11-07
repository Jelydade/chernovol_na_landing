import { BookingAction } from "@/components/landing/BookingAction";
import { GameCover } from "@/components/landing/GameCover";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getAllGames } from "@/lib/games";
import { services, site } from "@/lib/site";
import s from "@/styles/site.module.css";
import Image from "next/image";
import Link from "next/link";
import h from "./home.module.css";

export default function Home() {
  const consultation = services[0];
  const gameServices = services.slice(1);
  const games = getAllGames();

  return (
    <div className={s.page}>
      <Header activePath="/" />

      <main className={s.main}>
        <section className={h.hero}>
          <div className={s.container}>
            <div className={h.heroGrid}>
              <div className={h.heroCopy}>
                <p className={h.eyebrow}>Наталья Черновол · гештальт-психолог</p>
                <h1 className={h.heroTitle}>
                  Можно быть собой.<br />
                  <em>И находить опору.</em>
                </h1>
                <p className={s.lead}>
                  Помогаю исследовать себя, находить опору и двигаться через
                  жизненные изменения.
                </p>
                <div className={h.heroCtas}>
                  <Link className={s.btnPrimary} href="/contacts">
                    Давайте познакомимся <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className={s.btnGhost} href="/about">
                    Обо мне
                  </Link>
                </div>
                <p className={h.heroNote}><span /> Встречи в Краснодаре и онлайн</p>
              </div>
              <div className={h.portraitComposition}>
                <svg className={h.orbit} viewBox="0 0 520 640" fill="none" aria-hidden="true"><ellipse cx="260" cy="320" rx="220" ry="290" transform="rotate(17 260 320)" /><path d="M25 320h34m-17-17v34M456 111h28m-14-14v28" /></svg>
                <div className={h.heroPhoto}>
                <Image
                  src={(process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/photos/hero-portrait-clean.jpg"}
                  alt={`${site.name}, ${site.title.toLowerCase()}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={h.heroPhotoImage}
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={h.approachSection}>
          <div className={`${s.container} ${h.approachGrid}`}>
            <div className={h.approachVisual}>
              <Image src="/photos/workspace-cabinet.jpg" alt="Кабинет для встреч с психологом" fill sizes="(max-width: 900px) 100vw, 45vw" />
              <span className={h.visualLabel}>Место для вашего настоящего</span>
            </div>
            <div>
            <div className={s.sectionHeader}>
              <p className={h.eyebrow}>01 / Подход</p>
              <h2 className={s.h2}>О гештальт-подходе</h2>
            </div>
            <div className={h.approachText}>
              <p>
                Гештальт — это терапия контакта: с собой, с другими, с тем, что
                происходит «здесь и сейчас». Мы не ищем «правильные» ответы, а
                исследуем, как вы переживаете ситуацию, что чувствуете и что вам
                нужно.
              </p>
              <p>
                В работе важна целостность — не только мысли, но и тело, эмоции,
                образы. Это помогает увидеть привычные сценарии и найти новые
                способы быть с собой и с миром.
              </p>
              <p>
                Я работаю именно в этом подходе: бережно, экологично, с вниманием
                к вашему темпу и границам.
              </p>
            </div>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={h.valuesLayout}>
            <div className={h.valuesContent}>
              <p className={h.eyebrow}>02 / Что важно в работе</p>
              <h2 className={s.h2}>Ценности и компетентность</h2>
              <p className={s.sub} style={{ marginTop: 12 }}>
                Регулярно прохожу личную терапию, супервизию и повышаю
                квалификацию. Я знаю, что такое быть в процессе — и как важно,
                чтобы рядом был тот, кто услышит вас и поможет вам найти выход.
              </p>
              <ul className={s.prose} style={{ marginTop: 20 }}>
                <li>Безопасность и конфиденциальность</li>
                <li>Экологичность</li>
                <li>Глубокая проработка запроса, а не поверхностный разговор</li>
              </ul>
              <Link className={s.link} href="/about" style={{ marginTop: 16, display: "inline-block" }}>
                Подробнее обо мне →
              </Link>
            </div>
            <div className={h.valuesArt} aria-hidden="true"><span className={h.artCircle} /><span className={h.artArch} /><span className={h.artLine} /><p>контакт<br /><em>доверие</em><br />опора</p></div>
            </div>
          </div>
        </section>

        <section id="services" className={h.servicesSection}>
          <div className={s.container}>
            <div className={s.sectionHeader}>
              <p className={h.eyebrow}>03 / Форматы встреч</p>
              <h2 className={s.h2}>Услуги и цены</h2>
              <p className={s.sub}>
                Консультации и трансформационные игры — разные форматы для разных
                запросов.
              </p>
            </div>

            <div className={h.serviceCards}>
              <article className={h.serviceCard}>
                <h3 className={s.h3}>{consultation.name}</h3>
                <p className={h.serviceMeta}>
                  {consultation.format} • {consultation.duration}
                </p>
                <p className={h.servicePrice}>{consultation.price}</p>
                <p className={s.cardText}>{consultation.short}</p>
                <div className={h.serviceActions}>
                  <Link className={s.btnSmall} href="/contacts">
                    Записаться
                  </Link>
                  <Link className={s.btnGhost} href="/services">
                    Подробнее
                  </Link>
                </div>
              </article>

              {gameServices.map((item) => (
                <article key={item.id} className={h.serviceCard}>
                  <h3 className={s.h3}>{item.name}</h3>
                  <p className={h.serviceMeta}>
                    {item.format} • {item.duration}
                  </p>
                  <p className={h.servicePrice}>{item.price}</p>
                  <p className={s.cardText}>{item.short}</p>
                  <div className={h.serviceActions}>
                    <Link className={s.btnSmall} href="/contacts">
                      Записаться
                    </Link>
                    {"href" in item && item.href ? (
                      <Link className={s.btnGhost} href={item.href}>
                        Подробнее
                      </Link>
                    ) : (
                      <Link className={s.btnGhost} href="/services">
                        Подробнее
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="games" className={s.section}>
          <div className={s.container}>
            <div className={s.sectionHeader}>
              <p className={h.eyebrow}>04 / Исследование через игру</p>
              <h2 className={s.h2}>Трансформационные игры</h2>
              <p className={s.sub}>
                Глубинная психологическая работа через образы, метафоры и
                безопасное пространство исследования.
              </p>
            </div>

            <div className={h.gameCards}>
              {games.map((game) => (
                <article key={game.slug} className={h.gameCard}>
                  <GameCover
                    title={game.title}
                    cover={game.cover}
                    accent={game.accent}
                  />
                  <div className={h.gameCardBody}>
                    <h3 className={s.h3}>{game.title}</h3>
                    <p className={s.cardText}>{game.teaser}</p>
                    <Link className={s.link} href={`/games/${game.slug}`}>
                      Узнать больше →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={s.ctaBand}>
              <p className={h.eyebrow}>05 / Первый шаг</p>
              <h2 className={s.h2}>Готовы начать?</h2>
              <p className={s.sub}>
                Выберите удобный формат и запишитесь — отвечу в течение 24 часов.
              </p>
              <BookingAction
                className={s.btnPrimary}
                iconPlacement="top"
                iconSize={64}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
