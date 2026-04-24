import { FiAward, FiBarChart2, FiLayout, FiUser } from 'react-icons/fi';

const quickFacts = [
  { label: 'Primary focus', value: 'Frontend engineering and UI quality', icon: FiLayout },
  { label: 'Supporting strengths', value: 'Full-stack apps, Flutter, and backend integration', icon: FiUser },
  { label: 'Data experience', value: 'Looker Studio dashboards with Google Sheets', icon: FiBarChart2 },
  { label: 'Recognition', value: 'Best Programmer and Best in Thesis, 2025', icon: FiAward },
];

export const About = () => (
  <section
    data-aos="fade-up"
    data-aos-delay="80"
    className="section-shell"
    id="about"
  >
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="section-kicker">About</span>
        <h2 className="section-title mt-5">
          A developer focused on clarity, usability, and real-world execution.
        </h2>
      </div>
      <p className="section-copy max-w-xl">
        My goal is simple: build software that looks professional, works
        reliably, and communicates value quickly to both users and teams.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="glass-card">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Professional summary
        </p>
        <p className="mt-5 text-base leading-8 text-[var(--color-text)] sm:text-lg">
          I&apos;m Ralph E. Eco, a Computer Science graduate with experience in
          frontend development, full-stack application work, and operational
          dashboard reporting. I enjoy creating products that are clean on the
          surface, structured underneath, and easy for people to understand.
        </p>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          My work combines interface design thinking with implementation
          discipline. On the frontend, I care about hierarchy, responsiveness,
          and polish. On the delivery side, I can support applications with
          backend logic, mobile builds, and dashboard systems that make data
          useful instead of overwhelming.
        </p>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          I&apos;m especially interested in roles where strong UI execution,
          engineering fundamentals, and product-minded problem solving all
          matter at the same time.
        </p>

        <div className="section-divider my-6" />

        <div className="flex flex-wrap gap-3">
          {[
            'React',
            'TypeScript',
            'Flutter',
            'Laravel',
            'Looker Studio',
            'Google Sheets',
          ].map((item) => (
            <span key={item} className="muted-chip">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {quickFacts.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-card">
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
                <Icon />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {label}
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-[var(--color-text)]">
                  {value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
