import type { MetadataRoute } from "next";
import { getGameSlugs } from "@/lib/games";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chernovol-na-psy.ru";
  const paths = ["", "about", "contacts", "services", "games"];

  return [...paths, ...getGameSlugs().map((slug) => `games/${slug}`)].map(
    (path) => ({ url: `${baseUrl}/${path ? `${path}/` : ""}` }),
  );
}
