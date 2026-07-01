import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CatalogDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real implementation would trigger a download or send an email here
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
      >
        Download Catalog B2B
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-canvas w-full max-w-md rounded-[24px] p-8 relative z-10 shadow-xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-canvas-soft text-body"
              >
                ✕
              </button>

              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-medium mb-2 text-ink">Download Katalog</h3>
                  <p className="text-body text-sm mb-6">Masukkan email untuk menerima katalog produk & harga grosir terbaru.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-ink">Nama Lengkap</label>
                      <input required type="text" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-ink">Nama Bisnis</label>
                      <input required type="text" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-ink">Email</label>
                      <input required type="email" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-ink">Tipe Bisnis</label>
                      <select required className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors appearance-none">
                        <option value="">Pilih tipe bisnis...</option>
                        <option value="restoran">Restoran / Warteg</option>
                        <option value="cloud_kitchen">Cloud Kitchen</option>
                        <option value="hotel">Hotel / Resort</option>
                        <option value="catering">Catering</option>
                        <option value="minimarket">Minimarket / Toko</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full mt-4 bg-b2b text-white font-semibold py-4 rounded-full hover:bg-b2b-hover transition-colors">
                      Kirim Katalog
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-medium mb-2 text-ink">Berhasil Terkirim!</h3>
                  <p className="text-body">Silakan cek inbox email Anda untuk mengunduh katalog PDF IcePack Foods.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
