import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import { Clock, Users, Zap, Star } from "lucide-react";
import heroImg from "@assets/e03a29495a0f94a4a5147e16f5d2265c_1770299247760.jpg";

const PEAK_HOURS = {
  weekdays: [
    { start: 6, end: 10 },
    { start: 18, end: 24 }
  ],
  friday: [
    { start: 6, end: 10 },
    { start: 16, end: 24 }
  ],
  saturday: [
    { start: 6, end: 24 }
  ]
};

const OFF_PEAK_HOURS = {
  weekdays: [{ start: 10, end: 18 }],
  friday: [{ start: 10, end: 16 }]
};

export const isPeak = (dayOfWeek: number, hour: number) => {
  if (dayOfWeek === 6) { // Saturday
    return hour >= 6 && hour < 24;
  }
  if (dayOfWeek === 5) { // Friday
    return (hour >= 6 && hour < 10) || (hour >= 16 && hour < 24);
  }
  // Weekdays (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu)
  return (hour >= 6 && hour < 10) || (hour >= 18 && hour < 24);
};

export const getHourlyRate = (bayType: 'open' | 'vip', isPeakTime: boolean) => {
  if (bayType === 'vip') {
    return isPeakTime ? 250 : 200;
  }
  return isPeakTime ? 200 : 150;
};

export default function Rates() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Rates & Access" 
        description="Premium TrackMan iO and TrackMan 4 simulator bays. Self-service, digitally managed performance space."
        image={heroImg}
      />

      <div className="container px-4 md:px-6 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Open Bay Rates */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-white/5 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold font-display text-white mb-6">Open TrackMan iO Bays</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold text-lg">Peak Time</p>
                  <p className="text-sm text-muted-foreground">SAR 200 / hour</p>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">PEAK</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold text-lg">Off-Peak Time</p>
                  <p className="text-sm text-muted-foreground">SAR 150 / hour</p>
                </div>
                <div className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold">OFF-PEAK</div>
              </div>
            </div>
            <Link href="/contact" className="block mt-8">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
                Register Interest
              </button>
            </Link>
          </div>

          {/* VIP Bay Rates */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <Star className="text-primary w-6 h-6 fill-primary" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-6">Private VIP TrackMan 4 Bay</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold text-lg">Peak Time</p>
                  <p className="text-sm text-muted-foreground">SAR 250 / hour</p>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">PEAK</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-background/50 rounded-xl border border-white/5">
                <div>
                  <p className="font-bold text-lg">Off-Peak Time</p>
                  <p className="text-sm text-muted-foreground">SAR 200 / hour</p>
                </div>
                <div className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-xs font-bold">OFF-PEAK</div>
              </div>
            </div>
            <Link href="/contact" className="block mt-8">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Register Interest
              </button>
            </Link>
          </div>
        </div>

        {/* Hour Definitions Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-card/50 p-8 rounded-3xl border border-white/5">
          <div>
            <h4 className="text-xl font-bold font-display mb-4 text-primary">Peak Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Weekdays:</span>
                <span className="text-white">06:00-09:00 & 17:00-01:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Friday & Saturday:</span>
                <span className="text-white">06:00-01:00 (All Day)</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold font-display mb-4 text-muted-foreground">Off-Peak Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Weekdays:</span>
                <span className="text-white">09:00-17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-muted-foreground max-w-2xl mx-auto">
          <p className="text-sm">Oasis Golf Studio is Riyadh's first premium indoor golf performance studio. Digitally managed for ultimate convenience and performance tracking.</p>
        </div>
      </div>
    </div>
  );
}
