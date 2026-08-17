import { GameCover } from "@/components/landing/GameCover";
import { GameGallery } from "@/components/landing/GameGallery";
import { type GameAccent } from "@/lib/games";
import s from "@/styles/site.module.css";

type GamePageContentProps = {
  title: string;
  subtitle: string;
  accent: GameAccent;
  cover?: string;
  gallery?: string[];
  forWho: string[];
  results: string[];
  process: string[];
  individualPrice: string;
  groupPrice: string;
};

export const GamePageContent = ({
  title,
  subtitle,
  accent,
  cover,
  gallery,
  forWho,
  results,
  process,
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
        {gallery && gallery.length > 1 ? (
          <GameGallery title={title} images={gallery} />
        ) : (
          <GameCover
            title={title}
            cover={cover}
            accent={accent}
            variant="wide"
          />
        )}

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
            <p className={s.cardText}>2-3 часа • очно</p>
            <p className={s.h2} style={{ marginTop: 8 }}>
              {individualPrice}
            </p>
          </div>
          <div className={s.card}>
            <h2 className={s.h3}>Группа (до 5 человек)</h2>
            <p className={s.cardText}>2–3 часа • очно</p>
            <p className={s.h2} style={{ marginTop: 8 }}>
              {groupPrice}
            </p>
          </div>
        </div>

        <div className={s.ctaBand} style={{ marginTop: 24 }}>
          <h2 className={s.h2}>Подарочный сертификат</h2>
          <p className={s.sub}>
            Подарочный сертификат можно оформить на индивидуальное или групповое
            участие в любой из трансформационных игр. Такой подарок подойдёт
            человеку, которому важно уделить время себе, исследовать актуальный
            запрос и найти новые точки опоры.
          </p>
          <p className={s.sub}>
            Игру, формат участия и удобную дату можно согласовать индивидуально.
          </p>
        </div>
      </div>
    </section>

  </>
);
