"use client";

import { useRef } from "react";
import type { Img } from "@/data/story";
import { asset } from "@/lib/asset";

/** Image that opens full-size in a native <dialog> (Esc / click to close). */
export default function Zoom({ img, className }: { img: Img; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className={`zoom ${className ?? ""}`} onClick={() => dialog.current?.showModal()} aria-label={`Perbesar: ${img.alt}`}>
        <img src={asset(img.src)} alt={img.alt} loading="lazy" />
      </button>
      <dialog ref={dialog} className="lightbox" onClick={() => dialog.current?.close()}>
        <img src={asset(img.src)} alt={img.alt} />
        {img.caption && <p>{img.caption}</p>}
        <span className="lightbox-hint">Klik di mana saja atau tekan Esc untuk menutup</span>
      </dialog>
    </>
  );
}
