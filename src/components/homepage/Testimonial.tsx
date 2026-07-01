import { motion } from "framer-motion";
import { staggerContainer, cardReveal } from "@/lib/animations";

export default function Testimonial() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-14"
        >
          <motion.h2 variants={cardReveal} className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-ink">
            Dipercaya Dari Dapur ke Dapur.
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* B2C Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="space-y-6"
          >
            <motion.div variants={cardReveal} className="mb-8">
              <span className="eyebrow text-primary bg-primary-soft px-3 py-1 rounded-full">Konsumen Rumahan</span>
            </motion.div>

            {[
              { text: "Stok freezer rumah saya 80% dari IcePack. Dimsum-nya enak, bakso-nya kenyal — tamu yang datang selalu kira masak dari awal.", author: "Ibu Rina", role: "Ibu rumah tangga" },
              { text: "Anak kos tapi makan enak. Nugget dan karage IcePack selalu ada di freezer. Digoreng 10 menit, sudah bisa makan.", author: "Bagas", role: "Mahasiswa" },
              { text: "Udang bekunya fresh banget — tidak berbau, teksturnya bagus. Saya pakai untuk jualan pasta di rumah.", author: "Bu Dewi", role: "Home cook" },
            ].map((testi, i) => (
              <motion.div key={i} variants={cardReveal} className="bg-canvas-soft p-8 rounded-2xl border border-hairline-soft">
                <p className="text-body text-lg italic mb-6">"{testi.text}"</p>
                <div>
                  <p className="font-medium text-ink">{testi.author}</p>
                  <p className="text-sm text-body-mid">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* B2B Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1)}
            className="space-y-6"
          >
            <motion.div variants={cardReveal} className="mb-8">
              <span className="eyebrow text-b2b bg-b2b-soft px-3 py-1 rounded-full">Mitra Bisnis</span>
            </motion.div>

            {[
              { text: "Sudah 2 tahun pakai IcePack untuk bahan baku cloud kitchen saya. Konsisten, on-time, dan harganya kompetitif. Tidak pernah ada masalah kualitas.", author: "Chef Reza", role: "Cloud Kitchen Owner" },
              { text: "Hotel kami pesan dimsum dan seafood dari IcePack untuk breakfast buffet. Tamu tidak tahu itu frozen — mereka pikir fresh. Itu standar yang kami cari.", author: "Pak Hendra", role: "F&B Manager Hotel" },
              { text: "Supplier frozen food terbaik di kota ini. Pengiriman tepat waktu, faktur pajak tersedia, dan kalau ada masalah — langsung direspon.", author: "Bu Linda", role: "Owner Catering" },
            ].map((testi, i) => (
              <motion.div key={i} variants={cardReveal} className="bg-surface-dark text-white p-8 rounded-2xl">
                <p className="text-white/80 text-lg italic mb-6">"{testi.text}"</p>
                <div>
                  <p className="font-medium text-white">{testi.author}</p>
                  <p className="text-sm text-white/50">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
