import { motion } from "framer-motion";
import { heroReveal, heroChild } from "@/lib/animations";
import { useEffect } from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <motion.div
          className="text-center max-w-4xl mx-auto relative"
          variants={heroReveal}
          initial="hidden"
          animate="visible"
        >
          {/* Ghost Watermark */}
          <div className="ghost-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
            FROZEN FRESH
          </div>

          <motion.p variants={heroChild} className="eyebrow text-primary mb-4 relative z-10">
            Segar Dari Freezer. Lezat Di Meja Makan.
          </motion.p>
          
          <motion.h1 variants={heroChild} className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 relative z-10 text-ink">
            Frozen Food Terbaik.<br />
            <span className="text-primary">Untuk Dapur Rumah</span> &{" "}
            <span className="text-b2b">Dapur Bisnis.</span>
          </motion.h1>
          
          <motion.p variants={heroChild} className="text-body text-lg md:text-xl max-w-2xl mx-auto mb-8 relative z-10">
            Ratusan produk frozen food berkualitas — dari dimsum, bakso, nugget, hingga seafood & healthy range. Distributor terpercaya untuk konsumen rumahan dan mitra bisnis F&B.
          </motion.p>

          <motion.div variants={heroChild} className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/produk/"
              className="px-8 py-4 bg-primary text-on-primary font-semibold rounded-full text-lg hover:bg-primary-hover transition-colors shadow-md"
            >
              Lihat Semua Produk
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/supplier/"
              className="px-8 py-4 bg-b2b text-white font-semibold rounded-full text-lg hover:bg-b2b-hover transition-colors"
            >
              Jadi Mitra Supplier
            </motion.a>
          </motion.div>

          <motion.div variants={heroChild} className="flex flex-wrap justify-center gap-4 relative z-10">
            <span className="eyebrow text-xs px-4 py-2 bg-canvas-soft rounded-full text-body">🏅 Halal MUI Tersertifikasi</span>
            <span className="eyebrow text-xs px-4 py-2 bg-canvas-soft rounded-full text-body">❄️ Cold Chain Terjaga</span>
            <span className="eyebrow text-xs px-4 py-2 bg-canvas-soft rounded-full text-body">📦 500+ Produk</span>
            <span className="eyebrow text-xs px-4 py-2 bg-canvas-soft rounded-full text-body">🤝 Melayani 200+ Resto & UMKM</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
