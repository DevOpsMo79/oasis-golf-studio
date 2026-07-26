import { Link, useLocation } from "wouter";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoEng from "@assets/OGS_Brandin_Logo_v2.5_Eng_1770557429157.png";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t("nav", "howItWorks"), href: "/how-it-works" },
    { label: t("nav", "rates"), href: "/rates" },
    { label: t("nav", "memberships"), href: "/memberships" },
    { label: t("nav", "lessons"), href: "/lessons" },
    { label: t("nav", "events"), href: "/events" },
    { label: t("nav", "clubServices"), href: "/club-services" },
    { label: t("nav", "faq"), href: "/faq" },
    { label: t("nav", "contact"), href: "/contact" },
  ];

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.touchAction = "";
    };
  }, [isOpen]);

  const LangToggle = ({ className }: { className?: string }) => (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className={cn(
        "px-3 py-1.5 rounded-full border border-white/20 text-sm font-semibold hover:border-primary hover:text-primary transition-colors tracking-wide",
        className
      )}
    >
      {t("nav", "toggleLang")}
    </button>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-background/90 backdrop-blur-md py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-[70]" onClick={closeMenu}>
            <img src={logoEng} alt="Oasis Golf Studio" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary tracking-wide",
                location === "/" ? "text-primary" : "text-foreground/80"
              )}
            >
              {t("nav", "home")}
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary tracking-wide",
                  location === item.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
              </Link>
            ))}
            <LangToggle />
            <Link href="/contact">
              <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                {t("nav", "registerInterest")}
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-[70] text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay — full-screen, sits behind navbar */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background flex flex-col items-center justify-start overflow-y-auto transition-all duration-300 ease-out lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        )}
      >
        {/* Spacer for navbar height */}
        <div className="w-full h-[72px] shrink-0" />

        {/* Nav content */}
        <div className="flex-1 flex flex-col items-center gap-5 pb-16 w-full pt-4">
          {/* Home at top */}
          <Link
            href="/"
            onClick={closeMenu}
            className={cn(
              "text-3xl font-display font-bold uppercase tracking-wider transition-colors",
              location === "/" ? "text-primary" : "text-white hover:text-primary"
            )}
          >
            {t("nav", "home")}
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "text-2xl font-display font-bold uppercase tracking-wider transition-colors",
                location === item.href ? "text-primary" : "text-white/90 hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6">
            <LangToggle className="text-base px-4 py-2" />
          </div>

          <Link href="/contact" onClick={closeMenu} className="mt-4">
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/25">
              {t("nav", "registerInterest")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
