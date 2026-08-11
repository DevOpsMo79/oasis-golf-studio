import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Video, UserCheck, TrendingUp } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import coachingImg from "@assets/coaching_1784820112457.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function Lessons() {
  const { t } = useLanguage();

  const coachingRates = [
    { nameKey: "rate1Name", durationKey: "rate1Duration", price: "TBA", descKey: "rate1Desc", highlight: false },
    { nameKey: "rate2Name", durationKey: "rate2Duration", price: "TBA", descKey: "rate2Desc", highlight: false },
    { nameKey: "rate3Name", durationKey: "rate3Duration", price: "TBA", descKey: "rate3Desc", highlight: false },
    { nameKey: "rate4Name", durationKey: "rate4Duration", price: "TBA", descKey: "rate4Desc", perPerson: true, highlight: false },
    { nameKey: "rate5Name", durationKey: "rate5Duration", price: "TBA", descKey: "rate5Desc", highlight: true },
    { nameKey: "rate6Name", durationKey: "rate6Duration", price: "TBA", descKey: "rate6Desc", highlight: false },
  ] as const;

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        title={t("lessons", "pageTitle")}
        description={t("lessons", "pageDesc")}
        image={coachingImg}
        desktopObjectPosition="center 24%"
      />

      <div className="container px-4 md:px-6 py-16">
        <ImagePlaceholder id={13} section="Lessons Content Top" className="aspect-[21/9] mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">{t("lessons", "sectionTitle")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("lessons", "sectionDesc")}
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><Video className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">{t("lessons", "videoTitle")}</h4>
                  <p className="text-sm text-muted-foreground">{t("lessons", "videoDesc")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><TrendingUp className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">{t("lessons", "dataTitle")}</h4>
                  <p className="text-sm text-muted-foreground">{t("lessons", "dataDesc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-background border border-white/10 flex items-center justify-center p-8 text-center">
              <div>
                <UserCheck className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t("lessons", "meetPros")}</h3>
                <p className="text-muted-foreground">{t("lessons", "meetProsDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">{t("lessons", "coachingRatesTitle")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("lessons", "coachingRatesDesc")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {coachingRates.map((rate) => (
            <div
              key={rate.nameKey}
              data-testid={`card-coaching-${rate.nameKey}`}
              className={`rounded-2xl p-6 border flex flex-col ${
                rate.highlight
                  ? "bg-card border-primary shadow-2xl shadow-primary/10 relative overflow-hidden"
                  : "bg-card border-white/5 hover:border-primary/30 transition-colors"
              }`}
            >
              {rate.highlight && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                  {t("common", "bestValue")}
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{t("lessons", rate.nameKey)}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{t("lessons", rate.durationKey)}</p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{rate.price}</span>
                {"perPerson" in rate && rate.perPerson && (
                  <span className="text-muted-foreground text-sm">{t("common", "perPerson")}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{t("lessons", rate.descKey)}</p>
              <Link href="/contact?subject=coaching">
                <button className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  rate.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}>
                  {t("common", "bookNow")}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mb-20">
          {t("common", "vatNote")}
        </p>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">{t("lessons", "programsTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {([
            ["prog1Title","prog1Desc","prog1Cta"],
            ["prog2Title","prog2Desc","prog2Cta"],
            ["prog3Title","prog3Desc","prog3Cta"],
          ] as const).map(([titleKey, descKey, ctaKey]) => (
            <div key={titleKey} className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold mb-4">{t("lessons", titleKey)}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{t("lessons", descKey)}</p>
              <Link href="/contact">
                <button className="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold text-sm">
                  {t("lessons", ctaKey)}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
