import { motion } from "framer-motion";
import { staggerContainer, slideFromLeft, slideFromRight, scalePop } from "@/lib/animations";
import { SnowflakeLine, CertificateLine, FlaskLine, FactoryLine, TruckLine, Box3Line } from "@mingcute/react";

const usps = [
  { icon: <SnowflakeLine className="w-8 h-8" />, title: "Cold Chain 100% Terjaga", desc: "Dari dapur produksi ke tangan kamu — rantai dingin tidak pernah putus. Armada pengiriman berpendingin, packaging styrofoam + ice gel, suhu dijaga -18°C." },
  { icon: <CertificateLine className="w-8 h-8" />, title: "Halal MUI Tersertifikasi", desc: "Semua produk IcePack memiliki sertifikat halal dari MUI. Aman untuk seluruh keluarga Muslim Indonesia." },
  { icon: <FlaskLine className="w-8 h-8" />, title: "Tanpa Pengawet Berbahaya", desc: "Proses pembekuan adalah pengawet alami kami. Tidak ada BHA, BHT, atau formalin. Frozen = fresh, bukan frozen = kimia." },
  { icon: <FactoryLine className="w-8 h-8" />, title: "Produksi Higienis BPOM", desc: "Dapur produksi terdaftar & bersertifikat BPOM. Proses produksi mengikuti standar GMP (Good Manufacturing Practice)." },
  { icon: <TruckLine className="w-8 h-8" />, title: "Pengiriman Same Day", desc: "Order sebelum jam 11 siang → kirim hari yang sama. Atau jadwalkan pengiriman rutin per minggu untuk B2B." },
  { icon: <Box3Line className="w-8 h-8" />, title: "Packaging Freeze-proof", desc: "Packaging kami dirancang khusus untuk frozen — tidak mudah bocor, tidak berembun berlebihan, label tidak luntur di freezer." },
];

export default function WhyIcePack() {
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
            Kenapa 200+ Bisnis & Ribuan Keluarga Pilih IcePack?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {usps.map((item, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-canvas rounded-2xl p-6 border border-hairline-soft shadow-sm hover:shadow-md hover:border-hairline-strong transition-all group"
            >
              <motion.div 
                variants={scalePop}
                className="mb-4 text-primary origin-left group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </motion.div>
              <h3 className="font-medium text-lg mb-2 text-ink">{item.title}</h3>
              <p className="text-body text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
