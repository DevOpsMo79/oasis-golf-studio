import { PageHeader } from "@/components/ui/PageHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import interiorImg from "@assets/img01_1770819759953.jpg";
import type { ContactInput } from "@shared/routes";

export default function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactInput) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="min-h-screen pb-24">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch for bookings, events, or general inquiries."
        image={interiorImg}
        placeholderId={5}
      />

      <div className="container px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Visit Oasis Golf Studio</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're located in the heart of Riyadh. Come visit us for a tour of the facility or just to say hello.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/10 text-primary"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-muted-foreground">Location being finalized</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/10 text-primary"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+966 5X XXX XXXX</p>
                  <p className="text-sm text-primary mt-1">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-card rounded-lg border border-white/10 text-primary"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">info@oasisgolfstudio.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card h-64 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-neutral-800 opacity-50"></div>
               <span className="relative z-10 text-muted-foreground font-medium flex items-center gap-2">
                 <MapPin className="w-5 h-5" /> Map Integration Coming Soon
               </span>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background/50 border-white/10 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="hello@example.com" {...field} className="bg-background/50 border-white/10 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+966..." {...field} value={field.value || ''} className="bg-background/50 border-white/10 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your inquiry..." {...field} className="bg-background/50 border-white/10 min-h-[150px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
