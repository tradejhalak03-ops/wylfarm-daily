import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, XCircle } from "lucide-react";

const availableCities = ["mumbai", "delhi", "bangalore", "pune", "ahmedabad", "hyderabad", "chennai", "kolkata", "jaipur", "lucknow"];

const AreaChecker = () => {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<"available" | "unavailable" | null>(null);

  const checkArea = () => {
    if (!pincode.trim()) return;
    // Simple demo logic — check if input matches known cities or valid pincode pattern
    const input = pincode.toLowerCase().trim();
    const isAvailable = availableCities.some((c) => input.includes(c)) || /^[1-5]\d{5}$/.test(input);
    setResult(isAvailable ? "available" : "unavailable");
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Is WylFarm in <span className="text-gradient">Your Area?</span>
          </h2>
          <p className="text-muted-foreground mb-6">Enter your city or pincode to check availability</p>
        </motion.div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="e.g. Mumbai or 400001"
            value={pincode}
            onChange={(e) => { setPincode(e.target.value); setResult(null); }}
            onKeyDown={(e) => e.key === "Enter" && checkArea()}
            className="flex-1 px-5 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
          />
          <button
            onClick={checkArea}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Check
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 flex items-center justify-center gap-2 font-medium ${
              result === "available" ? "text-secondary" : "text-primary"
            }`}
          >
            {result === "available" ? (
              <>
                <CheckCircle className="w-5 h-5" /> Yes! WylFarm delivers to your area 🎉
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5" /> We're not here yet, but we're expanding soon!
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AreaChecker;
