import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Clock, Users, Zap } from "lucide-react";
import heroImg from "@assets/e03a29495a0f94a4a5147e16f5d2265c_1770299247760.jpg";

export default function Rates() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Rates & Booking" 
        description="Premium simulator bays available by the hour. Bring up to 4 friends per bay."
        image={heroImg}
      />

      <div className="container px-4 md:px-6 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Peak Hours Card */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-white">Peak Hours</h3>
                <p className="text-muted-foreground mt-1">Evenings & Weekends</p>
              </div>
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Popular</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>5 PM - 11 PM (Weekdays)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>All Day (Weekends)</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span>Up to 4 players included</span>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm text-muted-foreground block mb-1">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">SAR 250</span>
                <span className="text-muted-foreground">/ hour</span>
              </div>
            </div>

            <Link href="/contact">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                Book Peak Time
              </button>
            </Link>
          </div>

          {/* Off-Peak Card */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-white/5 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-white">Off-Peak</h3>
                <p className="text-muted-foreground mt-1">Weekdays Daytime</p>
              </div>
              <div className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Best Value</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>9 AM - 5 PM (Weekdays)</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-muted-foreground" />
                <span>Quiet atmosphere</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span>Up to 4 players included</span>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-sm text-muted-foreground block mb-1">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">SAR 180</span>
                <span className="text-muted-foreground">/ hour</span>
              </div>
            </div>

            <Link href="/contact">
              <button className="w-full py-4 rounded-xl bg-secondary text-white font-bold hover:bg-white/10 transition-all">
                Book Off-Peak
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>Equipment rental available upon request. All prices include tax.</p>
        </div>
      </div>
    </div>
  );
}
