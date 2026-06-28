import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GamePageContent } from "@/components/landing/GamePageContent";
import { getGameBySlug, getGameSlugs } from "@/lib/games";
import s from "@/styles/site.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  getGameSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};

  return {
    title: game.title,
    description: game.metaDescription,
  };
};

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) notFound();

  return (
    <div className={s.page}>
      <Header />
      <main className={s.main}>
        <GamePageContent
          title={game.title}
          subtitle={game.subtitle}
          accent={game.accent}
          cover={game.cover}
          defaultService={game.defaultService}
          forWho={game.forWho}
          results={game.results}
          process={game.process}
          individualPrice={game.individualPrice}
          groupPrice={game.groupPrice}
        />
      </main>
      <Footer />
    </div>
  );
}
