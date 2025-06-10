import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import {motion} from 'framer-motion'
const slides = [
  {
    id: 1,
    title: "Move More. Worry Less.",
    description:
      "Experience seamless freight management backed by 24/7 monitoring, secure storage, and customs-cleared sea and air shipments. Your goods are safe, tracked, and on time—every time.",
    className: "slide-one",
  },
  {
    id: 2,
    title: "Global Reach. Local Expertise.",
    description:
      "Streamline your supply chain with our end-to-end logistics solutions. From climate-controlled warehousing and precision cargo handling to expedited sea and air freight, we deliver reliability at every mile.",
    className: "slide-two",
  },
  {
    id: 3,
    title: "Next-Level Logistics, Anywhere.",
    description:
      "Harness our global network for scalable warehousing, precision cargo handling, and rapid ocean or air transport. We optimize costs, cut transit times, and keep your business moving forward.",
    className: "slide-three",
  },
];

const HomeHero = () => {
  return (
    <section
      className="relative"
      aria-label="Homepage Hero Section"
    >
      <Splide
        aria-label="Hero Image Carousel"
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 6000,
          speed: 1200,
          pauseOnHover: true,
          arrows: false,
          pagination: true,
          lazyLoad: "nearby",
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div
              className={`premium-slide ${slide.className} h-[500px] flex items-center justify-center flex-col px-4 lg:px-7 text-center text-white bg-cover bg-center`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slide.title}`}
            >
              <motion.div
              initial={{scale: 0.5}}
              animate={{scale: 1}}
               className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </motion.div>
              <p className="md:text-lg max-w-2xl">{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default HomeHero;
