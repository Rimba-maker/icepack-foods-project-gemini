import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResellerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-canvas-soft rounded-3xl p-8 lg:p-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-2xl font-medium mb-6 text-ink">Mulai Bisnismu Sekarang</h3>
            <p className="text-body mb-8">Isi form di bawah ini dan tim kami akan menghubungi Anda via WhatsApp dalam waktu 1x24 jam.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-ink">Nama Lengkap</label>
                <input required type="text" className="w-full bg-canvas border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-ink">No. WhatsApp</label>
                <input required type="tel" className="w-full bg-canvas border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-ink">Lokasi (Kecamatan/Kota)</label>
                <input required type="text" className="w-full bg-canvas border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2 bg-primary text-on-primary font-semibold py-4 rounded-full hover:bg-primary-hover transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Memproses..." : "Daftar Reseller Gratis"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-medium mb-2 text-ink">Pendaftaran Berhasil!</h3>
            <p className="text-body mb-8">
              Tim Reseller IcePack akan menghubungi Anda via WhatsApp untuk memberikan akses katalog dan materi marketing.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
