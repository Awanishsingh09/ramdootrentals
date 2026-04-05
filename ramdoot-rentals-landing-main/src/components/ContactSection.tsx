import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", date: "", carType: "Sedan" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your ride.",
    });
    setForm({ name: "", phone: "", date: "", carType: "Sedan" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Book Your <span className="text-gradient">Ride Today</span>
          </h2>
          <p className="section-subtitle">Get in touch and we'll have you on the road in no time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-10 max-w-full md:max-w-5xl mx-auto min-w-0">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-4 xs:p-6 glow-border min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href="tel:9120203160" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm">Phone</p>
                    <p className="text-foreground font-medium">9120203160</p>
                  </div>
                </a>
                <a href="tel:9608210813" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm">Phone</p>
                    <p className="text-foreground font-medium">9608210813</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col xs:flex-row gap-3 mt-6">
                <a href="tel:9120203160" className="w-full xs:flex-1 min-w-0">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-5 sm:py-6 h-auto text-sm sm:text-base">
                    <Phone className="w-4 h-4 mr-2 shrink-0" /> Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/919120203160?text=Hi%2C%20I%20want%20to%20book%20a%20self-drive%20car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:flex-1 min-w-0"
                >
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-full py-5 sm:py-6 h-auto text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 mr-2 shrink-0" /> WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="glass-card p-4 xs:p-6 glow-border space-y-4 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-2">Quick Booking</h3>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Your Name</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Phone Number</label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Pickup Date</label>
              <Input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Car Type</label>
              <select
                value={form.carType}
                onChange={(e) => setForm({ ...form, carType: e.target.value })}
                className="w-full h-10 rounded-md bg-secondary/50 border border-border px-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="Hatchback">Hatchback</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-5 sm:py-6 h-auto text-sm sm:text-base">
              <Send className="w-4 h-4 mr-2" /> Submit Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
