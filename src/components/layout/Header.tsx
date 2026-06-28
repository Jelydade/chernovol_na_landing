import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import styles from "@/styles/site.module.css";

const nav = [
  { href: "/services", label: "Услуги и цены" },
  { href: "/about", label: "Обо мне" },
  { href: "/#games", label: "Игры" },
  { href: "/contacts", label: "Контакты" },
];

type HeaderProps = {
  activePath?: string;
};

export const Header = ({ activePath }: HeaderProps) => (
  <header className={styles.header}>
    <div className={`${styles.container} ${styles.headerInner}`}>
      <Link className={styles.brand} href="/">
        <Logo className={styles.brandLogo} size={36} />
        <span className={styles.brandText}>
          <span className={styles.brandTitle}>{site.name}</span>
          <span className={styles.brandSub}>{site.title}</span>
        </span>
      </Link>

      <nav className={styles.nav} aria-label="Навигация">
        {nav.map(({ href, label }) => {
          const [pathPart, hashPart] = href.split("#");
          const path = pathPart || "/";
          const isHashLink = Boolean(hashPart);
          const isActive = !isHashLink && activePath === path;
          return (
            <Link
              key={href}
              className={isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
              href={href}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.headerActions}>
        <Link className={styles.btnHeader} href="/contacts#signup">
          Записаться
        </Link>
      </div>
    </div>
  </header>
);
