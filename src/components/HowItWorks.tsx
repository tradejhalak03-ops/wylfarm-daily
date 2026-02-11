import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: "🛒", title: "Choose Your Products", desc: "Browse our fresh dairy selection and pick your favorites." },
  { num: "02", icon: "📅", title: "Set Your Schedule", desc: "Daily, alternate days, or weekly — you choose the frequency." },
  { num: "03", icon: "🚛", title: "Doorstep Delivery", desc: "We deliver fresh before sunrise, every single time." },
  { num: "04", icon: "🔄", title: "Swap & Repeat", desc: "Return empty bottles, get fresh ones. Zero waste!" },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-background/60 max-w-md mx-auto">
            Getting farm-fresh dairy has never been easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <span className="text-primary/30 font-heading font-bold text-7xl absolute top-0 right-4 select-none">
                {step.num}
              </span>
              <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-background/60 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
