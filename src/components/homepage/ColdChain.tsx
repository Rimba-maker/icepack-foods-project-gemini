import { motion } from "framer-motion";
import { staggerContainer, slideFromLeft } from "@/lib/animations";
import { LeafLine, Building3Line, SnowflakeLine, Box3Line, TruckLine } from "@mingcute/react";

const steps = [
  { icon: <LeafLine className="w-10 h-10 text-light-orange" />, title: "Bahan Baku Segar", desc: "Kami seleksi bahan baku dari supplier terpercaya — daging, seafood, sayuran, dan bumbu dengan standar ketat." },
  { icon: <Building3Line className="w-10 h-10 text-light-orange" />, title: "Produksi Higienis", desc: "Dapur produksi GMP-certified. Semua karyawan melewati food safety training. Bebas hama & kontaminasi silang." },
  { icon: <SnowflakeLine className="w-10 h-10 text-light-orange" />, title: "Quick Freezing (-40°C)", desc: "IQF (Individual Quick Freezing) technology — membekukan setiap produk secara individu dengan cepat." },
  { icon: <Box3Line className="w-10 h-10 text-light-orange" />, title: "Packaging & Labeling", desc: "Dikemas khusus freezer. Label nutrition facts, kode produksi, expired date tertera jelas." },
  { icon: <TruckLine className="w-10 h-10 text-light-orange" />, title: "Cold Chain Delivery", desc: "Armada pengiriman berpendingin. Ice gel untuk jarak pendek, mobil freezer untuk volume besar & jarak jauh." },
];

export default function ColdChain() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideFromLeft} className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-ink">
            Dari Dapur Kami ke Freezermu — Tidak Pernah Putus.
          </motion.h2>
          <motion.p variants={slideFromLeft} className="text-body text-lg max-w-2xl mx-auto">
            Frozen food yang baik bukan soal bahan saja — tapi soal menjaga kualitasnya dari produksi sampai konsumsi.
          </motion.p>
        </motion.div>

        {/* Desktop: Horizontal timeline, Mobile: Vertical */}
        <div className="relative">
          {/* Connecting Line (Orbital styling) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-hairline-soft">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-light-orange origin-left"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.2)}
            className="grid lg:grid-cols-5 gap-8 lg:gap-4"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={slideFromLeft} className="relative z-10 flex flex-col lg:items-center text-left lg:text-center">
                <div className="w-24 h-24 bg-canvas rounded-full border-2 border-light-orange shadow-md flex items-center justify-center mb-6 shrink-0 z-10">
                  {step.icon}
                </div>
                <div className="bg-canvas-soft p-5 rounded-2xl border border-hairline flex-1">
                  <span className="eyebrow text-light-orange mb-2 block">Langkah {i + 1}</span>
                  <h3 className="font-medium text-lg mb-2 leading-tight">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
