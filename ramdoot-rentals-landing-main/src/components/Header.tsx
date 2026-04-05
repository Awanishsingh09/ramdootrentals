import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-16 md:min-h-20 h-16 md:h-20">
        <a href="#home" className="text-lg xs:text-xl md:text-2xl font-bold shrink-0 min-w-0 pr-2">
          <span className="text-orange-500">Ramdoot</span>{" "}
          <span className="text-foreground">Rentals</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:9120203160">
            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Ride
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-up max-h-[min(70vh,calc(100dvh-4rem))] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col px-4 xs:px-6 py-4 gap-3 xs:gap-4 pb-[env(safe-area-inset-bottom,0px)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:9120203160">
              <Button variant="outline" className="w-full border-primary/30 text-primary">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </a>
            <a href="#contact">
              <Button className="w-full bg-primary text-primary-foreground">
                Book Your Ride
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
