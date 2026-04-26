import { Globe, Container, Ship, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function GlobalTrade() {
  return (
    <section id="trade" className="bg-slate-900 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full"></div>
             <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" 
                 alt="Global Logistic Hub"
                 className="w-full grayscale brightness-75 border-none"
               />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-blue-700 p-10 rounded-2xl shadow-xl border border-white/10 hidden md:block">
               <div className="text-5xl font-bold mb-2 tracking-tighter">1998</div>
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">Established Excellence</div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h4 className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">Global Operations</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Bridging Continents<br />With <span className="text-blue-500">Logistics Mastery</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl leading-relaxed">
              Bhandal Global Trading specializes in the B2B import and export of refrigeration units and home appliances. We handle volume procurement and international shipping.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Container, title: 'Bulk Volume', desc: 'Secure high-volume orders for regional distributors.' },
                { icon: Ship, title: 'Global Logistics', desc: 'Integrated shipping protocols for sea and air freight.' },
                { icon: Globe, title: 'Network', desc: 'Sourcing from leading manufacturers worldwide.' },
                { icon: BarChart3, title: 'Cost Efficiency', desc: 'Optimized wholesale pricing for global trade.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-bold tracking-tight text-white mb-1 uppercase text-sm tracking-widest">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-white text-blue-900 px-10 py-4 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95">
              Request Export Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
