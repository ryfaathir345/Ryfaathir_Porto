# Portofolio Pribadi - Ryfaathir Rahman

Website portofolio modern, responsif, dan interaktif yang dibangun berdasarkan desain **Google Stitch** dengan sentuhan arsitektural Tailwind CSS, Material Design Tokens, font *Space Grotesk* dan *Inter*.

---

## 🌟 Fitur Utama Website

1. **Desain Presisi Google Stitch**:
   - Skema warna elegan berbasis Navy (`#032448`), Teal (`#006a60`), dan aksen Turquoise (`#8cf5e4`).
   - Tipografi terstruktur memadukan **Space Grotesk** (Heading & Display) dan **Inter** (Body & UI).
   - Ikonografi resmi **Google Material Symbols**.

2. **Responsif & Mobile-Friendly**:
   - Tampilan optimal di Smartphone, Tablet, Laptop, maupun Monitor Desktop.
   - Menu navigasi mobile *drawer* interaktif dengan animasi buka/tutup dan penutupan otomatis saat tautan diklik.

3. **Interaktivitas & UX Modern**:
   - **Smooth Scrolling**: Navigasi mulus ke setiap bagian halaman dengan offset header tetap (*fixed navbar*).
   - **ScrollSpy**: Navigasi navbar otomatis mendeteksi posisi scroll dan memberikan highlight aktif pada menu yang sedang dilihat.
   - **Tombol Floating "Kembali ke Atas"**: Muncul otomatis saat halaman di-scroll ke bawah.
   - **Tautan Kontak Langsung**: Tombol WhatsApp langsung membuka chat ke nomor `08993352618`, email langsung membuka aplikasi kirim email ke `ryfaathirrahman@gmail.com`, dan tautan ke GitHub `ryfaathir345`.
   - **Smart Image Fallback**: Tampilan tetap rapi menggunakan desain placeholder resmi Google Stitch apabila foto profil atau tangkapan layar proyek belum ditambahkan.

---

## 💻 Daftar Proyek Unggulan

Portofolio ini menampilkan 6 proyek rekayasa perangkat lunak multi-platform:
1. **CreatorVault** (Fullstack Web & Payment Gateway) — Platform e-commerce produk digital modern berbasis Next.js 14 App Router, TypeScript, Prisma ORM, integrasi Midtrans Snap (QRIS & Virtual Account), otomatisasi Webhook SHA-512 anti-fraud, dan keamanan unduhan aset token 24 jam (`D:\MyProject\CreatorVault`).
2. **ShadownClip V3** (AI & SaaS Platform) — Pipeline video AI otomatisasi YouTube ke Shorts/TikTok 9:16 dengan monetisasi SaaS Midtrans VIP, Google Gemini Flash, Whisper AI, face tracking cerdas, arsitektur Celery + Redis, dan Cloudflare R2 (`D:\MyProject\ShadownClipV3`).
3. **Horti-Apps** (Web Marketplace Agrikultur) — Marketplace hasil bumi berbasis Laravel 11 & Tailwind CSS dengan arsitektur multi-role (Petani, Pengepul, Admin), verifikasi identitas (KYC), harga patokan komoditas, dan integrasi pemesanan WhatsApp API (`D:\MyProject\Horti-Apps`).
4. **LifeHub V2** (Mobile App) — Aplikasi mobile all-in-one Flutter (Android/iOS) 100% offline-first untuk pelacakan keuangan, brankas password terenkripsi AES-256, jurnal trading, dan jadwal kuliah (`D:\MyProject\LifeHubV2`).
5. **RNM TWEAK** (Windows Desktop) — Utilitas sistem Windows & game booster berkinerja tinggi menggunakan C# .NET 8, WPF, dan Windows 11 Fluent UI (`D:\MyProject\RNMTWEAK`).
6. **Website Galeri Foto** (Web Development) — Sistem manajemen arsip visual Uji Kompetensi RPL SMKN 11 Malang (PHP & MySQL — Predikat: Kompeten).

---

## 📁 Struktur Folder

```text
PortoFolio/
│
├── index.html                  # Halaman web utama
├── README.md                   # Dokumentasi panduan
│
└── assets/                     # Folder berkas statis
    ├── images/                 # Foto profil dan aset gambar proyek
    │   ├── profile.jpg         # Pasfoto profil Ryfaathir Rahman
    │   ├── shadownclip-preview.png  # Preview UI face tracking ShadownClip
    │   ├── shadownclip-icon.png     # Logo ShadownClip
    │   ├── horti-apps-preview.png   # Preview visual marketplace Horti-Apps
    │   ├── lifehub-icon.png         # Logo aplikasi LifeHub V2
    │   └── galeri-foto.png          # Screenshot proyek Galeri Foto
    │
    └── docs/                   # Berkas dokumen
        └── CV_Ryfaathir_Rahman.pdf  # File CV untuk tombol "Unduh CV"
```

---

## 🚀 Cara Menjalankan Website

Pilih salah satu cara termudah berikut:

### Opsi 1: Langsung Buka File (Paling Cepat)
1. Buka File Explorer di Windows.
2. Masuk ke folder `d:\MyProject\PortoFolio`.
3. Klik dua kali file **`index.html`**.
4. Website akan langsung terbuka di browser default Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

### Opsi 2: Menggunakan VS Code (Live Server)
1. Buka folder `PortoFolio` di VS Code.
2. Pasang ekstensi **Live Server** (jika belum ada).
3. Klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.

### Opsi 3: Menggunakan Python (Terminal / PowerShell)
Buka terminal di folder ini dan jalankan:
```bash
python -m http.server 8000
```
Lalu buka browser di alamat: `http://localhost:8000`

### Opsi 4: Menggunakan Node.js
```bash
npx serve .
```

---

## 🖼️ Cara Mengganti Foto & CV

1. **Pasfoto Profil**:
   - Masukkan foto formal Anda ke dalam folder `assets/images/` dengan nama **`profile.jpg`**.
   - Website akan otomatis mendeteksi dan menampilkan foto Anda di bagian Beranda.

2. **Screenshot Proyek Galeri Foto**:
   - Masukkan tangkapan layar website proyek Anda ke dalam folder `assets/images/` dengan nama **`galeri-foto.png`**.
   - Website akan otomatis menampilkan screenshot di dalam jendela browser mockup.

3. **Berkas CV (PDF)**:
   - Simpan berkas PDF CV Anda di folder `assets/docs/` dengan nama **`CV_Ryfaathir_Rahman.pdf`**.
   - Pengunjung yang mengklik tombol **"Unduh CV"** akan langsung mengunduh file tersebut.

---

## 🌐 Cara Publikasi / Deploy Online (Gratis)

Jika ingin mempublikasikan portofolio agar bisa diakses di internet:

1. **GitHub Pages (Gratis)**:
   - Buat repositori baru di GitHub dengan nama `portofolio` atau `ryfaathir345.github.io`.
   - Push folder proyek ini ke repositori tersebut:
     ```bash
     git init
     git add .
     git commit -m "Initial commit portofolio Ryfaathir Rahman"
     git branch -M main
     git remote add origin https://github.com/ryfaathir345/portofolio.git
     git push -u origin main
     ```
   - Masuk ke menu **Settings** > **Pages** di repositori GitHub, pilih branch `main`, lalu klik **Save**.
   - Website Anda akan live dalam hitungan menit di `https://ryfaathir345.github.io/portofolio/`!

2. **Vercel / Netlify (Drag & Drop)**:
   - Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
   - Tarik (drag & drop) folder `PortoFolio` untuk langsung tayang secara instan.
