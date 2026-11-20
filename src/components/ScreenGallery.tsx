"use client";

import { useState } from "react";
import type { Img } from "@/data/story";
import { asset } from "@/lib/asset";
import Zoom from "./Zoom";

export default function ScreenGallery({ title, meta, shots }: { title: string; meta: string; shots: Img[] }) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <figure className="gallery" data-reveal>
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span /><span /><span />
          <div className="browser-url">{shot.caption}</div>
        </div>
        <Zoom key={shot.src} img={shot} className="browser-shot" />
      </div>
      <figcaption>
        <div>
          <strong>{title}</strong>
          <span className="gallery-meta">{meta}</span>
        </div>
        <div className="thumbs" role="tablist" aria-label={`Layar ${title}`}>
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.caption}
              className="thumb"
              onClick={() => setActive(i)}
            >
              <img src={asset(s.src)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
