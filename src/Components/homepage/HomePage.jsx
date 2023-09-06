import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import SpeechSection from "./SpeechSection";

const HomePage = () => {
  return (
    <div>
      <section aria-labelledby="hero" className="bg-colorDark">
        <HeroSection />
      </section>
      <section aria-labelledby="speech" className="relative bg-orangePrimary">
        <SpeechSection />
      </section>
      <section aria-labelledby="about" className="bg-colorDark">
        <AboutSection />
      </section>
      <section aria-labelledby="service" className="bg-colorDark">
        <ServiceSection />
      </section>
    </div>
  );
};

export default HomePage;
