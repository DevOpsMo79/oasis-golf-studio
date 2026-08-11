import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Check, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import baysLoungeImg from "@assets/info_1920x1080_neverlookedbetter_3_1784820112450.jpg";
import bays3Img from "@assets/3bays_1784820112458.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function Memberships() {
  const { t } = useLanguage();

  const tiers = [
    {
      name: "Par",
      price: "TBA",
      descKey: "tierDescPar",
      features: ["featParA","featParB","featParC","featParD","featParE"],
      highlight: false,
      corporate: false,
      ctaKey: "registerInterest",
      ctaHref: "/contact?subject=membership",
    },
    {
      name: "Birdie",
      price: "TBA",
      descKey: "tierDescBirdie",
      features: ["featBirdieA","featBirdieB","featBirdieC","featBirdieD","featBirdieE","featBirdieF"],
      highlight: false,
      corporate: false,
      ctaKey: "registerInterest",
      ctaHref: "/contact?subject=membership",
    },
    {
      name: "Eagle",
      price: "TBA",
      descKey: "tierDescEagle",
      features: ["featEagleA","featEagleB","featEagleC","featEagleD","featEagleE","featEagleF","featEagleG","featEagleH"],
      highlight: true,
      corporate: false,
      ctaKey: "registerInterest",
      ctaHref: "/contact?subject=membership",
    },
    {
      name: "Corporate",
      descKey: "tierDescCorporate",
      noteKey: "tierNoteCorporate",
      features: ["featCorpA","featCorpB","featCorpC","featCorpD","featCorpE","featCorpF"],
      highlight: false,
      corporate: true,
      ctaKey: "contactUs",
      ctaHref: "mailto:mohamed@oasisgolfstudio.com",
    },
  ] as const;

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        title={t("memberships", "pageTitle")}
        description={t("memberships", "pageDesc")}
        image={baysLoungeImg}
        desktopObjectPosition="center 24%"
      />

      <div className="container px-4 md:px-6 py-16">
        {/* Founding Member Banner */}
        <div
          className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/20"
          data-testid="banner-founding-member"
        >
          <img
            src={bays3Img}
            alt="Founding Member"
            className="founding-member-image absolute inset-0 w-full h-full object-cover opacity-30"
            style={{
              "--desktop-object-position": "center 18%",
            } as CSSProperties}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card/90 to-background/90" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {t("memberships", "foundingBadge")}
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-3" data-testid="text-founding-title">
                {t("memberships", "foundingTitle")}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                {t("memberships", "foundingDesc")}
              </p>
            </div>
            <Link href="/contact?subject=founding-member">
              <button
                className="px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold whitespace-nowrap shadow-lg"
                data-testid="button-founding-member"
              >
                {t("memberships", "foundingCta")}
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-testid={`card-tier-${tier.name.toLowerCase()}`}
              className={`rounded-3xl p-6 md:p-7 border flex flex-col relative overflow-hidden ${
                tier.corporate
                  ? "bg-gradient-to-br from-amber-950/40 via-card to-background border-amber-500/60 shadow-2xl shadow-amber-500/10"
                  : tier.highlight
                    ? "bg-card border-primary shadow-2xl shadow-primary/10"
                    : "bg-background/50 border-white/10"
              }`}
            >
              {tier.highlight && !tier.corporate && (
                <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
              )}
              {tier.corporate && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold font-display mb-2 ${tier.corporate ? "text-amber-300" : ""}`}>
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm min-h-10">{t("memberships", tier.descKey)}</p>
                {"noteKey" in tier && (
                  <p className="text-amber-300/80 text-xs mt-2 italic">{t("memberships", tier.noteKey as string)}</p>
                )}
              </div>

              {tier.price && (
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 flex-wrap">
                    {tier.corporate ? (
                      <>
                        <span className="text-3xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{t("common", "perMonth")}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">{tier.price}</span>
                        <span className="text-muted-foreground">{t("common", "perMonth")}</span>
                      </>
                    )}
                  </div>
                </div>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      tier.corporate
                        ? "text-amber-400"
                        : tier.highlight
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`} />
                    <span className="text-gray-300">{t("memberships", fKey)}</span>
                  </li>
                ))}
              </ul>

              {tier.corporate ? (
                <a href={tier.ctaHref} data-testid={`button-cta-${tier.name.toLowerCase()}`}>
                  <button className="w-full py-3 rounded-xl font-bold transition-all bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-lg">
                    {t("common", tier.ctaKey as "contactUs")}
                  </button>
                </a>
              ) : (
                <Link href={tier.ctaHref} data-testid={`button-cta-${tier.name.toLowerCase()}`}>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}>
                    {t("common", tier.ctaKey as "registerInterest")}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8" data-testid="text-vat-note">
          {t("common", "vatNote")}
        </p>
      </div>
    </div>
  );
}
