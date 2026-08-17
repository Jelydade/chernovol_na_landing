import { GameCover } from "@/components/landing/GameCover";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getAllGames } from "@/lib/games";
import s from "@/styles/site.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import h from "../home.module.css";

export const metadata: Metadata = {
  title: "Трансформационные игры",
  description:
    "Психологические трансформационные игры «Территория денег» и «Переходы».",
};

export default function GamesPage() {
  const games = getAllGames();

  return (
    <div className={s.page}>
      <Header activePath="/games" />

      <main className={s.main}>
        <section className={s.pageHero}>
          <div className={s.container}>
            <h1 className={s.h1}>Трансформационные игры</h1>
            <p className={s.lead} style={{ marginTop: 12 }}>
              Глубинная психологическая работа через образы, метафоры и
              безопасное пространство исследования.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <div className={h.gameCards}>
              {games.map((game) => (
                <article key={game.slug} className={h.gameCard}>
                  <GameCover
                    title={game.title}
                    cover={game.cover}
                    accent={game.accent}
                  />
                  <div className={h.gameCardBody}>
                    <h2 className={s.h3}>{game.title}</h2>
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
      </main>

      <Footer />
    </div>
  );
}
