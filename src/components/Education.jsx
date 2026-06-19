import { motion } from 'framer-motion';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/portfolio';
import { Section } from './Section';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title="Computer engineering foundation with backend-focused certifications."
      className="bg-paper dark:bg-slate-950"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card rounded-lg p-6">
          <FaGraduationCap className="text-3xl text-royal dark:text-skyline" />
          <p className="mt-5 text-sm font-bold uppercase text-slate-500 dark:text-slate-400">Degree</p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink dark:text-paper">{education.degree}</h3>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card rounded-lg p-6">
          <FaCertificate className="text-3xl text-royal dark:text-skyline" />
          <p className="mt-5 text-sm font-bold uppercase text-slate-500 dark:text-slate-400">Certifications</p>
          <div className="mt-4 grid gap-3">
            {education.certifications.map((certification) => (
              <div key={certification} className="rounded-md bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                {certification}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
