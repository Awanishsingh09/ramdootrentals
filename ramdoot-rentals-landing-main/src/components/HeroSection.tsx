import { Phone, ArrowRight, ShieldCheck, IndianRupee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/Mahindra Scorpio - ZA version 2016.jpg";

const highlights = [
  { icon: ShieldCheck, text: "No Driver Needed" },
  { icon: IndianRupee, text: "Affordable Pricing" },
  { icon: Sparkles, text: "Clean & Well-Maintained" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Self drive car rental in Delhi NCR - Ramdoot Rentals"
          width={1920}
          height={1024}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 pt-[calc(4rem+env(safe-area-inset-top,0px))] md:pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-10 sm:pb-12">
        <div className="max-w-full xs:max-w-xl sm:max-w-2xl min-w-0">
          <p className="mb-4 w-full text-center text-sm font-medium text-white/95 drop-shadow-md sm:text-base">
            Ramdoot Rentals 🚗 – Website Live
          </p>
          <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 xs:px-4 xs:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs xs:text-sm mb-5 sm:mb-6 animate-fade-up text-left">
            <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" />
            <span className="leading-snug">Trusted Self-Drive Service in Delhi NCR</span>
          </div>

          <h1 className="text-[1.65rem] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-tight mb-5 sm:mb-6 animate-fade-up break-words" style={{ animationDelay: "0.1s" }}>
            Self Drive Cars in Delhi NCR –{" "}
            <span className="text-gradient">Freedom to Ride Your Way</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-muted-foreground mb-6 sm:mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Clean, affordable & hassle-free car rentals with quick service. Drive anywhere, anytime — on your terms.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="w-full xs:w-auto min-w-0">
              <Button size="lg" className="w-full xs:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto rounded-full">
                Book Your Ride Now
                <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
              </Button>
            </a>
            <a href="tel:9120203160" className="w-full xs:w-auto min-w-0">
              <Button size="lg" variant="outline" className="w-full xs:w-auto whitespace-normal border-primary/30 text-primary hover:bg-primary/10 text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 h-auto rounded-full gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="leading-snug text-center">
                  Call Now{" "}
                  <span className="font-semibold tabular-nums">9120203160</span>
                </span>
              </Button>
            </a>
          </div>

          <div className="flex flex-col xs:flex-row xs:flex-wrap gap-4 xs:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
