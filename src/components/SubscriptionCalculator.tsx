import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const products = [
  { name: "Whole Milk (1L)", price: 60 },
  { name: "Skimmed Milk (1L)", price: 55 },
  { name: "Yogurt (400g)", price: 50 },
  { name: "Paneer (200g)", price: 90 },
  { name: "Ghee (500ml)", price: 350 },
];

const SubscriptionCalculator = () => {
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const toggle = (name: string, delta: number) => {
    setSelected((prev) => {
      const val = (prev[name] || 0) + delta;
      if (val <= 0) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: val };
    });
  };

  const dailyTotal = Object.entries(selected).reduce((sum, [name, qty]) => {
    const p = products.find((pr) => pr.name === name);
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const monthlyTotal = frequency === "daily" ? dailyTotal * 30 : dailyTotal * 4;

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Subscription <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-2">Estimate your monthly WylFarm costs</p>
        </motion.div>

        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex gap-2 mb-6 justify-center">
            {(["daily", "weekly"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`px-5 py-2 rounded-full font-medium capitalize transition-all ${
                  frequency === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-2">
                <span className="font-medium text-sm">{p.name} — ₹{p.price}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggle(p.name, -1)}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center font-bold transition-colors"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold">{selected[p.name] || 0}</span>
                  <button
                    onClick={() => toggle(p.name, 1)}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">Estimated monthly cost</p>
            <p className="text-4xl font-heading font-bold text-primary">₹{monthlyTotal}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCalculator;
