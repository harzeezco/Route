import useTheme from "../../Hooks/useTheme";
import ServiceSlider from "../general/ServicesSlider";
import CommunitySection from "./CommunitySection";
import HeroSection from "./HeroSection";
import IdeaSection from "./IdeaSection";
import TeamSection from "./TeamSection";
import ValueSection from "./ValueSection";

const RootSection = () => {
  const { theme } = useTheme();

  return (
    <main className="relative" id="about-content">
      <section aria-labelledby="hero">
        <HeroSection />
      </section>
      <section
        aria-labelledby="service-slider"
        className={`bg-${theme}-secondary mb-20`}
      >
        <ServiceSlider />
      </section>
      <section aria-labelledby="idea">
        <IdeaSection />
      </section>
      <section aria-labelledby="value">
        <ValueSection />
      </section>
      <section aria-labelledby="value">
        <CommunitySection />
      </section>
      <section aria-labelledby="team" className="bg-orangePrimary relative">
        <TeamSection />
      </section>
    </main>
  );
};

export default RootSection;
