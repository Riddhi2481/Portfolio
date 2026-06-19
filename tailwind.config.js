/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        ink: '#0F172A',
        panel: '#1E293B',
        skyline: '#38BDF8',
        royal: '#2563EB',
        paper: '#F8FAFC'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(15, 23, 42, 0.18)',
        glow: '0 0 38px rgba(56, 189, 248, 0.22)'
      }
    }
  },
  plugins: []
};
