import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { profile, socialLinks } from '../data/portfolio';

const words = ['Spring Boot APIs', 'Secure JWT Auth', 'MySQL Performance', 'Scalable Services'];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-paper pt-24 dark:bg-ink">
      <div className="absolute inset-0">
        <img
          src="/assets/backend-architecture-hero.png"
          alt="Backend architecture visualization"
          className="h-full w-full object-cover object-center opacity-28 dark:opacity-34"
        />
        <div className="absolute inset-0 bg-white/75 dark:bg-ink/75" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="eyebrow">Available for Backend Java roles</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-ink sm:text-6xl lg:text-7xl dark:text-paper">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-bold text-royal dark:text-skyline sm:text-3xl">{profile.title}</p>
          <div className="mt-5 flex h-8 items-center overflow-hidden font-mono text-sm font-bold text-slate-600 dark:text-slate-300">
            <motion.div animate={{ y: ['0%', '-25%', '-50%', '-75%', '0%'] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
              {words.map((word) => (
                <div key={word} className="h-8">
                  {word}
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-md bg-royal px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-skyline dark:text-ink dark:hover:bg-cyan-300">
              View Projects <FaArrowDown />
            </a>
            <a href={profile.resume} download className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-royal hover:text-royal dark:border-white/15 dark:bg-panel dark:text-paper dark:hover:border-skyline dark:hover:text-skyline">
              Download Resume <FaDownload />
            </a>
            <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10">
              Contact Me <FaEnvelope />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ['Experience', profile.experience],
              ['Current Company', profile.company],
              ['Location', profile.location]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-slate-200 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-panel/75">
                <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">{label}</p>
                <p className="mt-1 font-extrabold text-ink dark:text-paper">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }} className="hidden lg:block">
          <div className="card rounded-lg p-5">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img src="/assets/backend-architecture-hero.png" alt="Java backend architecture workstation" className="h-full w-full object-cover" />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <FaLocationDot className="text-royal dark:text-skyline" /> {profile.location}
              </span>
              <div className="flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} aria-label={label} className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-700 transition hover:bg-royal hover:text-white dark:bg-white/10 dark:text-slate-200 dark:hover:bg-skyline dark:hover:text-ink">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
