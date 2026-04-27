import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Check, Sparkles } from "lucide-react";
import interiorImg from "@assets/OGS2_1770819759954.jpg";

export default function Memberships() {
  const tiers = [
    {
      name: "Par",
      price: "899",
      period: "month",
      description: "Entry level access for consistent improvement.",
      features: [
        "4 hours per month included (open bay)",
        "SAR 30 off additional hourly rate",
        "7-day advance booking",
        "2 guest passes per month",
        "Equipment storage access"
      ],
      highlight: false,
      corporate: false,
      cta: "Register Interest",
      ctaHref: "/contact?subject=membership"
    },
    {
      name: "Birdie",
      price: "1,299",
      period: "month",
      description: "Ideal for regular practice and development.",
      features: [
        "8 hours per month included (open bay)",
        "SAR 40 off additional hourly rate",
        "14-day advance booking",
        "4 guest passes per month",
        "Priority peak hour booking",
        "10% F&B discount"
      ],
      highlight: false,
      corporate: false,
      cta: "Register Interest",
      ctaHref: "/contact?subject=membership"
    },
    {
      name: "Eagle",
      price: "1,799",
      period: "month",
      description: "Premium experience for dedicated golfers.",
      features: [
        "16 hours per month included (open or private bay)",
        "SAR 50 off additional hourly rate",
        "21-day advance booking",
        "6 guest passes per month",
        "Peak hour priority access",
        "15% F&B discount",
        "Dedicated locker",
        "1 complimentary coaching session per quarter"
      ],
      highlight: true,
      corporate: false,
      cta: "Register Interest",
      ctaHref: "/contact?subject=membership"
    },
    {
      name: "Corporate",
      price: "From SAR 4,500",
      period: "month",
      description: "For teams, clients, and companies that take golf seriously.",
      note: "Tailored packages available — contact us for pricing",
      features: [
        "20–50 hours per month (shared across team)",
        "2–6 named corporate users",
        "Corporate logo displayed in-venue",
        "Priority booking for all named users",
        "Access to team building events & corporate tournaments",
        "Dedicated account manager",
        "Quarterly simulator access for corporate events",
        "Branded simulator screen during sessions (logo overlay)"
      ],
      highlight: false,
      corporate: true,
      cta: "Contact Us",
      ctaHref: "mailto:mohamed@oasisgolfstudio.com"
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Memberships" 
        description="Join Riyadh's premium performance-focused golf community."
        image={interiorImg}
        placeholderId={4}
      />

      <div className="container px-4 md:px-6 py-16">
        {/* Founding Member Banner */}
        <div 
          className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden border-2 border-primary bg-gradient-to-br from-primary/20 via-card to-background p-8 md:p-12 shadow-2xl shadow-primary/20"
          data-testid="banner-founding-member"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Limited to 25 Spots
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-3" data-testid="text-founding-title">
                Founding Member Offer
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Lock in Eagle benefits at <span className="text-white font-bold">SAR 7,999</span> for your first 12 months. 
                Only available before opening day.
              </p>
            </div>
            <Link href="/contact?subject=founding-member">
              <button 
                className="px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold whitespace-nowrap shadow-lg"
                data-testid="button-founding-member"
              >
                Become a Founding Member
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
                <p className="text-muted-foreground text-sm min-h-10">{tier.description}</p>
                {tier.note && (
                  <p className="text-amber-300/80 text-xs mt-2 italic">{tier.note}</p>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1 flex-wrap">
                  {tier.corporate ? (
                    <>
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">/{tier.period}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">SAR {tier.price}</span>
                      <span className="text-muted-foreground">/{tier.period}</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      tier.corporate 
                        ? "text-amber-400" 
                        : tier.highlight 
                          ? "text-primary" 
                          : "text-muted-foreground"
                    }`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.corporate ? (
                <a href={tier.ctaHref} data-testid={`button-cta-${tier.name.toLowerCase()}`}>
                  <button 
                    className="w-full py-3 rounded-xl font-bold transition-all bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-lg"
                  >
                    {tier.cta}
                  </button>
                </a>
              ) : (
                <Link href={tier.ctaHref} data-testid={`button-cta-${tier.name.toLowerCase()}`}>
                  <button 
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      tier.highlight 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8" data-testid="text-vat-note">
          All prices exclusive of 15% VAT
        </p>
      </div>
    </div>
  );
}
