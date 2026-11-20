"use client";

import { useState } from "react";

/** Chat-style input that opens WhatsApp with the typed message prefilled. */
export default function Composer({ whatsapp }: { whatsapp: string }) {
  const [text, setText] = useState("");

  return (
    <form
      className="composer"
      onSubmit={(e) => {
        e.preventDefault();
        const msg = text.trim() || "Halo Josua, saya habis lihat portofoliomu!";
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      }}
    >
      <label htmlFor="composer-input" className="sr-only">Tulis pesan untuk Josua lewat WhatsApp</label>
      <input
        id="composer-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tulis pesan untuk Josua…"
        autoComplete="off"
      />
      <button type="submit" aria-label="Kirim lewat WhatsApp">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 21 12 3.4 3.6l-.01 6.53L15 12 3.39 13.87z" /></svg>
      </button>
    </form>
  );
}
