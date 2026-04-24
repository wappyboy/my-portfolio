import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-sm hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  );
};
