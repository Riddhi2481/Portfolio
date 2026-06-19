import { motion } from 'framer-motion';
import { skillBars, skillGroups } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="A backend stack built for secure APIs and data-heavy applications."
      description="Core capabilities across backend development, databases, security, tooling, and delivery practices."
      className="bg-paper dark:bg-slate-950"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card rounded-lg p-6">
          <div className="space-y-6">
            {skillBars.map(([name, value, Icon], index) => (
              <div key={name}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-ink dark:text-paper">
                    <Icon className="text-royal dark:text-skyline" /> {name}
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400">{value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-royal dark:bg-skyline"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.06, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-panel"
            >
              <h3 className="text-base font-extrabold text-ink dark:text-paper">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
