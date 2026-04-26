import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'Regional Repair Request (Jalandhar)', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', text: data.text });
        setFormData({ name: '', email: '', type: 'Regional Repair Request (Jalandhar)', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Failed to submit' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Business Inquiry</h2>
            {status && (
              <div className={`p-4 mb-6 rounded-xl text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status.text}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                  <input required type="text" className="w-full border border-slate-200 bg-slate-50 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all" placeholder="Enter your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input required type="email" className="w-full border border-slate-200 bg-slate-50 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all" placeholder="email@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Inquiry Type</label>
                <select className="w-full border border-slate-200 bg-slate-50 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                  <option>Regional Repair Request (Jalandhar)</option>
                  <option>International Wholesale Inquiry</option>
                  <option>Bulk Order Quote</option>
                  <option>Logistics Collaboration</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Requirements / Message</label>
                <textarea required className="w-full border border-slate-200 bg-slate-50 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all h-32" placeholder="Describe your volume, destination, or repair needs..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" disabled={loading} className="primary-btn w-full !py-4 uppercase tracking-widest text-sm disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>

          <div className="bg-white p-12 space-y-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/5 -mr-16 -mt-16 rounded-full"></div>
            <div>
              <h4 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-8">Contact Information</h4>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-700" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                    V.P.O. Bhandal Himmat (JAL.),<br />
                    Jalandhar, Punjab, India
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-blue-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-900 tracking-tight">Gurpreet: +91 99158-17212</p>
                    <p className="font-bold text-slate-900 tracking-tight mt-1">Mandeep: +91 94781-31326</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-blue-700" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">trade@bhandal.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6">Service Status</h4>
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Active Ready</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">EST. 1998</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={16} className="text-blue-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Response Guarantee</span>
                </div>
                <p className="text-xs font-medium text-slate-300 leading-relaxed">Our export division reviews B2B quotes within 24 business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
