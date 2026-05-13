import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import interiorImg from "@assets/Entertainment_1770819759953.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function Events() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        title={t("events", "pageTitle")}
        description={t("events", "pageDesc")}
        image={interiorImg}
        placeholderId={7}
      />

      <div className="container px-4 md:px-6 py-16">
        <ImagePlaceholder id={14} section="Events Content Top" className="aspect-[21/9] mb-12" />
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">{t("events", "competitiveLabel")}</span>
              <h2 className="text-4xl font-display font-bold mb-6">{t("events", "league1Title")}</h2>
              <p className="text-muted-foreground text-lg mb-6">{t("events", "league1Desc")}</p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>{t("events", "league1Li1")}</li>
                <li>{t("events", "league1Li2")}</li>
                <li>{t("events", "league1Li3")}</li>
              </ul>
            </div>
            <Link href="/contact?subject=league">
              <button className="w-fit px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
                {t("events", "league1Cta")}
              </button>
            </Link>
          </div>

          <div className="bg-card p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-secondary-foreground font-bold tracking-wider uppercase text-sm mb-2 block">{t("events", "privateLabel")}</span>
              <h2 className="text-4xl font-display font-bold mb-6">{t("events", "corp1Title")}</h2>
              <p className="text-muted-foreground text-lg mb-6">{t("events", "corp1Desc")}</p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>{t("events", "corp1Li1")}</li>
                <li>{t("events", "corp1Li2")}</li>
                <li>{t("events", "corp1Li3")}</li>
              </ul>
            </div>
            <Link href="/contact?subject=event">
              <button className="w-fit px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all">
                {t("events", "corp1Cta")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
