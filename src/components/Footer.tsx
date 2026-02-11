import { Instagram, Mail, Phone } from "lucide-react";
import wylfarmLogo from "@/assets/wylfarm-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={wylfarmLogo} alt="WylFarm Logo" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-background/60 max-w-sm mb-6">
              Nature's freshness, delivered daily. Pure farm-fresh dairy products from our pastures to your table.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/wylfarm?igsh=aThrM3Z0dG15MXky&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Products", "How It Works", "About Us", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, "")}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact WylFarm</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> Support@wylfarm.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> 8439366904
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© 2025 WylFarm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
