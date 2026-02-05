import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Check } from "lucide-react";
import interiorImg from "@assets/PGAWest_GolfAcademy_TaraHoward-29-scaled_1770299247761.jpg";

export default function Memberships() {
  const tiers = [
    {
      name: "Birdie",
      price: "1,500",
      period: "month",
      description: "Perfect for the casual player looking to improve.",
      features: [
        "5 hours of simulator time per month",
        "10% off food & beverages",
        "Priority booking window (3 days)",
        "Free equipment storage"
      ],
      highlight: false
    },
    {
      name: "Eagle",
      price: "2,800",
      period: "month",
      description: "For the dedicated golfer who wants serious results.",
      features: [
        "12 hours of simulator time per month",
        "15% off food & beverages",
        "Priority booking window (7 days)",
        "Free equipment storage",
        "1 free guest per session"
      ],
      highlight: true
    },
    {
      name: "Albatross",
      price: "5,000",
      period: "month",
      description: "The ultimate unlimited experience for VIPs.",
      features: [
        "Unlimited simulator time (off-peak)",
        "20 hours peak time per month",
        "20% off food & beverages",
        "Priority booking window (14 days)",
        "VIP locker included",
        "Unlimited guests"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Memberships" 
        description="Join the club. Unlock exclusive benefits and consistent practice time."
        image={interiorImg}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-3xl p-8 border flex flex-col ${
                tier.highlight 
                  ? "bg-card border-primary shadow-2xl shadow-primary/10 relative overflow-hidden" 
                  : "bg-background/50 border-white/10"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-display mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">SAR {tier.price}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact?subject=membership">
                <button 
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    tier.highlight 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {tier.highlight ? "Join Now" : "Select Plan"}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto bg-card p-8 rounded-2xl border border-white/5">
          <h3 className="text-2xl font-bold font-display mb-4">Corporate Memberships</h3>
          <p className="text-muted-foreground mb-6">
            Looking for a unique perk for your team? We offer customized corporate packages 
            that include transferable hours, event hosting credits, and branding opportunities.
          </p>
          <Link href="/contact?subject=corporate">
            <span className="text-primary font-bold hover:underline cursor-pointer">Contact our sales team →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
