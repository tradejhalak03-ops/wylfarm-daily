import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", city: "Mumbai", text: "WylFarm has changed my mornings! The milk is so fresh and creamy!", avatar: "🧑‍🦱" },
  { name: "Rajesh Kumar", city: "Delhi", text: "Finally, a dairy service I can trust. WylFarm never disappoints!", avatar: "👨" },
  { name: "Anita Desai", city: "Bangalore", text: "Their paneer is incredible — you can taste the farm freshness!", avatar: "👩" },
  { name: "Arjun Mehta", city: "Pune", text: "Love the glass bottles and the quality. WylFarm is doing it right!", avatar: "🧑" },
  { name: "Sneha Patel", city: "Ahmedabad", text: "My kids refuse any other milk now. Thank you WylFarm!", avatar: "👩‍🦰" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
            What Our <span className="text-gradient">Family</span> Says
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="text-5xl mb-4">{testimonials[current].avatar}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium mb-6 text-foreground/90 italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading font-semibold">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].city}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
