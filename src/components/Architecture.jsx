import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { architectureLayers } from '../data/portfolio';
import { Section } from './Section';

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState(architectureLayers[0]);

  return (
    <Section
      id="architecture"
      eyebrow="Backend Architecture"
      title="A practical view of how Riddhi thinks about backend systems."
      description="An architecture showcase for API ownership, service boundaries, persistence, security, and microservices communication."
      className="bg-white dark:bg-ink"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card rounded-lg p-5">
          <div className="aspect-[4/3] overflow-hidden rounded-md">
            <img src="/assets/backend-architecture-hero.png" alt="Backend architecture diagram visual" className="h-full w-full object-cover" />
          </div>

          <motion.div
            key={activeLayer.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-white text-xl text-royal shadow-sm dark:bg-white/10 dark:text-skyline">
                <activeLayer.icon />
              </span>
              <div>
                <p className="eyebrow">Selected Layer</p>
                <h3 className="mt-1 text-2xl font-extrabold text-ink dark:text-paper">{activeLayer.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{activeLayer.summary}</p>
            <ul className="mt-4 grid gap-3">
              {activeLayer.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <FaCheckCircle className="mt-1 shrink-0 text-royal dark:text-skyline" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid gap-4">
          {architectureLayers.map((layer, index) => (
            <motion.button
              key={layer.title}
              type="button"
              onClick={() => setActiveLayer(layer)}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: index * 0.07 }}
              className={`group flex w-full items-center gap-4 rounded-lg border p-4 text-left transition hover:-translate-y-1 hover:border-royal hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:border-skyline dark:hover:bg-panel dark:focus-visible:ring-skyline dark:focus-visible:ring-offset-ink ${
                activeLayer.title === layer.title
                  ? 'border-royal bg-white shadow-glow dark:border-skyline dark:bg-panel'
                  : 'border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-panel/70'
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-white text-xl text-royal shadow-sm dark:bg-white/10 dark:text-skyline">
                <layer.icon />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-ink dark:text-paper">{layer.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{layer.detail}</p>
              </div>
              <FaArrowRight className={`hidden shrink-0 transition group-hover:translate-x-1 group-hover:text-royal sm:block dark:group-hover:text-skyline ${
                activeLayer.title === layer.title ? 'text-royal dark:text-skyline' : 'text-slate-300 dark:text-slate-600'
              }`} />
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}
