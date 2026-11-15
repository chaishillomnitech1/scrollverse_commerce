const HOME = "https://scrollverse.co";

const destinations = [
  { title: "Exchange", detail: "Market research, digital-asset readiness, and the ScrollVerse exchange pathway.", href: HOME + "/exchange", tag: "EXCHANGE" },
  { title: "Crypto hub", detail: "Explore the existing crypto hub and digital-asset readiness route.", href: HOME + "/crypto", tag: "WEB3" },
  { title: "Currency exchange", detail: "Open the existing fiat and digital currency route.", href: HOME + "/exchange/currencies", tag: "CURRENCIES" },
  { title: "Staking", detail: "Open the existing staking experience and its current release state.", href: HOME + "/staking", tag: "ON-CHAIN" },
  { title: "Payment choices", detail: "See public provider destinations and clearly labeled release-required lanes.", href: HOME + "/payment-options", tag: "PAYMENTS" },
];

const worlds = [
  { title: "Evolution Lookbook", detail: "Creator-supplied visual collections, motion studies, source records, and accessible descriptions.", href: HOME + "/evolution-lookbook", tag: "ART & MOTION" },
  { title: "Omniland", detail: "Enter the consoleless world concept and its connected story pathways.", href: HOME + "/omniland-cinematic-gateway", tag: "IMMERSIVE WORLDS" },
  { title: "Books & media", detail: "Discover reading, listening, film, and creator-led media routes.", href: HOME + "/books-media-readiness", tag: "LIBRARY" },
  { title: "Sovereign Codex", detail: "Explore the wider ScrollVerse knowledge and architecture.", href: HOME + "/sovereign-codex", tag: "KNOWLEDGE" },
  { title: "Shop & editions", detail: "Open the connected commerce catalog and existing product routes.", href: "/search", tag: "DIRECT TO CUSTOMER" },
];

const paymentLanes = [
  { name: "Cash App", state: "Owner-stated public handoff", href: "https://cash.app/$chaisthegreat28", action: "Open Cash App" },
  { name: "PayPal", state: "Awaiting confirmed public destination", href: null, action: "Not yet released" },
  { name: "Chime", state: "Awaiting confirmed public destination", href: null, action: "Not yet released" },
  { name: "Stripe / card checkout", state: "Item-specific checkout requires release and live verification", href: null, action: "Release-gated" },
];

function Card({ item }: { item: { title: string; detail: string; href: string; tag: string } }) {
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]">
      <div className="text-[10px] font-semibold tracking-[0.24em] text-cyan-200">{item.tag}</div>
      <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
      <div className="mt-6 text-sm font-semibold text-amber-200 group-hover:text-amber-100">Explore pathway ↗</div>
    </a>
  );
}

export default function ScrollVerseHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050B1A] text-white">
      <section className="relative isolate border-b border-cyan-300/15">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_15%,rgba(0,212,255,.18),transparent_36%),radial-gradient(ellipse_at_88%_55%,rgba(185,140,255,.15),transparent_32%),linear-gradient(145deg,#050B1A,#10152B_55%,#071426)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:56px_56px]" />
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="text-sm font-black tracking-[0.28em] text-white">SCROLLVERSE<span className="text-cyan-300">.∞</span></a>
          <nav className="hidden items-center gap-7 text-sm text-slate-200 md:flex">
            <a href="#worlds" className="hover:text-cyan-200">Discover</a>
            <a href="#exchange" className="hover:text-cyan-200">Exchange</a>
            <a href="#payments" className="hover:text-cyan-200">Payment routes</a>
            <a href={HOME + "/site-map"} target="_blank" rel="noreferrer" className="hover:text-cyan-200">Site map ↗</a>
          </nav>
          <a href={HOME + "/site-map"} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-200/40 px-4 py-2 text-xs font-bold tracking-wide text-cyan-100 hover:bg-cyan-200/10">ENTER THE ORIGINAL ↗</a>
        </header>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-32 lg:pt-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-cyan-200">A LIVING DIGITAL ECOSYSTEM · DIRECT TO YOU</p>
            <p className="mt-3 text-[10px] font-semibold tracking-[0.24em] text-amber-200">TRUST BEHIND THE VEIL · PROOF IN EVERY ROUTE</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Enter the <span className="bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-clip-text text-transparent">ScrollVerse.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">A connected universe for discovery, creator-owned media, books, visual worlds, commerce, digital identity, and Web3 pathways. Explore freely. Choose your route. Follow the evidence.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#worlds" className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-black text-[#06101D] transition hover:bg-cyan-200">Explore the worlds</a>
              <a href="#exchange" className="rounded-full border border-amber-200/50 px-7 py-3.5 text-sm font-bold text-amber-100 transition hover:bg-amber-200/10">Open exchange routes</a>
            </div>
            <p className="mt-8 text-xs leading-6 text-slate-400">An independent customer-facing companion to ScrollVerse.co. Original source identities and routes remain preserved.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/20 via-violet-400/10 to-amber-200/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0B1730] shadow-2xl shadow-cyan-950/40">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032498436/XkJtdnvin6DhqjiCQ3fUyz/hero-main-8gw8MRg69ZEcJWofUHGwHK.webp" alt="ScrollVerse Trinity Empire creator-supplied hero artwork" className="aspect-[4/3] w-full object-cover" />
              <div className="border-t border-white/10 p-5">
                <div className="text-[10px] tracking-[0.24em] text-cyan-200">SCROLLVERSE TRINITY EMPIRE</div>
                <div className="mt-2 text-xl font-bold">Independent identity. Shared foundation. Connected purpose.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="worlds" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-200">DISCOVER THE ECOSYSTEM</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">More than a storefront.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">Move from the living archive to immersive worlds, from creator media to knowledge, and from discovery to customer pathways—without collapsing independent projects into one identity.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{worlds.map((item) => <Card key={item.title} item={item} />)}</div>
      </section>

      <section id="exchange" className="border-y border-cyan-200/10 bg-[#0A1428]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-amber-200">OMNIEX · FINANCIAL HIGHWAYS</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">Your routes. Your choices.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">The customer site connects to the existing ScrollVerse exchange, crypto, staking, and currency pathways. Each route displays its actual operating state; a route is not represented as an active exchange, custody service, or transaction until independently verified.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">{destinations.map((item) => <Card key={item.title} item={item} />)}</div>
          </div>
        </div>
      </section>

      <section id="payments" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-200">DIRECT-TO-CUSTOMER PAYMENT CHOICES</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Clear destinations. No invented checkout.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">Payment options appear only when a safe public destination or an independently verified checkout is available. Private credentials never belong in a public page.</p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paymentLanes.map((lane) => (
            <article key={lane.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <h3 className="text-lg font-bold">{lane.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">{lane.state}</p>
              {lane.href ? <a href={lane.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-emerald-300/50 px-4 py-2 text-xs font-bold text-emerald-200 hover:bg-emerald-300/10">{lane.action} ↗</a> : <span className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-400">{lane.action}</span>}
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-400">PayPal and Chime remain release-required until their exact public destinations and purposes are confirmed. Cash App is an external handoff; ScrollVerse does not process or confirm transfers made there. Crypto and token actions remain subject to network, contract, custody, and transaction verification.</p>
      </section>

      <section className="border-t border-white/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,.12),transparent_45%),#070F20]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan-200">THE ARCHIVE REMAINS THE FOUNDATION</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black sm:text-5xl">Every creation keeps its origin.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">The lookbooks, artwork, motion studies, books, films, and digital artifacts are being connected through source records and individual release decisions. Original files are not overwritten or silently republished.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={HOME + "/site-map"} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-black text-[#06101D]">Explore the full site map ↗</a>
            <a href={HOME + "/direct-fan-catalog"} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white">Open direct-to-fan catalog ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        SCROLLVERSE · INDEPENDENT CUSTOMER EXPERIENCE · ORIGINALS PRESERVED · OPERATING STATES EVIDENCE-LED
      </footer>
    </main>
  );
}
