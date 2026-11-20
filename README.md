# Portofolio — Josua Pinem

Situs portofolio statis bertema "Chat × Code" (Next.js + TypeScript), di-deploy otomatis ke GitHub Pages.

**Live:** https://josuapinem.github.io/portofolio/

## Edit konten
Semua teks (topik cerita, foto, sertifikat, kontak) ada di `src/data/story.ts`; gambar di `public/img/`.

## Jalankan lokal
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # hasil statis di folder out/
```

## Deploy
Setiap push ke branch `main` otomatis di-build dan di-deploy oleh workflow
`.github/workflows/deploy.yml` (tab **Actions** di GitHub). Sekali saja di awal:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

Alur update:
```bash
git add .
git commit -m "Update isi portofolio"
git push
```
