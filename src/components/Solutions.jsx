import { Shield, Cpu, Server, PhoneCall, Network, Globe2 } from 'lucide-react'

export default function Solutions() {
  const items = [
    {
      icon: Shield,
      title: 'Cybersecurity & Governance',
      desc: 'SOC implementation, SIEM, identity, threat intel, compliance for regulated industries.'
    },
    {
      icon: Cpu,
      title: 'AI, Data & Automation',
      desc: 'ML platforms, analytics pipelines, computer vision, NLP, and RPA at scale.'
    },
    {
      icon: Server,
      title: 'Cloud & Infrastructure',
      desc: 'Hybrid-cloud design, Kubernetes, DevSecOps, zero-downtime migration, SRE.'
    },
    {
      icon: PhoneCall,
      title: 'Robo Call Platforms',
      desc: 'Pakistan’s pioneering robocall infrastructure – secure, compliant, high-volume.'
    },
    {
      icon: Network,
      title: 'Telecom & Enterprise Integrations',
      desc: 'OSS/BSS integrations, billing, messaging, carrier-grade networking solutions.'
    },
    {
      icon: Globe2,
      title: 'Digital Platforms',
      desc: 'Large-scale social, e‑gov, fintech, and citizen portals with million+ users.'
    },
  ]

  return (
    <section id="solutions" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Enterprise Solutions</h2>
        <p className="mt-3 text-blue-200/80 max-w-3xl">We deliver mission-critical systems with security, reliability, and scale engineered in from day one.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
