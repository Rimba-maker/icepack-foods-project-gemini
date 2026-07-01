import { motion } from "framer-motion";
import { staggerContainer, slideFromLeft, slideFromRight } from "@/lib/animations";
import { Home3Line, ForkSpoonLine } from "@mingcute/react";
export default function WhoWeServe() {
  return (
    <section className="bg-canvas-soft py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-14"
        >
          <motion.h2 variants={slideFromLeft} className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-ink">
            Untuk Siapa IcePack?
          </motion.h2>
          <motion.p variants={slideFromRight} className="text-body text-lg">
            Satu brand, dua kebutuhan berbeda — keduanya kami layani dengan standar yang sama.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.2)}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* B2C Card */}
          <motion.div
            variants={slideFromLeft}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-canvas rounded-[28px] p-8 lg:p-10 border border-hairline-soft shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-primary">
              <Home3Line className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-ink">Untuk Dapur Rumah</h3>
            <p className="text-body mb-4">
              Stok freezer praktis untuk keluarga. Dimsum weekend, bakso malam hari, nugget untuk anak — semua ada. Pesan online, dikirim dengan cold packaging, sampai tetap segar.
            </p>
            <p className="text-sm text-body-mid italic mb-6">Beli per pcs atau per pack</p>
            <a href="/produk/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-semibold rounded-full hover:bg-primary-hover transition-colors">
              Belanja Sekarang
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
            </a>
          </motion.div>

          {/* B2B Card */}
          <motion.div
            variants={slideFromRight}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-surface-dark text-white rounded-[28px] p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-white">
              <ForkSpoonLine className="w-14 h-14" />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-white">Untuk Dapur Bisnis</h3>
            <p className="text-white/70 mb-4">
              Bahan baku frozen food berkualitas untuk restoran, cloud kitchen, catering, hotel, dan kantin. Harga grosir, pengiriman rutin, invoice tersedia.
            </p>
            <p className="text-sm text-white/50 italic mb-6">Minimum order 10 kg</p>
            <a href="/supplier/" className="inline-flex items-center gap-2 px-6 py-3 bg-b2b text-white font-semibold rounded-full hover:bg-b2b-hover transition-colors">
              Konsultasi B2B
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
