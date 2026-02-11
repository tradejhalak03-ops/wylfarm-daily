import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const products = [
  { name: "Fresh Whole Milk", sizes: "1L / 2L", price: "₹60", desc: "Rich, creamy whole milk straight from our farm", emoji: "🥛" },
  { name: "Skimmed Milk", sizes: "1L / 2L", price: "₹55", desc: "Light and healthy with all the goodness", emoji: "🥛" },
  { name: "Chocolate Milk", sizes: "500ml", price: "₹45", desc: "Kids' favorite — rich chocolate meets fresh milk", emoji: "🍫" },
  { name: "Strawberry Milk", sizes: "500ml", price: "₹45", desc: "Sweet strawberry bliss in every sip", emoji: "🍓" },
  { name: "Fresh Cream", sizes: "250ml", price: "₹80", desc: "Thick, velvety cream for your kitchen", emoji: "🍦" },
  { name: "Paneer", sizes: "200g / 500g", price: "₹90", desc: "Soft, fresh cottage cheese made daily", emoji: "🧀" },
  { name: "Yogurt", sizes: "400g", price: "₹50", desc: "Probiotic-rich creamy yogurt", emoji: "🥣" },
  { name: "Ghee", sizes: "500ml", price: "₹350", desc: "Pure desi ghee with aromatic richness", emoji: "✨" },
];

const Products = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Farm-Fresh <span className="text-gradient">Goodness</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Handpicked dairy products crafted with love, delivered fresh every morning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="glass-card rounded-2xl p-6 hover-lift cursor-pointer group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {product.emoji}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-primary font-bold text-xl">{product.price}</span>
                  <span className="text-muted-foreground text-xs ml-1">/ {product.sizes}</span>
                </div>
                <button className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground p-2.5 rounded-full transition-all">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
