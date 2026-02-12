import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Check } from "lucide-react";
import interiorImg from "@assets/OGS2_1770819759954.jpg";

export default function Memberships() {
  const tiers = [
    {
      name: "Par",
      price: "699",
      period: "month",
      description: "Entry level access for consistent improvement.",
      features: [
        "7-Day Advanced Booking",
        "50 SAR off hourly rate",
        "2 guest passes per month",
        "Equipment storage access"
      ],
      highlight: false
    },
    {
      name: "Birdie",
      price: "1,099",
      period: "month",
      description: "Ideal for regular practice and development.",
      features: [
        "14-Day Advanced Booking",
        "60 SAR off hourly rate",
        "4 guest passes per month",
        "Priority peak booking access",
        "10% F&B discount"
      ],
      highlight: false
    },
    {
      name: "Eagle",
      price: "1,499",
      period: "month",
      description: "Premium experience for dedicated golfers.",
      features: [
        "21-Day Advanced Booking",
        "70 SAR off hourly rate",
        "6 guest passes per month",
        "Peak hour priority",
        "15% F&B discount",
        "Locker included"
      ],
      highlight: true
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
