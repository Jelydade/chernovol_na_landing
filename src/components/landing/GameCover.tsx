import Image from "next/image";
import h from "@/app/home.module.css";

type GameCoverProps = {
  title: string;
  cover?: string;
  accent: "peach" | "sage";
  variant?: "card" | "wide";
};

const accentClass = {
  peach: h.gameCardImagePeach,
  sage: h.gameCardImageSage,
} as const;

export const GameCover = ({
  title,
  cover,
  accent,
  variant = "card",
}: GameCoverProps) => {
  const baseClass = variant === "card" ? h.gameCardImage : h.gameCoverWide;

  if (cover) {
    return (
      <div className={`${baseClass} ${h.gameCoverPhoto}`}>
        <Image
          src={cover}
          alt={`Обложка «${title}»`}
          fill
          sizes={
            variant === "card"
              ? "(max-width: 600px) 100vw, 50vw"
              : "(max-width: 600px) 100vw, 1120px"
          }
          className={h.gameCoverImage}
        />
      </div>
    );
  }

  return (
    <div className={`${baseClass} ${accentClass[accent]}`}>
      Обложка «{title}»
    </div>
  );
};
