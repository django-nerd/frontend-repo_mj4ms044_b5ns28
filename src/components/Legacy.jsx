export default function Legacy() {
  const items = [
    {
      year: '2001 →',
      title: 'Founded',
      desc: 'Laid the foundation for a decades-long journey in enterprise technology.'
    },
    {
      year: '2009',
      title: 'Millat Facebook',
      desc: 'Launched the world’s first Muslim social networking platform.'
    },
    {
      year: '2010s',
      title: 'Telecom & Robo Call',
      desc: 'Pioneered Pakistan’s robocall technology and national-scale telecom integrations.'
    },
    {
      year: '2020s',
      title: 'Cloud, AI & Security',
      desc: 'Delivering secure AI-driven platforms for governments and enterprises.'
    },
  ]

  return (
    <section id="legacy" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">A Legacy of Impact</h2>
            <p className="mt-4 text-blue-200/80">Our work powers critical operations at scale — from national platforms to highly-regulated industries.</p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              {items.map((item) => (
                <li key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-blue-400 font-semibold">{item.year}</div>
                  <div className="mt-1 text-white font-semibold text-lg">{item.title}</div>
                  <p className="mt-2 text-blue-200/80 text-sm">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
