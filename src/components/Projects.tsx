import { useMemo, useState } from 'react';
import { FiArrowUpRight, FiFolder, FiMonitor, FiRadio } from 'react-icons/fi';

type Category = 'all' | 'dev' | 'analyst' | 'thesis';

type Project = {
  title: string;
  category: Exclude<Category, 'all'>;
  tech: string[];
  summary: string;
  details: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'Trainers and TTI Programs Monitoring Dashboard - TESDA',
    category: 'analyst',
    tech: ['Looker Studio', 'Google Sheets', 'Monitoring Dashboard'],
    summary:
      'A nationwide dashboard for tracking trainers and TESDA Technology Institutions or TTI programs across the Philippines from 2025 onward.',
    details: [
      'Structured monitoring data into a centralized reporting view for TESDA stakeholders.',
      'Built the dashboard in Looker Studio with Google Sheets as the reporting source.',
      'Improved visibility into trainer and program information across institutions nationwide.',
    ],
  },
  {
    title: 'Agrostudies Internship Program Monitoring Dashboard - TESDA',
    category: 'analyst',
    tech: ['Looker Studio', 'Google Sheets', 'Applicant Monitoring'],
    summary:
      'A monitoring dashboard for applicant deployment status and active intern tracking under the Agrostudies internship program in Israel.',
    details: [
      'Tracked applicants who were deployed and not deployed through a single reporting interface.',
      'Supported monitoring of TESDA interns already deployed in Israel.',
      'Designed the dashboard for easier updates and reporting using Google Sheets data.',
    ],
  },
  {
    title: 'Adopt-A-School Program Menu of Investment Dashboard - TESDA',
    category: 'analyst',
    tech: ['Looker Studio', 'Google Sheets', 'Program Reporting'],
    summary:
      'A program reporting dashboard focused on the Adopt-A-School menu of investment and related monitoring needs.',
    details: [
      'Organized investment-related reporting into a cleaner dashboard structure.',
      'Used Looker Studio to present program information in a more accessible way.',
      'Helped simplify review and monitoring for stakeholders.',
    ],
  },
  {
    title: 'Bebetime - Video and Screen Sharing App',
    category: 'dev',
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'WebRTC'],
    summary:
      'A real-time communication product built for virtual movie nights, screen sharing, and shared online experiences.',
    details: [
      'Built room creation and management flows for shared sessions.',
      'Integrated chat and screen sharing into the live experience.',
      'Supported user access through Google Sign-In.',
    ],
  },
  {
    title: 'Beyblade Tournament App',
    category: 'dev',
    tech: ['Flutter', 'Challonge API', 'Firebase'],
    summary:
      'A mobile app for tournament discovery, live rankings, and schedule management for the Beyblade community.',
    details: [
      'Designed responsive Flutter screens for standings and tournament browsing.',
      'Integrated ranking and bracket workflows using the Challonge API.',
      'Supported event participation and scheduling in one mobile experience.',
    ],
  },
  {
    title: 'Marketing Automation Platform - Capstone',
    category: 'thesis',
    tech: ['Laravel', 'MySQL'],
    summary:
      'An admin-facing marketing platform for creating, managing, and analyzing campaign performance.',
    details: [
      'Implemented core CRUD workflows for campaign management.',
      'Used Laravel MVC structure for maintainability and clarity.',
      'Added analytics visibility for campaign monitoring.',
    ],
  },
  {
    title: 'Smart Glove - Thesis Project',
    category: 'thesis',
    tech: ['Flutter', 'Arduino', 'CNN', 'Bluetooth'],
    summary:
      'A wearable assistive technology project that translates gestures into text and speech for daily communication.',
    details: [
      'Used CNN-based recognition for gesture classification.',
      'Connected hardware and mobile output through Bluetooth data transfer.',
      'Added speech output with emotional expression for more natural communication.',
    ],
  },
];

const categoryStyles: Record<Exclude<Category, 'all'>, string> = {
  dev: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  analyst: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  thesis: 'bg-amber-500/12 text-amber-700 dark:text-amber-300',
};

const categoryLabels: Record<Exclude<Category, 'all'>, string> = {
  dev: 'Software development',
  analyst: 'Data and reporting',
  thesis: 'Thesis and capstone',
};

const tabs: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Software Dev', value: 'dev' },
  { label: 'Data & Reporting', value: 'analyst' },
  { label: 'Thesis / Capstone', value: 'thesis' },
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');

  const filteredProjects = useMemo(
    () =>
      activeTab === 'all'
        ? projects
        : projects.filter((project) => project.category === activeTab),
    [activeTab]
  );

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="section-shell"
      id="projects"
    >
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="section-kicker">Selected work</span>
          <h2 className="section-title mt-5">
            Project work that reflects product thinking, execution, and clarity.
          </h2>
        </div>
        <p className="section-copy max-w-xl">
          This portfolio combines software development, dashboard reporting, and
          thesis work to show both breadth and practical delivery.
        </p>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
              <FiFolder />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Portfolio focus
              </p>
              <h3 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                Work that feels credible, practical, and recruiter-ready.
              </h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            The strongest signal in this portfolio is range with consistency:
            polished UI work, functional full-stack implementation, and
            dashboard systems tied to real operational needs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="stat-tile">
            <FiMonitor className="text-[var(--color-accent)]" />
            <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">
              Modern interfaces
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              UI work designed to feel clear, current, and usable.
            </p>
          </div>
          <div className="stat-tile">
            <FiRadio className="text-[var(--color-accent)]" />
            <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">
              Real reporting
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Dashboards built around live monitoring and operational visibility.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                isActive
                  ? 'bg-[var(--color-text)] text-white shadow-lg'
                  : 'border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between gap-3 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} visible
        </p>
        <p className="text-sm text-[var(--color-muted)]">
          Filter by the kind of work you want to review.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filteredProjects.map((project) => {
          const content = (
            <article className="glass-card h-full hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${categoryStyles[project.category]}`}
                >
                  {categoryLabels[project.category]}
                </span>
                {project.link ? (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">
                    View
                    <FiArrowUpRight />
                  </span>
                ) : null}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-[var(--color-text)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-3">
                {project.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm leading-7 text-[var(--color-text)]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );

          return project.link ? (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={project.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};
