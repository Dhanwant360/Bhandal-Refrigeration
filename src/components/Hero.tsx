import { Settings, ShieldCheck, Globe, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-40">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/5 blur-[80px] rounded-full -ml-20 -mb-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Expert Engineering Since 1998
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1] mb-8">
              BHANDAL <br />
              <span className="text-blue-500">REFRIGERATION</span>
            </h1>
            <p className="text-lg text-slate-300 mb-12 max-w-lg leading-relaxed font-medium">
              Precision appliance repairs in Jalandhar and international B2B logistics for global trade partners. Professional, reliable, and established.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="primary-btn !px-10 !py-4 flex items-center justify-center gap-3">
                <Settings size={20} />
                Local Repair Support
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-10 py-4 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Globe size={20} />
                International Trade
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-8">
              {[
                { icon: ShieldCheck, label: 'Certified' },
                { icon: Globe, label: 'Logistics' },
                { icon: Truck, label: 'Fast Setup' },
                { icon: Settings, label: 'Tech Expert' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 opacity-60">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon size={16} className="text-blue-400" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Industrial Refrigeration"
                className="w-full grayscale brightness-75 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
              <div className="absolute bottom-10 -left-6 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-100">
                 <div className="text-5xl font-bold text-blue-700 mb-1 leading-none tracking-tighter">25+</div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Years Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
