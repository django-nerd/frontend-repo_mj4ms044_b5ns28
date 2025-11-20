import { Linkedin, Twitter, Globe2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-white text-xl font-bold">GITV</div>
            <p className="mt-2 text-blue-200/80 text-sm max-w-md">Global IT Vision — delivering secure, enterprise-grade digital systems for 23+ years.</p>
          </div>
          <div className="md:text-right space-x-3">
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:info@gitv.pk" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.gitv.pk" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
              <Globe2 className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-blue-200/60">© {new Date().getFullYear()} GITV — Global IT Vision. All rights reserved.</div>
      </div>
    </footer>
  )
}
