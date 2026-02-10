import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Video, UserCheck, TrendingUp } from "lucide-react";
import heroImg from "@assets/4c8a1be4ba9c42059e37c029c7871f8b_1770557490535.jpg";

export default function Lessons() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Coaching & Development" 
        description="Data-driven instruction from certified professionals."
        image={heroImg}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">Why Train at Oasis?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Traditional ranges leave you guessing. At Oasis, we use TrackMan dual-radar technology 
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
             {/* Placeholder for coach/lesson image if available later */}
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
