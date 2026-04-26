import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'Gurpreet', phone: '+919915817212', displayPhone: '+91 99158-17212' },
    { name: 'Mandeep', phone: '+919478131326', displayPhone: '+91 94781-31326' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Contact Us</h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:bg-slate-100 p-1 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div key={contact.name} className="flex flex-col gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-semibold text-sm text-slate-700">{contact.name} ({contact.displayPhone})</span>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${contact.phone.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#20b858] transition-colors"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                    >
                      <Phone size={14} /> Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20b858] transition-colors flex items-center gap-2 group"
          >
            <MessageCircle size={24} />
            <span className="font-semibold px-1">Contact Them</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
