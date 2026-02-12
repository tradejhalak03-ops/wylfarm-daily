import { motion } from "framer-motion";
import { Smartphone, Apple, Play } from "lucide-react";

const appScreenshots = [
  { src: "/app-screenshots/app-home.png", alt: "deliv.bell app - WylFarm dairy delivery", label: "Today's Fresh Batch" },
  { src: "/app-screenshots/app-delivery.png", alt: "deliv.bell delivery schedule", label: "Delivery Schedule" },
];

// Update these URLs when your app is live on the stores
const APP_STORE_URL = "https://apps.apple.com/in/app/deliv-bell/idXXXXXXXXX";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=in.delivbell";

const AppDownload = () => {
  return (
    <section id="app" className="section-padding bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Smartphone className="w-4 h-4" /> Get the App
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Fresh Milk, <span className="text-gradient">One Tap Away</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Order WylFarm dairy products, track deliveries, and manage your subscription — all from the deliv.bell app.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* App Screenshots Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex gap-6 sm:gap-8 justify-center flex-wrap">
              {appScreenshots.map((screen, i) => (
                <motion.div
                  key={screen.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-[220px] sm:w-[260px]"
                >
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-foreground/10 bg-foreground/5 p-1.5">
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      className="w-full rounded-[1.5rem] object-cover aspect-[9/19]"
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-2 font-medium">{screen.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Download <span className="text-gradient">deliv.bell</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Get the deliv.bell app on your phone. Order WylFarm milk, ghee, paneer & more. Schedule deliveries, track your orders, and enjoy farm-fresh WylFarm dairy every day.
              </p>

              <div className="space-y-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center">
                    <Apple className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs text-background/70">Download on the</p>
                    <p className="font-heading font-semibold text-lg">App Store</p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full p-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center">
                    <Play className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs text-background/70">Get it on</p>
                    <p className="font-heading font-semibold text-lg">Google Play</p>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              <p className="text-center text-xs text-muted-foreground mt-6">
                Available for iOS & Android
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
