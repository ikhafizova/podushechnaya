"use client";

import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("contacts");
  const nav = useTranslations("nav");

  const navLinks = [
    { label: nav("about"),    href: "#about" },
    { label: nav("menu"),     href: "#menu" },
    { label: nav("delivery"), href: "#delivery" },
    { label: nav("booking"),  href: "#booking" },
    { label: nav("contacts"), href: "#contacts" },
  ];

  return (
    <section id="contacts">
      {/* Карта */}
      <div className="w-full h-80 md:h-[460px] bg-[var(--color-border)]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=69.301206%2C41.325272&z=16&pt=69.301206,41.325272,pm2rdl"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Карта Подушечной"
          style={{ display: "block" }}
        />
      </div>

      {/* Тёмно-синий подвал */}
      <footer className="bg-[#0D1520]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Колонка 1 — Логотип + описание + адрес + копирайт */}
            <div className="flex flex-col gap-3">
              <img
                src="/images/logo/logo hero.png"
                alt="Подушечная"
                className="h-8 w-auto self-start"
              />
              <p className="text-white/50 text-sm leading-relaxed">
                Кафе в Ташкенте.<br />
                Ежедневно с 10:00 до 23:00
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                {t("address")}
              </p>
              <p className="text-white/25 text-xs mt-auto pt-4">
                © {new Date().getFullYear()} Подушечная
              </p>
            </div>

            {/* Колонка 2 — Навигация */}
            <div>
              <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
                Навигация
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3 — Контакты */}
            <div>
              <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
                Связаться
              </p>
              <a
                href={`tel:${t("phone").replace(/\s/g, "")}`}
                className="text-white text-base font-medium hover:text-white/70 transition-colors duration-200 block mb-6"
              >
                {t("phone")}
              </a>

              {/* Иконки соцсетей */}
              <div className="flex gap-3">
                {/* Telegram */}
                <a
                  href="https://t.me/podushechnaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-11 h-11 flex items-center justify-center border border-white/20 rounded text-white/60 hover:border-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.01 9.48c-.146.658-.537.818-1.084.508l-3-2.21-1.447 1.393c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.585 4.31 13.68c-.65-.204-.663-.65.136-.961l10.85-4.183c.54-.194 1.014.12.266.712z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/998909997761"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 flex items-center justify-center border border-white/20 rounded text-white/60 hover:border-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/podushechnaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center border border-white/20 rounded text-white/60 hover:border-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Podushechnaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center border border-white/20 rounded text-white/60 hover:border-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </footer>
    </section>
  );
}
