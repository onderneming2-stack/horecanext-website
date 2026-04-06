import React from 'react';
import { Mail, ArrowRight, CheckCircle2, MapPin, Clock, Euro } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-amber-500/30 font-sans">
      
      {/* 1. Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            HORECA<span className="text-amber-500">NEXT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#vacatures" className="hover:text-amber-500 transition-colors">Vacatures</a>
            <a href="#werkgevers" className="hover:text-amber-500 transition-colors">Werkgevers</a>
          </div>
          <a href="mailto:info@horecanext.nl" className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-sm font-semibold transition-all border border-white/10">
            Contact
          </a>
        </div>
      </nav>

      {/* 2. Hero Section with Glow Effect */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Amber Glow Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Next Step. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Next Level.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed">
              Wij verbinden ambitieus talent aan de meest exclusieve horecazaken in <span className="text-white">regio Zutphen</span>. Persoonlijk, discreet en binnen 7 dagen resultaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#vacatures" className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                Ik zoek een uitdaging <ArrowRight size={20} />
              </a>
              <a href="mailto:info@horecanext.nl" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all">
                Ik zoek personeel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-amber-500 font-bold text-3xl">Zutphen & Regio</div>
              <p className="text-white/40 uppercase tracking-widest text-xs">Focusgebied</p>
            </div>
            <div className="space-y-2">
              <div className="text-amber-500 font-bold text-3xl">5 Dagen</div>
              <p className="text-white/40 uppercase tracking-widest text-xs">Gemiddelde Match</p>
            </div>
            <div className="space-y-2">
              <div className="text-amber-500 font-bold text-3xl">1-op-1</div>
              <p className="text-white/40 uppercase tracking-widest text-xs">Persoonlijk Contact</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Job (De Geloofwaardigheid-booster) */}
      <section id="vacatures" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Urgent <span className="h-[1px] flex-grow bg-white/10"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-all hover:border-amber-500/50">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-bold mb-4 uppercase tracking-tighter">
                  Featured Match
                </div>
                <h3 className="text-3xl font-bold mb-4">Zelfstandig Werkend Kok</h3>
                <div className="flex flex-wrap gap-6 text-white/60">
                  <span className="flex items-center gap-2"><MapPin size={18} className="text-amber-500"/> Regio Zutphen</span>
                  <span className="flex items-center gap-2"><Euro size={18} className="text-amber-500"/> €2.800 - €3.600</span>
                  <span className="flex items-center gap-2"><Clock size={18} className="text-amber-500"/> Fulltime</span>
                </div>
              </div>
              <a href="mailto:info@horecanext.nl?subject=Sollicitatie%20Kok%20Zutphen" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-colors text-center">
                Solliciteer Nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works (Minimalist) */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Geen gedoe.</h2>
            <p className="text-white/50">Recruitment zoals het hoort. Wij screenen, jij start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Kennismaken", desc: "Een kort gesprek over jouw ambities of vacature." },
              { title: "De Match", desc: "Wij vinden binnen 5 dagen de perfecte klik." },
              { title: "Next Level", desc: "Je start direct op contract bij de opdrachtgever." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-500 text-black font-black rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-white/40 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer / CTA */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Klaar voor de volgende stap?</h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:info@horecanext.nl" className="flex items-center gap-3 text-2xl font-semibold text-amber-500 hover:text-amber-400 transition-colors">
              <Mail /> info@horecanext.nl
            </a>
            <p className="text-white/40 text-sm mt-8 italic">
              "Binnenkort ook direct bereikbaar via WhatsApp"
            </p>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white/30 tracking-widest font-bold uppercase">
              HORECANEXT &copy; 2026
            </div>
            <div className="flex gap-8 text-white/30 text-xs font-bold uppercase tracking-widest">
              <span>Instagram</span>
              <span>LinkedIn</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
