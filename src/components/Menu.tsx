"use client";

import { useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { categories, type Dish } from "@/data/menu";
import { formatPrice } from "@/data/menu";
import MenuCard from "./MenuCard";

type CartItem = { dish: Dish; qty: number };
type Locale = "ru" | "en" | "uz";

export default function Menu() {
  const t = useTranslations("menu");
  const tCart = useTranslations("cart");
  const locale = useLocale() as Locale;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.dish.price * i.qty, 0);

  function addToCart(dish: Dish) {
    setCart((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id);
      if (existing) return prev.map((i) => i.dish.id === dish.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { dish, qty: 1 }];
    });
  }

  function removeFromCart(dishId: string) {
    setCart((prev) => {
      const existing = prev.find((i) => i.dish.id === dishId);
      if (existing && existing.qty > 1) return prev.map((i) => i.dish.id === dishId ? { ...i, qty: i.qty - 1 } : i);
      return prev.filter((i) => i.dish.id !== dishId);
    });
  }

  function getQty(dishId: string) {
    return cart.find((i) => i.dish.id === dishId)?.qty ?? 0;
  }

  const activeCat = categories.find((c) => c.id === activeCategory)!;

  function scrollTabIntoView(id: string) {
    const el = tabsRef.current?.querySelector(`[data-id="${id}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <section id="menu" className="bg-white">
      {/* Заголовок */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-3">
          {t("title")}
        </h2>
        <p className="text-[var(--color-muted)] text-base">{t("subtitle")}</p>
      </div>

      {/* Sticky-табы категорий */}
      <div
        className="sticky top-16 z-30 bg-white border-b border-[var(--color-border)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  scrollTabIntoView(cat.id);
                }}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label[locale]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeCat.dishes.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              onAdd={addToCart}
              count={getQty(dish.id)}
            />
          ))}
        </div>
      </div>

      {/* Sticky корзина */}
      {totalQty > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-sm">
          <button
            onClick={() => setCartOpen(true)}
            className="w-full flex items-center justify-between px-6 py-4 bg-[var(--color-accent)] text-white rounded shadow-xl hover:bg-[var(--color-text)] transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="w-6 h-6 bg-white/20 rounded text-xs font-bold flex items-center justify-center">
                {totalQty}
              </span>
              <span className="font-medium">{tCart("title")}</span>
            </span>
            <span className="font-bold">{formatPrice(totalPrice)}</span>
          </button>
        </div>
      )}

      {/* Корзина — drawer */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 z-50" onClick={() => setCartOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">{tCart("title")}</h3>
              <button onClick={() => setCartOpen(false)} className="text-[var(--color-muted)] hover:text-[var(--color-text)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.dish.id} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--color-text)] truncate">{item.dish.name[locale]}</p>
                    <p className="text-xs text-[var(--color-muted)]">{formatPrice(item.dish.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => removeFromCart(item.dish.id)} className="w-7 h-7 rounded border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-center hover:bg-[var(--color-surface)]">−</button>
                    <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                    <button onClick={() => addToCart(item.dish)} className="w-7 h-7 rounded bg-[var(--color-accent)] text-white flex items-center justify-center hover:bg-[var(--color-text)] transition-colors">+</button>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-text)] min-w-[80px] text-right">{formatPrice(item.dish.price * item.qty)}</span>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-[var(--color-border)]">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-[var(--color-muted)]">{tCart("total")}</span>
                <span className="font-bold text-lg text-[var(--color-text)]">{formatPrice(totalPrice)}</span>
              </div>
              <a
                href="#order"
                onClick={() => setCartOpen(false)}
                className="block w-full text-center py-4 bg-[var(--color-accent)] text-white font-semibold rounded hover:bg-[var(--color-text)] transition-colors"
              >
                {tCart("checkout")}
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
