import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { staggerContainer, heroChild } from "@/lib/animations";

// Simple counter hook
function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function B2BHighlight() {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="bg-surface-dark text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsInView(true)}
          variants={staggerContainer(0.1)}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <motion.p variants={heroChild} className="eyebrow text-b2b-light text-xs mb-4">B2B SUPPLIER</motion.p>
          <motion.h2 variants={heroChild} className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Punya Bisnis F&B? Kami Partner yang Tepat.
          </motion.h2>
          <motion.p variants={heroChild} className="text-white/60 text-lg">
            200+ restoran, cloud kitchen, hotel, dan catering sudah mempercayakan kebutuhan frozen food mereka ke IcePack. Harga grosir, pengiriman terjadwal, invoice & faktur pajak tersedia.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.2)}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12"
        >
          {[
            { value: 200, suffix: "+", label: "Mitra Bisnis Aktif" },
            { value: 2, suffix: " Ton", label: "Volume / Bulan" },
            { value: 98, suffix: "%", label: "On-Time Delivery" },
          ].map((stat, i) => (
            <motion.div key={i} variants={heroChild} className="text-center">
              <div className="text-3xl md:text-5xl font-medium tracking-tight text-primary mb-2">
                {isInView ? <Counter end={stat.value} suffix={stat.suffix} /> : "0"}
              </div>
              <p className="text-white/50 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/supplier/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-b2b text-white font-semibold rounded-full hover:bg-b2b-hover transition-colors text-lg"
          >
            Pelajari Program Supplier →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
