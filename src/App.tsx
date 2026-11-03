import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { copy, getInitialLanguage, type Language } from "@/lib/i18n";

const projects = [
  {
    number: "01",
    image: "/images/inventory-dashboard.png",
    repository: "https://github.com/bastianstyle/snacknyommyinventory",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
  },
  {
    number: "02",
    image: "/images/skin-lesion-segmentation.png",
    repository: "https://github.com/bastianstyle/skin-cancer-classification-main",
    technologies: ["Python", "OpenCV", "scikit-image", "scikit-learn", "SVM"],
  },
  {
    number: "03",
    image: "/images/hr-management-dashboard.png",
    repository: "https://github.com/bastianstyle/HR-management",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    number: "04",
    image: "/images/sumber-rezeki-wood-sales-dashboard.png",
    repository: "https://github.com/bastianstyle/WoodSalesSystem",
    technologies: ["PHP", "Laravel", "MySQL", "RSA"],
  },
  {
    number: "05",
    image: "/images/eduflow-dashboard.svg",
    repository: "https://github.com/bastianstyle/EduFlow-LMS",
    technologies: ["Next.js 14", "TypeScript", "Prisma", "Tailwind CSS"],
  },
];

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [emailCopied, setEmailCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const t = copy[language];
  const email = "tiandristg899@gmail.com";

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", t.pageDescription);
    window.localStorage.setItem("portfolio-language", language);
  }, [language, t.pageDescription, t.pageTitle]);

  const copyEmail = async () => {
    setEmailCopied(false);
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <div className="portfolio-page min-h-screen overflow-hidden bg-[#090909] text-white transition-colors duration-300 dark:bg-[#090909] dark:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <div className="absolute -left-48 top-24 size-[34rem] rounded-full bg-emerald-500/[0.07] blur-[140px]" />
        <div className="absolute -right-52 top-[38rem] size-[36rem] rounded-full bg-violet-500/[0.055] blur-[150px]" />
      </div>
      <GlassmorphismNavBar
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto flex min-h-[740px] max-w-6xl flex-col justify-center px-6 pb-20 pt-32 sm:min-h-[740px] sm:px-10 lg:px-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="max-w-3xl">
              <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-8 bg-accent" aria-hidden="true" />
                {t.hero.eyebrow}
              </p>
              <h1 className="font-sans text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                {t.hero.title}
                <br />
                <span>{t.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                {t.hero.intro}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#caff8c]"
                >
                  {t.hero.explore}
                  <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/35 hover:text-white"
                >
                  {t.hero.contact} <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <img
              src="/images/tiandry-profile.png"
              alt={t.hero.imageAlt}
              className="mx-auto aspect-[4/5] w-full max-w-[360px] rounded-[30px] object-cover object-[center_32%]"
            />
          </div>
        </section>

        <section id="about" className="border-y border-white/[0.08] bg-white/[0.018]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
            <div className="mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-accent">
                  {t.about.eyebrow}
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  {t.about.title}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/45">
                {t.about.description}
              </p>
            </div>
            <FeaturesSectionWithHoverEffects features={t.about.features} />
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
        >
          <div className="mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-accent">
                {t.projects.eyebrow}
              </p>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                {t.projects.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              {t.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const details = t.projects.items[index];
              return (
              <article
                key={project.number}
                className={`group overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#171717] transition duration-500 hover:-translate-y-1 hover:border-white/20 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#202020] ${
                    index === 0 ? "aspect-[2.25/1]" : "aspect-[1.62/1]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={details.alt}
                    loading="lazy"
                    className="size-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-white/85 backdrop-blur-md">
                    {t.projects.label} {project.number}
                  </span>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${details.repositoryLabel}: ${details.title}`}
                    className="absolute bottom-5 right-5 flex size-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 hover:bg-accent group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-accent/80">
                    {details.type} · {details.role}
                  </p>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    {details.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    {details.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-accent"
                  >
                    {details.linkLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/[0.08] bg-white/[0.018]"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
            <div className="mb-12">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="size-2 rounded-full bg-accent" />
                {t.contact.eyebrow}
              </p>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                {t.contact.description}
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-12">
              <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#151615] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-8 lg:col-span-7">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    <span className="size-2 animate-pulse rounded-full bg-accent" />
                    <span className="text-xs font-semibold text-accent">
                      {t.contact.availability}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {t.contact.emailTitle}
                  </h3>
                  <p className="mb-6 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                    {t.contact.emailDescription}
                  </p>

                  <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:flex-row sm:items-center sm:p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-white/10 bg-[#101110] p-2.5 text-accent">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                          {t.contact.primaryContact}
                        </p>
                        <a
                          href={`mailto:${email}`}
                          className="text-sm font-semibold text-white transition-colors hover:text-accent sm:text-base"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#101110] px-3 py-2 text-xs font-medium text-white/65 transition hover:border-accent/40 hover:text-accent"
                    >
                      {emailCopied ? (
                        <Check className="size-3.5 text-accent" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                      {emailCopied ? t.contact.copied : t.contact.copyEmail}
                    </button>
                  </div>
                  {copyError && (
                    <p role="status" className="-mt-5 mb-6 text-xs text-amber-300">
                      {t.contact.copyFailed}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                  <a
                    href={`mailto:${email}?subject=Project%20Inquiry%20-%20Tiandry%20Simatupang`}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-[#111] transition hover:bg-[#caff8c]"
                  >
                    {t.contact.sendEmail}
                    <Mail className="size-4" />
                  </a>
                  <a
                    href="/CV_TiandrySimatupang.pdf"
                    download="Tiandry_Simatupang_CV.pdf"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-accent transition hover:border-accent/40 hover:bg-white/[0.035]"
                  >
                    {t.contact.resume}
                    <FileDown className="size-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#151615] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 sm:p-8 lg:col-span-5">
                <div>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {t.contact.connectLabel}
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.03em]">
                    {t.contact.profilesTitle}
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-white/50">
                    {t.contact.profilesDescription}
                  </p>

                  <div className="space-y-3">
                    <a
                      href="https://github.com/bastianstyle"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] p-3 transition hover:border-accent/30 hover:bg-white/[0.06]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-lg border border-white/10 bg-[#101110] p-2 text-white/80 transition group-hover:text-accent">
                          <Github className="size-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold">GitHub</span>
                          <span className="block text-xs text-white/45">
                            github.com/bastianstyle
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-white/40 transition group-hover:text-accent" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tiandrysimatupang/"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] p-3 transition hover:border-accent/30 hover:bg-white/[0.06]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-lg border border-white/10 bg-[#101110] p-2 text-white/80 transition group-hover:text-accent">
                          <Linkedin className="size-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold">LinkedIn</span>
                          <span className="block text-xs text-white/45">
                            linkedin.com/in/tiandrysimatupang
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-white/40 transition group-hover:text-accent" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs">
                  <span className="text-white/45">{t.contact.timezone}</span>
                  <span className="font-semibold text-accent">{t.contact.country}</span>
                </div>
              </div>
            </div>
            <footer className="relative mt-20 overflow-hidden rounded-[28px] border border-white/10 bg-[#151615] px-6 py-8 sm:px-8 sm:py-10">
              <div
                className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full bg-accent/[0.08] blur-[90px]"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <a
                    href="#home"
                    aria-label="Tiandry Simatupang — beranda"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-accent font-display text-lg font-extrabold tracking-[-0.08em] text-[#111] transition-transform group-hover:-rotate-6">
                      TS
                    </span>
                    <span>
                      <span className="block font-display text-base font-bold tracking-[-0.03em]">
                        Tiandry Simatupang
                      </span>
                      <span className="mt-1 block text-xs text-white/45">
                        Full-Stack Developer
                      </span>
                    </span>
                  </a>

                  <nav aria-label={t.nav.label} className="flex flex-wrap gap-x-6 gap-y-3">
                    {[
                      { href: "#home", label: t.nav.home },
                      { href: "#about", label: t.nav.about },
                      { href: "#projects", label: t.nav.projects },
                      { href: "#contact", label: t.nav.contact },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-white/40">{t.contact.copyright}</span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/bastianstyle"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-white/45 transition-colors hover:text-accent"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tiandrysimatupang/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="text-white/45 transition-colors hover:text-accent"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href={`mailto:${email}`}
                      aria-label="Email"
                      className="text-white/45 transition-colors hover:text-accent"
                    >
                      <Mail className="size-4" />
                    </a>
                    <a
                      href="#home"
                      className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-white/70 transition hover:border-accent/40 hover:text-accent"
                    >
                      {t.contact.backToTop}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
