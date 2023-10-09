import useTheme from "../../Hooks/useTheme";

import About_webp from "../../assets/Images/About.webp";
import About_png from "../../assets/Images/About.png";
import Image from "../general/Image";
import { BannerRowTop } from "../general/BannerRowTop";
import { BannerRowBottom } from "../general/BannerRowBottom";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div className="m-auto w-full px-5 lg:max-w-[1100px]" id="hero">
      {/* <h1
        className={`whitespace-nowrap pt-12 font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[90px]`}
      >
        Hello, We’re a <br />{" "}
        <span className="text-orangePrimary"> </span> Agency{" "}
      </h1> */}

      <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
        <BannerRowTop title="Hello," color="text-mode" />

        <BannerRowTop title="We're" color="text-mode" />

        <BannerRowTop title=" a" color="text-mode" />
      </div>

      <div className="-mt-7 flex h-[130px] items-center gap-x-5 overflow-hidden">
        <BannerRowBottom title="Creative" color="text-default" />

        <BannerRowBottom title="Agency" color="text-mode" />
      </div>

      <div className="mb-10 mt-5 grid grid-cols-1 justify-between gap-y-4 md:grid-cols-[30%_60%]">
        <h2
          className={`text-${theme} theme-transition font-bold leading-[30px] md:text-xl`}
        >
          Professional Creative Design Agency Based in Bangladesh
        </h2>
        <p className="text-base leading-[30px] md:text-xl">
          A team of creative thinkers and doers who believe in the power of
          creativity to inspire change. Working seamlessly across brand and
          digital, we build modern brands with heart and spirit.{" "}
        </p>
      </div>

      <Image
        width="100%"
        height="570"
        defaultSrc={About_webp}
        alternateSrc={About_png}
        alt="community image"
      />
    </div>
  );
};

export default HeroSection;
