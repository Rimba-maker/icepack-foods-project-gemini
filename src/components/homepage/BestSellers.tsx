import { motion } from "framer-motion";
import { staggerContainer, cardReveal } from "@/lib/animations";

const bestSellers = [
  { name: "Dimsum Hakau Udang Premium", price: "Rp 45.000", size: "10 pcs", rating: 4.9, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop" },
  { name: "Bakso Sapi Jumbo Super", price: "Rp 52.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop" },
  { name: "Nugget Ayam Crispy", price: "Rp 38.000", size: "500g", rating: 4.9, img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop" },
  { name: "Udang Kupas Segar Beku", price: "Rp 65.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=600&auto=format&fit=crop" },
  { name: "Siu Mai Daging Ayam", price: "Rp 42.000", size: "10 pcs", rating: 4.7, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop" },
  { name: "Rendang Sapi Beku", price: "Rp 75.000", size: "250g", rating: 4.9, img: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" },
  { name: "Edamame Premium", price: "Rp 28.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
  { name: "Pempek Palembang Beku", price: "Rp 55.000", size: "8 pcs", rating: 4.9, img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop" },
];

export default function BestSellers() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-14"
        >
          <motion.h2 variants={cardReveal} className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-ink">
            Yang Paling Banyak Dibeli.
          </motion.h2>
          <motion.p variants={cardReveal} className="text-body text-lg">
            Favorit dapur rumah dan dapur bisnis se-kota.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.05)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {bestSellers.map((item, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              whileHover={{ y: -8 }}
              className="bg-canvas-soft rounded-2xl p-4 border border-hairline flex flex-col group cursor-pointer"
            >
              <div className="aspect-square bg-canvas rounded-xl mb-4 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-warning text-sm">★</span>
                <span className="text-sm font-medium">{item.rating}</span>
              </div>
              <h3 className="font-medium text-ink leading-snug mb-1 line-clamp-2">{item.name}</h3>
              <p className="text-body-mid text-sm mb-4">{item.size}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-semibold text-primary">{item.price}</span>
                <button className="w-8 h-8 rounded-full bg-canvas border border-hairline flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
