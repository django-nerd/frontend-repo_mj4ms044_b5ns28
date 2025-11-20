import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Legacy', href: '#legacy' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <div className="leading-tight">
              <div className="text-white font-bold tracking-tight text-lg">GITV</div>
              <div className="text-xs text-blue-200/70">Global IT Vision</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:info@gitv.pk" className="inline-flex items-center gap-2 text-blue-100/80 hover:text-white text-sm">
              <Mail className="w-4 h-4" /> info@gitv.pk
            </a>
            <a href="tel:+92-000-0000000" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/20">
              <Phone className="w-4 h-4" /> Contact
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-blue-100/80 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="mailto:info@gitv.pk" className="inline-flex items-center gap-2 text-blue-100/80 hover:text-white text-sm">
              <Mail className="w-4 h-4" /> info@gitv.pk
            </a>
            <a href="tel:+92-000-0000000" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              <Phone className="w-4 h-4" /> Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
