import type { ReactNode } from "react";

// Tiny JS-ish highlighter: comments, strings, numbers, keywords and object keys.
const TOKEN = /(\/\/.*$)|("[^"]*")|(\b\d[\d_.]*\b)|\b(const|let|return|true|false)\b|([A-Za-z_$][\w$]*)(?=\s*:)/gm;

function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of code.matchAll(TOKEN)) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const cls = m[1] ? "c" : m[2] ? "s" : m[3] ? "n" : m[4] ? "k" : "p";
    out.push(<span key={m.index} className={`tok-${cls}`}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  out.push(code.slice(last));
  return out;
}

export default function Code({ code, file }: { code: string; file: string }) {
  return (
    <figure className="code" data-reveal>
      <figcaption className="code-bar">
        <span aria-hidden="true" className="code-dots"><i /><i /><i /></span>
        {file}
      </figcaption>
      <pre><code>{highlight(code)}</code></pre>
    </figure>
  );
}
