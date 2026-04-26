export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-tight text-slate-900 uppercase mb-8">
              BHANDAL <span className="text-blue-700">REFRIGERATION</span>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-widest leading-relaxed font-semibold">
              Serving the Jalandhar region and global B2B markets with engineering precision since 1998.
            </p>
          </div>
          
          {[
            { title: 'Divisions', links: ['Local Repairs', 'Import/Export', 'Bulk Sourcing', 'Retail Sales'] },
            { title: 'Support', links: ['About Us', 'Operational Areas', 'Trade Terms', 'Contact'] }
          ].map((col, i) => (
            <div key={i}>
              <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">{col.title}</h5>
              <ul className="space-y-5 text-[11px] text-slate-500 uppercase font-bold tracking-widest">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="hover:text-blue-700 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">Connect</h5>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'X'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all shadow-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.3em]">
            © 2024 Bhandal Refrigeration & Logistics
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.3em]">Global Logistics Operations Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
