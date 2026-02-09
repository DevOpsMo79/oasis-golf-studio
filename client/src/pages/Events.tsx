import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "wouter";
import interiorImg from "@assets/image_1770635582046.png";

export default function Events() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Events & Leagues" 
        description="Compete with the community or host your own private gathering."
        image={interiorImg}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Competitive</span>
              <h2 className="text-4xl font-display font-bold mb-6">Winter League</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Join our 10-week handicap league. Play a different world-famous course each week. 
                Prizes for gross and net winners.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Weekly 9-hole rounds</li>
                <li>• Live leaderboards</li>
                <li>• End-of-season banquet</li>
              </ul>
            </div>
            <Link href="/contact?subject=league">
              <button className="w-fit px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
                Register Team
              </button>
            </Link>
          </div>

          <div className="bg-card p-10 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[400px]">
             <div>
              <span className="text-secondary-foreground font-bold tracking-wider uppercase text-sm mb-2 block">Private Booking</span>
              <h2 className="text-4xl font-display font-bold mb-6">Corporate & Parties</h2>
              <p className="text-muted-foreground text-lg mb-6">
                The perfect venue for team building or celebrations. Rent the entire facility or a private block of bays.
                Catering options available.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Accommodates up to 50 guests</li>
                <li>• Custom branding on screens</li>
                <li>• Food & Beverage packages</li>
              </ul>
            </div>
            <Link href="/contact?subject=event">
              <button className="w-fit px-8 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all">
                Inquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
