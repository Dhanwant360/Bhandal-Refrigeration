import { Snowflake, Refrigerator, Smartphone, Waves, Droplet, ArrowRight, Phone } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: "Air Conditioners",
    desc: "Complete repair, gas refilling, and installation for Split and Window ACs.",
    price: "Reliable Service"
  },
  {
    icon: Refrigerator,
    title: "Refrigerators",
    desc: "Direct-cool and Frost-free repair. Compressor replacement and gas charging.",
    price: "Expert Fix"
  },
  {
    icon: Waves,
    title: "Washing Machines",
    desc: "Front-load and Top-load maintenance. PCB repair and drum replacements.",
    price: "Prompt Repair"
  },
  {
    icon: Droplet,
    title: "RO Filters",
    desc: "Advanced water purification sales and filter replacement services.",
    price: "Pure Water"
  },
  {
    icon: Smartphone,
    title: "Geysers",
    desc: "Gas and Electric water heater fitting and element replacement.",
    price: "Safe Fitting"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-700 text-xs font-bold uppercase tracking-[0.3em] mb-4">Precision Support</h4>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Local Repair & Fitting</h2>
            <p className="mt-4 text-slate-600 font-medium border-l-4 border-blue-600 pl-6 py-1">
              Trusted technical support in Jalandhar. We bring the tools and expertise directly to your facility or home.
            </p>
          </div>
          <button className="outline-btn text-sm flex items-center gap-2 group !bg-white">
            All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="industrial-card p-10 hover:border-blue-200 transition-all group hover:-translate-y-1">
              <div className="bg-blue-50 text-blue-700 w-12 h-12 flex items-center justify-center mb-8 rounded-xl ring-4 ring-blue-50/50">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  {service.price}
                </span>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
          <div className="bg-blue-700 p-10 rounded-2xl flex flex-col justify-center text-white shadow-xl shadow-blue-200">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Urgent Technician?</h3>
            <p className="text-sm text-blue-100 mb-10 leading-relaxed">Our senior engineers are ready for immediate dispatch across the region.</p>
            <div className="space-y-4">
              <a href="tel:+919915817212" className="flex items-center justify-between p-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all">
                <div>
                  <div className="text-[10px] font-bold opacity-60 uppercase mb-0.5">Gurpreet (Head)</div>
                  <div className="font-bold">+91 99158-17212</div>
                </div>
                <Phone size={18} className="opacity-40" />
              </a>
              <a href="tel:+919478131326" className="flex items-center justify-between p-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all">
                <div>
                  <div className="text-[10px] font-bold opacity-60 uppercase mb-0.5">Mandeep (Trade)</div>
                  <div className="font-bold">+91 94781-31326</div>
                </div>
                <Phone size={18} className="opacity-40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
