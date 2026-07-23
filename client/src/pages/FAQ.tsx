import { PageHeader } from "@/components/ui/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq","q1"), a: t("faq","a1") },
    { q: t("faq","q2"), a: t("faq","a2") },
    { q: t("faq","q3"), a: t("faq","a3") },
    { q: t("faq","q4"), a: t("faq","a4") },
    { q: t("faq","q5"), a: t("faq","a5") },
    { q: t("faq","q6"), a: t("faq","a6") },
  ];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        title={t("faq", "pageTitle")}
      />

      <div className="container px-4 md:px-6 py-16 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 bg-card px-6 rounded-xl">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors py-6 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
