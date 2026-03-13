"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const localeLabels: Record<string, string> = { ru: "RU", en: "EN", uz: "UZ" };

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#menu", label: t("menu") },
    { href: "#order", label: t("delivery") },
    { href: "#booking", label: t("booking") },
    { href: "#contacts", label: t("contacts") },
  ];

  const otherLocales = (["ru", "en", "uz"] as const).filter((l) => l !== locale);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Логотип */}
        <a href="#" className="flex items-center">
          <img
            src={scrolled ? "/images/logo/logo menu.png" : "/images/logo/logo hero.png"}
            alt="Подушечная"
            className="h-8 w-auto transition-opacity duration-300"
          />
        </a>

        {/* Навигация — десктоп */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 underline-offset-4 hover:underline ${
                scrolled
                  ? "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          {/* Переключатель языка */}
          <div className={`hidden md:flex items-center gap-1 text-xs transition-colors duration-300 ${
            scrolled ? "text-[var(--color-muted)]" : "text-white/60"
          }`}>
            <span className={`font-semibold ${scrolled ? "text-[var(--color-text)]" : "text-white"}`}>
              {localeLabels[locale]}
            </span>
            {otherLocales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                className={`px-1 transition-colors duration-300 ${
                  scrolled ? "hover:text-[var(--color-text)]" : "hover:text-white"
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#menu"
            className="hidden md:inline-flex items-center px-5 py-2 bg-[var(--color-accent)] text-white text-sm font-medium rounded hover:bg-[var(--color-text)] transition-colors"
          >
            {t("order")}
          </a>

          {/* Бургер — мобильный */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-[var(--color-text)]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              {menuOpen ? (
                <path d="M1 1L21 15M21 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[var(--color-text)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[var(--color-border)]">
            {(["ru", "en", "uz"] as const).map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                className={`text-sm font-medium px-3 py-1.5 border ${
                  l === locale
                    ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-muted)]"
                } rounded`}
                onClick={() => setMenuOpen(false)}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
          <a
            href="#menu"
            className="w-full text-center px-4 py-3 bg-[var(--color-accent)] text-white font-medium rounded"
            onClick={() => setMenuOpen(false)}
          >
            {t("order")}
          </a>
        </div>
      )}
    </header>
  );
}
