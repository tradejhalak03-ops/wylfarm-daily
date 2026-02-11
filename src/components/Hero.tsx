import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fresh dairy farm" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 hidden lg:block text-6xl"
      >
        🥛
      </motion.div>
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-40 hidden lg:block text-5xl"
      >
        🐄
      </motion.div>
      <motion.div
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 right-[45%] hidden lg:block text-4xl"
      >
        🌿
      </motion.div>

      <div className="container mx-auto relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
              <Leaf className="w-4 h-4" /> 100% Farm Fresh
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Fresh Milk,{" "}
            <span className="text-gradient">Delivered</span> to Your
            Doorstep 🥛
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
          >
            Pure, farm-fresh dairy products from our pastures to your table.
            Nature's freshness, delivered daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#products"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 animate-pulse-glow"
            >
              Start Your Delivery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how"
              className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-full font-heading font-semibold text-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all"
            >
              How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌅</span> Before 7 AM delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">♻️</span> Eco-friendly packaging
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
