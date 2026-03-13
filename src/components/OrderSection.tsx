"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type OrderType = "delivery" | "pickup";
type PaymentMethod = "electronic" | "card" | "bank_transfer" | "cash";

const timeSlots = Array.from({ length: 31 }, (_, i) => {
  const totalMins = 9 * 60 + i * 30;
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
});

export default function OrderSection() {
  const t = useTranslations("order");
  const [type, setType] = useState<OrderType>("delivery");
  const [address, setAddress] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [submitted, setSubmitted] = useState(false);

  const payments: { value: PaymentMethod; label: string }[] = [
    { value: "electronic", label: t("payment.electronic") },
    { value: "card", label: t("payment.card") },
    { value: "bank_transfer", label: t("payment.transfer") },
    { value: "cash", label: t("payment.cash") },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="order" className="py-20 bg-[var(--color-dark)] text-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">✅</div>
          <h2 className="font-serif text-3xl font-semibold mb-4">Заказ принят!</h2>
          <p className="text-white/60 mb-8">Мы свяжемся с вами в ближайшее время для подтверждения.</p>
          <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-white text-[var(--color-text)] rounded font-medium hover:bg-[var(--color-surface)] transition-colors">
            Новый заказ
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-[var(--color-dark)] text-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-3">{t("title")}</h2>
          <p className="text-white/50 text-base">{t("subtitle")}</p>
        </div>

        {/* Переключатель */}
        <div className="flex border border-white/20 rounded w-fit mb-8 mx-auto">
          {(["delivery", "pickup"] as OrderType[]).map((opt) => (
            <button
              key={opt}
              onClick={() => setType(opt)}
              className={`px-6 py-2.5 text-sm font-medium transition-colors ${
                type === opt ? "bg-white text-[var(--color-text)]" : "text-white/50 hover:text-white"
              }`}
            >
              {t(opt)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {type === "delivery" ? (
            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">{t("address")}</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="ул. Навои, 15"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white placeholder-white/25 focus:outline-none focus:border-white/40"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">{t("pickup_time")}</label>
              <select
                required
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white focus:outline-none focus:border-white/40"
              >
                <option value="">—</option>
                {timeSlots.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">{t("name")}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white placeholder-white/25 focus:outline-none focus:border-white/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/50 mb-2">{t("phone")}</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white placeholder-white/25 focus:outline-none focus:border-white/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/50 mb-2">{t("payment.title")}</label>
            <div className="grid grid-cols-2 gap-2">
              {payments.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPayment(p.value)}
                  className={`py-3 px-4 rounded text-sm font-medium border transition-colors text-left ${
                    payment === p.value
                      ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                      : "bg-transparent border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[var(--color-accent)] text-white font-semibold rounded hover:opacity-90 transition-opacity mt-2"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
