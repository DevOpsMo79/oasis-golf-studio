import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Check } from "lucide-react";
import interiorImg from "@assets/IMG-20250730-WA0014_1770557490533.jpg";

export default function Memberships() {
  const tiers = [
    {
      name: "Par",
      price: "799",
      period: "month",
      description: "Great entry point for consistent improvement.",
      features: [
        "SAR 50/OFF Per Hour",
        "7-Day Advanced Booking",
        "League Discount Fee",
        "Exclusive Giveaways & Events",
        "And more..."
      ],
      highlight: false
    },
    {
      name: "Birdie",
      price: "999",
      period: "month",
      description: "Ideal for consistent practice and skill development.",
      features: [
        "14-Day Advanced Booking",
        "Digital app-based access",
        "Performance data tracking",
        "Climate-controlled environment",
        "Priority booking access"
      ],
      highlight: false
    },
    {
      name: "Eagle",
      price: "1,299",
      period: "month",
      description: "For the dedicated golfer who wants serious results.",
      features: [
        "21-Day Advanced Booking",
        "12 hours of simulator time per month",
        "15% off food & beverages",
        "Free equipment storage",
        "1 free guest per session"
      ],
      highlight: true
    },
    {
      name: "Albatross",
      price: "1,499",
      period: "month",
      description: "The ultimate unlimited experience for VIPs.",
      features: [
        "30-Day Advanced Booking",
        "Unlimited simulator time (off-peak)",
        "20 hours peak time per month",
        "20% off food & beverages",
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
        description="Starting from SAR 999 / month. Join Riyadh's performance-focused golf community."
        image={interiorImg}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                  Register Interest
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
