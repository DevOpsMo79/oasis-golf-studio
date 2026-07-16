import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/hooks/use-language";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Rates from "@/pages/Rates";
import Memberships from "@/pages/Memberships";
import Lessons from "@/pages/Lessons";
import Events from "@/pages/Events";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import ClubServices from "@/pages/ClubServices";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/rates" component={Rates} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/events" component={Events} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/club-services" component={ClubServices} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
