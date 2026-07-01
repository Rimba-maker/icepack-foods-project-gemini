# PRD: IcePack Foods — Brand & Supplier Frozen Food (B2C + B2B)

## 1. Brand Identity

**Nama Brand:** IcePack Foods
**Alasan Naming:** "Ice" = frozen/beku — langsung evoke frozen food. "Pack" = packaging, siap saji, praktis. "Foods" = cakupan luas semua jenis makanan. Kombinasi ketiganya modern, clean, mudah diingat, dan works untuk positioning di dua pasar (retail & supplier). Tidak terlalu tradisional, tidak terlalu korporat.

**Tagline:** *"Segar Dari Freezer. Lezat Di Meja Makan."*

**Positioning:**
Bukan sekadar brand frozen food biasa. IcePack adalah **pemain terbesar frozen food di kota** yang dipercaya oleh:
- Ibu rumah tangga untuk stok dapur
- Anak kos & profesional sibuk yang butuh makan praktis
- Restoran, warteg, cloud kitchen yang butuh bahan baku efisien
- Hotel & catering untuk volume besar
- Minimarket & supermarket lokal untuk reselling

**Target Audience:**

*B2C (End Consumer):*
- Ibu rumah tangga usia 25-50 (primary grocery buyer)
- Profesional muda & anak kos yang butuh praktis
- Keluarga yang suka stok freezer
- Penggemar dimsum, bakso, nugget, dll
- Health-conscious yang butuh frozen healthy option

*B2B (Business):*
- Restoran & warteg (bahan baku volume)
- Cloud kitchen & ghost kitchen
- Hotel & resort (breakfast buffet supply)
- Catering & katering event
- Kantin sekolah & kantin pabrik
- Minimarket & toko kelontong (reseller)
- Reseller & dropshipper frozen food

**Brand Voice:**
- Tone: Trustworthy, appetizing, warm tapi efisien — cukup untuk dua pasar
- Style copywriting: Appetizing untuk B2C (lapar lihat foto), profesional untuk B2B (data, volume, reliability)
- Avoid: Terlalu korporat untuk B2C, terlalu casual untuk B2B

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (food photography, frozen food, cooking, restaurant)

---

## 3. Pages Overview

| Page | Route | Priority |
|------|-------|----------|
| Homepage | `/` | 🔴 Critical |
| Produk (All) | `/produk/` | 🔴 Critical |
| Kategori Produk | `/produk/[kategori]/` | 🔴 Critical |
| B2B / Supplier | `/supplier/` | 🔴 Critical |
| Reseller Program | `/reseller/` | 🟠 High |
| About | `/tentang/` | 🟠 High |
| Blog / Resep | `/resep/` | 🟡 Medium |
| Kontak | `/kontak/` | 🔴 Critical |

---

## 4. Section Breakdown — Homepage (`/`)

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo, nav, dual CTA (B2C + B2B) |
| 2 | Hero | React island `client:load` | Appetizing hero + trust signal |
| 3 | Who We Serve | React island `client:visible` | Dual market: rumah & bisnis |
| 4 | Product Categories | React island `client:visible` | 10+ kategori produk |
| 5 | Best Sellers | React island `client:visible` | Top produk terlaris |
| 6 | Why IcePack | React island `client:visible` | USP: kualitas, cold chain, halal |
| 7 | B2B Highlight | React island `client:visible` | Teaser supplier section |
| 8 | Cold Chain Process | React island `client:visible` | Proses dari produksi ke tangan |
| 9 | Recipe Inspiration | React island `client:visible` | Masak apa dengan produk IcePack |
| 10 | Testimonial | React island `client:visible` | Review B2C & B2B |
| 11 | Coverage Area | `.astro` static | Wilayah distribusi |
| 12 | CTA Split | `.astro` static | Dual CTA: order retail vs supplier |
| 13 | Footer | `.astro` static | Kontak, sertifikasi, sosmed |

---

## 5. Copywriting — Homepage

### Navbar
- Menu: Produk ▾ • Supplier/B2B • Reseller • Resep • Tentang
- Dropdown produk: Dimsum • Bakso & Siomay • Nugget & Sosis • Seafood • Ayam • Sayuran • Healthy Range • Ready to Eat • Dessert Frozen
- CTA kiri: **Order Sekarang** (B2C)
- CTA kanan: **Jadi Supplier** (B2B) — warna berbeda

### Hero
- **Headline:** Frozen Food Terbaik. Untuk Dapur Rumah & Dapur Bisnis.
- **Subheadline:** Ratusan produk frozen food berkualitas — dari dimsum, bakso, nugget, hingga seafood & healthy range. Distributor terpercaya untuk konsumen rumahan dan mitra bisnis F&B di [kota].
- **CTA Primary:** Lihat Semua Produk
- **CTA Secondary:** Jadi Mitra Supplier

Trust badges: "Halal MUI Tersertifikasi" • "Cold Chain Terjaga" • "500+ Produk" • "Melayani 200+ Resto & UMKM"

### Who We Serve
- **Heading:** Untuk Siapa IcePack?
- **Subheading:** Satu brand, dua kebutuhan berbeda — keduanya kami layani dengan standar yang sama.

2 large cards side-by-side:

**🏠 Untuk Dapur Rumah**
Stok freezer praktis untuk keluarga. Dimsum weekend, bakso malam hari, nugget untuk anak — semua ada. Pesan online, dikirim dengan cold packaging, sampai tetap segar.
*Beli per pcs atau per pack*
**CTA:** Belanja Sekarang

**🍽️ Untuk Dapur Bisnis**
Bahan baku frozen food berkualitas untuk restoran, cloud kitchen, catering, hotel, dan kantin. Harga grosir, pengiriman rutin, invoice tersedia.
*Minimum order 10 kg*
**CTA:** Konsultasi B2B

### Product Categories
- **Heading:** 500+ Produk. Semua Kategori.
- **Subheading:** Dari yang klasik sampai yang healthy — semuanya tersedia, semuanya beku sempurna.

Grid 10 kategori cards:

**🥟 Dimsum & Siomay**
Hakau, siu mai, dumpling, siomay, bao, cheung fun
*50+ SKU*

**🍡 Bakso & Pentol**
Bakso sapi, bakso ikan, pentol isi, bakso mercon, bakso keju
*30+ SKU*

**🍗 Nugget & Olahan Ayam**
Nugget ayam, karage, chicken strip, ayam popcorn, sosis ayam
*40+ SKU*

**🌭 Sosis & Hotdog**
Sosis sapi, sosis ayam, sosis ikan, bratwurst, frankfurter
*25+ SKU*

**🐟 Seafood Frozen**
Udang, cumi, ikan fillet, kerang, kepiting, scallop, fish cake
*60+ SKU*

**🥦 Sayuran Frozen**
Edamame, brokoli, jagung pipil, wortel dadu, mixed veggies, bayam
*30+ SKU*

**🍱 Ready to Eat**
Rendang beku, opor beku, ayam geprek beku, pempek beku, nasi goreng beku
*45+ SKU*

**💚 Healthy Range**
High protein, low carb, rendah kalori, bebas gluten, vegetarian/vegan option
*35+ SKU*

**🍦 Dessert & Snack Frozen**
Es krim artisan, mochi, klepon beku, onde-onde beku, waffle beku
*40+ SKU*

**🍕 Western Frozen**
Pizza beku, pasta siap masak, beef burger patty, lasagna beku
*25+ SKU*

### Best Sellers
- **Heading:** Yang Paling Banyak Dibeli.
- **Subheading:** Favorit dapur rumah dan dapur bisnis se-kota.

Grid 8-10 produk terlaris:

- **Dimsum Hakau Udang Premium** — Rp 45k/10 pcs | ⭐ 4.9
- **Bakso Sapi Jumbo Super** — Rp 52k/500g | ⭐ 4.8
- **Nugget Ayam Crispy** — Rp 38k/500g | ⭐ 4.9
- **Udang Kupas Segar Beku** — Rp 65k/500g | ⭐ 4.8
- **Siu Mai Daging Ayam** — Rp 42k/10 pcs | ⭐ 4.7
- **Rendang Sapi Beku** — Rp 75k/250g | ⭐ 4.9
- **Edamame Premium** — Rp 28k/500g | ⭐ 4.8
- **Fish Cake Ikan Tenggiri** — Rp 35k/200g | ⭐ 4.7
- **Pempek Palembang Beku** — Rp 55k/8 pcs | ⭐ 4.9
- **Chicken Karage** — Rp 42k/500g | ⭐ 4.8

Per card: foto produk, nama, harga eceran, rating, stok status, "Order Sekarang"

### Why IcePack
- **Heading:** Kenapa 200+ Bisnis & Ribuan Keluarga Pilih IcePack?
- 6 USP cards:

1. **❄️ Cold Chain 100% Terjaga**
Dari dapur produksi ke tangan kamu — rantai dingin tidak pernah putus. Armada pengiriman berpendingin, packaging styrofoam + ice gel, suhu dijaga -18°C.

2. **🏅 Halal MUI Tersertifikasi**
Semua produk IcePack memiliki sertifikat halal dari MUI. Aman untuk seluruh keluarga Muslim Indonesia.

3. **🔬 Tanpa Pengawet Berbahaya**
Proses pembekuan adalah pengawet alami kami. Tidak ada BHA, BHT, atau formalin. Frozen = fresh, bukan frozen = kimia.

4. **🏭 Produksi Higienis BPOM**
Dapur produksi terdaftar & bersertifikat BPOM. Proses produksi mengikuti standar GMP (Good Manufacturing Practice).

5. **🚚 Pengiriman Same Day & Scheduled**
Order sebelum jam 11 siang → kirim hari yang sama. Atau jadwalkan pengiriman rutin per minggu untuk B2B.

6. **📦 Packaging Tahan Bocor & Freeze-proof**
Packaging kami dirancang khusus untuk frozen — tidak mudah bocor, tidak berembun berlebihan, label tidak luntur di freezer.

### B2B Highlight
- **Heading:** Punya Bisnis F&B? Kami Partner yang Tepat.
- **Body:** 200+ restoran, cloud kitchen, hotel, dan catering di [kota] sudah mempercayakan kebutuhan frozen food mereka ke IcePack. Harga grosir, pengiriman terjadwal, invoice & faktur pajak tersedia.

3 quick stat cards:
- 🏪 **200+ Mitra Bisnis Aktif** — Restoran, hotel, catering, kantin
- 📦 **2 Ton/Bulan** — Volume distribusi rata-rata per bulan
- ⏰ **On-Time Delivery 98%** — Jadwal pengiriman yang bisa diandalkan

**CTA:** Pelajari Program Supplier →

### Cold Chain Process
- **Heading:** Dari Dapur Kami ke Freezermu — Tidak Pernah Putus.
- **Subheading:** Frozen food yang baik bukan soal bahan saja — tapi soal menjaga kualitasnya dari produksi sampai konsumsi.

5-step process visual:

**1. 🌿 Bahan Baku Segar**
Kami seleksi bahan baku dari supplier terpercaya — daging, seafood, sayuran, dan bumbu dengan standar ketat.

**2. 🏭 Produksi Higienis**
Dapur produksi GMP-certified. Semua karyawan melewati food safety training. Bebas hama & kontaminasi silang.

**3. ❄️ Quick Freezing (-40°C)**
IQF (Individual Quick Freezing) technology — membekukan setiap produk secara individu dengan cepat. Hasilnya: tekstur tetap baik, nutrisi terjaga, tidak menggumpal.

**4. 📦 Packaging & Labeling**
Dikemas dalam vacuum pack atau packaging khusus freezer. Label nutrition facts, kode produksi, expired date, dan cara penyimpanan tertera jelas.

**5. 🚚 Cold Chain Delivery**
Armada pengiriman berpendingin. Ice gel untuk jarak pendek, mobil freezer untuk volume besar & jarak jauh.

### Recipe Inspiration
- **Heading:** Mau Masak Apa Hari Ini?
- **Subheading:** Inspirasi resep simpel pakai produk IcePack — siap 15 menit, hasilnya restoran.

Grid 6 resep cards:
- **Dim Sum Steamboat** — pakai hakau + siu mai + fish cake
- **Bakso Kuah Mercon** — pakai bakso mercon + pentol isi
- **Karaage Rice Bowl** — pakai chicken karage + edamame
- **Seafood Fried Rice** — pakai udang + cumi + mixed veggies
- **Rendang Singkong** — pakai rendang beku + singkong goreng
- **Pempek Kuah Cuko** — pakai pempek beku + resep cuko rumahan

Per card: foto dish jadi, nama resep, produk yang dipakai, waktu masak, link ke resep lengkap

### Testimonial
- **Heading:** Dipercaya Dari Dapur ke Dapur.
- 2 kolom testimonial (B2C dan B2B):

**DARI KONSUMEN RUMAHAN:**
> "Stok freezer rumah saya 80% dari IcePack. Dimsum-nya enak, bakso-nya kenyal — tamu yang datang selalu kira masak dari awal." — **Ibu Rina, ibu rumah tangga**

> "Anak kos tapi makan enak. Nugget dan karage IcePack selalu ada di freezer. Digoreng 10 menit, sudah bisa makan." — **Bagas, mahasiswa**

> "Udang bekunya fresh banget — tidak berbau, teksturnya bagus. Saya pakai untuk jualan pasta di rumah." — **Bu Dewi, home cook**

**DARI MITRA BISNIS:**
> "Sudah 2 tahun pakai IcePack untuk bahan baku cloud kitchen saya. Konsisten, on-time, dan harganya kompetitif. Tidak pernah ada masalah kualitas." — **Chef Reza, Cloud Kitchen Owner**

> "Hotel kami pesan dimsum dan seafood dari IcePack untuk breakfast buffet. Tamu tidak tahu itu frozen — mereka pikir fresh. Itu standar yang kami cari." — **Pak Hendra, F&B Manager Hotel Bintang 4**

> "Supplier frozen food terbaik di kota ini. Pengiriman tepat waktu, faktur pajak tersedia, dan kalau ada masalah — langsung direspon." — **Bu Linda, Owner Catering 300 pax**

### Coverage Area
- **Heading:** Area Distribusi Kami.
- Area coverage (sesuaikan kota):
  - ✅ Kota [Nama Kota] — Free delivery untuk order > Rp 200k
  - ✅ Kabupaten sekitar — Delivery tersedia, ongkir sesuai jarak
  - ✅ B2B: pengiriman ke luar kota untuk volume > 50 kg

- Armada: 3 motor box berpendingin + 1 mobil freezer

### CTA Split
- **Heading:** Mau Mulai Dari Mana?

2 large CTA cards side-by-side:

**🛒 Beli Untuk Keluarga**
Belanja frozen food untuk stok dapur rumah. Order online, dikirim fresh & dingin.
Gratis ongkir > Rp 200k.
**CTA:** Order Sekarang →

**🤝 Daftar Sebagai Mitra Bisnis**
Dapatkan harga grosir, pengiriman terjadwal, dan dedicated account manager.
Untuk restoran, hotel, catering, dan reseller.
**CTA:** Konsultasi B2B →

---

## 6. Copywriting — Produk Page (`/produk/`)

### Structure
- **Heading:** Semua Produk IcePack.
- Filter: Kategori • Brand (jika multi-brand) • Dietary (Halal, Vegan, Gluten-Free, High Protein) • Harga (Low-High / High-Low) • Rating
- Search bar: cari nama produk
- Grid 3-4 kolom (desktop) / 2 kolom (mobile)
- Per product card: foto, nama, ukuran/berat, harga eceran, harga grosir (jika login B2B), rating, stok, "Add to Cart" / "Order via WA"

---

## 7. Copywriting — B2B Supplier Page (`/supplier/`)

### Hero
- **Headline:** Partner Frozen Food Terpercaya untuk Bisnis F&B Anda.
- **Subheadline:** Harga grosir, pengiriman terjadwal, cold chain terjaga, dan support account manager dedicated. Bergabunglah dengan 200+ mitra bisnis yang sudah percaya IcePack.
- **CTA Primary:** Daftar Jadi Mitra
- **CTA Secondary:** Download Catalog B2B

### Who Is This For
6 bisnis type cards:
- 🍜 **Restoran & Warteg** — Bahan baku konsisten, harga stabil
- 🖥️ **Cloud Kitchen** — Volume harian, pengiriman terjadwal
- 🏨 **Hotel & Resort** — Breakfast buffet, banquet supply
- 🍽️ **Catering & EO** — Bulk order per event
- 🏫 **Kantin Sekolah & Pabrik** — Supply rutin bulanan
- 🏪 **Minimarket & Reseller** — Ready to resell packaging

### B2B Benefits
- **Heading:** Keuntungan Jadi Mitra IcePack.

6 benefit cards:

**💰 Harga Grosir Kompetitif**
Hemat 20-35% dari harga eceran. Semakin besar volume, semakin baik harganya.

**📅 Pengiriman Terjadwal**
Set jadwal pengiriman per hari, per minggu, atau per bulan. Kami datang tepat waktu — tanpa kamu perlu ingatkan.

**🧾 Invoice & Faktur Pajak**
Semua transaksi dilengkapi invoice resmi dan faktur pajak (PKP). Cocok untuk pelaporan keuangan bisnis & reimbursement.

**👨‍💼 Account Manager Dedicated**
Satu PIC khusus untuk bisnis kamu. WA langsung, respon cepat, bukan bot.

**📦 Minimum Order Fleksibel**
Mulai dari 10 kg untuk trial. Tidak perlu langsung volume besar untuk mulai.

**🔄 Konsistensi Produk**
Setiap batch produk dikontrol kualitasnya. Tidak ada perbedaan rasa atau tekstur antar pengiriman.

### B2B Pricing Structure
- **Heading:** Struktur Harga Grosir.
- **Subheading:** Harga berdasarkan volume. Semakin besar, semakin hemat.

| Volume per Bulan | Diskon dari Harga Eceran | Support Level |
|------------------|-------------------------|---------------|
| 10–50 kg | 20% off | Standard (WA) |
| 50–200 kg | 25% off | Dedicated WA + monthly visit |
| 200–500 kg | 30% off | Account Manager |
| 500 kg+ | 35% off + custom pricing | Senior Account Manager + priority |

*Harga final setelah konsultasi dan survey kebutuhan.*

### How to Become Partner
- **Heading:** 3 Langkah Jadi Mitra IcePack.

1. **📝 Isi Formulir Mitra** — Data bisnis, kebutuhan produk, estimasi volume per bulan
2. **📞 Konsultasi dengan Tim Kami** — Account manager kami hubungi dalam 1x24 jam untuk diskusi kebutuhan & pricing
3. **🚀 Mulai Order** — Trial order pertama, pengiriman, dan evaluasi kualitas bersama

### B2B Testimonial
Dedicated testimonial dari mitra bisnis (sudah ada di atas)

### Download Catalog
- **Heading:** Download Katalog Produk & Harga B2B.
- Form: Nama, Nama Bisnis, WhatsApp, Email, Tipe Bisnis (dropdown)
- Submit → katalog dikirim ke email/WA
- **CTA:** Download Katalog Gratis

---

## 8. Copywriting — Reseller Page (`/reseller/`)

### Hero
- **Headline:** Jual Frozen Food Premium. Profit Nyata.
- **Subheadline:** Bergabunglah dengan program reseller IcePack. Jual dari rumah atau toko, harga spesial, support marketing tersedia.

### Why Resell IcePack
- Brand yang sudah dikenal di kota
- Margin 25-35% dari harga eceran
- Bisa mulai kecil (min. order 5 kg)
- Training product knowledge gratis
- Free marketing kit (foto produk, caption, template IG)
- Dukungan WA grup reseller

### Reseller Tiers
3 tier cards:

**🥉 Reseller Basic — Min. 5 kg/bulan**
- Diskon 25% dari harga eceran
- Support WA grup
- Free foto produk digital

**🥈 Reseller Silver — Min. 20 kg/bulan**
- Diskon 30% dari harga eceran
- Priority stock
- Free banner digital + caption kit
- Nama masuk di "Cari Reseller Terdekat" di website

**🥇 Reseller Gold — Min. 50 kg/bulan**
- Diskon 35% dari harga eceran
- Cold storage kecil dipinjamkan (tergantung area)
- Dedicated support
- Feature di sosmed IcePack
- Nama + kontak di halaman reseller website

---

## 9. Copywriting — Resep Page (`/resep/`)

Blog/resep section dengan Astro Content Collections:
- 20+ resep menggunakan produk IcePack
- Kategori: Sarapan • Makan Siang • Makan Malam • Camilan • Untuk Anak
- Per resep: foto dish, bahan (highlight produk IcePack), langkah masak, waktu prep & cook, porsi
- CTA di setiap resep: "Beli [Nama Produk] di IcePack →"

---

## 10. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/frozen-food-variety | "Frozen food variety spread" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/food%20frozen%20packaging/ | "Frozen food packaging" | 1920x1080 |
| Who - B2C | Unsplash | https://unsplash.com/s/photos/family-cooking-kitchen | "Keluarga masak di dapur" | 800x600 |
| Who - B2B | Pexels | https://www.pexels.com/search/restaurant%20kitchen%20chef/ | "Restaurant commercial kitchen" | 800x600 |
| Category - Dimsum | Unsplash | https://unsplash.com/s/photos/dimsum-variety | "Dimsum variety" | 800x600 |
| Category - Bakso | Pexels | https://www.pexels.com/search/meatball%20soup%20indonesian/ | "Bakso sapi" | 800x600 |
| Category - Nugget | Unsplash | https://unsplash.com/s/photos/chicken-nugget-crispy | "Nugget ayam crispy" | 800x600 |
| Category - Seafood | Pexels | https://www.pexels.com/search/seafood%20frozen%20shrimp/ | "Seafood frozen" | 800x600 |
| Category - Sayuran | Unsplash | https://unsplash.com/s/photos/frozen-vegetables | "Frozen vegetables" | 800x600 |
| Category - Ready to Eat | Pexels | https://www.pexels.com/search/rendang%20indonesian%20food/ | "Rendang beku" | 800x600 |
| Category - Healthy | Unsplash | https://unsplash.com/s/photos/healthy-frozen-food | "Healthy frozen option" | 800x600 |
| Category - Dessert | Pexels | https://www.pexels.com/search/mochi%20ice%20cream/ | "Frozen dessert mochi" | 800x600 |
| Category - Western | Unsplash | https://unsplash.com/s/photos/frozen-pizza | "Frozen pizza western" | 800x600 |
| Best Seller - Hakau | Pexels | https://www.pexels.com/search/har%20gow%20dimsum/ | "Hakau udang" | 800x800 |
| Best Seller - Bakso | Unsplash | https://unsplash.com/s/photos/meatball-indonesian | "Bakso sapi jumbo" | 800x800 |
| Best Seller - Nugget | Pexels | https://www.pexels.com/search/crispy%20chicken%20nugget/ | "Nugget crispy" | 800x800 |
| Best Seller - Udang | Unsplash | https://unsplash.com/s/photos/peeled-shrimp-frozen | "Udang kupas beku" | 800x800 |
| Best Seller - Rendang | Pexels | https://www.pexels.com/search/rendang%20beef/ | "Rendang beku premium" | 800x800 |
| Why - Cold Chain | Unsplash | https://unsplash.com/s/photos/cold-chain-refrigerated-truck | "Cold chain delivery" | 800x600 |
| Why - Halal | Pexels | https://www.pexels.com/search/halal%20food%20certified/ | "Halal certified" | 800x600 |
| Why - Produksi | Unsplash | https://unsplash.com/s/photos/food-manufacturing-clean | "Food production GMP" | 800x600 |
| Why - Packaging | Pexels | https://www.pexels.com/search/food%20packaging%20frozen/ | "Frozen packaging" | 800x600 |
| B2B - Restaurant | Unsplash | https://unsplash.com/s/photos/restaurant-kitchen-supply | "Restaurant supply kitchen" | 1200x800 |
| B2B - Hotel | Pexels | https://www.pexels.com/search/hotel%20breakfast%20buffet/ | "Hotel breakfast buffet" | 1200x800 |
| B2B - Catering | Unsplash | https://unsplash.com/s/photos/catering-food-service | "Catering food service" | 1200x800 |
| Cold Chain - Production | Pexels | https://www.pexels.com/search/food%20factory%20production/ | "Produksi makanan" | 800x600 |
| Cold Chain - Freezing | Unsplash | https://unsplash.com/s/photos/food-freezing-process | "Quick freezing IQF" | 800x600 |
| Cold Chain - Delivery | Pexels | https://www.pexels.com/search/refrigerated%20truck%20delivery/ | "Cold delivery truck" | 800x600 |
| Recipe - Steamboat | Unsplash | https://unsplash.com/s/photos/steamboat-hotpot | "Dim sum steamboat" | 800x600 |
| Recipe - Bakso soup | Pexels | https://www.pexels.com/search/bakso%20soup%20bowl/ | "Bakso kuah" | 800x600 |
| Recipe - Rice bowl | Unsplash | https://unsplash.com/s/photos/karaage-rice-bowl | "Karaage rice bowl" | 800x600 |
| Testimonial B2C | Pexels | https://www.pexels.com/search/asian%20family%20cooking%20home/ | "Family di dapur" | 800x800 |
| Testimonial B2B Chef | Unsplash | https://unsplash.com/s/photos/chef-kitchen-professional | "Chef profesional" | 800x800 |

---

## 11. Animation Spec (Framer Motion)

**Vibe:** Appetizing & professional — hangat untuk B2C (bikin lapar), clean & efficient untuk B2B. Tidak terlalu playful, tidak terlalu korporat.

### Hero (React island, `client:load`)
```tsx
// Bold appetizing reveal
const foodReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 }
  }
}

// Trust badges counter: "200+ Bisnis"
// Hero image: subtle Ken Burns untuk appetizing feel
const appetizingKenBurns = {
  scale: [1, 1.05],
  transition: { duration: 15, repeat: Infinity, repeatType: "reverse" }
}
```

### Who We Serve (React island, `client:visible`)
- 2 large cards reveal dari kiri-kanan bersamaan
- B2C card: warm color shift on hover
- B2B card: professional blue/navy shift on hover
- CTA button per card: slide-in on hover

### Product Categories (React island, `client:visible`)
- 10 cards reveal stagger `staggerChildren: 0.07`
- Hover: image scale `1.08` + overlay dengan "X SKU" count + "Lihat Semua →"
- Icon/emoji: scale pop subtle on visible

### Best Sellers Grid (React island, `client:visible`)
- 8-10 cards reveal stagger
- Card hover: image scale + price highlight + "Order Sekarang" slide-in
- Rating stars: sequential gold fill animation
- "Stok Habis" state: grayscale filter subtle

### Why IcePack (React island, `client:visible`)
- 6 USP cards reveal stagger alternating left-right
- Icon: scale pop + subtle rotate on visible
- Hover: card lift + accent border

### B2B Highlight (React island, `client:visible`)
- Stat numbers counter animation (200+, 2 Ton, 98%)
- Stats reveal sequential
- CTA: subtle pulse attention

### Cold Chain Process (React island, `client:visible`)
- 5-step horizontal timeline (desktop) / vertical (mobile)
- SVG line draw via `pathLength`
- Step icon: scale pop sequential
- Temperature badge (-40°C): number counter animation reveal

### Recipe Cards (React island, `client:visible`)
- 6 cards reveal stagger
- Hover: image scale + overlay dengan ingredients tag
- "Masak Sekarang" CTA: slide-in bottom

### Testimonial (React island, `client:visible`)
- 2 kolom (B2C kiri, B2B kanan) — desktop
- Cards reveal stagger per kolom
- Quote mark: SVG draw animation
- Review source tag (B2C / B2B): color-coded

### B2B Pricing Table (supplier page)
- Table rows reveal stagger on scroll
- Volume tier: left border grow animation
- Best value tier: subtle gold highlight
- Hover row: background shift

### Reseller Tiers (reseller page)
- 3 cards reveal stagger
- Gold tier: animated border glow
- Hover: card lift + benefit list pulse

### Product Page Filter (produk page)
- Filter chips: `layoutId` smooth indicator
- Filter switch: `AnimatePresence` + `layout` smooth reflow
- "Add to Cart" button: subtle bounce on click success

### Scroll Reveal (reusable)
```tsx
const foodFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Color Palette (Tailwind v4)
```css
:root {
  /* B2C — warm & appetizing */
  --color-primary: #ef4444;        /* red — appetite stimulating */
  --color-primary-warm: #f97316;   /* orange accent */
  --color-bg: #fffbf5;             /* warm white */

  /* B2B — professional */
  --color-b2b: #1e40af;            /* navy blue */
  --color-b2b-light: #dbeafe;

  /* Neutral */
  --color-text: #1a1a1a;
  --color-muted: #6b7280;
  --color-surface: #f9fafb;
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Who We Serve, Categories, Best Sellers, Why, B2B, Cold Chain, Recipes, Testimonial
- `client:idle` → All forms (B2B form, reseller form, catalog download)
- Sisanya: static

---

## 12. Astro Routing & FSD Structure

```
src/
├── pages/
│   ├── index.astro              # Homepage
│   ├── produk/
│   │   ├── index.astro          # All products
│   │   ├── dimsum.astro
│   │   ├── bakso.astro
│   │   ├── nugget.astro
│   │   ├── seafood.astro
│   │   ├── sayuran.astro
│   │   ├── ready-to-eat.astro
│   │   ├── healthy.astro
│   │   ├── dessert.astro
│   │   └── western.astro
│   ├── supplier.astro           # B2B page
│   ├── reseller.astro
│   ├── resep/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── tentang.astro
│   └── kontak.astro
├── components/
│   ├── shared/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── homepage/
│   │   ├── Hero.tsx
│   │   ├── WhoWeServe.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── BestSellers.tsx
│   │   ├── WhyIcePack.tsx
│   │   ├── B2BHighlight.tsx
│   │   ├── ColdChain.tsx
│   │   ├── RecipeInspiration.tsx
│   │   └── Testimonial.tsx
│   ├── produk/
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilter.tsx
│   │   └── ProductSearch.tsx
│   └── forms/
│       ├── B2BForm.tsx
│       ├── ResellerForm.tsx
│       └── CatalogDownload.tsx
└── content/
    └── resep/              # Astro Content Collections
```

---

## 13. Catatan Implementasi Khusus

### Dual CTA Strategy — Penting!
Website ini melayani 2 market berbeda yang butuh conversion path berbeda:
- **B2C**: impulse-friendly, harga eceran, order via WA/marketplace
- **B2B**: consideration-heavy, butuh konsultasi dulu, form + telepon

Jangan campur CTA-nya. Navbar harus ada 2 CTA berbeda warna:
- **Merah/Orange** = B2C ("Order Sekarang")
- **Navy Blue** = B2B ("Jadi Mitra")

### Order System untuk B2C
Untuk Astro static, order B2C bisa via:
- WhatsApp Direct (paling simple)
- Link ke marketplace (Shopee/Tokopedia store)
- Simple order form → konfirmasi manual

### Catalog B2B Download
Katalog B2B sebaiknya PDF yang bisa didownload setelah isi form. Ini lead generation tool yang powerful — dapatkan kontak bisnis yang serius.

### Recipe Page sebagai SEO & Content Marketing
Setiap resep = landing page baru dengan long-tail keyword ("resep dimsum frozen mudah", "cara masak bakso beku", dll). Ini organic traffic machine yang low-effort tapi high-value.

### Cold Storage Badge / Temperature Indicator
Di setiap product card, tampilkan suhu penyimpanan yang direkomendasikan (-18°C) sebagai trust signal. Ini subtle tapi bikin percaya.

---

## 14. SEO Meta Per Page

| Page | Title | Description |
|------|-------|-------------|
| Homepage | IcePack Foods — Frozen Food Premium [Kota], B2C & B2B Supplier | Brand & supplier frozen food terpercaya di [kota]. 500+ produk: dimsum, bakso, nugget, seafood, healthy range. Untuk dapur rumah & dapur bisnis. |
| Produk | Semua Produk Frozen Food \| IcePack Foods | Browse 500+ produk frozen food IcePack. Dimsum, bakso, nugget, seafood, sayuran, ready to eat, healthy range & dessert beku. |
| Supplier | Supplier Frozen Food untuk Restoran & Hotel \| IcePack Foods | Mitra frozen food untuk restoran, cloud kitchen, hotel, catering, dan kantin. Harga grosir, cold chain terjaga, pengiriman terjadwal. |
| Reseller | Program Reseller Frozen Food \| IcePack Foods | Jadi reseller frozen food IcePack. Margin 25-35%, support marketing, min. order 5 kg. Daftar gratis. |
| Resep | Resep Masak dengan Frozen Food \| IcePack Foods | Inspirasi resep simpel menggunakan produk frozen food IcePack. Siap 15 menit, lezat seperti restoran. |

**Schema per page:**
- Homepage: `FoodEstablishment` + `LocalBusiness` + `Organization`
- Produk: `Product` + `ItemList`
- Supplier: `WholesaleStore` + `Service`
- Resep: `Recipe` (schema khusus resep — SEO goldmine)
