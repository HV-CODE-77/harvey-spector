import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import PhotoSection from "@/components/PhotoSection";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <About />
      <PhotoSection />
      <Services />
      <SelectedWork />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
