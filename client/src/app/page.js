import Explanation from "@/components/Explanation";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Membership from "@/components/Membership";

export default function Home() {
  return (
    <>
      <Hero />
      <Explanation />
      <Features />
      <Membership />
      <FAQ />
      <Footer />
    </>
  );
}
