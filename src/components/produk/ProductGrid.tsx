import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  size: string;
  rating: number;
  img: string;
  tags?: string[];
}

const allProducts: Product[] = [
  { id: "1", name: "Dimsum Hakau Udang Premium", category: "Dimsum & Siomay", price: "Rp 45.000", size: "10 pcs", rating: 4.9, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop", tags: ["Bestseller", "Halal"] },
  { id: "2", name: "Siu Mai Daging Ayam", category: "Dimsum & Siomay", price: "Rp 42.000", size: "10 pcs", rating: 4.7, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop" },
  { id: "3", name: "Bakso Sapi Jumbo Super", category: "Bakso & Pentol", price: "Rp 52.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop", tags: ["Bestseller"] },
  { id: "4", name: "Bakso Mercon Pedas", category: "Bakso & Pentol", price: "Rp 48.000", size: "400g", rating: 4.7, img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=600&auto=format&fit=crop" },
  { id: "5", name: "Nugget Ayam Crispy", category: "Nugget & Olahan Ayam", price: "Rp 38.000", size: "500g", rating: 4.9, img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop" },
  { id: "6", name: "Chicken Karage", category: "Nugget & Olahan Ayam", price: "Rp 42.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?q=80&w=600&auto=format&fit=crop" },
  { id: "7", name: "Sosis Sapi Bratwurst", category: "Sosis & Hotdog", price: "Rp 55.000", size: "400g", rating: 4.8, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=600&auto=format&fit=crop" },
  { id: "8", name: "Udang Kupas Segar Beku", category: "Seafood Frozen", price: "Rp 65.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=600&auto=format&fit=crop", tags: ["Bestseller"] },
  { id: "9", name: "Pempek Palembang Beku", category: "Ready to Eat", price: "Rp 55.000", size: "8 pcs", rating: 4.9, img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop" },
  { id: "10", name: "Rendang Sapi Beku", category: "Ready to Eat", price: "Rp 75.000", size: "250g", rating: 4.9, img: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" },
  { id: "11", name: "Edamame Premium", category: "Sayuran Frozen", price: "Rp 28.000", size: "500g", rating: 4.8, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop", tags: ["Healthy"] },
  { id: "12", name: "Mochi Ice Cream Vanilla", category: "Dessert & Snack", price: "Rp 35.000", size: "6 pcs", rating: 4.8, img: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=600&auto=format&fit=crop" },
];

export default function ProductGrid({ initialCategory = "Semua" }: { initialCategory?: string }) {
  const [activeCat, setActiveCat] = useState(initialCategory);
  
  const categories = [
    "Semua", "Dimsum & Siomay", "Bakso & Pentol", "Nugget & Olahan Ayam", 
    "Sosis & Hotdog", "Seafood Frozen", "Sayuran Frozen", "Ready to Eat", 
    "Healthy Range", "Dessert & Snack", "Western Frozen"
  ];

  const filteredProducts = activeCat === "Semua" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCat);

  return (
    <div>
      {/* Category Filter Rail (Airtable style) */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCat === cat 
                ? "bg-ink text-white" 
                : "bg-canvas-soft text-body hover:bg-hairline hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-canvas-soft rounded-2xl p-4 border border-hairline flex flex-col group cursor-pointer"
            >
              <div className="aspect-square bg-canvas rounded-xl mb-4 overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {product.tags && product.tags.includes("Bestseller") && (
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">Bestseller</span>
                )}
              </div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-warning text-sm">★</span>
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <h3 className="font-medium text-ink leading-snug mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-body-mid text-sm mb-4">{product.size}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-semibold text-primary">{product.price}</span>
                <button className="w-8 h-8 rounded-full bg-canvas border border-hairline flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  +
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center text-body-mid">
            Belum ada produk di kategori ini.
          </div>
        )}
      </motion.div>
    </div>
  );
}
