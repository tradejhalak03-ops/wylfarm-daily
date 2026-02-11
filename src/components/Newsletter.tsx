import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="subscribe" className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Join the WylFarm Family
          </h2>
          <p className="text-muted-foreground mb-8">
            Get fresh updates, offers, and dairy tips straight to your inbox.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card rounded-2xl p-8"
          >
            <span className="text-5xl">🎉</span>
            <p className="font-heading font-semibold text-xl mt-4">Welcome to the family!</p>
            <p className="text-muted-foreground mt-1">Check your inbox for a warm welcome from WylFarm.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 font-body"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-6 py-3.5 rounded-full font-heading font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
