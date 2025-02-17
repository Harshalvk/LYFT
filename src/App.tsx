import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Layout from "./Layouts/Layout";
import { PartnersLogo } from "./data/Partners";
import Slider from "./components/Slider";
import RoadMapSection from "./components/RoadMapSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="bg-[url('/grid.svg')] opacity-20 absolute inset-0 top-10"></div>
        <img
          src={"/mesh.svg"}
          className="opacity-15 absolute bottom-1 h-[660px] z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>

      <Layout>
        <div className="relative z-20">
          <NavBar />
          <Hero />
          <Slider images={PartnersLogo} />
          <RoadMapSection />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection/>
          <Footer/>
        </div>
      </Layout>
    </>
  );
}

export default App;
