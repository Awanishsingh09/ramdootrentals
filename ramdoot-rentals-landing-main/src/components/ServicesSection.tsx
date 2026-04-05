import { Car, Calendar, Building2 } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Self Drive Rentals",
    description: "Drive at your own pace. Pick your favorite car and hit the road with total freedom.",
  },
  {
    icon: Calendar,
    title: "Daily / Weekly Rentals",
    description: "Flexible rental plans — rent for a day, a week, or longer at the best rates.",
  },
  {
    icon: Building2,
    title: "Corporate Rentals",
    description: "Reliable fleet solutions for businesses. Special packages for corporate clients.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto text-center min-w-0 px-0">
        <h2 className="section-title">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="section-subtitle mb-12">
          From daily drives to corporate fleets — we've got the perfect ride for every need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="glass-card p-4 xs:p-6 text-left hover-lift group cursor-pointer min-w-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
