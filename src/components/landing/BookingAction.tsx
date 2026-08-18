"use client";

import styles from "@/styles/site.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SPIN_DURATION_MS = 500;
const FLOAT_DURATION_MS = 3600;
const BOOKING_HREF = "/contacts";

type BookingActionProps = {
  className: string;
  iconPlacement?: "left" | "right" | "top";
  iconSize?: number;
  showArrow?: boolean;
};

export const BookingAction = ({
  className,
  iconPlacement = "left",
  iconSize = 30,
  showArrow = false,
}: BookingActionProps) => {
  const router = useRouter();
  const iconRef = useRef<HTMLSpanElement>(null);
  const floatAnimationRef = useRef<Animation | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const placementClass = {
    left: "",
    right: styles.bookingActionRight,
    top: styles.bookingActionTop,
  }[iconPlacement];

  useEffect(() => {
    router.prefetch(BOOKING_HREF);
  }, [router]);

  useEffect(() => {
    const node = iconRef.current;
    if (!node || typeof node.animate !== "function") {
      return;
    }

    const animation = node.animate(
      [
        { transform: "translate3d(0, 0, 0) rotate(-2deg)" },
        { transform: "translate3d(0, -8px, 0) rotate(2deg)" },
        { transform: "translate3d(0, 0, 0) rotate(-2deg)" },
      ],
      {
        duration: FLOAT_DURATION_MS,
        iterations: Infinity,
        easing: "ease-in-out",
      },
    );

    floatAnimationRef.current = animation;

    return () => {
      animation.cancel();
      floatAnimationRef.current = null;
    };
  }, []);

  const handleClick = () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);
    floatAnimationRef.current?.pause();

    const node = iconRef.current;
    if (node && typeof node.animate === "function") {
      const spin = node.animate(
        [
          { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          { transform: "translate3d(0, 0, 0) rotate(360deg)" },
        ],
        {
          duration: SPIN_DURATION_MS,
          easing: "linear",
          fill: "forwards",
        },
      );

      spin.finished
        .catch(() => undefined)
        .finally(() => {
          router.push(BOOKING_HREF);
        });
      return;
    }

    window.setTimeout(() => {
      router.push(BOOKING_HREF);
    }, SPIN_DURATION_MS);
  };

  return (
    <span className={`${styles.bookingAction} ${placementClass}`}>
      <span className={styles.bookingActionIcon} aria-hidden="true">
        <span ref={iconRef} className={styles.bookingActionIconInner}>
          <img
            src="/logo.svg"
            alt=""
            width={iconSize}
            height={iconSize}
            draggable={false}
          />
        </span>
      </span>
      <button
        className={className}
        type="button"
        onClick={handleClick}
        aria-busy={isSpinning}
      >
        Записаться{showArrow ? " →" : ""}
      </button>
    </span>
  );
};
