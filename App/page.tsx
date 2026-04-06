'use client'

import Image from 'next/image'

/* â”€â”€â”€ Icons (inline SVG, no external libraries) â”€â”€â”€ */

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

/* â”€â”€â”€ Nav â”€â”€â”€ */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{ background: 'linear-gradient(to bottom, rgba(15,15,15,0.95), transparent)', backdropFilter: 'blur(8px)' }}>
      {/* Logo placeholder */}
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
          {/* If /public/logo.png exists it will show; otherwise amber placeholder */}
          <span className="text-black font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>HN</span>
        </div>
        <span className="text-white font-semibold tracking-tight text-lg" style={{ fontFamily: 'var(--font-display)' }}>
          Horeca<span className="text-amber-gradient">Next</span>
        </span>
      </div>

      {/* CTA nav button */}
      <a
        href="mailto:horecanextjobs@gmail.com"
        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
        style={{ border: '1px solid rgba(217,119,6,0.5)', color: '#F59E0B', background: 'rgba(217,119,6,0.08)' }}>
        <IconMail />
        Contact
      </a>
    </nav>
  )
}

/* â”€â”€â”€ Hero â”€â”€â”€ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
      {/* Bokeh orbs */}
      <div className="bokeh-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #D97706 0%, transparent 70%)', top: '-10%', left: '-10%', opacity: 0.18, animation: 'glowPulse 5s ease-in-out infinite' }} />
      <div className="bokeh-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)', bottom: '0%', right: '-8%', opacity: 0.14, animation: 'glowPulse 7s ease-in-out infinite 1s' }} />
      <div className="bokeh-orb" style={{ width: 250, height: 250, background: 'radial-gradient(circle, #D97706 0%, transparent 70%)', top: '40%', right: '20%', opacity: 0.1, animation: 'glowPulse 6s ease-in-out infinite 2s' }} />

      {/* Fine dot grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #D97706 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="fade-in-up animate-delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#F59E0B' }}>
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
          Actief in regio Zutphen & Gelderland
        </div>

        {/* Headline */}
        <h1 className="fade-in-up animate-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
          HorecaNext â€”{' '}
          <br className="hidden sm:block" />
          <span className="text-amber-gradient">Jouw volgende stap</span>
          <br />
          in de horeca.
        </h1>

        {/* Subtext */}
        <p className="fade-in-up animate-delay-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.65)' }}>
          Wij verbinden talent met sterke horecazaken in regio Zutphen & Gelderland.
          <br className="hidden sm:block" />
          Snel, persoonlijk en zonder gedoe.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:horecanextjobs@gmail.com?subject=Ik zoek een nieuwe uitdaging"
            className="btn-primary group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #D97706, #F59E0B)',
              color: '#0F0F0F',
              boxShadow: '0 8px 32px rgba(217,119,6,0.35)'
            }}>
            Ik zoek een nieuwe uitdaging
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight />
            </span>
          </a>

          <a
            href="mailto:horecanextjobs@gmail.com?subject=Ik zoek personeel"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              border: '1.5px solid rgba(217,119,6,0.45)',
              color: '#F5F0E8',
              background: 'rgba(217,119,6,0.06)',
              backdropFilter: 'blur(8px)'
            }}>
            Ik zoek personeel
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <IconArrowRight />
            </span>
          </a>
        </div>

        {/* Social proof micro-copy */}
        <div className="fade-in-up animate-delay-500 flex items-center justify-center gap-1.5 mt-8">
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ color: '#F59E0B' }}><IconStar /></span>
          ))}
          <span className="ml-2 text-sm" style={{ color: 'rgba(245,240,232,0.5)' }}>
            Persoonlijk. Snel. Lokaal.
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0F0F0F)' }} />
    </section>
  )
}

/* â”€â”€â”€ Trust Section â”€â”€â”€ */
function TrustSection() {
  const pillars = [
    {
      icon: <IconMapPin />,
      title: 'Regio Zutphen & Gelderland',
      desc: 'Wij kennen de lokale markt, werkgevers en kandidaten persoonlijk.',
    },
    {
      icon: <IconBolt />,
      title: 'Gemiddeld binnen 5 dagen',
      desc: 'Geen eindeloos wachten â€” wij zorgen voor een snelle, kwalitatieve match.',
    },
    {
      icon: <IconUsers />,
      title: 'Persoonlijk, geen platforms',
      desc: 'Geen anonieme sollicitaties. Jij praat met een mens, niet met een algoritme.',
    },
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="divider-amber max-w-5xl mx-auto mb-20" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-lift group relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                border: '1px solid rgba(217,119,6,0.2)',
              }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(217,119,6,0.08), transparent 70%)' }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#F59E0B' }}>
                  {p.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ fontFamily: 'var(--font-display)', color: '#F5F0E8' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* â”€â”€â”€ How It Works â”€â”€â”€ */
function HowItWorks() {
  const candidateSteps = [
    { n: '01', title: 'Kennismaken', desc: 'Stuur een mailtje. We plannen een kort gesprek en leren je kennen.' },
    { n: '02', title: 'Matchen', desc: 'We zoeken actief naar passende vacatures en werkgevers voor jou.' },
    { n: '03', title: 'Starten', desc: 'Jij stapt in dienst en wij blijven beschikbaar voor follow-up.' },
  ]

  const employerSteps = [
    { n: '01', title: 'Vacature delen', desc: 'Vertel ons wat je zoekt. Een gesprek van 10 minuten is genoeg.' },
    { n: '02', title: 'Kandidaten ontvangen', desc: 'Wij selecteren en sturen je alleen passende kandidaten.' },
    { n: '03', title: 'Starten', desc: 'Je nieuwe medewerker begint. Wij regelen de rest.' },
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D97706' }}>Hoe het werkt</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Drie stappen. Dat is alles.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Candidates */}
          <div className="rounded-3xl p-8 sm:p-10"
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', border: '1px solid rgba(217,119,6,0.18)' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(217,119,6,0.15)', color: '#F59E0B' }}>
                Voor kandidaten
              </div>
            </div>

            <div className="space-y-6">
              {candidateSteps.map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(217,119,6,0.12)', color: '#D97706', border: '1px solid rgba(217,119,6,0.25)' }}>
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="mailto:horecanextjobs@gmail.com?subject=Ik zoek een nieuwe uitdaging"
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: '#F59E0B' }}>
                Begin vandaag nog
                <IconArrowRight />
              </a>
            </div>
          </div>

          {/* Employers */}
          <div className="rounded-3xl p-8 sm:p-10"
            style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))', border: '1px solid rgba(217,119,6,0.18)' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: 'rgba(217,119,6,0.15)', color: '#F59E0B' }}>
                Voor werkgevers
              </div>
            </div>

            <div className="space-y-6">
              {employerSteps.map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(217,119,6,0.12)', color: '#D97706', border: '1px solid rgba(217,119,6,0.25)' }}>
                    {step.n}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold mb-1" style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}>{step.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="mailto:horecanextjobs@gmail.com?subject=Ik zoek personeel"
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: '#F59E0B' }}>
                Stuur ons een vacature
                <IconArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* â”€â”€â”€ Featured Vacancy â”€â”€â”€ */
function FeaturedVacancy() {
  return (
    <section className="relative py-20 px-6">
      <div className="divider-amber max-w-5xl mx-auto mb-20" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D97706' }}>Uitgelichte vacature</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Nu beschikbaar
          </h2>
        </div>

        {/* Vacancy Card */}
        <div className="card-lift relative rounded-3xl overflow-hidden mx-auto max-w-2xl"
          style={{
            background: 'linear-gradient(145deg, #1A1500, #0F0F0F)',
            border: '1px solid rgba(217,119,6,0.35)',
            boxShadow: '0 0 0 1px rgba(217,119,6,0.08), 0 24px 64px rgba(0,0,0,0.5)'
          }}>
          {/* Top amber bar */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #D97706, #F59E0B, #FCD34D)' }} />

          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, rgba(217,119,6,0.15), transparent 70%)' }} />

          <div className="p-8 sm:p-10 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: 'rgba(217,119,6,0.15)', color: '#F59E0B', border: '1px solid rgba(217,119,6,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" style={{ animation: 'glowPulse 2s ease-in-out infinite' }} />
              Actieve vacature
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-display)', color: '#F5F0E8' }}>
              Zelfstandig werkend kok
            </h3>
            <p className="text-base mb-8" style={{ color: 'rgba(245,240,232,0.5)' }}>
              Regio Zutphen â€” Gelderland
            </p>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Type', value: 'Fulltime' },
                { label: 'Salaris', value: 'â‚¬2.800 â€“ â‚¬3.600' },
                { label: 'Contract', value: 'Direct in dienst' },
              ].map((d, i) => (
                <div key={i} className="rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-xs mb-1" style={{ color: 'rgba(245,240,232,0.4)' }}>{d.label}</div>
                  <div className="font-semibold text-sm" style={{ color: '#F5F0E8' }}>{d.value}</div>
                </div>
              ))}
            </div>

            {/* Perks */}
            <div className="space-y-2 mb-8">
              {[
                'Zelfstandig werken in een professionele keuken',
                'Direct op contract bij de werkgever',
                'Ruimte voor eigen inbreng en creativiteit',
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(217,119,6,0.2)', color: '#F59E0B' }}>
                    <IconCheck />
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(245,240,232,0.65)' }}>{perk}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:horecanextjobs@gmail.com?subject=Interesse: Zelfstandig werkend kok Zutphen"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #D97706, #F59E0B)',
                color: '#0F0F0F',
                boxShadow: '0 8px 24px rgba(217,119,6,0.3)'
              }}>
              Reageer op deze vacature
              <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrowRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* â”€â”€â”€ Contact / CTA Section â”€â”€â”€ */
function ContactSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="bokeh-orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, #D97706 0%, transparent 65%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.07 }} />

      <div className="divider-amber max-w-5xl mx-auto mb-20" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D97706' }}>Direct contact</span>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}>
          Klaar voor je{' '}
          <span className="text-amber-gradient">volgende stap?</span>
        </h2>

        <p className="text-base sm:text-lg mb-3 leading-relaxed"
          style={{ color: 'rgba(245,240,232,0.6)' }}>
          Geen formulieren. Gewoon even mailen en we nemen snel contact met je op.
        </p>
        <p className="text-sm mb-10" style={{ color: 'rgba(245,240,232,0.35)' }}>
          Reactietijd gemiddeld binnen 24 uur.
        </p>

        {/* Main CTA */}
        <a
          href="mailto:horecanextjobs@gmail.com"
          className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-6"
          style={{
            background: 'linear-gradient(135deg, #D97706, #F59E0B)',
            color: '#0F0F0F',
            boxShadow: '0 12px 40px rgba(217,119,6,0.4)'
          }}>
          <IconMail />
          Stuur ons direct een e-mail
          <span className="transition-transform duration-300 group-hover:translate-x-1"><IconArrowRight /></span>
        </a>

        {/* Email address shown */}
        <div className="text-sm mb-8" style={{ color: 'rgba(245,240,232,0.4)' }}>
          horecanextjobs@gmail.com
        </div>

        {/* WhatsApp coming soon note */}
        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(245,240,232,0.4)'
          }}>
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: 'rgba(245,240,232,0.3)' }} />
          Binnenkort ook bereikbaar via WhatsApp
        </div>
      </div>
    </section>
  )
}

/* â”€â”€â”€ Footer â”€â”€â”€ */
function Footer() {
  return (
    <footer className="relative border-t px-6 py-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'rgba(245,240,232,0.5)' }}>
            Horeca<span style={{ color: '#D97706' }}>Next</span>
          </span>
        </div>

        <p className="text-xs text-center sm:text-right" style={{ color: 'rgba(245,240,232,0.25)' }}>
          Â© {new Date().getFullYear()} HorecaNext â€” Zutphen, Gelderland
          <span className="mx-2">Â·</span>
          <a href="mailto:horecanextjobs@gmail.com" className="hover:text-amber-500 transition-colors" style={{ color: 'rgba(245,240,232,0.35)' }}>
            horecanextjobs@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

/* â”€â”€â”€ Page â”€â”€â”€ */
export default function Home() {
  return (
    <main className="relative" style={{ background: '#0F0F0F' }}>
      <Nav />
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <FeaturedVacancy />
      <ContactSection />
      <Footer />
    </main>
  )
}
