import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import logoArb from "@assets/OGS_Brandin_Logo_v2.5_Arb_1770557429156.png";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={logoArb} alt="Oasis Golf Studio Arabic Logo" className="h-16 w-auto opacity-90" />
            <p className="text-muted-foreground leading-relaxed">
              {t("footer", "tagline")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">{t("footer", "quickLinks")}</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">{t("nav", "home")}</Link></li>
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">{t("nav", "howItWorks")}</Link></li>
              <li><Link href="/rates" className="text-muted-foreground hover:text-primary transition-colors">{t("footer", "ratesBooking")}</Link></li>
              <li><Link href="/memberships" className="text-muted-foreground hover:text-primary transition-colors">{t("nav", "memberships")}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">{t("footer", "programs")}</h3>
            <ul className="space-y-4">
              <li><Link href="/lessons" className="text-muted-foreground hover:text-primary transition-colors">{t("footer", "privatelessons")}</Link></li>
              <li><Link href="/lessons" className="text-muted-foreground hover:text-primary transition-colors">{t("footer", "juniorAcademy")}</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">{t("footer", "corporateEvents")}</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">{t("footer", "leagues")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">{t("footer", "contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{t("footer", "address")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+966 53 487 1043</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@oasisgolfstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oasis Golf Studio. {t("footer", "rights")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">{t("footer", "privacy")}</Link>
            <Link href="/terms" className="hover:text-foreground">{t("footer", "terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
