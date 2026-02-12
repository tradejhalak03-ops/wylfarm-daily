import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import SubscriptionCalculator from "@/components/SubscriptionCalculator";
import AreaChecker from "@/components/AreaChecker";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
      <SubscriptionCalculator />
      <AreaChecker />
      <About />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
