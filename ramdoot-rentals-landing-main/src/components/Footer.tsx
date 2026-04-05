import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 pb-[env(safe-area-inset-bottom,0px)]">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-10 sm:py-12 min-w-0">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gradient">Ramdoot</span> Rentals
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted self-drive car rental partner in Delhi NCR. Clean cars, affordable prices, and hassle-free experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
              <a href="#contact" className="hover:text-primary transition-colors">Book a Ride</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:9120203160" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 9120203160
              </a>
              <a href="tel:9608210813" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 9608210813
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Delhi NCR, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ramdoot Rentals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
