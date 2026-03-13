"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import type { Dish } from "@/data/menu";
import { formatPrice } from "@/data/menu";

type Locale = "ru" | "en" | "uz";

type Props = {
  dish: Dish;
  onAdd: (dish: Dish) => void;
  count: number;
};

export default function MenuCard({ dish, onAdd, count }: Props) {
  const t = useTranslations("menu");
  const locale = useLocale() as Locale;

  const name = dish.name[locale] || dish.name.ru;
  const description = dish.description[locale] || dish.description.ru;

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-200">
      {/* Фото */}
      <div className="relative aspect-[4/3] bg-[var(--color-surface)] overflow-hidden">
        <Image
          src={dish.image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {!dish.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-sm font-medium">Нет в наличии</span>
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-[var(--color-text)] text-sm leading-snug mb-1 line-clamp-2">
          {name}
        </h3>
        {description && (
          <p className="text-[var(--color-muted)] text-xs leading-relaxed mb-3 line-clamp-2 flex-1">
            {description}
          </p>
        )}
        {!description && <div className="flex-1" />}

        {/* Цена и кнопка */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-[var(--color-text)] text-sm">
            {formatPrice(dish.price)}
          </span>
          <button
            onClick={() => onAdd(dish)}
            disabled={!dish.available}
            className={`relative flex items-center justify-center w-8 h-8 rounded font-bold text-lg transition-colors ${
              count > 0
                ? "bg-[var(--color-accent)] text-white"
                : "bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)]"
            } disabled:opacity-40 disabled:cursor-not-allowed`}
            aria-label={t("add")}
          >
            {count > 0 ? count : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
