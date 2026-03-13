"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const heroSlides = [
  "/images/hero/hero1.webp",
  "/images/hero/hero2.webp",
];

export default function Hero() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-dark)]"
    >
      {/* Все слайды стекаются, активный — opacity 1 */}
      {heroSlides.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: idx === current ? 1 : 0,
          }}
        />
      ))}

      {/* Затемнение */}
      <div className="absolute inset-0 bg-[var(--color-dark)] opacity-50 z-10" />

      {/* Контент */}
      <div className="relative z-20 text-center text-white w-full px-6">
        {/* Заголовок */}
        <h1 className="font-serif text-[52px] md:text-[64px] font-bold mb-5 leading-[1.1] mx-auto">
          Ресторан для тех, кто ценит<br />
          атмосферу уюта и хорошую еду
        </h1>
        {/* Подзаголовок */}
        <p className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto">
          {t("supertitle")}
        </p>
        <a
          href="#menu"
          className="inline-flex items-center px-10 py-4 bg-[var(--color-accent)] text-white font-medium rounded hover:opacity-90 transition-opacity text-sm tracking-wide"
        >
          Сделать заказ
        </a>
      </div>

      {/* Точки */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Слайд ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white w-6" : "bg-white/40 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-scroll-arrow">
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M1 1L11 12L21 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
