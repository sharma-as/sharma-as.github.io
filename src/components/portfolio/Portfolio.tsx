import { useState, useMemo } from "react";
import {
  Mail, Phone, Linkedin, Github, Download, ArrowRight, MapPin,
  Cpu, Wind, Code2, Wrench, FileText, ExternalLink, CheckCircle2,
  Award, Briefcase, GraduationCap, Send, Zap, Gauge, Atom, Battery,
} from "lucide-react";

type Category = "All" | "CAD & Mechanical Design" | "CFD & Thermal" | "Code & Simulation";

const PROJECTS: {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  metrics: string[];
  icon: React.ComponentType<{ className?: string }>;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Design Optimization of EVTOL Drone",
    category: "CAD & Mechanical Design",
    description: "Topology-driven structural redesign of an electric VTOL drone frame using SolidWorks and ANSYS for weight and aerodynamic efficiency.",
    metrics: ["15% weight reduction", "10% flight efficiency ↑"],
    icon: Wind,
    links: [
      { label: "View CAD Drawings", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
  {
    title: "Battery Thermal Management Solutions",
    category: "CFD & Thermal",
    description: "Designed and simulated electronic cooling architectures at Flowthermolabs — liquid-cooled cold plates and PCM-based packs for EV battery modules.",
    metrics: ["ΔT cell ↓ 18%", "Pack uniformity 92%"],
    icon: Battery,
    links: [
      { label: "View CFD Results", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
  {
    title: "Francis Turbine Components — Stress Analysis & DFMEA",
    category: "CFD & Thermal",
    description: "Full FEA workflow on Francis turbine runner and guide vanes (ANSYS / SolidWorks) coupled with DFMEA to de-risk fatigue-critical features.",
    metrics: ["30% precision boost", "Failure modes ↓ 40%"],
    icon: Gauge,
    links: [
      { label: "View FEA Maps", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
  {
    title: "TiO₂ Nanoparticle Synthesis for Solar Cells",
    category: "Code & Simulation",
    description: "Process parameter optimization for titanium-dioxide nanoparticle synthesis used in dye-sensitized solar cells — characterization via SEM/EDS.",
    metrics: ["Yield +22%", "Particle σ ↓ 30%"],
    icon: Atom,
    links: [
      { label: "View GitHub Repository", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
  {
    title: "IT-SOFC Fuel Cell Stack Optimization",
    category: "CAD & Mechanical Design",
    description: "Intermediate-temperature SOFC stack fabrication via screen printing and plasma glazing — optimized electrolyte deposition and sealing geometry.",
    metrics: ["Power density +17%", "Seal leak ↓ 35%"],
    icon: Zap,
    links: [
      { label: "View CAD Drawings", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
  {
    title: "Finite Element Analysis App (MATLAB)",
    category: "Code & Simulation",
    description: "Built a MATLAB application implementing global stiffness assembly and truss stress analysis with an interactive plotting front-end.",
    metrics: ["2D/3D trusses", "Modular solver"],
    icon: Code2,
    links: [
      { label: "View GitHub Repository", href: "#" },
      { label: "Read Project Report", href: "#" },
    ],
  },
];

const SKILLS = [
  {
    icon: Wrench,
    title: "CAD / CAM",
    items: ["SolidWorks", "Siemens NX", "CATIA", "Autodesk Inventor", "PTC Creo", "ESPRIT"],
  },
  {
    icon: Wind,
    title: "Simulation & CAE",
    items: ["ANSYS (CFD / FEA)", "MATLAB", "Process Modeling"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "C", "LaTeX"],
  },
  {
    icon: Cpu,
    title: "Core Competencies",
    items: ["Thermal Management", "Equipment Sizing", "DFMEA", "ASME · CSA N285.0 · ISO 9001"],
  },
];

const CERTIFICATIONS = [
  { issuer: "Professional Engineers Ontario (PEO)", title: "Engineer-in-Training (EIT)", featured: true },
  { issuer: "Nepal Engineering Council", title: "Registered Mechanical Class “A” Engineer", featured: true },
  { issuer: "Cornell University (CornellX)", title: "A Hands-on Introduction to Engineering Simulations" },
  { issuer: "Stanford University", title: "Machine Learning" },
  { issuer: "University of Michigan", title: "Python Data Structures" },
  { issuer: "Georgia Institute of Technology", title: "Material Behavior" },
];

const EXPERIENCE = [
  {
    role: "Project Intern",
    company: "Flowthermolabs",
    focus: "Battery & electronics thermal management — liquid cooling, CFD validation, prototype testing.",
  },
  {
    role: "Assistant Research Fellow",
    company: "Nepal Academy of Science and Technology (NAST)",
    focus: "Francis turbine stress analysis and titanium-dioxide nanoparticle synthesis for solar cells.",
  },
  {
    role: "Assistant Mechanical Engineer & Trainee",
    company: "Sufal Pvt. Ltd.",
    focus: "Project management, CNC tooling and injection-mold design across multidisciplinary teams.",
  },
  {
    role: "Project Intern",
    company: "NFTDC (Non-Ferrous Materials Technology Development Centre)",
    focus: "Materials characterization — SEM/EDS analysis and magnetron sputtering of thin films.",
  },
];

const CATEGORIES: Category[] = ["All", "CAD & Mechanical Design", "CFD & Thermal", "Code & Simulation"];

export function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#credentials", label: "Credentials" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
            <Cpu className="h-4 w-4" />
          </span>
          <span>AS<span className="text-primary">.</span>eng</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/20 md:inline-block">
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-x-0 top-0 mx-auto h-[420px] w-[820px] max-w-full bg-primary/10 blur-[120px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Registered EIT — Professional Engineers Ontario
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Ashutosh Sharma</span>
            <span className="block text-base font-mono uppercase tracking-[0.3em] text-muted-foreground mt-4 sm:text-sm">
              Mechanical Engineer · EIT
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Bridging advanced mechanical design, thermal fluid dynamics, and computational simulation —
            delivering measurable performance gains across aerospace, energy, and industrial systems.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition glow hover:opacity-90 sm:w-auto">
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="/Ashutosh_Sharma_Resume.pdf" download className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary sm:w-auto">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground sm:w-auto">
              Get In Touch
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["5+", "Years experience"],
              ["3", "Countries"],
              ["6+", "Major projects"],
              ["EIT", "PEO licensed"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-lg border border-border bg-surface/60 p-4 backdrop-blur">
                <dt className="font-display text-2xl font-semibold text-primary">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, blurb }: { kicker: string; title: string; blurb?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {blurb && <p className="mt-4 text-muted-foreground">{blurb}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="About" title="Engineering across continents" />
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a Mechanical Engineer with <span className="text-foreground">5+ years of multidisciplinary project experience</span>
              spanning Canada, Nepal, and India — working at the intersection of mechanical design,
              thermal-fluid analysis, and computational simulation.
            </p>
            <p>
              My work has shipped weight-optimized aerospace structures, validated battery thermal
              architectures, and de-risked hydroelectric turbine components — always grounded in
              standards-driven engineering and reproducible data.
            </p>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">Current status</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Registered <strong className="text-foreground">EIT</strong> with Professional Engineers Ontario (PEO)</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Class “A” Mechanical Engineer, Nepal Engineering Council</li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Based in Ontario, Canada — open to opportunities</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Capabilities" title="Technical skills" blurb="Tools and domains I work in daily." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="card-hover rounded-xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState<Category>("All");
  const items = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );
  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Portfolio" title="Selected engineering projects" blurb="Filterable by domain — every project tied to measurable outcomes." />
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="card-hover group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
                <div
                  role="img"
                  aria-label={`Visualization placeholder for ${p.title}`}
                  className="relative grid-bg flex aspect-[16/10] items-center justify-center border-b border-border bg-surface"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                  <Icon className="relative h-14 w-14 text-primary/80 transition group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-md border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <span key={m} className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition hover:text-primary"
                      >
                        {l.label.includes("GitHub") ? <Github className="h-3.5 w-3.5" /> : l.label.includes("Report") ? <FileText className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="credentials" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Credentials" title="Certifications & licensure" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.title}
              className={`card-hover rounded-xl border p-6 ${
                c.featured ? "border-primary/40 bg-primary/5" : "border-border bg-card"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <Award className={`h-5 w-5 ${c.featured ? "text-primary" : "text-muted-foreground"}`} />
                {c.featured && (
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                    Licensed
                  </span>
                )}
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{c.issuer}</p>
              <h3 className="mt-1 font-display text-base font-semibold leading-snug">{c.title}</h3>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:underline">
                View Certificate <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Journey" title="Professional experience" />
        <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
          {EXPERIENCE.map((e, i) => (
            <li key={e.company} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="card-hover rounded-xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">0{EXPERIENCE.length - i}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/90">{e.company}</p>
                <p className="mt-3 text-sm text-muted-foreground">{e.focus}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-12 flex max-w-3xl items-center gap-3 rounded-xl border border-border bg-card p-5">
          <GraduationCap className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            Continuous learner — backed by formal coursework from Cornell, Stanford, Michigan, and Georgia Tech.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="Contact" title="Let's build something measurable" blurb="Open to full-time roles, contract simulation work, and research collaborations." />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactLine icon={Mail} label="Email" value="ashutosh.sharma2023@gmail.com" href="mailto:ashutosh.sharma2023@gmail.com" />
            <ContactLine icon={Phone} label="Phone" value="+1 519-697-8175" href="tel:+15196978175" />
            <ContactLine icon={Linkedin} label="LinkedIn" value="linkedin.com/in/ashutosh-sharma" href="#" />
            <ContactLine icon={Github} label="GitHub" value="github.com/ashutosh-sharma" href="#" />
          </div>
          <form
            className="space-y-4 rounded-xl border border-border bg-card p-6 lg:col-span-3"
            onSubmit={(e) => { e.preventDefault(); alert("Thanks — I'll be in touch shortly."); }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <Field label="Subject" id="subject" required />
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea id="message" required rows={5} className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition glow hover:opacity-90">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} type={type} required={required} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

function ContactLine({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <a href={href} className="card-hover flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Ashutosh Sharma · Mechanical Engineer (EIT)</p>
        <p className="font-mono">Designed & engineered with precision.</p>
      </div>
    </footer>
  );
}
