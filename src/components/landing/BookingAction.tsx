"use client";

import styles from "@/styles/site.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isSpinning) {
      event.preventDefault();
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    event.preventDefault();
    setIsSpinning(true);
    window.setTimeout(() => {
      router.push(BOOKING_HREF);
    }, SPIN_DURATION_MS);
  };

  return (
    <span className={`${styles.bookingAction} ${placementClass}`}>
      <span
        className={`${styles.bookingActionIcon} ${isSpinning ? styles.bookingActionIconSpinning : ""}`}
        aria-hidden="true"
      >
        <Image src="/logo.svg" alt="" width={iconSize} height={iconSize} />
      </span>
      <Link className={className} href={BOOKING_HREF} onClick={handleClick}>
        Записаться{showArrow ? " →" : ""}
      </Link>
    </span>
  );
};
