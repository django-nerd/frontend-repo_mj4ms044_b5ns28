import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Enterprise-grade Digital Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-2xl"
            >
              23+ years leading Pakistan’s IT landscape. Pioneer of Robo Call technology. Builders of Millat Facebook. We architect secure, scalable systems for governments and global enterprises.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#solutions" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20">
                Explore Solutions
              </a>
              <a href="#legacy" className="px-6 py-3 rounded-xl bg-white/10 text-white backdrop-blur border border-white/10">
                Our Legacy
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <Stat number="23+" label="Years" />
              <Stat number="1st" label="Robo Call in PK" />
              <Stat number="1st" label="Muslim Social Network" />
              <Stat number="100+" label="Enterprise Projects" />
            </motion.div>
          </div>

          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
      <div className="text-3xl font-extrabold text-white">{number}</div>
      <div className="text-sm text-blue-200/80">{label}</div>
    </div>
  )
}
