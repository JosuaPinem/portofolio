"use client";

import { useEffect, useState } from "react";

type Ch = { id: string; label: string };

/**
 * Reading-progress bar, reveal-on-scroll, and the "current topic" state:
 * a floating pill on small screens, and the active row in the sidebar
 * topic list ([data-topic="<chapter id>"]) on large ones.
 */
export default function ScrollFx({ chapters }: { chapters: Ch[] }) {
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });

    // Content stays visible without JS; hiding-until-revealed only starts here.
    document.documentElement.classList.add("js");
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), reveal.unobserve(e.target))),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = chapters.findIndex((c) => c.id === e.target.id);
          setCurrent(i >= 0 ? i : null);
          document.querySelectorAll("[data-topic]").forEach((el) =>
            el.toggleAttribute("aria-current", el.getAttribute("data-topic") === e.target.id),
          );
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-spy]").forEach((el) => spy.observe(el));

    return () => {
      removeEventListener("scroll", onScroll);
      reveal.disconnect();
      spy.disconnect();
    };
  }, [chapters]);

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className={`now-reading ${current !== null ? "show" : ""}`} aria-hidden="true">
        {current !== null && (
          <>
            <span>Topik {current + 1}/{chapters.length}</span> {chapters[current].label}
          </>
        )}
      </div>
    </>
  );
}
