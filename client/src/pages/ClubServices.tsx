import { Link } from "wouter";
import { Wrench, Gauge, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function ClubServices() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 0-3 .6-4.1 1.7L3.7 8.9A6 6 0 003 13v1a1 1 0 001 1h1a1 1 0 001-1v-1a4 4 0 011.2-2.8l4.2-4.2A4 4 0 0114 5h1a1 1 0 001-1V3a1 1 0 00-1-1h-3zM8 20h8M12 15v5" /></svg>,
      titleKey: "card1Title",
      descKey: "card1Desc",
      bullets: ["card1b1","card1b2","card1b3"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      titleKey: "card2Title",
      descKey: "card2Desc",
      bullets: ["card2b1","card2b2","card2b3","card2b4"],
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      titleKey: "card3Title",
      descKey: "card3Desc",
      bullets: ["card3b1","card3b2","card3b3"],
    },
  ] as const;

  return (
    <div className="min-h-screen pb-24 pt-32">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t("clubServices", "badge")}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{t("clubServices", "pageTitle")}</h1>
          <p className="text-xl text-muted-foreground mb-4">{t("clubServices", "subheadline")}</p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t("clubServices", "intro")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {cards.map((card) => (
            <div
              key={card.titleKey}
              className="bg-card rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{t("clubServices", card.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {t("clubServices", card.descKey)}
              </p>
              <ul className="space-y-2">
                {card.bullets.map((bKey) => (
                  <li key={bKey} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {t("clubServices", bKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-card/50 rounded-3xl border border-white/5 p-10 md:p-14">
          <Link href="/contact">
            <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 mb-5">
              {t("clubServices", "ctaBtn")}
            </button>
          </Link>
          <p className="text-muted-foreground text-sm">{t("clubServices", "ctaNote")}</p>
        </div>
      </div>
    </div>
  );
}
