import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Target, Users, Trophy, Calendar, CheckCircle2 } from "lucide-react";
import { IMAGE_PLACEHOLDER_MODE } from "@/lib/config";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import heroImg from "@assets/IMG-20250730-WA0016_1770557490533.jpg";
import interiorImg from "@assets/img01_1770819759953.jpg";
import trackmanImg from "@assets/usedbythebest_1770819759949.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden">
        <div className="relative w-full z-0">
          <img src={heroImg} alt="Golf Simulator" className="w-full h-auto object-contain max-h-screen" />
          <div className="absolute inset-0 bg-background/50 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        <div className="container absolute z-10 px-4 md:px-6 bottom-8 md:bottom-12">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                Bringing the <span className="text-gradient-orange">Outdoors</span> <br/> Indoors.
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Oasis Golf Studio is Riyadh’s first premium indoor golf studio, powered by TrackMan technology. Designed for serious golfers who value performance, convenience, and community, our self-service, app-based access lets you practice and/or play on your own terms in a climate-controlled, professional-grade, digitally managed space.
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4 text-white font-display">Our facility offers:</h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary"><Target className="w-5 h-5" /></div>
                  3 TrackMan iO-Powered Open Bays
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary"><Target className="w-5 h-5" /></div>
                  1 TrackMan 4-Powered Private Bay
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary"><Target className="w-5 h-5" /></div>
                  Club Fitting Services
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary"><Target className="w-5 h-5" /></div>
                  Tiered Memberships
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px]">
                  Book a Bay
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-foreground font-semibold text-lg transition-all flex items-center gap-2 group">
                  How It Works <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why TrackMan Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Why TrackMan</h2>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Tour-Proven Accuracy</h4>
                    <p className="text-muted-foreground">The industry standard used by 90% of the world's best players for pinpoint precision tracking.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">No Markers Needed</h4>
                    <p className="text-muted-foreground">Advanced dual-radar technology tracks club and ball data without the need for markers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">TrackMan Golf App</h4>
                    <p className="text-muted-foreground">Every shot is saved to your personal profile for instant review on your phone anytime.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Practice with Purpose</h4>
                    <p className="text-muted-foreground">Improve faster with Shot Analysis and Combine-style challenges built into the system.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">150+ World-Class Courses</h4>
                    <p className="text-muted-foreground">Play stunningly accurate renders of the world's most famous venues.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {IMAGE_PLACEHOLDER_MODE ? (
                <ImagePlaceholder id={2} section="Why TrackMan Section" className="aspect-video" />
              ) : (
                <img src={trackmanImg} alt="TrackMan Technology" className="w-full h-auto" />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Interior Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {IMAGE_PLACEHOLDER_MODE ? (
                <ImagePlaceholder id={1} section="Interior Lounge Section" className="aspect-video" />
              ) : (
                <img src={interiorImg} alt="Interior Lounge" className="w-full h-auto" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Performance First. Convenience Always.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Come visit us at Oasis Golf Studio, Riyadh’s new destination for golf excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Elevate Your Game</h2>
            <p className="text-muted-foreground text-lg">Everything you need to improve, compete, and enjoy the game of golf.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Practice & Play</h3>
              <p className="text-muted-foreground mb-6">Access 100+ world-class courses and get instant feedback on every shot with industry-leading launch monitors.</p>
              <Link href="/rates" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Rates <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Coaching</h3>
              <p className="text-muted-foreground mb-6">Work with PGA certified professionals to refine your mechanics and lower your handicap.</p>
              <Link href="/lessons" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Find a Coach <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">Events</h3>
              <p className="text-muted-foreground mb-6">Host your next corporate outing, birthday party, or join our competitive leagues.</p>
              <Link href="/events" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Tee Off?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the Oasis Golf Studio community today. Book your first session or inquire about memberships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                Book Now
              </button>
            </Link>
            <Link href="/memberships">
              <button className="px-10 py-4 rounded-full bg-card text-foreground font-bold text-xl hover:bg-card/80 border border-white/10 transition-all">
                View Memberships
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
