export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            HORECA<span className="text-amber-500">NEXT</span>
          </div>
          <a
            href="mailto:horecanextjobs@gmail.com"
            className="bg-white/10 hover:bg-white/20 transition-colors px-5 py-2 rounded-full text-sm font-semibold border border-white/10"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Werken in de horeca <br />
            <span className="text-amber-gradient">in regio Zutphen</span>
          </h1>

          <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
            Wij koppelen horeca talent direct aan werkgevers die nú personeel zoeken.
            Snel, persoonlijk en zonder gedoe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#vacatures"
              className="btn-primary bg-amber-500 hover:bg-amber-400 text-black px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-[1.03]"
            >
              Bekijk vacatures
            </a>

            <a
              href="mailto:horecanextjobs@gmail.com?subject=Ik zoek personeel"
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              Ik zoek personeel
            </a>
          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1">
              Zutphen & Regio
            </div>
            <p className="text-white/40 text-sm">
              Lokale focus
            </p>
          </div>

          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1">
              Binnen 5 dagen
            </div>
            <p className="text-white/40 text-sm">
              Gemiddelde match
            </p>
          </div>

          <div>
            <div className="text-amber-500 text-2xl font-bold mb-1">
              Direct contact
            </div>
            <p className="text-white/40 text-sm">
              Geen tussenlagen
            </p>
          </div>

        </div>
      </section>

      {/* VACATURES */}
      <section id="vacatures" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Actuele vacatures
          </h2>

          <div className="grid gap-6">

            {/* KOK */}
            <div className="card-lift bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-7 rounded-2xl transition-all">
              <h3 className="text-xl font-bold mb-2">
                Zelfstandig Werkend Kok
              </h3>

              <p className="text-white/60 mb-4">
                Zutphen • €2.800 – €3.600 • Fulltime
              </p>

              <a
                href="mailto:horecanextjobs@gmail.com?subject=Sollicitatie Kok Zutphen"
                className="text-amber-500 font-semibold"
              >
                Solliciteer direct →
              </a>
            </div>

            {/* BEDIENING */}
            <div className="card-lift bg-white/[0.03] border border-white/10 hover:border-amber-500/30 p-7 rounded-2xl transition-all">
              <h3 className="text-xl font-bold mb-2">
                Medewerker Bediening
              </h3>

              <p className="text-white/60 mb-4">
                Zutphen • €2.200 – €2.800 • Fulltime / Parttime
              </p>

              <a
                href="mailto:horecanextjobs@gmail.com?subject=Sollicitatie Bediening Zutphen"
                className="text-amber-500 font-semibold"
              >
                Solliciteer direct →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Zo werkt het
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="card-lift bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h4 className="font-bold mb-2">Kennismaking</h4>
              <p className="text-white/50 text-sm">
                We bespreken jouw wensen of vacature.
              </p>
            </div>

            <div className="card-lift bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h4 className="font-bold mb-2">Match</h4>
              <p className="text-white/50 text-sm">
                Wij koppelen je aan de juiste partij.
              </p>
            </div>

            <div className="card-lift bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h4 className="font-bold mb-2">Start</h4>
              <p className="text-white/50 text-sm">
                Je gaat direct aan de slag.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Klaar voor je volgende stap?
        </h2>

        <a
          href="mailto:horecanextjobs@gmail.com"
          className="btn-primary bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold"
        >
          Stuur ons een e-mail
        </a>

        <p className="text-white/40 text-sm mt-6">
          WhatsApp volgt binnenkort
        </p>

        <p className="text-white/20 text-xs mt-10">
          © HorecaNext 2026
        </p>
      </footer>

    </div>
  );
}
