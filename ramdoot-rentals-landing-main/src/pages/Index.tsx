import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CoverageSection from "@/components/CoverageSection";
import ContactSection from "@/components/ContactSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background">
      <Header />
      <main className="pb-[max(5.5rem,env(safe-area-inset-bottom,0px)+4.5rem)]">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <CoverageSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
