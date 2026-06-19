import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { Section, reveal } from './Section';

export function About() {
  const strengths = [
    ['API-first backend design', FaCode],
    ['Database performance tuning', FaDatabase],
    ['Secure authentication flows', FaShieldAlt]
  ];

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Backend engineer focused on reliable enterprise systems."
      description={profile.objective}
      className="bg-white dark:bg-ink"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
          className="card rounded-lg p-6 sm:p-8"
        >
          <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map(([label, Icon]) => (
              <div key={label} className="rounded-md bg-slate-50 p-4 dark:bg-white/5">
                <Icon className="text-2xl text-royal dark:text-skyline" />
                <p className="mt-3 text-sm font-bold text-ink dark:text-paper">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-panel/70"
        >
          <p className="eyebrow">Recruiter Snapshot</p>
          <dl className="mt-6 space-y-5">
            {[
              ['Role', profile.title],
              ['Experience', profile.experience],
              ['Company', profile.company],
              ['Location', profile.location],
              ['Core Stack', 'Java, Spring Boot, REST APIs, MySQL, JWT']
            ].map(([term, detail]) => (
              <div key={term} className="flex items-start justify-between gap-6 border-b border-slate-200 pb-4 last:border-0 last:pb-0 dark:border-white/10">
                <dt className="text-sm font-semibold text-slate-500 dark:text-slate-400">{term}</dt>
                <dd className="max-w-[13rem] text-right text-sm font-extrabold text-ink dark:text-paper">{detail}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Section>
  );
}
