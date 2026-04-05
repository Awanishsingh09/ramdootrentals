import { MapPin, Truck, Clock } from "lucide-react";

const areas = ["New Delhi", "Gurugram", "Noida", "Greater Noida", "Faridabad", "Ghaziabad"];

const CoverageSection = () => {
  return (
    <section id="coverage" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Serving <span className="text-gradient">Delhi NCR</span>
          </h2>
          <p className="section-subtitle">
            Reliable self-drive car rental across the entire Delhi NCR region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-10 items-center min-w-0">
          <div>
            <div className="glass-card p-3 xs:p-4 sm:p-8 min-w-0">
              {/* Map placeholder */}
              <div className="relative w-full max-w-full rounded-lg bg-secondary/50 border border-border overflow-hidden aspect-video min-h-[180px] sm:min-h-0">
                <iframe
                  title="Ramdoot Rentals Delhi NCR Coverage"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258!2d76.76357!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="absolute inset-0 w-full h-full rounded-lg border-0"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 glass-card p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Doorstep Delivery</h3>
                <p className="text-sm text-muted-foreground">We deliver the car right to your door</p>
              </div>
            </div>

            <div className="flex items-center gap-3 glass-card p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Quick Pickup</h3>
                <p className="text-sm text-muted-foreground">Pick up from our location in minutes</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Areas We Cover
              </h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
