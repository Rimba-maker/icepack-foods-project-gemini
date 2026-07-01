import { motion } from "framer-motion";
import { staggerContainer, cardReveal } from "@/lib/animations";

const recipes = [
  { title: "Dim Sum Steamboat", use: "Hakau + Siu Mai + Fish Cake", time: "15 Min", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop" },
  { title: "Bakso Kuah Mercon", use: "Bakso Mercon + Pentol Isi", time: "20 Min", img: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop" },
  { title: "Karaage Rice Bowl", use: "Chicken Karage + Edamame", time: "10 Min", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" },
  { title: "Seafood Fried Rice", use: "Udang + Cumi + Mixed Veggies", time: "15 Min", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop" },
  { title: "Rendang Singkong", use: "Rendang Beku + Singkong", time: "15 Min", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop" },
  { title: "Pempek Kuah Cuko", use: "Pempek Beku + Cuko", time: "10 Min", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop" },
];

export default function RecipeInspiration() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-canvas-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-14"
        >
          <motion.h2 variants={cardReveal} className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-ink">
            Mau Masak Apa Hari Ini?
          </motion.h2>
          <motion.p variants={cardReveal} className="text-body text-lg max-w-2xl mx-auto">
            Inspirasi resep simpel pakai produk IcePack — siap 15 menit, hasilnya restoran.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.05)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recipes.map((recipe, i) => (
            <motion.a
              key={i}
              href="/resep/"
              variants={cardReveal}
              whileHover={{ y: -8 }}
              className="group block"
            >
              <div className="aspect-[4/3] rounded-[24px] mb-4 flex items-center justify-center text-center p-6 border border-hairline transition-transform overflow-hidden relative text-white">
                <img src={recipe.img} alt={recipe.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-500">
                  <span className="eyebrow block mb-3 text-white/90">{recipe.time}</span>
                  <h3 className="text-3xl font-medium leading-tight drop-shadow-lg">{recipe.title}</h3>
                </div>
              </div>
              <h4 className="font-medium text-lg mb-1 text-ink group-hover:text-primary transition-colors">{recipe.title}</h4>
              <p className="text-body text-sm">Pakai: {recipe.use}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="text-center mt-12"
        >
          <motion.a
            variants={cardReveal}
            href="/resep/"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-hairline-strong text-ink font-semibold rounded-full hover:bg-ink hover:text-white hover:border-ink transition-colors"
          >
            Lihat Semua Resep
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
