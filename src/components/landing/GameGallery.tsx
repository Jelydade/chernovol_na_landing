"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import styles from "./GameGallery.module.css";

type GameGalleryProps = {
  title: string;
  images: string[];
};

export const GameGallery = ({ title, images }: GameGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  return (
    <div
      className={styles.gallery}
      role="region"
      aria-label={`Фотографии игры «${title}»`}
    >
      <div
        className={styles.stage}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title}: фотография ${activeIndex + 1} из ${images.length}`}
          fill
          sizes="(max-width: 600px) 100vw, 1120px"
          className={styles.mainImage}
          priority={activeIndex === 0}
        />

        <button
          className={`${styles.arrow} ${styles.arrowPrevious}`}
          type="button"
          onClick={showPrevious}
          aria-label="Предыдущая фотография"
        >
          ←
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          type="button"
          onClick={showNext}
          aria-label="Следующая фотография"
        >
          →
        </button>

        <span className={styles.counter} aria-live="polite">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      <div className={styles.thumbnails} aria-label="Выбор фотографии">
        {images.map((image, index) => (
          <button
            key={image}
            className={
              index === activeIndex
                ? `${styles.thumbnail} ${styles.thumbnailActive}`
                : styles.thumbnail
            }
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Показать фотографию ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="84px"
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
