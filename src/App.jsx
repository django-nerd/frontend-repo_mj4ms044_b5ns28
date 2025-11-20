import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Legacy from './components/Legacy'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Solutions />

      <section id="expertise" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Proven Enterprise Expertise</h2>
              <p className="mt-4 text-blue-200/80">Security-first engineering, platform thinking, and a relentless focus on reliability and scale.</p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <Card title="Government & Public Sector" desc="Citizen portals, national ID integrations, and secure e‑gov platforms." />
              <Card title="Telecom & Media" desc="High-throughput messaging, billing, OSS/BSS, and carrier-grade infra." />
              <Card title="Financial Services" desc="PCI-aware architectures, AML/KYC, secure transaction systems." />
              <Card title="Large-Scale Social" desc="Multi-million user communities, moderation, and privacy at scale." />
            </div>
          </div>
        </div>
      </section>

      <Legacy />

      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold">Our Philosophy</h3>
                <p className="mt-3 text-blue-200/80 text-sm">We design systems to endure: secure by default, observable, and ready for growth.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">How We Work</h3>
                <p className="mt-3 text-blue-200/80 text-sm">Architecture first, rapid prototyping next, then rigorous hardening, testing, and rollout.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Engage Us</h3>
                <p className="mt-3 text-blue-200/80 text-sm">From ideas to mission‑critical delivery — we partner across strategy, build, and run.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="mailto:info@gitv.pk" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20">Start a Conversation</a>
                  <a href="#solutions" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10">View Capabilities</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Card({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-white font-semibold">{title}</div>
      <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
    </div>
  )
}

export default App
