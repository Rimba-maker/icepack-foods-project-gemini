import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function B2BForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-canvas rounded-[32px] p-8 md:p-12 border border-hairline shadow-sm relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-3xl font-medium mb-2 text-ink">Mulai Order Grosir Pertama</h2>
            <p className="text-body mb-8">Isi formulir ini dan Account Manager kami akan menghubungi Anda dalam 1x24 jam untuk diskusi harga & kebutuhan.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-ink">Nama PIC</label>
                  <input required type="text" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-ink">No. WhatsApp</label>
                  <input required type="tel" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-ink">Nama Bisnis</label>
                <input required type="text" className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-ink">Estimasi Kebutuhan (kg per bulan)</label>
                <select required className="w-full bg-canvas-soft border border-hairline-strong rounded-xl px-4 py-3 focus:outline-none focus:border-b2b focus:ring-1 focus:ring-b2b transition-colors appearance-none">
                  <option value="">Pilih estimasi volume...</option>
                  <option value="10-50">10 - 50 kg (Trial)</option>
                  <option value="50-200">50 - 200 kg</option>
                  <option value="200-500">200 - 500 kg</option>
                  <option value=">500">&gt; 500 kg</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-4 bg-b2b text-white font-semibold py-4 rounded-full hover:bg-b2b-hover transition-colors text-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Permintaan Konsultasi"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              ✓
            </div>
            <h2 className="text-3xl font-medium mb-4 text-ink">Permintaan Diterima!</h2>
            <p className="text-body text-lg mb-8 max-w-md mx-auto">
              Terima kasih. Account Manager kami akan menghubungi Anda via WhatsApp dalam waktu maksimal 1x24 jam kerja.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-8 py-3 bg-canvas-soft text-ink font-medium rounded-full hover:bg-hairline transition-colors"
            >
              Kirim form lainnya
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
