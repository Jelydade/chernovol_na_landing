import styles from "@/styles/site.module.css";
import Image from "next/image";
import Link from "next/link";

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
  const placementClass = {
    left: "",
    right: styles.bookingActionRight,
    top: styles.bookingActionTop,
  }[iconPlacement];

  return (
    <span className={`${styles.bookingAction} ${placementClass}`}>
      <span className={styles.bookingActionIcon} aria-hidden="true">
        <Image src="/logo.svg" alt="" width={iconSize} height={iconSize} />
      </span>
      <Link className={className} href="/contacts">
        Записаться{showArrow ? " →" : ""}
      </Link>
    </span>
  );
};
