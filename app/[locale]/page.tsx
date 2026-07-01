import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyGidfy from "@/components/WhyGidfy";
import PartnerWithUs from "@/components/PartnerWithUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <WhyGidfy />
      <PartnerWithUs />
      <Contact />
      <Footer />
    </main>
  );
}