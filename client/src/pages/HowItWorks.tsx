import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle2, CalendarCheck, MapPin, PlayCircle, TrendingUp } from "lucide-react";
import { IMAGE_PLACEHOLDER_MODE } from "@/lib/config";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import interiorImg from "@assets/swing_1770819759955.jpg";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Book Your Bay",
      description: "Use our seamless online booking system to reserve your preferred time and bay. Choose from standard bays or our VIP private suite.",
      icon: CalendarCheck,
      placeholderId: 9,
    },
    {
      id: "02",
      title: "Arrive & Check-In",
      description: "Upon arrival, check in at the front desk. Our staff will guide you to your bay and help set up your profile on the simulator.",
      icon: MapPin,
      placeholderId: 10,
    },
    {
      id: "03",
      title: "Play or Practice",
      description: "Choose from 100+ famous courses or hit the driving range. The technology tracks every shot with pinpoint accuracy.",
      icon: PlayCircle,
      placeholderId: 11,
    },
    {
      id: "04",
      title: "Analyze & Improve",
      description: "Access your data instantly. Review video of your swing, check carry distances, and track your progress over time.",
      icon: TrendingUp,
      placeholderId: 12,
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="How It Works" 
        description="A simple, automated experience designed to get you playing faster."
        image={interiorImg}
        placeholderId={8}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-4">
                <div className="bg-card p-8 rounded-2xl border border-white/5 w-full relative group hover:border-primary/30 transition-all duration-300">
                  <div className="absolute -top-6 left-8 bg-background border border-white/10 p-3 rounded-xl shadow-xl">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="mt-6">
                    <span className="text-6xl font-display font-bold text-white/5 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">
                      {step.id}
                    </span>
                    <h3 className="text-2xl font-bold mb-4 font-display">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <ImagePlaceholder id={step.placeholderId} section={step.title} className="aspect-video" />
              </div>
              
              {/* Connector Line for visual flow (desktop only) */}
              <div className="hidden md:flex flex-col items-center justify-center w-12 text-primary/30">
                {index < steps.length - 1 && <div className="h-24 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />}
              </div>
              
              <div className="flex-1 hidden md:block" /> {/* Spacer */}
            </div>
          ))}
        </div>

        <div className="mt-24 bg-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/20">
          <h2 className="text-3xl font-display font-bold mb-6">Fully Automated Experience</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Instant Booking</h4>
                <p className="text-sm text-muted-foreground">Real-time availability online 24/7.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Contactless Check-in</h4>
                <p className="text-sm text-muted-foreground">Digital kiosk options available.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Cloud Data</h4>
                <p className="text-sm text-muted-foreground">Your stats sync to your phone automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
