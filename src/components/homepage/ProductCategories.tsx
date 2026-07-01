import { motion } from "framer-motion";
import { staggerContainer, cardReveal, scalePop } from "@/lib/animations";
import { 
  Bowl2Line, BowlLine, ChickenLine, ForkSpoonLine, FishLine, 
  CarrotLine, Box3Line, HeartLine, IceCreamLine, PizzaLine 
} from "@mingcute/react";

const categories = [
  { Icon: Bowl2Line, name: "Dimsum & Siomay", sku: "50+", href: "/produk/dimsum/", bg: "bg-cat-dimsum", text: "text-cat-dimsum-dark" },
  { Icon: BowlLine, name: "Bakso & Pentol", sku: "30+", href: "/produk/bakso/", bg: "bg-cat-bakso", text: "text-on-primary" },
  { Icon: ChickenLine, name: "Nugget & Ayam", sku: "40+", href: "/produk/nugget/", bg: "bg-cat-nugget", text: "text-ink" },
  { Icon: ForkSpoonLine, name: "Sosis & Hotdog", sku: "25+", href: "/produk/sosis/", bg: "bg-cat-bakso-light", text: "text-cat-bakso" },
  { Icon: FishLine, name: "Seafood Frozen", sku: "60+", href: "/produk/seafood/", bg: "bg-cat-seafood", text: "text-ink" },
  { Icon: CarrotLine, name: "Sayuran Frozen", sku: "30+", href: "/produk/sayuran/", bg: "bg-cat-sayuran", text: "text-on-primary" },
  { Icon: Box3Line, name: "Ready to Eat", sku: "45+", href: "/produk/ready-to-eat/", bg: "bg-cat-rte", text: "text-ink" },
  { Icon: HeartLine, name: "Healthy Range", sku: "35+", href: "/produk/healthy/", bg: "bg-cat-sayuran-light", text: "text-cat-sayuran" },
  { Icon: IceCreamLine, name: "Dessert & Snack", sku: "40+", href: "/produk/dessert/", bg: "bg-cat-dessert", text: "text-cat-dessert-dark" },
  { Icon: PizzaLine, name: "Western Frozen", sku: "25+", href: "/produk/western/", bg: "bg-cat-seafood", text: "text-ink" },
];

export default function ProductCategories() {
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
            500+ Produk. Semua Kategori.
          </motion.h2>
          <motion.p variants={cardReveal} className="text-body text-lg">
            Dari yang klasik sampai yang healthy — semuanya tersedia, semuanya beku sempurna.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.07)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={cat.href}
              variants={cardReveal}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${cat.bg} ${cat.text} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden`}
            >
              {/* Subtle hover overlay highlight */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              
              <motion.div variants={scalePop} className="mb-3 relative z-10 origin-bottom-left">
                <cat.Icon className="w-8 h-8" />
              </motion.div>
              <h3 className="font-medium text-sm mb-1 relative z-10">{cat.name}</h3>
              <p className="text-xs opacity-70 relative z-10">{cat.sku} SKU</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
