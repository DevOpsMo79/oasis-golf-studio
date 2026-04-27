import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Video, UserCheck, TrendingUp, Check } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import heroImg from "@assets/coaching_1770819759951.jpg";

export default function Lessons() {
  const coachingRates = [
    {
      name: "Initial Assessment",
      duration: "45 min",
      price: "199",
      description: "Private 1:1 assessment with a certified golf professional. Full swing analysis report included."
    },
    {
      name: "Adult 1:1 Lesson",
      duration: "60 min",
      price: "449",
      description: "Private lesson with a certified golf professional. TrackMan data report included."
    },
    {
      name: "Junior U16 Lesson",
      duration: "60 min",
      price: "299",
      description: "Private junior lesson with a certified golf professional. Suitable for beginners to competitive juniors."
    },
    {
      name: "Group Clinic",
      duration: "90 min, 4–8 players",
      price: "199",
      priceSuffix: "per person",
      description: "Small group coaching session. TrackMan data for each participant."
    },
    {
      name: "Monthly Coaching Package",
      duration: "4 × 60 min sessions",
      price: "1,499",
      description: "Four private lessons, scheduled flexibly across the month. Best value for committed improvers.",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Why Train at Oasis Golf Studio?" 
        description="Data-driven instruction from certified professionals."
        image={heroImg}
        placeholderId={6}
      />

      <div className="container px-4 md:px-6 py-16">
        <ImagePlaceholder id={13} section="Lessons Content Top" className="aspect-[21/9] mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Why Train at Oasis Golf Studio?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Traditional ranges leave you guessing. At Oasis Golf Studio, we use TrackMan dual-radar technology 
              to measure every aspect of your swing. Our coaches combine this data with high-speed 
              video analysis to make precise adjustments that stick.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><Video className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">Video Analysis</h4>
                  <p className="text-sm text-muted-foreground">Slow-motion review of your mechanics.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><TrendingUp className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold">Data Tracking</h4>
                  <p className="text-sm text-muted-foreground">Carry, spin rate, attack angle, and more.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-background border border-white/10 flex items-center justify-center p-8 text-center">
                <div>
                  <UserCheck className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Meet Our Pros</h3>
                  <p className="text-muted-foreground">Full roster of PGA certified instructors coming soon.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Coaching Rates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the program that fits your goals. All sessions include TrackMan data and personalized feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {coachingRates.map((rate) => (
            <div 
              key={rate.name}
              data-testid={`card-coaching-${rate.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`rounded-2xl p-6 border flex flex-col ${
                rate.highlight 
                  ? "bg-card border-primary shadow-2xl shadow-primary/10 relative overflow-hidden" 
                  : "bg-card border-white/5 hover:border-primary/30 transition-colors"
              }`}
            >
              {rate.highlight && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                  Best Value
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{rate.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{rate.duration}</p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold">SAR {rate.price}</span>
                {rate.priceSuffix && (
                  <span className="text-muted-foreground text-sm">{rate.priceSuffix}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{rate.description}</p>
              <Link href="/contact?subject=coaching">
                <button 
                  className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    rate.highlight 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mb-20">
          All prices exclusive of 15% VAT
        </p>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Programs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold mb-4">Private Coaching</h3>
            <p className="text-muted-foreground mb-6 text-sm">One-on-one sessions tailored to your specific goals. Available in 30 or 60 minute blocks.</p>
            <Link href="/contact">
              <button className="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold text-sm">Inquire</button>
            </Link>
          </div>
          <div className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold mb-4">Junior Academy</h3>
            <p className="text-muted-foreground mb-6 text-sm">Structured programs for ages 6-17. Focus on fundamentals, etiquette, and fun.</p>
            <Link href="/contact">
              <button className="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold text-sm">Join Waitlist</button>
            </Link>
          </div>
          <div className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors">
            <h3 className="text-xl font-bold mb-4">Elite Development</h3>
            <p className="text-muted-foreground mb-6 text-sm">Intensive coaching for competitive amateurs and aspiring professionals.</p>
            <Link href="/contact">
              <button className="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold text-sm">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
