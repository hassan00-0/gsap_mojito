import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants/index.js";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const startTrigger = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: startTrigger,

        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.1,
        ease: "power1.inOut",
        duration: 0.5,
      })
      .to(
        ".masked-img",
        {
          scale: 1.3,
          maskPosition: "center",
          maskSize: "400%",
          duration: 1.5,
          ease: "power1.inOut",
        },
        "-=0.5"
      )
      .to(
        "#masked-content",
        {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.8"
      );
  });

  return (
    <div id="art" className="relative">
      {" "}
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content relative z-10">
          {" "}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img abs-center">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="masked-img size-full object-contain"
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container absolute inset-0 flex flex-col items-center justify-center text-center">
          {" "}
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content" className="opacity-0">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Art;
