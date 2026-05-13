import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Star } from "lucide-react";
import heroImg from "@assets/swing2_1770819759956.jpg";
import { useLanguage } from "@/hooks/use-language";

export const isPeak = (dayOfWeek: number, hour: number) => {
  if (dayOfWeek === 6) return hour >= 6 && hour < 24;
  if (dayOfWeek === 5) return (hour >= 6 && hour < 10) || (hour >= 16 && hour < 24);
  return (hour >= 6 && hour < 10) || (hour >= 18 && hour < 24);
};

export const getHourlyRate = (bayType: "open" | "vip", isPeakTime: boolean) => {
  if (bayType === "vip") return isPeakTime ? 250 : 200;
  return isPeakTime ? 200 : 150;
};

export default function Rates() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        title={t("rates", "pageTitle")}
        description={t("rates", "pageDesc")}
        image={heroImg}
        placeholderId={3}
      />

      <div className="container px-4 md:px-6 mt-8 md:mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Open Bay */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-white/5 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold font-display text-white mb-6">{t("rates", "openBaysTitle")}</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <p className="font-bold text-lg">SAR 200 {t("common", "perHour")}</p>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{t("common", "peak")}</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <p className="font-bold text-lg">SAR 150 {t("common", "perHour")}</p>
                <div className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{t("common", "offPeak")}</div>
              </div>
            </div>
            <Link href="/contact" className="block mt-8">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
                {t("common", "registerInterest")}
              </button>
            </Link>
          </div>

          {/* VIP Bay */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <Star className="text-primary w-6 h-6 fill-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-6">{t("rates", "vipBayTitle")}</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <p className="font-bold text-lg">SAR 300 {t("common", "perHour")}</p>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{t("common", "peak")}</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <p className="font-bold text-lg">SAR 250 {t("common", "perHour")}</p>
                <div className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{t("common", "offPeak")}</div>
              </div>
            </div>
            <Link href="/contact" className="block mt-8">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                {t("common", "registerInterest")}
              </button>
            </Link>
          </div>
        </div>

        {/* Hour Definitions */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-card/50 p-8 rounded-3xl border border-white/5">
          <div>
            <h4 className="text-xl font-bold font-display mb-4 text-primary">{t("rates", "peakHours")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("rates", "weekdays")}</span>
                <span className="text-white">{t("rates", "peakWeekdayTime")}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("rates", "friSat")}</span>
                <span className="text-white">{t("rates", "peakFriSatTime")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold font-display mb-4 text-muted-foreground">{t("rates", "offPeakHours")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">{t("rates", "weekdays")}</span>
                <span className="text-white">{t("rates", "offPeakWeekdayTime")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-muted-foreground max-w-2xl mx-auto">
          <p className="text-sm">{t("rates", "footerNote")}</p>
        </div>
      </div>
    </div>
  );
}
