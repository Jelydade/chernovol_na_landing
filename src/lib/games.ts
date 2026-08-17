import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type GameAccent = "peach" | "sage";

export type Game = {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  accent: GameAccent;
  teaser: string;
  cover?: string;
  gallery?: string[];
  individualPrice: string;
  groupPrice: string;
  forWho: string[];
  results: string[];
  process: string[];
};

const gamesDir = path.join(process.cwd(), "content/games");

const parseGameFile = (filePath: string): Game => {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  return {
    slug: data.slug,
    title: data.title,
    subtitle: data.subtitle,
    metaDescription: data.metaDescription,
    accent: data.accent,
    teaser: data.teaser,
    cover: data.cover,
    gallery: data.gallery ?? [],
    individualPrice: data.individualPrice,
    groupPrice: data.groupPrice,
    forWho: data.forWho ?? [],
    results: data.results ?? [],
    process: data.process ?? [],
  };
};

export const getGameSlugs = (): string[] =>
  fs
    .readdirSync(gamesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));

export const getGameBySlug = (slug: string): Game | null => {
  const filePath = path.join(gamesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseGameFile(filePath);
};

export const getAllGames = (): Game[] =>
  getGameSlugs()
    .map((slug) => getGameBySlug(slug))
    .filter((game): game is Game => game !== null);
