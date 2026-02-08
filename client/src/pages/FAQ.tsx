import { PageHeader } from "@/components/ui/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@assets/e03a29495a0f94a4a5147e16f5d2265c_1770299247760.jpg";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to bring my own clubs?",
      answer: "We recommend bringing your own clubs for the best experience. However, we do have premium rental sets available for men, women, and juniors."
    },
    {
      question: "How long does it take to play 18 holes?",
      answer: "On average, it takes about 1 hour per person to play 18 holes. For a foursome, we recommend booking a 4-hour slot."
    },
    {
      question: "Is the simulator accurate?",
      answer: "Yes. We use TrackMan technology, which is the industry standard used by tour professionals. It uses dual-radar technology to track both the club and ball data with incredible precision."
    },
    {
      question: "Can I wear golf shoes?",
      answer: "You can wear spikeless golf shoes or regular sneakers. Metal spikes and soft spikes are not permitted as they can damage the turf."
    },
    {
      question: "Do you serve food and drinks?",
      answer: "Yes, we offer a curated menu of snacks, coffee, and beverages. We also partner with local restaurants for event catering."
    },
    {
      question: "Can I bring children?",
      answer: "Absolutely! We welcome golfers of all ages. Children under 12 must be accompanied by an adult."
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Frequently Asked Questions" 
        image={heroImg}
      />

      <div className="container px-4 md:px-6 py-16 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 bg-card px-6 rounded-xl">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors py-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
