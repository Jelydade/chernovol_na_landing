"use client";

import styles from "@/styles/site.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SPIN_DURATION_MS = 500;
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
  const [isSpinning, setIsSpinning] = useState(false);

  const placementClass = {
    left: "",
    right: styles.bookingActionRight,
    top: styles.bookingActionTop,
  }[iconPlacement];

  useEffect(() => {
    router.prefetch(BOOKING_HREF);
  }, [router]);

  const handleClick = () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);
    window.setTimeout(() => {
      router.push(BOOKING_HREF);
    }, SPIN_DURATION_MS);
  };

  return (
    <span className={`${styles.bookingAction} ${placementClass}`}>
      <span className={styles.bookingActionIcon} aria-hidden="true">
        <span
          className={`${styles.bookingActionIconInner} ${isSpinning ? styles.bookingActionIconSpinning : ""}`}
        >
          <Image src="/logo.svg" alt="" width={iconSize} height={iconSize} />
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
