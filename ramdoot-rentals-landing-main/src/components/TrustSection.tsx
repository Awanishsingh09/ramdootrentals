import { Star, Users, Car, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Customers" },
  { icon: Car, value: "50+", label: "Cars Available" },
  { icon: Award, value: "5+", label: "Years of Service" },
  { icon: Star, value: "4.8", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Amazing service! The car was spotless and the booking was so easy. Highly recommend Ramdoot Rentals for anyone looking for self-drive in Delhi.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    text: "Very affordable pricing and the car was delivered to my doorstep. Great experience for my weekend trip to Jaipur!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    text: "Used their corporate rental service for our team. Professional, timely, and well-maintained fleet. Will continue using them.",
    rating: 4,
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto text-center min-w-0 px-0">
        <h2 className="section-title">
          Trusted by <span className="text-gradient">Customers</span>
        </h2>
        <p className="section-subtitle mb-12">
          Don't take our word for it — hear from our happy riders.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-12 sm:mb-16 min-w-0">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className="glass-card p-3 xs:p-4 sm:p-6 min-w-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gradient tabular-nums">{value}</p>
              <p className="text-[11px] xs:text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
          {testimonials.map(({ name, text, rating }, i) => (
            <div
              key={name}
              className="glass-card p-4 xs:p-6 text-left hover-lift min-w-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{text}"</p>
              <p className="font-semibold text-foreground text-sm">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
