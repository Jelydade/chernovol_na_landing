import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Гештальт-психолог — безопасное пространство для изменений",
    template: "%s | Гештальт-психолог",
  },
  description:
    "Гештальт-терапия очно и онлайн, трансформационные игры «Территория денег» и «Переходы». Консультация — 3 000 ₽/час.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Гештальт-психолог — безопасное пространство для изменений",
    description:
      "Гештальт-терапия очно и онлайн, трансформационные игры «Территория денег» и «Переходы».",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
