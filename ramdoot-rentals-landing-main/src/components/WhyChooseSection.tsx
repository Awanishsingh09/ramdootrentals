import { ShieldCheck, IndianRupee, Zap, Settings, Star, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Clean & Sanitized Cars", description: "Every car is thoroughly cleaned and sanitized before each trip." },
  { icon: IndianRupee, title: "Affordable Pricing", description: "Best rates in Delhi NCR — no hidden charges, transparent billing." },
  { icon: Zap, title: "Quick Booking Process", description: "Book your car in minutes. Fast confirmation, hassle-free paperwork." },
  { icon: Settings, title: "Flexible Rental Plans", description: "Hourly, daily, weekly — choose the plan that fits your schedule." },
  { icon: Star, title: "Trusted Local Service", description: "A reliable Delhi NCR brand backed by happy customer reviews." },
  { icon: MapPin, title: "Doorstep Delivery", description: "We deliver the car to your location — no need to visit an office." },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center min-w-0 px-0">
        <h2 className="section-title">
          Why Choose <span className="text-gradient">Us</span>
        </h2>
        <p className="section-subtitle mb-12">
          Experience the Ramdoot difference — quality, trust, and convenience in every ride.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="flex items-start gap-3 sm:gap-4 p-4 xs:p-6 glass-card hover-lift text-left min-w-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
