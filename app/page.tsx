export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">

      {/* â”€â”€ NAV â”€â”€ */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            HORECA<span className="text-amber-gradient">NEXT</span>
          </div>
          <a
            href="mailto:horecanextjobs@gmail.com"
            className="bg-white/10 hover:bg-white/20 transition-colors px-5 py-2 rounded-full text-sm font-semibold border border-white/10"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        {/* Bokeh glows */}
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-amber-600/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium"
            style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.28)', color: '#F59E0B' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse" />
            Actief in regio Zutphen & Gelderland
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Werken in de horeca <br />
            <span className="text-amber-gradient">in regio Zutphen?</span>
          </h1>

          <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            Wij verbinden horeca talent direct met werkgevers die nÃº personeel zoeken.
            Snel, persoonlijk en zonder gedoe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:horecanextjobs@gmail.com?subject=Ik zoek een nieuwe uitdaging"
              className="btn-primary inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(217,119,6,0.4)]"
            >
              Ik zoek een uitdaging
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a
              href="mailto:horecanextjobs@gmail.com?subject=Ik zoek personeel"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Ik zoek personeel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* â”€â”€ TRUST BAR â”€â”€ */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Zutphen & Regio
            </div>
            <p className="text-white/40 text-sm">Focus op lokale markt</p>
          </div>
          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Binnen 5 dagen
            </div>
            <p className="text-white/40 text-sm">Gemiddelde match</p>
          </div>
          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Direct contact
            </div>
            <p className="text-white/40 text-sm">Geen tussenlagen</p>
          </div>
        </div>
      </section>

      {/* â”€â”€ VACATURES â”€â”€ */}
      <section id="vacatures" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">Actuele vacatures</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Nu beschikbaar
            </h2>
          </div>

          <div className="grid gap-5">

            {/* Kok */}
            <div className="card-lift group bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-7 rounded-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: 'rgba(217,119,6,0.12)', color: '#F59E0B', border: '1px solid rgba(217,119,6,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Actieve vacature
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Zelfstandig Werkend Kok
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Zutphen
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      â‚¬2.800 â€“ â‚¬3.600
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Fulltime
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      Direct op contract
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:horecanextjobs@gmail.com?subject=Sollicitatie: Zelfstandig Werkend Kok Zutphen"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_24px_rgba(217,119,6,0.4)]"
                >
                  Solliciteer direct
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>

            {/* Bediening */}
            <div className="card-lift group bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-7 rounded-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: 'rgba(217,119,6,0.12)', color: '#F59E0B', border: '1px solid rgba(217,119,6,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Actieve vacature
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Medewerker Bediening
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Zutphen
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      â‚¬2.200 â€“ â‚¬2.800
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Fulltime / Parttime
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:horecanextjobs@gmail.com?subject=Sollicitatie: Medewerker Bediening Zutphen"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                >
                  Solliciteer direct
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* â”€â”€ HOW IT WORKS â”€â”€ */}
      <section className="py-24 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">Werkwijze</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Zo werkt het
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Kennismaking', desc: 'We bespreken jouw wensen of vacature in een kort, persoonlijk gesprek.' },
              { n: '02', title: 'Match', desc: 'Wij koppelen je aan de juiste kandidaat of werkgever. Geen ruis, geen gedoe.' },
              { n: '03', title: 'Start', desc: 'Je gaat direct aan de slag. Wij blijven beschikbaar voor follow-up.' },
            ].map((step) => (
              <div key={step.n} className="card-lift relative bg-white/[0.03] border border-white/8 hover:border-amber-500/20 rounded-2xl p-8 transition-all duration-300 group">
                <div className="text-4xl font-bold mb-5 text-amber-gradient opacity-60" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.n}
                </div>
                <h4 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* â”€â”€ FOOTER / CTA â”€â”€ */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">

          <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">Direct contact</span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Klaar voor je volgende stap?
          </h2>

          <p className="text-white/50 mb-8 leading-relaxed">
            Geen formulieren. Gewoon even mailen â€” we nemen snel contact met je op.
          </p>

          <a
            href="mailto:horecanextjobs@gmail.com"
            className="btn-primary inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(217,119,6,0.4)] mb-5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Stuur ons direct een e-mail
          </a>

          <div className="text-white/30 text-sm mb-10">
            horecanextjobs@gmail.com
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
          >
            <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
            Binnenkort ook bereikbaar via WhatsApp
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-white/20 text-xs">
            Â© HorecaNext 2026 â€” Zutphen, Gelderland
          </div>

        </div>
      </footer>

    </div>
  )
}
