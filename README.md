# 💍 WeddingDreams — Azzahra Wedding Organizer Website

Website promosi, katalog paket pernikahan, dan sistem pemesanan/konsultasi berbasis web interaktif untuk **WeddingDreams / Azzahra Wedding Organizer**. Proyek ini dibangun menggunakan **Semantic HTML5**, **Vanilla Modern CSS3 (Luxury Design System)**, dan **Vanilla JavaScript (ES6+)** tanpa *framework* eksternal, menghasilkan performa yang sangat cepat, ringan, responsif, dan elegan.

---

## 📑 Daftar Isi

- [💍 WeddingDreams — Azzahra Wedding Organizer Website](#-weddingdreams--azzahra-wedding-organizer-website)
  - [📑 Daftar Isi](#-daftar-isi)
  - [✨ Gambaran Umum Proyek](#-gambaran-umum-proyek)
  - [🌟 Fitur-Fitur Utama](#-fitur-fitur-utama)
  - [📂 Struktur Direktori Proyek](#-struktur-direktori-proyek)
  - [📄 Arsitektur Halaman Web (HTML)](#-arsitektur-halaman-web-html)
    - [1. `index.html` (Landing Page Utama)](#1-indexhtml-landing-page-utama)
    - [2. Halaman Detail Paket Spesifik](#2-halaman-detail-paket-spesifik)
    - [3. `detail-paket.html` (Template Detail Fleksibel)](#3-detail-pakethtml-template-detail-fleksibel)
  - [🎨 Bedah Sistem Desain \& Styling (`css/style.css`)](#-bedah-sistem-desain--styling-cssstylecss)
    - [Palet Warna \& Variabel CSS (`:root`)](#palet-warna--variabel-css-root)
    - [Tipografi \& Font Eksternal](#tipografi--font-eksternal)
    - [Komponen UI Unggulan](#komponen-ui-unggulan)
    - [Responsivitas (Media Queries)](#responsivitas-media-queries)
  - [⚙️ Bedah Logika Interaktif (`js/script.js`)](#️-bedah-logika-interaktif-jsscriptjs)
    - [Rincian Modul \& Fungsi JavaScript](#rincian-modul--fungsi-javascript)
  - [📲 Integrasi WhatsApp API](#-integrasi-whatsapp-api)
    - [Format Pesan Modal Konsultasi Gratis](#format-pesan-modal-konsultasi-gratis)
    - [Format Pesan Form Pemesanan Paket (Halaman Detail)](#format-pesan-form-pemesanan-paket-halaman-detail)
  - [🚀 Cara Menjalankan Proyek](#-cara-menjalankan-proyek)
  - [🔧 Panduan Kustomisasi \& Konfigurasi](#-panduan-kustomisasi--konfigurasi)
  - [👨‍💻 Pengembang \& Hak Cipta](#-pengembang--hak-cipta)

---

## ✨ Gambaran Umum Proyek

**WeddingDreams** (*Azzahra Wedding Organizer*) menghadirkan solusi digital lengkap bagi calon pengantin untuk menelusuri portofolio pernikahan, membandingkan fasilitas paket pernikahan, melihat dokumentasi visual beresolusi tinggi, hingga berkonsultasi dan memesan paket secara instan melalui aplikasi WhatsApp.

Website ini mengusung tema **Luxury & Royal Wedding**, memadukan aksen warna emas (*gold gradient*), permukaan gelap bertingkat (*dark obsidian surface*), dan latar belakang *cream* lembut bernuansa hangat yang ramah mata.

---

## 🌟 Fitur-Fitur Utama

1. **Luxury Responsive Design**: Tampilan optimal di semua perangkat (Desktop, Laptop, Tablet, hingga Smartphone) dengan estetika premium.
2. **Dynamic Sticky Navbar**: Navigasi yang otomatis berubah tampilan (*blur background* & *shadow*) saat digulir serta mendeteksi section yang sedang aktif (*scroll spy*).
3. **Mobile Drawer Navigation**: Menu samping (*off-canvas drawer*) khusus layar ponsel dengan animasi halus dan latar belakang *backdrop blur*.
4. **Interactive Modal Suite**:
   - **Modal Konsultasi Gratis**: Formulir lengkap untuk menjadwalkan konsultasi dengan integrasi otomatis ke WhatsApp admin.
   - **Modal Rincian Paket**: Pop-up interaktif berbasis data JSON lokal (`packageData`) untuk menampilkan detail fasilitas paket tanpa perlu pindah halaman.
   - **Modal Kunjungan Kantor**: Informasi alamat fisik, jam operasional, tautan Google Maps langsung, dan tombol reservasi.
   - **Modal Lightbox Galeri**: Penampil gambar *fullscreen* dengan *caption* judul dan deskripsi dokumentasi acara.
5. **Direct WhatsApp Integration**:
   - Otomatis merangkum input pengguna (Nama, Nomor WA, Pilihan Paket, Tanggal Acara, Catatan Konsep).
   - Menggunakan sanitasi dan penyandian URL aman via `encodeURIComponent()`.
   - Mengarahkan langsung ke WhatsApp Web / aplikasi WhatsApp via `window.open()`.
6. **Toast Notification System**: Pop-up notifikasi mini yang muncul otomatis setelah aksi tertentu (seperti pengiriman form atau newsletter) dengan *auto-dismiss* selama 4 detik.
7. **Floating Quick WhatsApp Button**: Tombol melayang (*sticky action button*) di pojok kanan bawah halaman untuk mempermudah calon pengantin menghubungi admin kapan saja.
8. **Keyboard Accessibility**: Penutupan seluruh modal interaktif dapat dilakukan secara cepat menggunakan tombol keyboard `Escape` (`Esc`).

---

## 📂 Struktur Direktori Proyek

```
Web Wedding/
│
├── assets/
│   └── images/
│       ├── about.jpg            # Foto profil / filosofi tentang Azzahra WO
│       ├── detail_hero.jpg      # Banner foto hero halaman detail paket
│       ├── gallery_1.jpg        # Dokumentasi pernikahan Adat Tradisional Modern
│       ├── gallery_2.jpg        # Dokumentasi pernikahan Grand Ballroom Gala
│       ├── gallery_3.jpg        # Dokumentasi pernikahan Romantic Garden Ceremony
│       ├── hero.jpg             # Foto utama hero section halaman depan
│       ├── pkg_hemat.jpg        # Thumbnail & cover Paket Hemat (Intimate)
│       ├── pkg_silver.jpg       # Thumbnail & cover Paket Silver (Modern Garden)
│       ├── pkg_gold.jpg         # Thumbnail & cover Paket Gold (Grand Ballroom)
│       └── pkg_platinum.jpg     # Thumbnail & cover Paket Platinum (Royal Bespoke)
│
├── css/
│   └── style.css                # Seluruh styling, CSS variables, layout, & animasi (2.200+ baris)
│
├── js/
│   └── script.js                # Seluruh logika interaktif, modal, WhatsApp API, & scroll effects
│
├── index.html                   # Halaman beranda utama (Landing Page)
├── detail-paket.html            # Halaman template detail paket umum & formulir booking
├── paket-hemat.html             # Halaman detail khusus: Paket Hemat (Rp 25 Juta)
├── paket-silver.html            # Halaman detail khusus: Paket Silver (Rp 45 Juta)
├── paket-gold.html              # Halaman detail khusus: Paket Gold (Rp 85 Juta - Featured)
├── paket-platinum.html          # Halaman detail khusus: Paket Platinum (Rp 150 Juta - VIP)
└── README.md                    # Dokumentasi lengkap proyek
```

---

## 📄 Arsitektur Halaman Web (HTML)

### 1. `index.html` (Landing Page Utama)
Merupakan pusat informasi dan etalase utama yang terdiri dari 8 seksi utama:
- **Header & Navbar**: Logo `WEDDINGDREAMS` (*Azzahra Wedding*), tautan navigasi (`#home`, `#tentang`, `#paket`, `#galeri`, `#testimoni`), tombol CTA konsultasi, serta hamburger menu mobile.
- **Hero Section**: Tagline *"The Beginning of Forever"*, judul besar, deskripsi filosofi, tombol *Lihat Paket*, tombol *Konsultasi Gratis*, dan indikator animasi *scroll down*.
- **Tentang Kami (About Section)**: Cerita singkat WO, komitmen profesionalisme, *checklist* keunggulan layanan, serta statistik pencapaian (500+ pernikahan, 99% kepuasan, 8+ tahun pengalaman).
- **Pilihan Paket Pernikahan (Pricing Cards)**: 4 kartu paket representatif (Hemat, Silver, Gold, Platinum) dengan *badge* harga, highlight fasilitas, serta tombol detail.
- **Galeri Dokumentasi**: Grid portofolio visual dengan efek hover kartu dan tombol *preview* yang memicu Lightbox Modal.
- **Testimoni Klien**: Ulasan asli dari pasangan pengantin yang telah menggunakan jasa Azzahra WO lengkap dengan rating bintang emas.
- **Call to Action (CTA Banner)**: Ajakan penutup dengan latar visual megah untuk segera mengamankan tanggal pernikahan impian.
- **Footer**: Identitas jenama, tautan cepat, jam operasional, kontak, peta mini lokasi, formulir *newsletter* promo, serta hak cipta.
- **4 Modal Dialog**: `consultModal`, `packageDetailModal`, `officeModal`, dan `lightboxModal`.
- **Floating WhatsApp Button & Toast Container**.

### 2. Halaman Detail Paket Spesifik
- **`paket-hemat.html`**: Halaman lengkap Paket Hemat (mulai Rp 25.000.000) untuk *Intimate Wedding* (100–150 tamu).
- **`paket-silver.html`**: Halaman lengkap Paket Silver (mulai Rp 45.000.000) untuk *Modern & Garden Ceremony* (250–350 tamu).
- **`paket-gold.html`**: Halaman lengkap Paket Gold (mulai Rp 85.000.000) untuk *Grand Ballroom Luxury* (500–800 tamu). Menampilkan *ribbon* **POPULER**.
- **`paket-platinum.html`**: Halaman lengkap Paket Platinum (mulai Rp 150.000.000) untuk *Royal Bespoke Masterpiece* (1000+ tamu / VIP Gala).

*Setiap halaman detail memiliki layout 2 kolom asimetris:*
- **Kolom Kiri**: Hero visual, overview paket, breakdown fasilitas terperinci (Dekorasi, WO, MC, Dokumentasi, Rias Busana, Sound/Lighting), dan catatan penting.
- **Kolom Kanan (Sticky Sidebar)**: Formulir konsultasi & booking langsung (*Booking Form*) yang tetap terlihat saat halaman digulir.

### 3. `detail-paket.html` (Template Detail Fleksibel)
Halaman serbaguna yang dapat digunakan untuk menampilkan rincian paket umum atau kustomisasi khusus (*bespoke*).

---

## 🎨 Bedah Sistem Desain & Styling (`css/style.css`)

Stylesheet disusun secara terstruktur dengan lebih dari **2.200 baris kode** yang mencakup sistem token warna, tipografi berjenjang, dan *layouting* modern.

### Palet Warna & Variabel CSS (`:root`)
```css
:root {
  /* Dark Obsidian Surface */
  --bg-dark: #0c0b0e;
  --bg-dark-surface: #141318;
  --bg-dark-card: #1a1921;
  --bg-dark-border: rgba(212, 175, 55, 0.25);

  /* Light & Warm Cream Surface */
  --bg-cream: #FAF7F2;
  --bg-cream-alt: #F3EFE9;
  --bg-white: #FFFFFF;

  /* Royal Gold Palette */
  --gold-primary: #D4AF37;
  --gold-hover: #c19c28;
  --gold-light: #F7E7B4;
  --gold-dark: #8F721A;
  --gold-gradient: linear-gradient(135deg, #F3E29F 0%, #D4AF37 50%, #AA820A 100%);
  --gold-subtle: rgba(212, 175, 55, 0.12);
  --gold-glow: rgba(212, 175, 55, 0.35);

  /* Typography Colors */
  --text-dark: #1E1B18;
  --text-dark-body: #57524A;
  --text-light: #FFFFFF;
  --text-light-muted: #D1CBC3;
  --text-gold: #D4AF37;

  /* Official WhatsApp Green */
  --wa-green: #25D366;
  --wa-green-hover: #1eaa4f;

  /* Shadows & Curves */
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.12);
  --shadow-gold: 0 8px 25px rgba(212, 175, 55, 0.3);
  --transition-smooth: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
}
```

### Tipografi & Font Eksternal
Diimpor secara langsung dari **Google Fonts**:
- **Cinzel**: Digunakan untuk elemen logo, subjudul, dan aksen bernuansa monarki Romawi/klasik.
- **Playfair Display**: Huruf berkait (*serif*) elegan untuk judul seksi (*headings*), nama paket, dan kutipan testimonial.
- **Alex Brush**: Huruf sambung kaligrafi (*cursive script*) untuk aksen romantis pada sub-judul dan dekorasi teks.
- **Plus Jakarta Sans**: Huruf sans-serif modern berdaya baca tinggi (*high legibility*) untuk seluruh paragraf, formulir, dan tombol.

### Komponen UI Unggulan
- **Glassmorphism Navbar**: Menggunakan `backdrop-filter: blur(12px)` saat berstatus `.scrolled`.
- **Card Hover Effects**: Transformasi halus `translateY(-8px)` dipadukan dengan *shadow gold glow*.
- **Package Ribbon**: Pita penanda "POPULER" dengan efek diagonal di sudut kanan atas kartu featured.
- **Modal Backdrop & Animation**: Lapisan gelap semi-transparan dengan animasi transisi *fade-in* dan *zoom scale* pada kartu modal.
- **Sticky Sidebar Booking**: Posisi form yang lengket (*sticky*) pada saat user menelusuri detail fasilitas paket pernikahan.

### Responsivitas (Media Queries)
- **Desktop Besar (> 1200px)**: Grid maksimal, container 1240px.
- **Laptop / Tablet Horizontal (992px – 1199px)**: Penyesuaian padding dan kartu paket 3-4 kolom.
- **Tablet Vertikal (768px – 991px)**: Transisi navbar ke tombol hamburger, penyesuaian grid paket menjadi 2 kolom, dan layout detail menjadi 1 kolom vertikal.
- **Mobile Handset (< 767px)**: Drawer navigasi penuh, tombol ramah sentuhan (*touch-friendly*), penyesuaian ukuran font agar tetap nyaman dibaca.

---

## ⚙️ Bedah Logika Interaktif (`js/script.js`)

File `script.js` adalah inti dari fungsionalitas interaktif web. Seluruh fungsi ditulis menggunakan JavaScript murni yang terstruktur ke dalam 10 bagian:

### Rincian Modul & Fungsi JavaScript

| No | Nama Fungsi | Deskripsi & Tugas |
|---|---|---|
| **1** | `initNavbarScroll()` | Memantau `window.scrollY`. Menambahkan kelas `.scrolled` pada navbar saat posisi scroll melebihi 50px untuk memicu efek background glassmorphism. |
| **2** | `initActiveNavLink()` | Menghitung koordinat vertikal setiap section (`#home`, `#tentang`, `#paket`, dll.) dan secara dinamis menambahkan kelas `.active` pada menu navigasi yang relevan saat pengguna menggulir halaman. |
| **3** | `initMobileMenu()` & `closeMobileMenu()` | Mengatur pembukaan dan penutupan *drawer menu* navigasi mobile beserta latar belakang gelap (`#drawerBackdrop`), serta mengunci scroll halaman saat menu terbuka. |
| **4** | `openConsultModal()` & `closeConsultModal()` | Menampilkan dan menyembunyikan modal popup "Jadwalkan Konsultasi Gratis". Mengontrol `overflow` pada elemen `body`. |
| **5** | `initConsultForm()` | Memastikan form konsultasi terhubung dengan event listener `submit` secara aman tanpa menimbulkan eksekusi ganda. |
| **6** | `handleConsultSubmit(e)` | Menangani pengiriman formulir modal konsultasi: mencegah reload (`e.preventDefault()`), menangkap 5 elemen input, menyusun string pesan rapi, melakukan `encodeURIComponent()`, dan membuka WhatsApp di tab baru (`window.open`). |
| **7** | `openPackageDetail(pkgKey)` & `closePackageModal()` | Mengambil data paket dari objek JavaScript `packageData` (`hemat`, `silver`, `gold`, `platinum`), menyusun markup HTML fasilitas secara dinamis, dan menampilkannya di dalam modal popup. |
| **8** | `openConsultWithPackage(packageName)` | Menjembatani pemilihan paket: membuka modal konsultasi sekaligus memilih dropdown paket yang sesuai secara otomatis. |
| **9** | `openOfficeModal()` & `closeOfficeModal()` | Mengontrol pembukaan dan penutupan modal reservasi kunjungan kantor dan alamat fisik. |
| **10**| `openLightbox(src, title, desc)` & `closeLightbox(e)` | Menampilkan gambar galeri resolusi penuh di dalam Lightbox Modal beserta judul dan deskripsi fotonya. |
| **11**| `handleNewsletterSubmit(e)` | Mencegah reload halaman saat form newsletter di footer dikirim, lalu menampilkan konfirmasi melalui sistem Toast. |
| **12**| `showAboutDetails(e)` | Melakukan *smooth scroll* langsung ke bagian pilihan paket pernikahan saat tombol "Pelajari Lebih Lanjut" diklik. |
| **13**| `showToast(message)` | Memunculkan notifikasi toast di bagian bawah layar dengan pesan dinamis dan otomatis menghilang setelah durasi 4000ms (4 detik). |
| **14**| `handlePackageBookingSubmit(e)` | Menangani form reservasi pada sidebar halaman detail paket: memformat tanggal ke format lokal Indonesia (`id-ID`), menyusun pesan WhatsApp kustom, dan membuka chat WA admin. |
| **15**| *Keyboard Event Listener* (`keydown`) | Mendengarkan tombol keyboard `Escape` (`Esc`) untuk menutup semua modal yang sedang terbuka secara otomatis. |

---

## 📲 Integrasi WhatsApp API

Sistem ini menghubungkan formulir web langsung ke WhatsApp Business / WhatsApp Admin menggunakan skema URL resmi:
```
https://wa.me/[Nomor_WA]?text=[Pesan_Tersandi]
```

### Format Pesan Modal Konsultasi Gratis
Ketika pengunjung mengisi formulir pada modal **"Jadwalkan Konsultasi Gratis"**, data disusun dengan format:

```text
Halo tim WeddingDreams, saya ingin menjadwalkan konsultasi. Berikut detail rencana acara kami:
- Nama Pasangan: [Value Nama]
- No. WA: [Value Nomor WA]
- Paket Diminati: [Value Paket]
- Rencana Tanggal: [Value Tanggal]
- Catatan Konsep: [Value Catatan]
```

*Contoh hasil setelah di-encode ke URL:*
```
https://wa.me/6281234567890?text=Halo%20tim%20WeddingDreams%2C%20saya%20ingin%20menjadwalkan%20konsultasi.%20Berikut%20detail%20rencana%20acara%20kami%3A%0A-%20Nama%20Pasangan%3A%20Putri%20%26%20Raditya%0A-%20No.%20WA%3A%20081234567890%0A-%20Paket%20Diminati%3A%20Paket%20Gold%20-%20Rp%2085.000.000%0A-%20Rencana%20Tanggal%3A%20Oktober%202026%0A-%20Catatan%20Konsep%3A%20Konsep%20Tradisional%20Modern
```

### Format Pesan Form Pemesanan Paket (Halaman Detail)
Ketika pengunjung memesan dari sidebar halaman detail paket:
```text
Halo Weddingdreams / Azzahra Wedding Organizer,

Saya tertarik untuk konsultasi dan booking *[Nama Paket]*:
• Nama Lengkap: [Nama]
• No. WhatsApp: [Nomor]
• Rencana Tanggal: [Tanggal Terformat]
• Lokasi / Venue: [Nama Gedung/Venue]
• Catatan / Pertanyaan: [Catatan]

Mohon info ketersediaan tanggal dan jadwal konsultasi lebih lanjut. Terima kasih!
```

---

## 🚀 Cara Menjalankan Proyek

Proyek ini tidak memerlukan proses *compilation*, *bundler*, ataupun instalasi *Node modules*. Anda dapat langsung menjalankannya dengan beberapa cara berikut:

### Opsi 1: Langsung Buka File HTML (Paling Cepat)
Cukup klik dua kali file **`index.html`** pada file manager komputer Anda, atau buka browser (Chrome, Edge, Firefox, Safari) dan seret (*drag-and-drop*) file `index.html` ke dalam browser.

### Opsi 2: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder proyek di **Visual Studio Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) jika belum terpasang.
3. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan terbuka di alamat `http://127.0.0.1:5500/index.html` dengan fitur *auto-reload* saat kode diedit.

### Opsi 3: Menggunakan Python Local Server
Jika Anda memiliki Python di komputer Anda:
```bash
# Jalankan perintah ini di dalam folder proyek:
python -m http.server 8000
```
Buka browser dan akses `http://localhost:8000`.

---

## 🔧 Panduan Kustomisasi & Konfigurasi

### 1. Mengubah Nomor WhatsApp Admin
Nomor WhatsApp dummy bawaan adalah `6281234567890`. Untuk menggantinya dengan nomor asli Anda:
- Buka file **`js/script.js`**:
  - Ganti `6281234567890` pada fungsi `handleConsultSubmit` (baris ~146).
  - Ganti `6281234567890` pada fungsi `openPackageDetail` (baris ~263).
  - Ganti `6281234567890` pada fungsi `handlePackageBookingSubmit` (baris ~426).
- Buka file **`index.html`**:
  - Ganti `6281234567890` pada tombol *Floating WhatsApp* di baris ~709.
- Lakukan hal serupa pada halaman detail jika ada tombol statis WhatsApp.

> **Catatan Format Nomor**: Selalu gunakan format internasional tanpa simbol `+` atau spasi (contoh: gunakan `6281298765432`, bukan `0812-9876-5432`).

### 2. Mengubah Data Paket & Harga
- Untuk modal interaktif paket: edit objek `packageData` di dalam **`js/script.js`** (baris 164–216).
- Untuk tampilan kartu harga di beranda: edit seksi `#paket` di dalam **`index.html`**.
- Untuk halaman detail paket: perbarui konten teks dan fasilitas di masing-masing file `paket-*.html`.

### 3. Mengganti Gambar & Galeri
Letakkan gambar baru Anda di dalam folder `assets/images/` dengan format `.jpg`, `.png`, atau `.webp`, kemudian sesuaikan atribut `src=""` pada tag `<img>` di file HTML terkait.

---

## 👨‍💻 Pengembang & Hak Cipta

- **Jenama**: WeddingDreams / Azzahra Wedding Organizer
- **Teknologi**: Semantic HTML5, CSS3 Custom Properties, Vanilla JavaScript ES6+
- **Lisensi**: Proyek ini dilindungi hak cipta untuk Azzahra Wedding Organizer. Bebas digunakan dan dikembangkan untuk keperluan portofolio dan komersial yang bersangkutan.

---
*Dibuat dengan penuh dedikasi dan cinta untuk menyempurnakan hari bahagia setiap pasangan pengantin.* ✨💍

