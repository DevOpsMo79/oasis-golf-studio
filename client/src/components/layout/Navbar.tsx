import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoEng from "@assets/OGS_Brandin_Logo_v2.5_Eng_1770557429157.png";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t("nav", "home"), href: "/" },
    { label: t("nav", "howItWorks"), href: "/how-it-works" },
    { label: t("nav", "rates"), href: "/rates" },
    { label: t("nav", "memberships"), href: "/memberships" },
    { label: t("nav", "clubServices"), href: "/club-services" },
    { label: t("nav", "lessons"), href: "/lessons" },
    { label: t("nav", "events"), href: "/events" },
    { label: t("nav", "faq"), href: "/faq" },
    { label: t("nav", "contact"), href: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-background/90 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <img src={logoEng} alt="Oasis Golf Studio" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
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
          className="lg:hidden relative z-[70] text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-2xl font-display font-medium transition-colors",
                location === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <LangToggle className="text-lg px-5 py-2" />
          <Link href="/contact" className="mt-2">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all">
              {t("nav", "registerInterest")}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
