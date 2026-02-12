import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import productFreshMilk from "@/assets/product-fresh-milk.png";
import productSkimmedMilk from "@/assets/product-skimmed-milk.png";
import productMilkPouch from "@/assets/product-milk-pouch.png";
import productGhee from "@/assets/product-ghee.png";
import productPaneer from "@/assets/product-paneer.png";
import productDahi from "@/assets/product-dahi.png";

const products = [
  { name: "Fresh Whole Milk", sizes: "1L / 2L", price: "₹85", desc: "Rich, creamy whole milk straight from our farm", image: productFreshMilk },
  { name: "Skimmed Milk", sizes: "1L / 2L", price: "₹55", desc: "Light and healthy with all the goodness", image: productSkimmedMilk },
  { name: "Milk Pouch", sizes: "500ml / 1L", price: "₹35", desc: "Convenient pouch packaging for daily use", image: productMilkPouch },
  { name: "Desi Cow Ghee", sizes: "500ml / 1L", price: "₹450", desc: "Pure desi ghee with aromatic richness", image: productGhee },
  { name: "Paneer", sizes: "200g / 500g", price: "₹90", desc: "Soft, fresh cottage cheese made daily", image: productPaneer },
  { name: "Dahi", sizes: "500g / 1kg", price: "₹75", desc: "Probiotic-rich creamy dahi", image: productDahi },
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
            WylFarm dairy — handpicked, crafted with love, delivered fresh by deliv.bell every morning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl flex items-center justify-center bg-muted/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
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
