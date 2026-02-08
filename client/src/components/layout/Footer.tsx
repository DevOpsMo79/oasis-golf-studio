import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import logoArb from "@assets/OGS_Brandin_Logo_v2.6_Arb_1770299283033.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={logoArb} alt="Oasis Golf Studio Arabic Logo" className="h-16 w-auto opacity-90" />
            <p className="text-muted-foreground leading-relaxed">
              Oasis Golf Studio is Riyadh's first premium indoor golf performance studio. Bringing the outdoors indoors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/rates" className="text-muted-foreground hover:text-primary transition-colors">Rates & Booking</Link></li>
              <li><Link href="/memberships" className="text-muted-foreground hover:text-primary transition-colors">Memberships</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Programs</h3>
            <ul className="space-y-4">
              <li><Link href="/lessons" className="text-muted-foreground hover:text-primary transition-colors">Private Lessons</Link></li>
              <li><Link href="/lessons" className="text-muted-foreground hover:text-primary transition-colors">Junior Academy</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Corporate Events</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Leagues</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+966 5X XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@oasisgolfstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oasis Golf Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
