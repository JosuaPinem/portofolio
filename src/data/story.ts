// Semua isi situs ada di file ini. Ubah teks di sini, tidak perlu menyentuh komponen.

export type Img = { src: string; alt: string; caption?: string };

export const profile = {
  name: "Josua Pinem",
  role: "BIS Product Engineer",
  location: "Medan",
  photo: { src: "/img/josua.png", alt: "Josua Pinem duduk mengenakan jas hitam" },
  links: {
    linkedin: "https://www.linkedin.com/in/josua-pinem/",
    github: "JosuaPinem",
    email: "josuapinem002@gmail.com",
    // Nomor dalam format internasional tanpa "+", dipakai untuk link wa.me
    whatsapp: "6281262920832",
    phoneDisplay: "+62 812-6292-0832",
    instagram: "jospnm",
  },
};

// Percakapan pembuka di hero. "kamu" = pengunjung, "josua" = balasan kamu.
export const hero = {
  question: "Halo! Kamu siapa?",
  replies: [
    "Halo! Saya **Josua** 👋",
    "Saya **BIS Product Engineer** di Nusanet. Kerjaan saya membangun **chatbot AI**, dan di luar itu saya suka bicara di depan orang, mulai dari MC, moderator, sampai pembicara.",
  ],
  code: `const josua = {
  peran: "BIS Product Engineer",
  kode: ["Python", "Flask", "Gemini API"],
  komunikasi: ["MC", "Moderator", "Pembicara"],
  kota: "Medan",
};`,
  outro: "Kedengarannya tidak nyambung? Sebenarnya semuanya satu cerita, saya bagi jadi 6 topik obrolan. Mau mulai dari mana?",
};

// key = nama variabel di tampilan kode, value = literal kode (angka atau "teks")
export type Fact = { key: string; value: string; label: string };
export type Block =
  | { type: "text"; body: string }
  | { type: "facts"; items: Fact[] }
  | { type: "photo"; img: Img }
  | { type: "gallery"; title: string; meta: string; shots: Img[] }
  | { type: "cards"; items: { title: string; tag: string; body: string; stack: string[] }[] }
  | { type: "quote"; body: string };

export type Chapter = {
  id: string;
  period: string;
  title: string;
  question: string; // pertanyaan pengunjung yang membuka bab
  teaser: string; // ditampilkan di daftar topik
  blocks: Block[];
  cliffhanger?: string; // kalimat penutup yang memancing bab berikutnya
};

export const chapters: Chapter[] = [
  {
    id: "bab-1",
    period: "2021 — 2022",
    title: "Anak yang suka bicara",
    question: "Awalnya gimana sih, kok bisa masuk dunia IT?",
    teaser: "Sebelum menulis kode, saya lebih dulu belajar bicara di depan orang.",
    blocks: [
      {
        type: "text",
        body: "Saya masuk Ilmu Komputer UNIMED tahun 2021. Di tahun pertama, yang paling menonjol justru bukan kode. Saya meraih **medali perunggu Olimpiade Matematika Gelora Sains POSI**, lalu diundang menjadi **pembicara di Pahamify Campus Fair** untuk menjelaskan jurusan Ilmu Komputer kepada calon mahasiswa dari seluruh Indonesia.",
      },
      {
        type: "text",
        body: "Setelah itu saya mengajar siswa SMP untuk persiapan **Olimpiade Informatika**, dan di tahun 2022 saya dipercaya menjadi **ketua tim pemrograman kompetitif GEMASTIK**. Ternyata menjelaskan sesuatu yang rumit dengan cara sederhana adalah keterampilan yang nanti terus terpakai.",
      },
      {
        type: "facts",
        items: [
          { key: "olimpiadeMatematika", value: '"perunggu"', label: "Gelora Sains POSI 2021" },
          { key: "pahamifyCampusFair", value: '"pembicara"', label: "1 dari 3 pembicara jurusan" },
          { key: "gemastik2022", value: '"ketua tim"', label: "divisi pemrograman kompetitif" },
        ],
      },
    ],
    cliffhanger: "Tapi bicara saja tidak cukup. Saya ingin membuat sesuatu yang benar-benar dipakai orang.",
  },
  {
    id: "bab-2",
    period: "2022 — 2023",
    title: "Dari tugas kuliah ke aplikasi sungguhan",
    question: "Terus, kapan pertama kali bikin aplikasi beneran?",
    teaser: "Dua tugas kuliah yang saya perlakukan seperti produk sungguhan.",
    blocks: [
      {
        type: "text",
        body: "Di setiap proyek kelompok saya memilih bagian yang paling jarang diminati: **desain database dan backend**. Bagian ini tidak terlihat, tapi kalau salah, seluruh aplikasi ikut runtuh. Coba klik layar-layarnya di bawah.",
      },
      {
        type: "gallery",
        title: "Sistem Informasi Penggajian",
        meta: "Pemrograman Web · 2022 · PHP, MySQL · Ketua tim backend",
        shots: [
          { src: "/img/payroll-dashboard.jpg", alt: "Dashboard karyawan", caption: "Dashboard karyawan" },
          { src: "/img/payroll-absensi.jpg", alt: "Halaman absensi dengan jam digital", caption: "Absensi" },
          { src: "/img/payroll-admin.jpg", alt: "Dashboard admin", caption: "Dashboard admin" },
          { src: "/img/payroll-karyawan.jpg", alt: "Manajemen karyawan", caption: "Data karyawan" },
          { src: "/img/payroll-gaji.jpg", alt: "Tabel penggajian", caption: "Penggajian" },
        ],
      },
      {
        type: "gallery",
        title: "Sistem Informasi Tri Dharma Dosen",
        meta: "Rekayasa Perangkat Lunak · 2023 · PHP, MySQL · Ketua tim database & backend",
        shots: [
          { src: "/img/tridharma-login.jpg", alt: "Halaman login Tri Dharma", caption: "Login" },
          { src: "/img/tridharma-dashboard.jpg", alt: "Dashboard dosen", caption: "Dashboard dosen" },
          { src: "/img/tridharma-tabel.jpg", alt: "Tabel data tri dharma", caption: "Data tri dharma" },
          { src: "/img/tridharma-input.jpg", alt: "Form input tri dharma", caption: "Input data" },
        ],
      },
      {
        type: "text",
        body: "Lalu datang ujian sesungguhnya: **PKM-PI dari Kemendikbud**. Saya memimpin 5 orang sekaligus menjadi backend engineer dan pengelola keuangan, untuk membangun **website gamifikasi latihan soal PHP** bagi mitra nyata, LKP Karya Ilmu Medan. Backend-nya saya tulis dengan Express dan MongoDB sampai web app ter-deploy dan siap dipakai pelajar.",
      },
      {
        type: "text",
        body: "Di tengah jalan, ada anggota tim yang tidak bisa dihubungi. Saya mendatanginya langsung, lalu mengambil alih tanggung jawabnya supaya proyek tetap selesai. Menurut admin mitra, setelah itu ada pelajar baru yang ikut program dan modul belajarnya menjadi lebih efisien.",
      },
      {
        type: "photo",
        img: { src: "/img/foto-sicode.jpg", alt: "Josua mempresentasikan SICODE di depan mitra", caption: "Memperkenalkan SICODE, website gamifikasi latihan soal PHP, ke mitra PKM-PI" },
      },
    ],
    cliffhanger: "Lalu muncul pertanyaan baru: bisakah komputer mengenali wajah dan plat motor di gerbang kampus?",
  },
  {
    id: "bab-3",
    period: "2023 — 2025",
    title: "Mengajari mesin melihat",
    question: "Wait… komputer bisa ngenalin plat motor? Gimana caranya?",
    teaser: "Antrean di gerbang kampus, dan model yang akurasinya 99%.",
    blocks: [
      {
        type: "text",
        body: "Gerbang UNIMED selalu macet karena pemeriksaan motor dilakukan manual. Sebagai **asisten peneliti**, saya membangun model computer vision yang mendeteksi **wajah pengendara** dan **plat nomor** sekaligus, lalu mengubah plat itu menjadi teks dengan EasyOCR supaya data pemiliknya bisa langsung dicari.",
      },
      {
        type: "facts",
        items: [
          { key: "akurasiPlat", value: "0.99", label: "deteksi plat nomor" },
          { key: "akurasiWajah", value: "0.97", label: "deteksi wajah pengendara" },
          { key: "rataRataYOLOv8", value: "0.98", label: "versi YOLOv8" },
        ],
      },
      {
        type: "text",
        body: "Saya juga menulis backend Flask dan database untuk mencatat aktivitas pengguna. Riset ini kemudian saya presentasikan di **konferensi internasional Trends in Science and Science Education 2024**, dan di bulan berikutnya saya membawakan riset lain tentang VR untuk pendidikan di **IMADE 2024, Bali**.",
      },
      {
        type: "photo",
        img: { src: "/img/foto-konferensi.jpg", alt: "Josua presentasi riset deteksi plat dan wajah di ruang konferensi", caption: "Presentasi riset Automatic Vehicle Number Plate & Driver's Face Recognition" },
      },
    ],
    cliffhanger: "Model bisa melihat. Tapi data yang dihasilkannya tetap perlu dibaca oleh manusia.",
  },
  {
    id: "bab-4",
    period: "2025",
    title: "Saat angka mulai bercerita",
    question: "Habis lulus, ngapain?",
    teaser: "Spreadsheet berantakan yang berubah jadi keputusan.",
    blocks: [
      {
        type: "text",
        body: "Saya lulus dalam **3 tahun 5 bulan** dengan **IPK 3,97 (cum laude)** dan dinobatkan sebagai **Mahasiswa Berprestasi FMIPA**. Setelah itu saya mendalami analisis data. Data mentah saya bersihkan dan standarkan, lalu saya ubah menjadi dashboard interaktif yang bisa dibaca orang non-teknis.",
      },
      {
        type: "gallery",
        title: "Dashboard Penjualan Sepeda & Harga Properti",
        meta: "Excel (Pivot, Slicer) · Tableau",
        shots: [
          { src: "/img/excel-bike.jpg", alt: "Dashboard penjualan sepeda di Excel", caption: "Excel: siapa yang membeli sepeda?" },
          { src: "/img/tableau-1.jpg", alt: "Peta harga properti di Tableau", caption: "Tableau: peta harga" },
          { src: "/img/tableau-2.jpg", alt: "Grafik harga mingguan di Tableau", caption: "Tableau: tren harga" },
          { src: "/img/tableau-3.jpg", alt: "Peta ketersediaan di Tableau", caption: "Tableau: ketersediaan" },
        ],
      },
    ],
    cliffhanger: "Di sela semua itu, ada sisi lain yang jarang saya ceritakan.",
  },
  {
    id: "bab-5",
    period: "Selalu",
    title: "Sisi lain: piksel & panggung",
    question: "Kamu ada kegiatan di luar coding nggak?",
    teaser: "54 jam membuat game, dan aturan baru untuk uang 190 orang.",
    blocks: [
      {
        type: "text",
        body: "Di **GameJam+ 2024** saya punya waktu 54 jam untuk membuat game bersama tim. Saya menggambar semua aset *Silence Museum* di Aseprite, sekitar 10 aset mulai dari dinding, lantai, pencuri, polisi, sampai berliannya. Saya juga mendesain logo organisasi yang masih dipakai sampai sekarang.",
      },
      {
        type: "text",
        body: "Di panggung, saya menjadi **ketua divisi acara KKN** sekaligus MC di sosialisasi sekolah TK dan acara penutupan KKN lintas desa dan kampus. Saya juga pernah **memimpin sidang pleno** musyawarah anggota PERMATA GBKP.",
      },
      {
        type: "text",
        body: "Sekarang saya menjabat **Bendahara Umum PERMATA (2025–2027)** untuk organisasi beranggotakan 190 orang, dan menganalisis laporan keuangan 5 event besar dengan dana Rp20–30 juta per event. Saat menemukan banyak transaksi tanpa lampiran, saya mengusulkan aturan baru: **setiap transaksi wajib disaksikan**.",
      },
      {
        type: "photo",
        img: { src: "/img/foto-kkn.jpg", alt: "Josua menjadi moderator di acara KKN UNIMED 2024", caption: "Moderator penutupan KKN UNIMED 2024" },
      },
      {
        type: "photo",
        img: { src: "/img/foto-permata.jpg", alt: "Josua memimpin sidang musyawarah PERMATA", caption: "Memimpin sidang pleno musyawarah PERMATA GBKP" },
      },
      {
        type: "quote",
        body: "Saya percaya, apa pun yang dimulai dengan komunikasi akan berakhir dengan hasil yang luar biasa.",
      },
    ],
    cliffhanger: "Semua potongan itu, kode, data, piksel, dan panggung, akhirnya bertemu di satu tempat.",
  },
  {
    id: "bab-6",
    period: "Jul 2025 — kini",
    title: "Sekarang: AI yang dipakai setiap hari",
    question: "Oke, sekarang lagi ngerjain apa?",
    teaser: "60 ribu permintaan API, 2 ribu pertanyaan pelanggan, dan dua proyek iseng yang jadi serius.",
    blocks: [
      {
        type: "text",
        body: "Sebagai **BIS Product Engineer di PT Media Antar Nusa (Nusanet)**, saya membangun produk AI untuk layanan pelanggan internet Nusanet, dengan satu tujuan: pelanggan tidak perlu menunggu, dan tim tidak perlu mengetik ulang. Hasilnya sudah dipakai ribuan kali.",
      },
      {
        type: "facts",
        items: [
          { key: "requestKtpNpwp", value: "60_139", label: "permintaan dilayani endpoint ekstraksi KTP/NPWP" },
          { key: "pertanyaanNaila", value: "2_153", label: "pertanyaan pelanggan dijawab Chat Bot Naila" },
          { key: "registrasiMenit", value: '"10 → 2–5"', label: "waktu registrasi pelanggan" },
        ],
      },
      {
        type: "text",
        body: "Membangun bot itu baru separuh pekerjaan. Separuh lainnya adalah **memastikan jawabannya benar**. Setiap bulan saya menyusun 10–20 artikel pengetahuan dan **50 pertanyaan uji** bersama divisi terkait untuk menguji kelayakan jawaban bot RAG. Saya juga memantau aplikasi produksi dan memindahkan konfigurasi database dari staging ke production.",
      },
      {
        type: "cards",
        items: [
          { tag: "Nusanet", title: "Chat Bot Naila", body: "Bot layanan pelanggan berbasis RAG di WhatsApp yang sudah menjawab 2.153 pertanyaan. Bot ini juga menjadi cadangan saat bot AI aplikasi HRIS sedang down (480 pertanyaan), dan kini dipakai di aplikasi internal untuk pelanggan internet Nusanet.", stack: ["Python", "Flask", "GenAI", "PostgreSQL"] },
          { tag: "Nusanet", title: "Ekstraksi KTP & NPWP", body: "Endpoint yang membaca dokumen identitas dan pajak dengan Gemini API. Sudah melayani 60.139 permintaan dan memangkas registrasi dari 10 menit menjadi 2–5 menit.", stack: ["Gemini API", "Flask"] },
          { tag: "Nusanet", title: "Chat Bot Internal", body: "Membantu tim internal mencari data dan informasi. Sudah menjawab 173 pertanyaan sejak Oktober dan memangkas waktu tunggu respons pelanggan 30 menit sampai 1 jam.", stack: ["LLM", "SQL"] },
          { tag: "Nusanet", title: "Integrasi Faktur Pajak", body: "Merancang integrasi Faktur Pajak ke Pajak Express untuk pembuatan dan pelaporan otomatis ke DJP.", stack: ["API", "Pajak"] },
          { tag: "Nusanet", title: "Aplikasi One-on-One", body: "Web app untuk mengelola sesi one-on-one manajer beserta administrasinya.", stack: ["Web App"] },
          { tag: "Proyek pribadi", title: "Gitar YT", body: "Game ritme dari link YouTube apa pun. HP kamu menjadi stik sekaligus layarnya.", stack: ["TypeScript", "WebSocket", "Canvas"] },
          { tag: "Proyek pribadi", title: "ERP Toko Emas", body: "Stok per barang, harga emas harian per kadar, POS barcode, tukar tambah, reparasi, sampai akuntansi berpasangan.", stack: ["Next.js", "PostgreSQL", "Prisma"] },
        ],
      },
    ],
  },
];

export const certificates: Img[] = [
  { src: "/img/sertif-pahamify.jpg", alt: "Sertifikat pembicara Pahamify Campus Fair 2021", caption: "Pembicara · Pahamify Campus Fair 2021" },
  { src: "/img/sertif-posi.jpg", alt: "Piagam penghargaan Gelora Science Competition POSI", caption: "Perunggu · Olimpiade Matematika POSI" },
  { src: "/img/sertif-pkm.jpg", alt: "Sertifikat Program Kreativitas Mahasiswa 2023", caption: "Ketua Tim · PKM-PI 2023" },
  { src: "/img/sertif-gamejam.jpg", alt: "Sertifikat GameJamPlus 24/25", caption: "Game Artist · GameJam+ 2024" },
  { src: "/img/sertif-dibimbing.jpg", alt: "Sertifikat Data Science for Beginner dari Dibimbing", caption: "Data Science for Beginner · Dibimbing" },
];

export const otherCredentials = [
  "AWS Cloud Practitioner Essentials · Dicoding",
  "Problem Solving (Basic) · HackerRank",
  "Ketua Tim Pemrograman Kompetitif · GEMASTIK 2022",
  "Mahasiswa Berprestasi FMIPA UNIMED",
  "IPK 3,97 · Cum Laude",
];

// key = nama properti di tampilan kode skills
export const toolkit = [
  { key: "ai", group: "AI & LLM", items: ["Gemini API", "Library GenAI", "RAG & evaluasi jawaban", "Ekstraksi dokumen", "Computer Vision"] },
  { key: "backend", group: "Backend", items: ["Python / Flask", "TypeScript", "Express", "PHP", "Go"] },
  { key: "data", group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Spreadsheet", "Tableau"] },
  { key: "lainnya", group: "Lainnya", items: ["Analisis laporan keuangan", "Next.js", "Aseprite", "MC & Moderator"] },
];

export const outro = {
  question: "Oke, aku tertarik. Gimana cara ngobrol lebih lanjut?",
  title: "Bab berikutnya belum ditulis.",
  body: "Kalau kamu punya masalah yang layak diotomatisasi, atau butuh orang yang bisa membangun sekaligus menjelaskannya, mungkin kita bisa menulisnya bersama.",
};
