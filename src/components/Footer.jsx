import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-paper px-4 py-8 text-center text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400">
      <p>{profile.name} - Backend Java Developer - Java, Spring Boot, REST APIs, MySQL</p>
    </footer>
  );
}
