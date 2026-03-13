"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const photos = [
  "/images/interior/1.webp",
  "/images/interior/2.webp",
  "/images/interior/3.webp",
  "/images/interior/4.webp",
  "/images/interior/5.webp",
  "/images/interior/6.webp",
  "/images/interior/7.webp",
  "/images/interior/8.webp",
  "/images/interior/11.webp",
  "/images/interior/12.webp",
  "/images/interior/13.webp",
  "/images/interior/14.webp",
  "/images/interior/15.webp",
  "/images/interior/16.webp",
];

export default function About() {
  const t = useTranslations("about");
  // Дублируем фото для бесшовного marquee
  const doubled = [...photos, ...photos];

  return (
    <section id="about" className="py-24 bg-[var(--color-surface)] overflow-hidden">
      {/* Центрированный текст */}
      <div className="max-w-2xl mx-auto px-6 text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-3">
          {t("title")}
        </h2>
        <p className="text-[var(--color-muted)] text-sm md:text-base leading-relaxed mb-10">
          {t("description")}
        </p>
        <a
          href="#booking"
          className="inline-flex items-center px-8 py-3.5 bg-[var(--color-text)] text-white text-sm font-medium rounded hover:bg-[var(--color-accent)] transition-colors"
        >
          Забронировать стол
        </a>
      </div>

      {/* Marquee-галерея */}
      <div className="relative w-full">
        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-80 md:w-96 md:h-[26rem] relative overflow-hidden rounded-lg bg-[var(--color-border)]"
            >
              <Image
                src={src}
                alt={`Интерьер ${(i % photos.length) + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
