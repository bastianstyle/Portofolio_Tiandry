import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, House, Moon, Sun, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Language } from "@/lib/i18n";

interface NavItem {
  name: Record<Language, string>;
  url: string;
  icon: typeof House;
}

interface GlassmorphismNavBarProps {
  className?: string;
  onThemeChange?: (theme: "light" | "dark") => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const items: NavItem[] = [
  { name: { id: "Beranda", en: "Home" }, url: "#home", icon: House },
  { name: { id: "Tentang", en: "About" }, url: "#about", icon: UserRound },
  { name: { id: "Proyek", en: "Projects" }, url: "#projects", icon: BriefcaseBusiness },
  { name: { id: "Kontak", en: "Contact" }, url: "#contact", icon: BriefcaseBusiness },
];

export function GlassmorphismNavBar({
  className,
  onThemeChange,
  language,
  onLanguageChange,
}: GlassmorphismNavBarProps) {
  const [activeTab, setActiveTab] = useState("#home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.url))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      () => {
        const activationLine = window.innerHeight * 0.35;
        const currentSection = sections.reduce<HTMLElement | null>(
          (current, section) =>
            section.getBoundingClientRect().top <= activationLine
              ? section
              : current,
          null,
        );

        if (currentSection) {
          setActiveTab(`#${currentSection.id}`);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
    onThemeChange?.(nextTheme);
  };

  return (
    <nav
      aria-label={language === "id" ? "Navigasi utama" : "Main navigation"}
      className={cn(
        "fixed left-1/2 top-5 z-50 -translate-x-1/2 px-4 sm:top-7",
        className,
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#181818]/75 p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-[#181818]/75">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.url;

          return (
            <a
              key={item.url}
              href={item.url}
              onClick={() => setActiveTab(item.url)}
              aria-current={active ? "page" : undefined}
              aria-label={item.name[language]}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium transition-colors sm:px-4",
                active ? "text-white" : "text-white/60 hover:text-white",
              )}
            >
              {active && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 340, damping: 30 }}
                />
              )}
              <Icon className="relative size-4 sm:hidden" aria-hidden="true" />
              <span className="relative hidden sm:inline">
                {item.name[language]}
              </span>
            </a>
          );
        })}
        <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />
        <button
          type="button"
          onClick={() => onLanguageChange(language === "id" ? "en" : "id")}
          aria-label={
            language === "id"
              ? "Ganti bahasa ke Inggris"
              : "Switch language to Indonesian"
          }
          className="flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          {language === "id" ? "EN" : "ID"}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? language === "id"
                ? "Ganti ke mode terang"
                : "Switch to light mode"
              : language === "id"
                ? "Ganti ke mode gelap"
                : "Switch to dark mode"
          }
          className="flex size-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {theme === "dark" ? (
            <Sun className="size-4" aria-hidden="true" />
          ) : (
            <Moon className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
}
