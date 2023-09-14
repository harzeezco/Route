import RegularList from "../general/RegularList";
import CounterDetails from "../data-display/CounterDetails";
import Container from "../layouts/Container";

import { COUNT_DETAILS } from "../../lib/data";

import VideoToggle from "../../assets/Images/VideoToggle.png";
import Video from "../../assets/Images/Video.png";

const HeroSection = () => {
  return (
    <Container id="hero" pb="[6rem]" pt="10">
      <div className="grid">
        <h1 className="whitespace-nowrap font-primary text-4xl font-bold capitalize text-white md:hidden lg:text-[5.2rem]">
          We Are
        </h1>
        <div className="order-last block  items-center justify-between gap-x-6 md:order-first md:inline-flex">
          <h1 className="hidden whitespace-nowrap font-primary text-4xl font-bold capitalize text-white sm:text-[50px] md:block lg:text-[5rem]">
            We Are
          </h1>

          <p className="order-first leading-[30px] text-colorwhite-100 md:order-last">
            We are helping people to grow their business. We are providing the
            best designs and development service for your next dream project.
          </p>
          <img className="mt-8 md:mt-0" src={VideoToggle} alt="Video play" />
        </div>

        <h1 className="font-primary text-[40px] font-bold capitalize leading-[50px] tracking-[-1px] text-orangePrimary sm:text-[7vw] md:whitespace-nowrap md:leading-snug lg:text-[6.5vw]">
          building <span className="text-white">digital</span> brands
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center pt-10  md:grid-cols-[300px_minmax(0,_1fr)]">
        <div className="order-last md:order-first">
          <RegularList
            items={COUNT_DETAILS}
            itemComponent={CounterDetails}
            resourceName="item"
          />
        </div>
        <figure className="justify-self-end md:w-[97%]">
          <img src={Video} alt="" />
        </figure>
      </div>
    </Container>
  );
};

export default HeroSection;
