import Link from "next/link";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.container} ${styles.footerInner}`}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} {site.name}. Информация на сайте не
        является публичной офертой и не заменяет очную медицинскую помощь.
      </p>
      <nav className={styles.footerNav} aria-label="Подвал">
        <Link className={styles.footerLink} href="/services">
          Услуги
        </Link>
        <Link className={styles.footerLink} href="/about">
          Обо мне
        </Link>
        <Link className={styles.footerLink} href="/contacts">
          Контакты
        </Link>
      </nav>
    </div>
  </footer>
);
