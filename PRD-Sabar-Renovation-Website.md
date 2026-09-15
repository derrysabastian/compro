# PRD & Prompt — Website Company Profile "Sabar Renovation"

> Dokumen ini siap ditempel (copy-paste) langsung ke AI agent (Claude Code, Cursor, v0, bolt.new, Lovable, dsb.) untuk membangun website.

---

## 1. Ringkasan Proyek

**Nama Usaha:** Sabar Renovation
**Bidang Usaha:** Jasa pembuatan (bangun baru) dan renovasi rumah/bangunan
**Area Layanan:** Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)
**Jenis Website:** Company profile / portofolio 1 pemilik usaha (bukan korporasi besar)
**Tujuan Utama:**
- Mengenalkan usaha ke calon pelanggan
- Menampilkan portofolio proyek yang sudah dikerjakan
- Membangun kepercayaan (trust) calon customer
- Mendorong calon customer untuk menghubungi (WhatsApp/telepon/form) untuk konsultasi/penawaran

**Kesan yang Ingin Dibangun:**
Modern, kekinian, terpercaya, rapi, profesional — tidak terkesan "tukang biasa", tapi juga tidak kaku seperti korporasi besar. Harus terasa hangat, personal, dan meyakinkan secara visual.

---

## 2. Target Audience

- Pemilik rumah di Jabodetabek yang ingin renovasi (dapur, kamar mandi, fasad, tambah lantai, dll)
- Orang yang ingin membangun rumah baru dari nol
- Usia dominan 28–55 tahun, kelas menengah–menengah atas
- Mencari kontraktor lewat pencarian Google / rekomendasi / Instagram, lalu cek website untuk validasi kredibilitas

---

## 3. Gaya Desain (Design Direction)

- **Tema visual:** Modern minimalis dengan sentuhan warm/earthy (mengingatkan pada material bangunan: kayu, beton, warna tanah) dikombinasikan dengan aksen warna solid yang tegas sebagai brand color (contoh: navy/charcoal + terracotta/oranye, atau hijau tua + krem — AI agent boleh mengusulkan palet lengkap tapi harus tetap terasa "construction/renovation" bukan tech startup generik).
- **Tipografi:** Kombinasi font sans-serif modern untuk body text, dan font yang lebih tegas/bold untuk heading (kesan kokoh, solid, seperti bangunan).
- **Layout:** Full-width sections, banyak white space, grid galeri foto yang rapi, hero section dengan foto besar berkualitas tinggi.
- **Animasi & Transisi (WAJIB, ini prioritas utama):**
  - Smooth scroll (scroll-behavior smooth / library seperti Lenis/GSAP ScrollTrigger)
  - Fade-in & slide-up saat elemen masuk viewport (scroll reveal)
  - Transisi halus antar section (parallax ringan pada hero image)
  - Hover effect halus pada kartu proyek/portofolio (zoom gambar perlahan, overlay muncul smooth)
  - Transisi halaman (page transition) yang smooth jika multi-page, atau jika single-page, transisi antar section terasa "hidup" tanpa lag
  - Micro-interactions pada tombol (CTA) — hover state yang smooth
  - Hindari animasi yang berlebihan/mengganggu — smooth dan elegan, bukan ramai
- **Referensi rasa (vibe reference):** Seperti website studio arsitektur modern atau portfolio interior designer premium — bukan seperti template kontraktor generik yang kaku.

---

## 4. Struktur Halaman (Sitemap)

Website bisa berupa **single-page scroll** (direkomendasikan untuk kesan modern & smooth) dengan section-section berikut, atau multi-page jika AI agent menilai lebih baik:

1. **Hero Section**
   - Foto/video background proyek unggulan
   - Nama usaha "Sabar Renovation" + tagline singkat (contoh: "Wujudkan Rumah Impian Anda, dari Renovasi hingga Bangun Baru")
   - CTA utama: "Konsultasi Gratis" (link WhatsApp) & CTA sekunder: "Lihat Portofolio"

2. **Tentang Kami (About)**
   - Cerita singkat usaha, filosofi kerja ("sabar" dalam nama bisa jadi cerita/nilai: telaten, rapi, tidak asal-asalan)
   - Jumlah tahun pengalaman, jumlah proyek selesai (angka/statistik dengan animasi counting up)
   - Area layanan: Jabodetabek

3. **Layanan (Services)**
   - Renovasi Rumah (dapur, kamar mandi, fasad, interior)
   - Bangun Rumah Baru
   - Renovasi Bangunan Komersial/Ruko (jika relevan)
   - Konsultasi Desain
   - Masing-masing dengan icon/ilustrasi dan deskripsi singkat, tampil dalam grid card dengan hover animation

4. **Portofolio / Galeri Proyek**
   - Grid foto proyek yang sudah dikerjakan, bisa difilter per kategori (Dapur, Kamar Mandi, Fasad, Rumah Baru, dll)
   - Klik foto membuka lightbox/modal dengan slide foto before-after jika ada
   - Animasi masonry grid dengan smooth loading

5. **Proses Kerja (How We Work)**
   - Timeline singkat: Konsultasi → Survey & Penawaran → Pengerjaan → Serah Terima
   - Ditampilkan sebagai step visual dengan animasi scroll

6. **Testimoni**
   - Kutipan dari pelanggan (bisa placeholder dulu), foto pelanggan/rumah, carousel/slider smooth

7. **Kontak (Contact)**
   - Form kontak sederhana (Nama, No. HP, Lokasi Proyek, Kebutuhan)
   - Tombol langsung ke WhatsApp
   - Info: alamat/area operasional, jam operasional, sosial media (Instagram)
   - Peta area layanan Jabodetabek (opsional, bisa simple map/illustration)

8. **Footer**
   - Logo, ringkasan singkat, link cepat ke section, kontak, sosial media, copyright

---

## 5. Fitur Fungsional

- [ ] Fully responsive (mobile-first, karena banyak calon customer akan buka dari HP)
- [ ] Tombol WhatsApp floating/sticky di semua halaman
- [ ] Galeri foto dengan lazy loading (agar tetap cepat meski banyak gambar)
- [ ] Filter kategori pada galeri portofolio
- [ ] Smooth scroll navigation (klik menu → scroll halus ke section)
- [ ] Sticky navbar dengan efek transparan → solid saat di-scroll
- [ ] Form kontak dengan validasi sederhana
- [ ] Optimasi SEO dasar (meta title, description, alt text gambar, struktur heading benar) — penting agar muncul saat orang cari "kontraktor renovasi jabodetabek" dll
- [ ] Loading performa cepat (gambar dikompresi/optimized, tidak lag meski animasi banyak)

---

## 6. Konten & Placeholder Gambar

**PENTING:** Pemilik usaha (user) sudah punya foto-foto proyek asli, tapi untuk tahap awal pembuatan website ini, gunakan foto placeholder terlebih dahulu.

**Instruksi untuk AI Agent:**
- Download foto-foto bertema **rumah/bangunan modern, renovasi, konstruksi, interior rumah minimalis** dari sumber stok foto gratis dan bebas royalti seperti **Unsplash** (source.unsplash.com atau unsplash.com) atau **Pexels** (pexels.com), dengan kualitas tinggi dan estetika modern.
- Pasang foto-foto tersebut ke section Hero, Portofolio, About, dan Testimoni sebagai placeholder sementara.
- Struktur kode harus dibuat agar foto placeholder ini **mudah diganti nantinya** — misalnya kumpulkan semua path/link gambar dalam satu file konfigurasi (misal `data/images.js` atau folder `/assets/images/` dengan penamaan jelas per section: `hero-1.jpg`, `portfolio-dapur-1.jpg`, dst) sehingga saat foto asli sudah ada, pemilik usaha tinggal mengganti file tanpa mengubah kode.
- Gunakan foto dengan variasi: rumah minimalis modern, dapur, kamar mandi, fasad rumah, proses renovasi/konstruksi, agar merepresentasikan semua layanan.

**Copywriting:**
- Buatkan draft teks/copy untuk setiap section dalam Bahasa Indonesia yang persuasif namun tetap natural (tidak lebay), sesuai poin-poin di struktur halaman di atas. Pemilik usaha akan review dan edit nanti.

---

## 7. Rekomendasi Tech Stack

AI agent bebas menyesuaikan, namun disarankan:
- **Frontend:** Next.js atau React + Tailwind CSS (memudahkan styling modern & responsif)
- **Animasi:** Framer Motion (untuk React) dan/atau GSAP + ScrollTrigger untuk animasi scroll yang smooth
- **Smooth scrolling:** Lenis atau library sejenis
- **Icon:** Lucide Icons / Heroicons
- **Hosting:** Vercel/Netlify (gratis, mudah deploy) jika berbasis React/Next.js — atau static HTML/CSS/JS biasa jika ingin lebih sederhana

---

## 8. Nada Komunikasi (Tone of Voice)

Hangat, terpercaya, profesional, tidak kaku. Gunakan Bahasa Indonesia yang mudah dipahami, hindari jargon teknis berlebihan. Tekankan nilai: teliti, sabar (sesuai nama usaha), rapi, tepat waktu, harga transparan.

---

## 9. Deliverable yang Diharapkan dari AI Agent

1. Website lengkap (kode) sesuai struktur di atas, siap dijalankan/deploy
2. Sudah terisi foto placeholder yang di-download otomatis sesuai instruksi bagian 6
3. Sudah terisi copywriting draft berbahasa Indonesia di setiap section
4. Responsif di mobile, tablet, desktop
5. Animasi/transisi smooth sesuai bagian 3 sudah diimplementasikan
6. Struktur folder/kode rapi dan mudah di-maintain, terutama untuk penggantian foto asli nantinya

---

*Catatan untuk AI Agent: Prioritaskan kesan modern, smooth, dan premium — ini adalah nilai jual utama yang diminta pemilik usaha untuk membedakan diri dari kontraktor renovasi lain yang websitenya biasanya sangat sederhana/ketinggalan zaman.*
