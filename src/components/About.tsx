import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-6">
              About <span className="text-gradient">WylFarm</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            WylFarm is our dairy brand — pure milk, ghee, paneer & more from our farms. We partner with
            deliv.bell to bring you the freshest products at your doorstep. Sustainable farming,
            ethical practices, and nature's goodness in every drop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold"
          >
            <Heart className="w-5 h-5 fill-primary" />
            Made with love, from our farm to your family
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
