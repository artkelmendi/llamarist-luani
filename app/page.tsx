import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Atelier from "@/components/Atelier";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <div className="grain" />
      <Cursor />
      <main className="relative">
        <Nav />
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <Stats />
        <Gallery />
        <Atelier />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
