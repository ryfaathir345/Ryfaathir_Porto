# Design System Specification — Portofolio Pribadi Ryfaathir Rahman

Dokumen ini mendefinisikan sistem desain lengkap (*Design System*) yang diekstraksi dan diadaptasi dari referensi visual bergaya **Editorial Playful Scrapbook** untuk website portofolio pribadi satu halaman (*single-page portfolio*) milik **Ryfaathir Rahman** (Mahasiswa Teknik Informatika — Fokus *Web Development & Digital Content*).

---

## 1. Design Overview

- **Konsep Visual**: *Playful Editorial & Tactile Minimalist* — Memadukan tata letak majalah editorial yang bersih (*high-whitespace canvas*), tipografi *display* geometris ekstra tebal yang disusun dinamis (*tilted/bouncy lettering*), elemen fisik skeuomorfik berupa kartu identitas (*Lanyard ID Badge*), serta *color-blocked vertical showcase strips* bernomor besar untuk menonjolkan karya.
- **Tujuan Utama**:
  1. Menciptakan kesan pertama (*first impression*) yang berkarakter kuat, kreatif, sekaligus terstruktur bagi pengunjung dalam 3 detik pertama.
  2. Menampilkan kombinasi keahlian teknis (*Web Development*) dan kepekaan visual (*Digital Content*) Ryfaathir Rahman secara seimbang.
  3. Memudahkan navigasi dan pemindaian informasi (*scannability*) bagi perekrut maupun calon klien menuju proyek unggulan, rekam jejak, dan kontak langsung.
- **Target Audiens**:
  - **Tech Recruiter & HRD**: Membutuhkan ringkasan profil cepat, daftar keahlian teknis (*tech stack*), riwayat pengalaman, pendidikan, serta tautan repositori/demo proyek yang tervalidasi.
  - **Klien Freelance & Agensi Kreatif**: Menilai kualitas estetika, kerapian eksekusi antarmuka, serta kemudahan menghubungi pemilik portofolio untuk kolaborasi proyek web maupun konten digital.

---

## 2. Design Principles

1. **Expressive Typography as Hero Art**: Tipografi bukan sekadar teks bacaan, melainkan elemen grafis utama. Judul utama menggunakan huruf tebal (*ultra-black*) dengan rotasi per karakter yang dinamis dan teks *outline* berongga (*stroke text*) yang dipadukan dengan angka indeks mengambang (*floating index numbers*).
2. **Tactile Skeuomorphism Meets Clean Editorial Grid**: Satu elemen fisik yang realistis (seperti *lanyard ID card* yang miring alami) diletakkan berdampingan dengan *grid* multi-kolom berpemisah garis tipis (`1px`) untuk menciptakan kontras antara sentuhan personal dan kerapian profesional.
3. **Color-Blocked Visual Storytelling**: Area kanvas utama dijaga tetap netral (putih bersih dan krem hangat) agar perhatian mata langsung tertuju pada kolom-kolom vertikal berwarna kontras (*blue, warm taupe, sage green, coral red, periwinkle*) saat memamerkan karya proyek.
4. **Effortless Scannability**: Setiap informasi dikelompokkan dalam hierarki mikro yang tegas—judul seksi *uppercase*, subjudul tebal, rentang waktu berukuran kecil dengan warna redup, serta pemisah ruang putih (*whitespace*) yang lega.
5. **Interactive Delight with Purpose**: Interaksi mikro (kemiringan kartu saat *hover*, filter kategori proyek yang mulus, salin email dengan notifikasi *toast*, serta *scroll reveal*) dirancang responsif tanpa mengorbankan kecepatan muat halaman atau aksesibilitas.

---

## 3. Color System

Sistem warna menggunakan fondasi netral hangat (*Warm Alabaster / Pure White* dan *Champagne Sand*) yang dikombinasikan dengan tinta hitam pekat serta 5 warna aksen kurasi untuk kartu proyek. Seluruh pasangan warna teks dan latar telah diuji terhadap standar **WCAG 2.1**.

### Light Mode Tokens

| Nama Token | Kode HEX | Kegunaan Utama | Kontras WCAG (vs Latar) |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#FFFFFF` | Latar belakang utama halaman (*main canvas*) | — (Kanvas Dasar) |
| `--bg-secondary` | `#F9F6F0` | Latar seksi alternatif, latar kartu halus, dan area filter | — (Kanvas Sekunder) |
| `--bg-elevated` | `#FFFFFF` | Latar *Lanyard ID Card*, *navbar sticky*, dan kartu proyek | — (Elemen Melayang) |
| `--text-primary` | `#121212` | Tipografi *hero*, judul seksi, nama peran, dan teks utama | **18.7:1** (AAA terhadap `#FFFFFF`) |
| `--text-secondary` | `#4A4742` | Paragraf bio, deskripsi proyek, dan rincian pengalaman | **9.2:1** (AAA terhadap `#FFFFFF`) |
| `--text-muted` | `#78716A` | Tanggal pengalaman, label meta, dan teks sekunder kecil | **4.8:1** (AA terhadap `#FFFFFF`) |
| `--accent-sand` | `#C8A986` | Aksen dekoratif utama (`'25`, angka `01`–`05`, dekorasi *hero*) | **2.3:1** (Dekoratif / Large Display) |
| `--accent-sand-strong` | `#8C673E` | Highlight nama pada teks ("HI, I'm **Ryfaathir**"), *badge* teks, link aktif | **5.1:1** (AA terhadap `#FFFFFF`) |
| `--border-subtle` | `#E6E0D6` | Garis pemisah vertikal kolom pengalaman dan *border* kartu | — (Garis Struktur) |
| `--stroke-outline` | `#D5CDC2` | Garis *stroke* huruf berongga (`CONTENT`) | — (Tipografi Dekoratif) |
| `--strip-blue` | `#4A70AC` | Kolom Proyek 01 (*Web App / SaaS*) | **5.0:1** vs `#FFFFFF` (AA) |
| `--strip-taupe` | `#C8BCAE` | Kolom Proyek 02 (*UI/UX & Brand System*) | **7.8:1** vs `#121212` (AAA) |
| `--strip-sage` | `#8EB265` | Kolom Proyek 03 (*Mobile / IoT Interface*) | **8.4:1** vs `#121212` (AAA) |
| `--strip-coral` | `#E0534C` | Kolom Proyek 04 (*Platform / E-Commerce*) | **4.1:1** vs `#FFFFFF` (AA Large) |
| `--strip-periwinkle` | `#6B89C9` | Kolom Proyek 05 (*Digital Content & Interactive*) | **3.6:1** vs `#FFFFFF` (AA Large) |

### Dark Mode Tokens

| Nama Token | Kode HEX | Kegunaan Utama | Kontras WCAG (vs Latar) |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#0F0E0D` | Latar belakang utama halaman (*dark obsidian warm*) | — (Kanvas Dasar) |
| `--bg-secondary` | `#181614` | Latar seksi alternatif, kartu pengalaman, dan *footer* | — (Kanvas Sekunder) |
| `--bg-elevated` | `#221F1C` | Latar *Lanyard ID Card*, *navbar sticky*, dan modal/toast | — (Elemen Melayang) |
| `--text-primary` | `#F5F2EB` | Tipografi *hero*, judul seksi, dan teks utama | **16.8:1** (AAA terhadap `#0F0E0D`) |
| `--text-secondary` | `#C7C0B6` | Paragraf bio dan deskripsi proyek | **10.4:1** (AAA terhadap `#0F0E0D`) |
| `--text-muted` | `#968E83` | Tanggal pengalaman, label meta, dan keterangan kecil | **5.6:1** (AA terhadap `#0F0E0D`) |
| `--accent-sand` | `#D8B894` | Aksen dekoratif (`'26`, angka indeks `01`–`05`) | **9.8:1** (AAA terhadap `#0F0E0D`) |
| `--accent-sand-strong` | `#E2C4A2` | Highlight nama ("HI, I'm **Ryfaathir**"), link aktif, *badge* | **11.1:1** (AAA terhadap `#0F0E0D`) |
| `--border-subtle` | `#2E2A25` | Garis pemisah vertikal kolom dan *border* komponen | — (Garis Struktur) |
| `--stroke-outline` | `#3A342E` | Garis *stroke* huruf berongga (`CONTENT`) di mode gelap | — (Tipografi Dekoratif) |
| `--strip-blue` | `#3B5C92` | Kolom Proyek 01 (disesuaikan agar nyaman di mata pada mode gelap) | **6.5:1** vs `#FFFFFF` (AA) |
| `--strip-taupe` | `#9E9182` | Kolom Proyek 02 | **6.9:1** vs `#0F0E0D` (AA) |
| `--strip-sage` | `#6F9149` | Kolom Proyek 03 | **5.2:1** vs `#FFFFFF` (AA) |
| `--strip-coral` | `#C9433C` | Kolom Proyek 04 | **5.1:1** vs `#FFFFFF` (AA) |
| `--strip-periwinkle` | `#526FA8` | Kolom Proyek 05 | **5.0:1** vs `#FFFFFF` (AA) |

---

## 4. Typography

### Font Family (Google Fonts)

- **Display / Hero & Giant Numbers (`--font-display`)**: `'Syne'`, `'Plus Jakarta Sans'`, sans-serif — Digunakan untuk susunan huruf "PORTFOLIO", angka tahun `'26`, teks berongga `CONTENT`, dan angka kolom `1`–`5`. Karakter hurufnya lebar, tebal, dan ekspresif.
- **Heading & Body (`--font-sans`)**: `'Plus Jakarta Sans'`, `-apple-system`, `BlinkMacSystemFont`, sans-serif — Memiliki keterbacaan sangat tinggi untuk judul seksi (`HI, I'm Ryfaathir`, `EXPERIENCE`, `CONTACT`) dan teks paragraf.
- **Monospace / Meta (`--font-mono`)**: `'JetBrains Mono'`, monospace — Digunakan untuk tanggal masa kerja, tag teknologi, dan indeks angka kecil.

### Skala Ukuran & Aturan Tipografi

| Level / Token | Ukuran Desktop | Ukuran Mobile | Ukuran Fluid (`clamp`) | Weight | Line Height | Letter Spacing | Aturan Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (`PORTFOLIO`)** | `120px` | `52px` | `clamp(3.25rem, 10vw, 7.5rem)` | `800` | `0.9` | `-0.03em` | Huruf per-span dengan rotasi individual (`-10deg` s/d `12deg`). |
| **Outline Banner (`CONTENT`)** | `136px` | `56px` | `clamp(3.5rem, 12vw, 8.5rem)` | `800` | `0.85` | `0.02em` | *Uppercase*, transparan dengan `-webkit-text-stroke: 2px var(--stroke-outline)`. |
| **Strip Number (`1`–`5`)** | `112px` | `72px` | `clamp(4.5rem, 8vw, 7rem)` | `800` | `0.78` | `-0.04em` | Warna putih murni, rata bawah menempel pada dasar kolom warna. |
| **H1 / Intro Greeting** | `36px` | `26px` | `clamp(1.625rem, 3vw, 2.25rem)` | `700` | `1.2` | `-0.02em` | Kata sapaan warna utama, nama panggilan diberi warna `--accent-sand-strong`. |
| **H2 / Section Header** | `18px` | `16px` | `clamp(1rem, 1.4vw, 1.125rem)` | `700` | `1.3` | `0.08em` | *Uppercase* tegas (contoh: `EXPERIENCE`, `CONTACT`, `SOFTWARES`). |
| **H3 / Item Title** | `16px` | `15px` | `clamp(0.9375rem, 1.1vw, 1rem)` | `700` | `1.35` | `-0.01em` | Nama jabatan, nama proyek, atau institusi pendidikan. |
| **Body Regular** | `15px` | `14px` | `clamp(0.875rem, 1vw, 0.9375rem)` | `400` | `1.65` | `0em` | Paragraf bio dan deskripsi singkat (maksimal lebar `65ch`). |
| **Caption / Meta** | `12px` | `12px` | `0.75rem` | `500` | `1.4` | `0.04em` | Rentang tahun pengalaman (`Agu 2024 - Feb 2025`), keterangan sub-item. |

---

## 5. Spacing & Grid

### Skala Spacing (8px Base Unit dengan Sub-grid 4px)

- `--space-1`: `4px` (`0.25rem`) — Jarak antar judul jabatan dan nama instansi
- `--space-2`: `8px` (`0.5rem`) — Padding dalam *badge* / ikon kecil
- `--space-3`: `12px` (`0.75rem`) — Jarak antar *software icon* atau item kontak
- `--space-4`: `16px` (`1rem`) — Gap antar kolom strip proyek di desktop
- `--space-5`: `24px` (`1.5rem`) — Padding internal kartu & jarak antar item pengalaman
- `--space-6`: `32px` (`2rem`) — Jarak antar kolom besar pada grid *About/Resume*
- `--space-8`: `48px` (`3rem`) — Jarak vertikal antar sub-blok dalam satu seksi
- `--space-10`: `64px` (`4rem`) — Padding vertikal seksi pada layar *mobile*
- `--space-12`: `96px` (`6rem`) — Padding vertikal seksi pada layar *desktop*

### Container & Grid System

- **Max Container Width**: `1200px` (dengan padding horizontal responsif `clamp(1.25rem, 5vw, 3rem)`).
- **Grid Kolom**:
  - **Desktop (`>= 1280px` & `>= 1024px`)**:
    - Seksi *Tentang & Pengalaman*: Grid asimetris `12 kolom` — `4 kolom` untuk *Lanyard ID Card* di sisi kiri, `8 kolom` di sisi kanan yang terbagi lagi menjadi bio di bagian atas dan `3 kolom` setara (Pengalaman, Organisasi/Pendidikan, Kontak & Keahlian) dengan garis pembatas vertikal.
    - Seksi *Proyek (`CONTENT`)*: Grid `5 kolom` vertikal sama lebar (`repeat(5, minmax(0, 1fr))`) dengan `gap: 14px`.
  - **Tablet (`768px – 1023px`)**:
    - Seksi *Tentang*: *Lanyard ID Card* di atas (tengah) atau `4 kolom`, diikuti grid resume `2 kolom`.
    - Seksi *Proyek*: Grid `2` atau `3 kolom` responsif.
  - **Mobile (`360px – 767px`)**:
    - Satu kolom penuh (`1fr`), tanpa scroll horizontal (`overflow-x: hidden`), kartu proyek ditumpuk vertikal atau *grid* 1 kolom dengan orientasi *card* yang tetap mempertahankan aksen nomor besar.

---

## 6. Components

### 6.1. Sticky Navbar
- **Struktur**: Logo inisial + nama (`RR.` / `RYFAATHIR`), daftar tautan navigasi (`Beranda`, `Tentang`, `Keahlian`, `Proyek`, `Pengalaman`, `Pendidikan`, `Kontak`), tombol *toggle Dark/Light Mode*, dan tombol *hamburger* pada *mobile*.
- **States**:
  - `Default`: Latar semi-transparan dengan `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--border-subtle)`.
  - `Hover`: Teks tautan berubah warna menjadi `--accent-sand-strong` dengan garis bawah animasi dari kiri ke kanan.
  - `Focus`: *Outline* `2px solid var(--accent-sand-strong)` dengan `outline-offset: 4px`.
  - `Active (Scroll Spy)`: Indikator titik warna pasir (`--accent-sand-strong`) dan `font-weight: 700`.
  - `Disabled`: Opasitas `0.4`, `pointer-events: none`.

### 6.2. Tombol (Buttons & Filter Pills)
- **Varian**:
  - *Primary CTA*: Latar `--text-primary`, teks `--bg-primary`, sudut `9999px` (*pill*) atau `10px`.
  - *Secondary / Outline*: Latar transparan, *border* `1.5px solid var(--border-subtle)`, teks `--text-primary`.
  - *Filter Pill*: Tombol filter kategori proyek (`Semua`, `Web Development`, `UI/UX Design`, `Digital Content`).
- **States**:
  - `Default`: Transisi halus `200ms cubic-bezier(0.22, 1, 0.36, 1)`.
  - `Hover`: `transform: translateY(-2px)`, bayangan lembut `0 8px 20px rgba(0,0,0,0.08)`, warna latar *filter pill* berubah ke `--bg-secondary`.
  - `Focus`: Ring fokus `2px solid var(--accent-sand-strong)` (`outline-offset: 2px`).
  - `Active / Selected`: Latar `--text-primary`, teks `--bg-primary`, `transform: translateY(0)`.
  - `Disabled`: Opasitas `0.45`, kursor `not-allowed`.

### 6.3. Lanyard ID Card (Komponen Signature)
- **Struktur**: Tali *lanyard* pita putih berbayang halus (SVG), pengait logam (*metal clasp*), dan *holder* kartu plastik transparan (`backdrop-filter`, *gloss highlight*) berisi foto profil, nama singkat, NIM/status mahasiswa, dan *barcode* dekoratif.
- **States**:
  - `Default`: Miring `-5deg` (`transform: rotate(-5deg)`) dengan efek bayangan berlapis (`0 20px 40px rgba(18,18,18,0.12)`).
  - `Hover`: Berayun lembut ke `-1.5deg` (`transform: rotate(-1.5deg) translateY(-4px)`).
  - `Focus`: Ring fokus jelas apabila difokuskan dengan papan ketik.

### 6.4. Kartu Proyek (Vertical Color-Blocked Strip Card)
- **Struktur**:
  1. **Strip Berwarna (`height: 360px` di desktop)**: Latar warna spesifik (`--strip-blue`, `--strip-taupe`, `--strip-sage`, `--strip-coral`, `--strip-periwinkle`), berisi *mockup* perangkat (Smartphone/Laptop/Tablet dengan SVG *screen preview*) di tengah dan angka putih raksasa (`1`–`5`) yang terpotong rapi di tepi bawah.
  2. **Meta Keterangan di Bawah Strip**: Kategori *tag* kecil, judul proyek huruf kapital tebal (`SANORA` / nama proyek), deskripsi singkat 2–3 baris, dan tautan aksi (`Lihat Detail / Demo →`).
- **States**:
  - `Default`: *Mockup* perangkat miring sesuai komposisi referensi, angka putih di dasar kolom.
  - `Hover`: *Mockup* perangkat terangkat (`transform: translateY(-8px) scale(1.03) rotate(-2deg)`), angka raksasa bergeser halus, dan *border* bawah keterangan menyala.
  - `Focus`: Seluruh kartu memiliki `outline: 2px solid var(--accent-sand-strong)`.
  - `Active`: `transform: scale(0.99)`.
  - `Filtered Out (Hidden)`: Animasi `opacity: 0; transform: scale(0.95)` lalu `display: none`.

### 6.5. Badge / Tag & Software Icons
- **Software Icon Box**: Kotak persegi `36px × 36px` (`border-radius: 6px`) dengan warna identitas tiap *tool* (`VS Code`, `React/Next`, `Tailwind`, `Figma`, `Node.js`, `Premiere/Canva`) lengkap dengan *tooltip* saat *hover*.
- **Contact Icon Badge**: Kotak `28px × 28px` berisi ikon GitHub, LinkedIn, Behance/Instagram, dan Email di sebelah tautan teks.

### 6.6. Form & Tombol Salin Email + Toast
- **Struktur**: Kartu kontak interaktif dengan tombol **"Salin Email"** sekali klik (dilengkapi ikon salin), daftar kontak langsung, serta formulir pesan cepat (Nama, Email, Kategori Kolaborasi, Pesan).
- **States Input & Tombol**:
  - `Default`: *Border* `1px solid var(--border-subtle)`, latar `--bg-primary`.
  - `Hover`: *Border* berubah menjadi `--accent-sand`.
  - `Focus`: *Border* `1.5px solid var(--accent-sand-strong)`, `box-shadow: 0 0 0 3px rgba(200, 169, 134, 0.2)`.
  - `Active (Copy Triggered)`: Menampilkan *toast notification* melayang di pojok kanan bawah (`"Alamat email berhasil disalin ke clipboard!"`).
  - `Disabled`: Opasitas `0.5`, kursor `not-allowed`.

### 6.7. Footer
- **Struktur**: Baris penutup bersih dengan tanda tangan tipografi `RYFAATHIR RAHMAN '26`, navigasi cepat, status ketersediaan kolaborasi (*Open for Internship & Freelance Projects*), dan tombol kembali ke atas (*Back to Top*).

---

## 7. Layout Per Section (ASCII Wireframe)

### 7.1. Hero Section (`#beranda`)
```text
+-------------------------------------------------------------------------+
| [RR. Ryfaathir]     Beranda Tentang Keahlian Proyek Kontak   [☀️/🌙]    |
+-------------------------------------------------------------------------+
|                                                      '26 (Sand Accent)  |
|           [P]   [R]   [T]  [f]       [i]                                |
|              [O]          [O] [L] [o]     <-- Tilted Bouncy Letters     |
|        RYFAATHIR RAHMAN                   +--- Overlapping Avatar       |
|                                           v                             |
|                        .---------------------.                          |
|                       |   (Ilustrasi Avatar   |                         |
|                       |    Blazer Krem &      |                         |
|                       |    Kemeja Putih)      |                         |
|                        '---------------------'                          |
|         [ Lihat Karya (05) ↓ ]          [ Salin Email ⎘ ]               |
+-------------------------------------------------------------------------+
```

### 7.2. Tentang & Ringkasan Profil (`#tentang`)
```text
+-------------------------------------------------------------------------+
|      ( )  <-- Tali Lanyard     |  HI, I'm Ryfaathir                     |
|      / \                       |  Mahasiswa Teknik Informatika yang     |
|   .-------.                    |  memadukan rekayasa Web Development    |
|  | [FOTO]  | <-- Kartu ID      |  & estetika Digital Content...         |
|  | Ryfaath.|     Miring -5deg  |  ------------------------------------- |
|  | TI '26  |                   |  FOKUS UTAMA   | DOMISILI  | STATUS    |
|   '-------'                    |  Full-Stack &  | Indonesia | Tersedia  |
|                                |  Visual Content|           | Kolaborasi|
+-------------------------------------------------------------------------+
```

### 7.3. Pengalaman, Pendidikan & Keahlian Editorial Grid (`#pengalaman`, `#pendidikan`, `#keahlian`)
```text
+-------------------------------------------------------------------------+
| PENGALAMAN            | ORGANISASI & PENDIDIKAN | KONTAK & KEAHLIAN     |
| --------------------- | ----------------------- | --------------------- |
| Frontend Web Intern   | S1 Teknik Informatika   | [GH] github.com/...   |
| Studio Digital Nusantara| Universitas (Placeholder)| [in] linkedin.com/... |
| Agu 2025 - Feb 2026   | 2023 - Sekarang         | [Be] behance.net/...  |
|                       |                         | [M]  ryfaathir@...    |
| Lead Digital Content  | Kepala Divisi Media & IT|                       |
| Himpunan Mahasiswa TI | HMIF Kampus             | SOFTWARES & STACK     |
| Jun 2024 - Agu 2025   | 2024 - 2025             | [JS][TS][Tw][Fg][Pr]  |
|                       |                         |                       |
| Freelance Web Dev     | Asisten Laboratorium Web|                       |
| 2023 - Sekarang       | 2024 - Sekarang         |                       |
+-------------------------------------------------------------------------+
```

### 7.4. Proyek Unggulan (`#proyek`)
```text
+-------------------------------------------------------------------------+
|                           03                   05                       |
|            01     _   _  _____  _____  _   _  _____                     |
|          / ___| / _ \| \ | ||_   _|| ____|| \ | ||_   _|                |
|         | |    | | | |  \| |  | |  |  _|  |  \| |  | |                  |
|          \____| \___/|_| \_|  |_|  |_____||_| \_|  |_|                  |
|                   02                   04                               |
|                                                                         |
|     [ Semua (5) ] [ Web Dev (3) ] [ UI/UX (1) ] [ Digital Content (1) ] |
|                                                                         |
|  +-----------+  +-----------+  +-----------+  +-----------+  +--------+ |
|  |  (Blue)   |  |  (Taupe)  |  |  (Sage)   |  |  (Coral)  |  |(Periw.)| |
|  |  [Phone]  |  |  [Tablet] |  |  [Phones] |  | [Laptop]  |  | [Phone]| |
|  |  [Phone]  |  |  [Phone]  |  |   Tilted  |  |  Mockup   |  | [Phone]| |
|  |           |  |           |  |           |  |           |  |        | |
|  |     1     |  |     2     |  |     3     |  |     4     |  |    5   | |
|  +-----------+  +-----------+  +-----------+  +-----------+  +--------+ |
|  SANORA WEB     KAMPUS FLOW    AGRI TRACK     KREATIF HUB    BALANCIFY  |
|  E-Commerce &   Sistem Manajemen Aplikasi IoT  Redesign Web   Platform   |
|  Katalog Brand  Akademik & Lab  & Monitoring  Agensi Konten  Produktiv. |
+-------------------------------------------------------------------------+
```

### 7.5. Kontak & Footer (`#kontak`)
```text
+-------------------------------------------------------------------------+
| MARI BERKOLABORASI                                                      |
| +---------------------------------+ +---------------------------------+ |
| | Info Kontak Langsung            | | Kirim Pesan Cepat               | |
| | Email: ryfaathir.rahman@...     | | [ Nama Lengkap                ] | |
| | [ Salin Email ] [ Unduh CV ]    | | [ Alamat Email                ] | |
| | Lokasi: Indonesia               | | [ Pesan Kolaborasi...         ] | |
| | Respons rata-rata < 24 jam      | | [ Kirim Pesan →               ] | |
| +---------------------------------+ +---------------------------------+ |
+-------------------------------------------------------------------------+
| © 2026 Ryfaathir Rahman. Dibuat dengan sistem desain Editorial.   [ ↑ ] |
+-------------------------------------------------------------------------+
```

---

## 8. Motion & Interaction

| Elemen / Interaksi | Trigger | Properti Animasi | Durasi | Easing |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Letters Hover** | `mouseenter` pada huruf `PORTFOLIO` | `transform: translateY(-6px) rotate(var(--hover-rot))` | `300ms` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| **Lanyard Swing** | `mouseenter` pada kartu ID | `transform: rotate(-1.5deg) translateY(-4px)` | `450ms` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| **Scroll Reveal** | `IntersectionObserver` (`threshold: 0.12`) | `opacity: 0 -> 1`, `transform: translateY(24px) -> translateY(0)` | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Project Strip Mockup** | `mouseenter` pada strip proyek | Mockup `translateY(-10px) scale(1.04)`, angka bawah `translateY(-4px)` | `350ms` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| **Category Filter** | `click` pada tombol filter | Kartu yang cocok `fade-in + scale(1)`, lainnya disembunyikan | `280ms` | `ease-out` |
| **Toast Notification** | `click` tombol Salin Email / Form | `transform: translateY(20px) -> translateY(0)`, `opacity: 0 -> 1` | `250ms` | `cubic-bezier(0.22, 1, 0.36, 1)` |

### Aturan `prefers-reduced-motion`
Apabila pengguna mengaktifkan pengaturan kurangi gerakan (`@media (prefers-reduced-motion: reduce)`):
- Semua animasi `transform` dan `transition` dinonaktifkan (`transition-duration: 0.01ms !important; animation-duration: 0.01ms !important`).
- Elemen `.reveal` langsung ditampilkan (`opacity: 1; transform: none`) tanpa menunggu *scroll trigger*.
- Perilaku `scroll-behavior: smooth` dikembalikan ke `auto`.

---

## 9. Accessibility Checklist

- [x] **Kontras Warna WCAG AA/AAA**: Teks utama (`#121212` di atas `#FFFFFF`) mencapai rasio `18.7:1`. Teks aksen nama menggunakan `--accent-sand-strong` (`#8C673E`) dengan rasio `5.1:1` agar tetap terbaca jelas, sementara warna krem muda (`#C8A986`) khusus dipakai untuk elemen *display* berukuran raksasa (`'26`, angka dekoratif `01`–`05`).
- [x] **Navigasi Keyboard & Focus Ring**: Seluruh tautan, tombol filter, tombol salin email, dan input formulir memiliki `:focus-visible` *ring* kontras tinggi (`2px solid var(--accent-sand-strong)`).
- [x] **Atribut Semantik & Alt Text**: Menggunakan landmark HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), atribut `aria-label` pada tombol ikon, serta `role="status"` dan `aria-live="polite"` pada *toast notification*.
- [x] **Hierarki Heading Berurutan**: Satu `<h1>` utama pada bagian perkenalan, diikuti `<h2>` untuk setiap seksi utama, dan `<h3>` untuk setiap item proyek/pengalaman/pendidikan.
- [x] **Ukuran Target Sentuh Minimal 44×44px**: Tombol menu *mobile*, tombol *toggle* tema, tombol kembali ke atas, dan *pill* filter memiliki area sentuh minimal `44px × 44px`.

---

## 10. Responsive Rules

| Breakpoint | Lebar Layar | Perubahan Tata Letak & Tipografi |
| :--- | :--- | :--- |
| **Mobile** | `360px – 767px` | Navigasi beralih ke tombol *hamburger* dengan *drawer* vertikal; huruf `PORTFOLIO` diskalakan menggunakan `clamp()` agar muat dalam 1 baris tanpa memotong layar; *Lanyard ID Card* berada di tengah atas sebelum teks perkenalan; kolom Pengalaman/Pendidikan/Kontak ditumpuk `1 kolom` dengan garis pemisah horizontal; 5 strip proyek disusun `1 kolom` (atau `2 kolom` pada layar `>=540px`) dengan tinggi strip `260px`. |
| **Tablet** | `768px – 1023px` | Seksi *Tentang* menggunakan *grid* 2 kolom di bagian atas (*Lanyard Card* di kiri, Bio di kanan) dan *grid* 2–3 kolom untuk Pengalaman, Pendidikan, dan Kontak di bawahnya; seksi Proyek menggunakan *grid* `3 kolom` pada baris pertama dan `2 kolom` pada baris kedua. |
| **Desktop** | `>= 1280px` (`1024px+`) | Tata letak penuh sesuai komposisi poster referensi: *Hero* besar di tengah dengan ilustrasi *overlap*; *Lanyard ID Card* miring di kolom kiri berdampingan dengan blok Bio dan 3 kolom resume berpemisah garis vertikal di kanan; *banner* `CONTENT` berongga penuh dan 5 kolom vertikal proyek sejajar dalam satu baris (`repeat(5, 1fr)`). |

---

## 11. Asset List

Daftar aset visual yang disiapkan untuk menggantikan *placeholder* saat menuju produksi penuh:

| Nama Aset | Path Lokal yang Disarankan | Dimensi Ideal | Format | Keterangan Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| **Ilustrasi / Foto Cutout Hero** | `assets/img/hero-avatar.webp` | `800 × 900 px` | `WebP` / `PNG` (Transparan) | Foto setengah badan atau ilustrasi vektor diri dengan latar belakang transparan untuk menumpuk huruf `PORTFOLIO`. |
| **Foto Lanyard ID Card** | `assets/img/lanyard-photo.webp` | `600 × 800 px` (Rasio `3:4`) | `WebP` / `JPG` | Foto potret kasual/semi-formal di luar ruangan dengan *tone* hangat untuk dimasukkan ke dalam *holder* kartu ID. |
| **Mockup Proyek 01** | `assets/img/project-01.webp` | `600 × 750 px` | `WebP` / `PNG` (Transparan) | *Mockup* tampilan aplikasi web/mobile untuk kolom biru (`#4A70AC`). |
| **Mockup Proyek 02** | `assets/img/project-02.webp` | `600 × 750 px` | `WebP` / `PNG` (Transparan) | *Mockup* tablet + ponsel miring untuk kolom krem/taupe (`#C8BCAE`). |
| **Mockup Proyek 03** | `assets/img/project-03.webp` | `600 × 750 px` | `WebP` / `PNG` (Transparan) | *Mockup* dua layar ponsel isometrik untuk kolom hijau sage (`#8EB265`). |
| **Mockup Proyek 04** | `assets/img/project-04.webp` | `600 × 750 px` | `WebP` / `PNG` (Transparan) | *Mockup* laptop terbuka miring untuk kolom merah koral (`#E0534C`). |
| **Mockup Proyek 05** | `assets/img/project-05.webp` | `600 × 750 px` | `WebP` / `PNG` (Transparan) | *Mockup* dua ponsel minimalis untuk kolom biru periwinkle (`#6B89C9`). |
| **Ikon Keahlian / Software** | Inline `SVG` / `assets/icons/*.svg` | `36 × 36 px` | `SVG` | Ikon VS Code, React, Next.js, Tailwind CSS, Figma, dan Adobe Premiere/Canva. |

---

## 12. Design Tokens (CSS Variables)

```css
:root {
  /* Colors - Light Mode (Default Editorial Canvas) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9F6F0;
  --bg-elevated: #FFFFFF;
  --bg-glass: rgba(255, 255, 255, 0.86);

  --text-primary: #121212;
  --text-secondary: #4A4742;
  --text-muted: #78716A;

  --accent-sand: #C8A986;
  --accent-sand-strong: #8C673E;
  --accent-sand-soft: rgba(200, 169, 134, 0.16);

  --border-subtle: #E6E0D6;
  --stroke-outline: #D5CDC2;

  /* Signature 5-Column Project Strip Palette */
  --strip-blue: #4A70AC;
  --strip-taupe: #C8BCAE;
  --strip-sage: #8EB265;
  --strip-coral: #E0534C;
  --strip-periwinkle: #6B89C9;

  /* Typography */
  --font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Fluid Type Scale */
  --text-hero: clamp(3.25rem, 10vw, 7.5rem);
  --text-banner-outline: clamp(3.5rem, 12vw, 8.5rem);
  --text-strip-num: clamp(4.5rem, 8vw, 7rem);
  --text-h1: clamp(1.625rem, 3vw, 2.25rem);
  --text-h2: clamp(1rem, 1.4vw, 1.125rem);
  --text-h3: clamp(0.9375rem, 1.1vw, 1rem);
  --text-body: clamp(0.875rem, 1vw, 0.9375rem);
  --text-caption: 0.75rem;

  /* Spacing Scale */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-8: 3rem;     /* 48px */
  --space-10: 4rem;    /* 64px */
  --space-12: 6rem;    /* 96px */

  /* Layout & Radius */
  --container-max: 1200px;
  --container-pad: clamp(1.25rem, 5vw, 3rem);
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;

  /* Shadows & Transitions */
  --shadow-lanyard: 0 22px 44px -10px rgba(18, 18, 18, 0.16), 0 4px 12px rgba(18, 18, 18, 0.08);
  --shadow-card: 0 12px 30px -8px rgba(18, 18, 18, 0.08);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

[data-theme="dark"] {
  --bg-primary: #0F0E0D;
  --bg-secondary: #181614;
  --bg-elevated: #221F1C;
  --bg-glass: rgba(15, 14, 13, 0.86);

  --text-primary: #F5F2EB;
  --text-secondary: #C7C0B6;
  --text-muted: #968E83;

  --accent-sand: #D8B894;
  --accent-sand-strong: #E2C4A2;
  --accent-sand-soft: rgba(216, 184, 148, 0.14);

  --border-subtle: #2E2A25;
  --stroke-outline: #3A342E;

  --strip-blue: #3B5C92;
  --strip-taupe: #9E9182;
  --strip-sage: #6F9149;
  --strip-coral: #C9433C;
  --strip-periwinkle: #526FA8;

  --shadow-lanyard: 0 24px 48px -10px rgba(0, 0, 0, 0.55), 0 4px 14px rgba(0, 0, 0, 0.4);
  --shadow-card: 0 14px 32px -8px rgba(0, 0, 0, 0.45);
}
```
