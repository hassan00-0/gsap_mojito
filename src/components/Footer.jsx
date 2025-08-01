import React from "react";
import { openingHours, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Footer = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });
    timeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find us</h2>
        <div>
          <h3>Visit Our Store</h3>
          <p>456, New York, USA</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+1 234 567 890</p>
          <p>qHr2o@example.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((item) => (
            <p key={item.day}>
              {item.day} : {item.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
