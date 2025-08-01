import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    scrollTimeline.from(
      ".top-grid div, .bottom-grid div",
      {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div id="about" className="md:pt-96">
      <div className="mb-8 md:mb-16 px-4 sm:px-6 lg:px-8 pt-96">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full mb-4">
              Best Drinks
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Where every detail matters{" "}
              <span className="text-gray-600">-</span> from muddle to garnish
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
              Every drink is a unique blend of fresh ingredients, carefully
              crafted to create a delicious and refreshing experience.
            </p>

            <div className="flex-shrink-0">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                <span className="text-amber-600">4.5</span>/5
              </p>
              <p className="text-sm text-gray-500 mt-1">
                More than +12,000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top row grid */}
          <div className="top-grid grid grid-cols-1 md:grid-cols-4 xl:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="md:col-span-1 xl:col-span-3">
              <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="/images/abt1.png"
                  alt="grid-img-1"
                  className="object-cover w-full h-full object-bottom md:object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:col-span-2 xl:col-span-6">
              <div className="aspect-[16/10] md:aspect-[8/5] overflow-hidden rounded-lg">
                <img
                  src="/images/abt2.png"
                  alt="grid-img-2"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="hidden xl:block xl:col-span-3"></div>
          </div>

          {/* Bottom row grid */}
          <div className="bottom-grid grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-2 xl:col-span-8">
              <div className="aspect-[16/9] md:aspect-[8/5] overflow-hidden rounded-lg">
                <img
                  src="/images/abt4.png"
                  alt="grid-img-4"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:col-span-1 xl:col-span-4">
              <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="/images/abt5.png"
                  alt="grid-img-5"
                  className="object-cover w-full h-full object-bottom md:object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
