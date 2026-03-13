"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Hall = "main" | "banquet" | "terrace";

export default function BookingForm() {
  const t = useTranslations("booking");
  const [hall, setHall] = useState<Hall>("main");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const halls: { value: Hall; label: string }[] = [
    { value: "main", label: t("hall_main") },
    { value: "banquet", label: t("hall_banquet") },
    { value: "terrace", label: t("hall_terrace") },
  ];

  const timeSlots = Array.from({ length: 26 }, (_, i) => {
    const h = 10 + Math.floor(i / 2);
    const m = i % 2 === 0 ? "00" : "30";
    return `${String(h).padStart(2, "0")}:${m}`;
  });

  const guestOptions = Array.from({ length: 20 }, (_, i) => String(i + 1));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hall, date, time, guests: Number(guests), name, phone, comment }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🎉</div>
          <h2 className="font-serif text-3xl font-semibold text-[var(--color-text)] mb-4">{t("title")}</h2>
          <p className="text-[var(--color-muted)] mb-8">{t("success")}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded font-medium hover:bg-[var(--color-text)] transition-colors"
          >
            Новое бронирование
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-3">
            {t("title")}
          </h2>
          <p className="text-[var(--color-muted)] text-base">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Выбор зала */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("hall")}</label>
            <div className="grid grid-cols-3 gap-2">
              {halls.map((h) => (
                <button
                  key={h.value}
                  type="button"
                  onClick={() => setHall(h.value)}
                  className={`py-3 px-4 rounded text-sm font-medium border transition-colors ${
                    hall === h.value
                      ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                      : "bg-white border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("date")}</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("time")}</label>
              <select
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
              >
                <option value="">—</option>
                {timeSlots.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("guests")}</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
            >
              {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("name")}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("phone")}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 __ ___ __ __"
                className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-muted)] mb-2">{t("comment")}</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t("comment_placeholder")}
              rows={3}
              className="w-full px-4 py-3 bg-white border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[var(--color-accent)] text-white font-semibold rounded hover:bg-[var(--color-text)] transition-colors disabled:opacity-60"
          >
            {loading ? "..." : t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
