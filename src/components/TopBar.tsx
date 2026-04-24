import { FiArrowUpRight } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const TopBar = () => (
  <header className="topbar-shell">
    <div className="flex items-center justify-between gap-4">
      <a href="#hero" className="min-w-0">
        <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Ralph E. Eco
        </p>
        <p className="truncate text-sm text-[var(--color-text)]">
          Full-Stack Developer
        </p>
      </a>

      <nav className="hidden items-center gap-1 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a href="#contact" className="hidden sm:inline-flex primary-button">
          Hire me
          <FiArrowUpRight />
        </a>
        <ThemeToggle />
      </div>
    </div>
  </header>
);
