import {
  FiBarChart2,
  FiCode,
  FiDatabase,
  FiLayers,
  FiSmartphone,
  FiTool,
} from 'react-icons/fi';

type StackGroup = {
  title: string;
  description: string;
  items: string[];
  accent: string;
  label: string;
  icon: typeof FiCode;
};

const groups: StackGroup[] = [
  {
    title: 'Frontend systems',
    description:
      'Responsive interfaces, reusable UI architecture, and clean implementation for modern web experiences.',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    accent: 'from-sky-500/20 to-cyan-500/10',
    label: 'UI engineering',
    icon: FiCode,
  },
  {
    title: 'Mobile and application logic',
    description:
      'Cross-platform app development and backend-oriented work that supports reliable product delivery.',
    items: ['Flutter', 'Laravel', 'PHP', 'Python', 'Dart', 'C#', 'Firebase', 'Supabase'],
    accent: 'from-violet-500/20 to-fuchsia-500/10',
    label: 'App delivery',
    icon: FiSmartphone,
  },
  {
    title: 'Data and reporting',
    description:
      'Monitoring dashboards, structured data handling, and reporting workflows built for operational visibility.',
    items: ['Looker Studio', 'Google Sheets', 'Power BI', 'SQL', 'PostgreSQL', 'MySQL', 'Excel'],
    accent: 'from-emerald-500/20 to-teal-500/10',
    label: 'Decision support',
    icon: FiBarChart2,
  },
  {
    title: 'Workflow and tooling',
    description:
      'Everyday tools for version control, collaboration, development flow, and shipping work with consistency.',
    items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'CI/CD', 'Discord'],
    accent: 'from-amber-500/20 to-orange-500/10',
    label: 'Delivery stack',
    icon: FiTool,
  },
];

const spotlight = [
  'React + TypeScript',
  'Flutter',
  'Laravel',
  'Looker Studio',
];

export const TechStack = () => (
  <section
    data-aos="fade-up"
    data-aos-delay="220"
    className="section-shell"
    id="tech"
  >
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="section-kicker">Tech stack</span>
        <h2 className="section-title mt-5">
          A modern toolkit shaped around polished interfaces and practical delivery.
        </h2>
      </div>
      <p className="section-copy max-w-xl">
        I work best with tools that let me design clean user experiences, build
        reliable applications, and turn operational data into dashboards people
        can actually use.
      </p>
    </div>

    <div className="mb-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass-card overflow-hidden">
        <div className="absolute inset-x-6 top-0 h-24 rounded-b-[2rem] bg-gradient-to-r from-[var(--color-accent-soft)] via-white/10 to-transparent blur-2xl" />
        <div className="relative">
          <div className="mb-4 inline-flex rounded-full bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
            <FiLayers />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Core stack
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
            Frontend-first, backed by full-stack and reporting capability.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            My strongest workflow usually combines React and TypeScript for the
            interface layer, Flutter for mobile builds, Laravel or Firebase for
            application logic, and Looker Studio for dashboard reporting tied
            to Google Spreadsheet data.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {spotlight.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div className="stat-tile">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Focus
          </p>
          <p className="mt-3 text-lg leading-8 text-[var(--color-text)]">
            UI engineering with strong attention to structure, spacing, and
            product polish.
          </p>
        </div>
        <div className="stat-tile">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Support layer
          </p>
          <p className="mt-3 text-lg leading-8 text-[var(--color-text)]">
            Backend, mobile, and reporting skills that help me ship complete
            solutions.
          </p>
        </div>
        <div className="stat-tile">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Dashboard work
          </p>
          <p className="mt-3 text-lg leading-8 text-[var(--color-text)]">
            Monitoring dashboards in Looker Studio powered by Google Sheets and
            structured data workflows.
          </p>
        </div>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {groups.map(({ title, description, items, accent, label, icon: Icon }) => (
        <article
          key={title}
          className="glass-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${accent} opacity-80 blur-2xl`} />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="muted-chip">{label}</span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-text)]">
                  {title}
                </h3>
              </div>
              <span className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-3 text-lg text-[var(--color-accent)]">
                <Icon />
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="tech-pill transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-5 glass-card">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
            <FiDatabase />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              How I use this stack
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
              Not just tools, but a workflow.
            </h3>
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--color-muted)]">
          I usually approach projects by starting with structure and user flow,
          then building a solid frontend layer, connecting the necessary backend
          or data source, and finishing with clearer reporting or interface
          refinement so the final product feels complete.
        </p>
      </div>
    </div>
  </section>
);
