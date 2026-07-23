import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Users, Calendar, CheckCircle2 } from "lucide-react";
import { IMAGE_PLACEHOLDER_MODE } from "@/lib/config";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import heroImg from "@assets/RGC2_1784821884908.JPG";
import interiorImg from "@assets/img01_1770819759953.jpg";
import trackmanImg from "@assets/usedbythebest_1770819759949.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden md:flex md:items-center">
        <div className="relative w-full z-0">
          <img src={heroImg} alt="Golf Simulator" className="w-full h-auto object-contain max-h-screen" />
          <div className={`absolute inset-0 bg-background/30 ${lang === "ar" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-background via-background/40 to-transparent`} />
        </div>

        <div className="container relative md:absolute z-10 px-4 md:px-6 py-10 md:py-0 md:bottom-12">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                {t("home", "heroHeadlinePre")}<span className="text-gradient-orange">{t("home", "heroHighlight")}</span>{lang === "en" && <br/>}{t("home", "heroHeadlinePost")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t("home", "heroDesc")}
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4 text-white font-display">{t("home", "facilityOffers")}</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                {(["bay1","bay2","bay3","bay4"] as const).map((k) => (
                  <li key={k} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/20 text-primary shrink-0"><Target className="w-5 h-5" /></div>
                    {t("home", k)}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px]">
                  {t("nav", "registerInterest")}
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-foreground font-semibold text-lg transition-all flex items-center gap-2 group">
                  {t("home", "howItWorksBtn")} <ArrowRight className={`w-5 h-5 ${lang === "ar" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"} transition-transform`} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why TrackMan Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">{t("home", "whyTrackman")}</h2>
              <div className="grid gap-6">
                {([
                  ["tm1Title","tm1Desc"],
                  ["tm2Title","tm2Desc"],
                  ["tm3Title","tm3Desc"],
                  ["tm4Title","tm4Desc"],
                  ["tm5Title","tm5Desc"],
                ] as const).map(([titleKey, descKey]) => (
                  <div key={titleKey} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">{t("home", titleKey)}</h4>
                      <p className="text-muted-foreground">{t("home", descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {IMAGE_PLACEHOLDER_MODE ? (
                <ImagePlaceholder id={2} section="Why TrackMan Section" className="aspect-video" />
              ) : (
                <img src={trackmanImg} alt="TrackMan Technology" className="w-full h-auto" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Interior Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {IMAGE_PLACEHOLDER_MODE ? (
                <ImagePlaceholder id={1} section="Interior Lounge Section" className="aspect-video" />
              ) : (
                <img src={interiorImg} alt="Interior Lounge" className="w-full h-auto" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t("home", "perfFirst")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("home", "opening")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t("home", "elevate")}</h2>
            <p className="text-muted-foreground text-lg">{t("home", "elevateDesc")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{t("home", "practiceTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("home", "practiceDesc")}</p>
              <Link href="/rates" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                {t("home", "viewRates")} <ArrowRight className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{t("home", "coachingTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("home", "coachingDesc")}</p>
              <Link href="/lessons" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                {t("home", "findCoach")} <ArrowRight className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{t("home", "eventsTitle")}</h3>
              <p className="text-muted-foreground mb-6">{t("home", "eventsDesc")}</p>
              <Link href="/events" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                {t("common", "learnMore")} <ArrowRight className={`w-4 h-4 ${lang === "ar" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{t("home", "ctaTitle")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t("home", "ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                {t("nav", "registerInterest")}
              </button>
            </Link>
            <Link href="/memberships">
              <button className="px-10 py-4 rounded-full bg-card text-foreground font-bold text-xl hover:bg-card/80 border border-white/10 transition-all">
                {t("home", "viewMemberships")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
