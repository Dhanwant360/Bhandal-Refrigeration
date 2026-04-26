import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <div className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              BHANDAL <span className="text-blue-700">REFRIGERATION</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Services</a>
            <a href="#trade" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Global Trade</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <Phone size={16} className="text-blue-700" />
              <span className="font-bold">+91 99158-17212</span>
            </div>
            <button className="primary-btn !py-2.5 !text-xs !tracking-widest uppercase">
              Book Service
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-slate-100 text-slate-800 p-2 rounded-lg hover:bg-slate-200 transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-blue-700">Services</a>
            <a href="#trade" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-blue-700">Global Trade</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-semibold text-slate-800 hover:text-blue-700">Contact Us</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone size={18} className="text-blue-700" />
                <span className="font-bold">+91 99158-17212</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
