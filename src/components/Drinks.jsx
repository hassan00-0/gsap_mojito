import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: -100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section id="cocktails" className="noisy">
      <div className="list">
        <div className="popular">
          <h2>Most Popular drinks:</h2>
          <ul>
            {cocktailLists.map((item) => (
              <li key={item.name}>
                <div className="md:me-28">
                  <h3>{item.name}</h3>
                  <p>
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span>- {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved drinks:</h2>
          <ul>
            {mockTailLists.map((item) => (
              <li key={item.name}>
                <div className="me-28">
                  <h3>{item.name}</h3>
                  <p>
                    {item.country} | {item.detail}
                  </p>
                </div>
                <span>- {item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />
    </section>
  );
};

export default Cocktails;
