import Link from "next/link";
import { ContactForm } from "@/components/landing/ContactForm";
import { GameCover } from "@/components/landing/GameCover";
import { type GameAccent } from "@/lib/games";
import { type ServiceId } from "@/lib/site-data";
import s from "@/styles/site.module.css";

type GamePageContentProps = {
  title: string;
  subtitle: string;
  accent: GameAccent;
  cover?: string;
  forWho: string[];
  results: string[];
  process: string[];
  defaultService: ServiceId;
  individualPrice: string;
  groupPrice: string;
};

export const GamePageContent = ({
  title,
  subtitle,
  accent,
  cover,
  forWho,
  results,
  process,
  defaultService,
  individualPrice,
  groupPrice,
}: GamePageContentProps) => (
  <>
    <section className={s.pageHero}>
      <div className={s.container}>
        <p className={s.pill}>Трансформационная игра • онлайн</p>
        <h1 className={s.h1} style={{ marginTop: 14 }}>
          {title}
        </h1>
        <p className={s.lead} style={{ marginTop: 12 }}>
          {subtitle}
        </p>
      </div>
    </section>

    <section className={s.section}>
      <div className={s.container}>
        <GameCover
          title={title}
          cover={cover}
          accent={accent}
          variant="wide"
        />

        <div className={s.grid2}>
          <div>
            <h2 className={s.h2}>Для кого</h2>
            <ul className={s.prose} style={{ marginTop: 16 }}>
              {forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={s.h2}>Что вы получите</h2>
            <ul className={s.prose} style={{ marginTop: 16 }}>
              {results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className={s.sectionAlt}>
      <div className={s.container}>
        <h2 className={s.h2}>Как проходит</h2>
        <div className={s.prose} style={{ marginTop: 16 }}>
          {process.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>

    <section className={s.section}>
      <div className={s.container}>
        <div className={s.grid2}>
          <div className={s.card}>
            <h2 className={s.h3}>Индивидуально</h2>
            <p className={s.cardText}>1,5–2 часа • онлайн</p>
            <p className={s.h2} style={{ marginTop: 8 }}>
              {individualPrice}
            </p>
          </div>
          <div className={s.card}>
            <h2 className={s.h3}>Группа (до 5 человек)</h2>
            <p className={s.cardText}>3–4 часа • онлайн</p>
            <p className={s.h2} style={{ marginTop: 8 }}>
              {groupPrice}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="signup" className={s.sectionAlt}>
      <div className={s.container}>
        <div className={s.sectionHeader}>
          <h2 className={s.h2}>Запись на игру</h2>
          <p className={s.sub}>Выберите формат — индивидуальный или групповой.</p>
        </div>
        <div className={s.card}>
          <ContactForm defaultService={defaultService} />
        </div>
        <p className={s.sub} style={{ marginTop: 16, textAlign: "center" }}>
          <Link className={s.link} href="/services">
            Все услуги и цены
          </Link>
        </p>
      </div>
    </section>
  </>
);
