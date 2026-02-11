import { motion } from "framer-motion";

const reasons = [
  { icon: "🌅", title: "Delivered Before 7 AM", desc: "Start your mornings with farm-fresh milk, right at your doorstep." },
  { icon: "🐄", title: "No Preservatives", desc: "100% natural dairy — no additives, no shortcuts." },
  { icon: "♻️", title: "Eco-Friendly Bottles", desc: "Reusable glass bottles to reduce your footprint." },
  { icon: "📱", title: "Easy Ordering", desc: "Order, pause, or customize your delivery in seconds." },
  { icon: "💯", title: "Quality Guarantee", desc: "We stand behind every drop. Not happy? Full refund." },
  { icon: "🌾", title: "Sustainable Farming", desc: "Ethical practices, happy cows, and a greener planet." },
];

const WhyChoose = () => {
  return (
    <section id="why" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            The <span className="text-gradient">WylFarm</span> Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl hover:bg-card transition-colors group"
            >
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
