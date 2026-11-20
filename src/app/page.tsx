import type { CSSProperties, ReactNode } from "react";
import {
  certificates,
  chapters,
  hero,
  otherCredentials,
  outro,
  profile,
  toolkit,
  type Block,
  type Fact,
} from "@/data/story";
import { asset } from "@/lib/asset";
import Code from "@/components/Code";
import Composer from "@/components/Composer";
import Rich from "@/components/Rich";
import ScreenGallery from "@/components/ScreenGallery";
import ScrollFx from "@/components/ScrollFx";
import Zoom from "@/components/Zoom";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const { links } = profile;
  const contacts = [
    { label: "WhatsApp", value: links.phoneDisplay, href: `https://wa.me/${links.whatsapp}`, icon: "💬" },
    { label: "Email", value: links.email, href: `mailto:${links.email}`, icon: "✉️" },
    { label: "LinkedIn", value: "josua-pinem", href: links.linkedin, icon: "💼" },
    { label: "Instagram", value: `@${links.instagram}`, href: `https://instagram.com/${links.instagram}`, icon: "📸" },
    links.github && { label: "GitHub", value: links.github, href: `https://github.com/${links.github}`, icon: "🐙" },
  ].filter((c): c is { label: string; value: string; href: string; icon: string } => Boolean(c));

  return (
    <>
      <ScrollFx chapters={chapters.map((c) => ({ id: c.id, label: c.title }))} />

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#top" className="brand">
            <span className="dots" aria-hidden="true"><i /><i /><i /></span>
            <span>josua<b>.chat</b></span>
          </a>
          <span className="status"><i aria-hidden="true" /> online · {profile.location}</span>
          <a href="#kontak" className="btn btn-sm">Ngobrol yuk</a>
        </div>
      </header>

      <div className="app" id="top">
        <main className="thread">
          {/* ---------- Pembuka ---------- */}
          <section className="hero" data-spy aria-label="Perkenalan">
            <h1 className="sr-only">{profile.name}, {profile.role}</h1>
            <span className="day-chip">Hari ini</span>
            <Them delay={0.2}>{hero.question}</Them>
            <Typing delay={0.6} />
            <Me delay={1.4}>
              <p className="bubble big"><Rich text={hero.replies[0]} /></p>
            </Me>
            <Typing delay={1.7} />
            <Me delay={2.5} avatar={false}>
              <p className="bubble"><Rich text={hero.replies[1]} /></p>
            </Me>
            <Me delay={3.2} avatar={false}>
              <Code code={hero.code} file="josua.ts" />
            </Me>
            <Me delay={3.6} avatar={false} className="only-compact">
              <ProfileCard compact />
            </Me>
            <Me delay={4} avatar={false}>
              <p className="bubble">{hero.outro}</p>
            </Me>
            <div className="replies anim" style={{ "--d": "4.5s" } as CSSProperties}>
              <a href="#bab-1" className="reply">Ceritain dari awal ✨</a>
              <a href="#bab-6" className="reply">Lihat kerjaan sekarang</a>
              <a href="#kontak" className="reply">Minta kontak</a>
            </div>
          </section>

          {/* ---------- Daftar topik ---------- */}
          <section id="topik" className="chatlist" data-spy aria-labelledby="topik-t">
            <h2 id="topik-t" className="list-head">Topik obrolan <span>{chapters.length}</span></h2>
            <ol>
              {chapters.map((c, i) => (
                <li key={c.id} data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
                  <a href={`#${c.id}`}>
                    <span className={`chat-avatar c${i % 4}`} aria-hidden="true">{pad(i + 1)}</span>
                    <span className="chat-main">
                      <span className="chat-title">{c.title}</span>
                      <span className="chat-preview">{c.question}</span>
                    </span>
                    <span className="chat-time">{c.period}</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- Bab ---------- */}
          {chapters.map((c, i) => (
            <section key={c.id} id={c.id} className="topic" data-spy aria-labelledby={`${c.id}-t`}>
              <header className="topic-head" data-reveal>
                <span className="day-chip">Topik {pad(i + 1)} · {c.period}</span>
                <h2 id={`${c.id}-t`}>{c.title}</h2>
              </header>
              <Them>{c.question}</Them>
              <Me>
                {c.blocks.map((b, j) => <BlockView key={j} block={b} file={`topik${i + 1}.ts`} />)}
                {c.cliffhanger && <p className="bubble teaser" data-reveal>{c.cliffhanger}</p>}
              </Me>
              {c.cliffhanger && (
                <div className="replies" data-reveal>
                  <a href={`#${chapters[i + 1]?.id ?? "lampiran"}`} className="reply">Terus gimana? →</a>
                </div>
              )}
            </section>
          ))}

          {/* ---------- Lampiran ---------- */}
          <section id="lampiran" className="topic" data-spy aria-labelledby="lampiran-t">
            <header className="topic-head" data-reveal>
              <span className="day-chip">Lampiran</span>
              <h2 id="lampiran-t">Ada buktinya?</h2>
            </header>
            <Them>Keren. Tapi ada buktinya nggak? 😄</Them>
            <Me>
              <p className="bubble" data-reveal>Ada dong. Ini beberapa sertifikatnya, klik untuk memperbesar:</p>
              <div className="attachments" data-reveal>
                {certificates.map((cert) => (
                  <figure key={cert.src}>
                    <Zoom img={cert} />
                    <figcaption>{cert.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <ul className="chips" data-reveal>{otherCredentials.map((c) => <li key={c}>{c}</li>)}</ul>
              <p className="bubble" data-reveal>Dan ini isi &ldquo;tas peralatan&rdquo; saya:</p>
              <Code
                file="skills.ts"
                code={`export const skills = {\n${toolkit
                  .map((g) => `  // ${g.group}\n  ${g.key}: [${g.items.map((s) => `"${s}"`).join(", ")}],`)
                  .join("\n")}\n};`}
              />
            </Me>
          </section>

          {/* ---------- Kontak ---------- */}
          <section id="kontak" className="topic" data-spy aria-labelledby="kontak-t">
            <header className="topic-head" data-reveal>
              <span className="day-chip">Penutup</span>
              <h2 id="kontak-t">{outro.title}</h2>
            </header>
            <Them>{outro.question}</Them>
            <Me>
              <p className="bubble" data-reveal>{outro.body}</p>
              <div className="contact-cards" data-reveal>
                {contacts.map((c) => (
                  <a key={c.label} href={c.href} className="contact-card" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <span className="contact-icon" aria-hidden="true">{c.icon}</span>
                    <span>
                      <strong>{c.label}</strong>
                      <span>{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
              <p className="bubble" data-reveal>Atau langsung ketik di bawah, nanti terkirim ke WhatsApp saya 👇</p>
            </Me>
            <Composer whatsapp={links.whatsapp} />
          </section>
        </main>

        {/* ---------- Panel profil (desktop) ---------- */}
        <aside className="side" aria-label="Profil">
          <ProfileCard />
          <nav className="side-topics" aria-label="Topik">
            <p className="side-label">Topik obrolan</p>
            {chapters.map((c, i) => (
              <a key={c.id} href={`#${c.id}`} data-topic={c.id}>
                <span>{pad(i + 1)}</span>{c.title}
              </a>
            ))}
          </nav>
        </aside>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name} · dibuat dengan Next.js</span>
        <a href="#top">Kembali ke atas ↑</a>
      </footer>
    </>
  );
}

/* ---------- Pieces ---------- */

function Them({ children, delay }: { children: ReactNode; delay?: number }) {
  return (
    <div className={`msg them ${delay !== undefined ? "anim" : ""}`} data-reveal={delay === undefined ? "" : undefined} style={delay !== undefined ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}>
      <span className="sr-only">Pengunjung: </span>
      <p className="bubble">{children}</p>
    </div>
  );
}

function Me({ children, delay, avatar = true, className = "" }: { children: ReactNode; delay?: number; avatar?: boolean; className?: string }) {
  return (
    <div className={`msg me ${delay !== undefined ? "anim" : ""} ${className}`} style={delay !== undefined ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}>
      {avatar ? <Avatar /> : <span className="avatar-gap" aria-hidden="true" />}
      <div className="stack">
        {avatar && <span className="sr-only">Josua: </span>}
        {children}
      </div>
    </div>
  );
}

function Avatar() {
  return <span className="avatar" aria-hidden="true" style={{ backgroundImage: `url(${asset(profile.photo.src)})` }} />;
}

function Typing({ delay }: { delay: number }) {
  return (
    <div className="msg me typing" style={{ "--d": `${delay}s` } as CSSProperties} aria-hidden="true">
      <span className="avatar-gap" />
      <span className="typing-dots"><i /><i /><i /></span>
    </div>
  );
}

function ProfileCard({ compact = false }: { compact?: boolean }) {
  const stats = [
    { v: "3,97", l: "IPK · cum laude" },
    { v: "60rb+", l: "request API" },
    { v: "2.153", l: "chat dijawab bot" },
    { v: "54 jam", l: "game jam" },
  ];
  const photo = (
    <div className="profile-photo">
      <img src={asset(profile.photo.src)} alt={profile.photo.alt} width={367} height={680} />
    </div>
  );
  const name = (
    <div>
      <p className="profile-name">{profile.name}</p>
      <p className="profile-role">{profile.role} · Nusanet</p>
    </div>
  );
  return (
    <div className={`profile ${compact ? "profile-compact" : "profile-side"}`}>
      {/* Mobile: tall photo beside the details. Sidebar: small photo beside the name, to stay short. */}
      {compact && photo}
      <div className="profile-body">
        {compact ? name : <div className="profile-head">{photo}{name}</div>}
        <dl className="profile-stats">
          {stats.map((s) => (
            <div key={s.l}><dt>{s.v}</dt><dd>{s.l}</dd></div>
          ))}
        </dl>
        {!compact && (
          <a className="btn btn-primary btn-block" href={`https://wa.me/${profile.links.whatsapp}`} target="_blank" rel="noreferrer">
            Kirim pesan
          </a>
        )}
      </div>
    </div>
  );
}

function factsCode(items: Fact[], file: string) {
  const name = file.replace(".ts", "");
  return `const ${name} = {\n${items.map((f) => `  // ${f.label}\n  ${f.key}: ${f.value},`).join("\n")}\n};`;
}

function BlockView({ block, file }: { block: Block; file: string }) {
  switch (block.type) {
    case "text":
      return <p className="bubble" data-reveal><Rich text={block.body} /></p>;
    case "facts":
      return <Code code={factsCode(block.items, file)} file={file} />;
    case "photo":
      return (
        <figure className="bubble media" data-reveal>
          <Zoom img={block.img} />
          {block.img.caption && <figcaption>{block.img.caption}</figcaption>}
        </figure>
      );
    case "gallery":
      return <ScreenGallery title={block.title} meta={block.meta} shots={block.shots} />;
    case "cards":
      return (
        <div className="cards">
          {block.items.map((c, i) => (
            <article key={c.title} className={`card c${i % 4}`} data-reveal style={{ transitionDelay: `${(i % 2) * 70}ms` }}>
              <p className="card-tag">{c.tag}</p>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <ul className="tags">{c.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            </article>
          ))}
        </div>
      );
    case "quote":
      return <blockquote className="bubble quote" data-reveal>&ldquo;{block.body}&rdquo;</blockquote>;
  }
}
