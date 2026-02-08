import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <Security />
        <FAQ />
        <FinalCTA />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
