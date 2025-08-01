import { useState } from "react";
import { sliderLists } from "../../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    gsap.fromTo(
      ".cocktail-img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative overflow-hidden"
    >
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Lemonades Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={item.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
            aria-label="Previous drink"
          >
            <img
              src="/images/right-arrow.png"
              alt=""
              aria-hidden="true"
              className="rotate-180"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label="Next drink"
          >
            <img src="/images/right-arrow.png" alt="" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={sliderLists[currentIndex].image}
            alt={sliderLists[currentIndex].name}
            loading="lazy"
            className="cocktail-img"
          />
        </div>

        <div className="recipe">
          <div className="info">
            <p>Recipe for:</p>
            <p id="title" className="font-bold text-xl">
              {sliderLists[currentIndex].name}
            </p>
          </div>

          <div className="details">
            <h2>{sliderLists[currentIndex].title}</h2>
            <p>{sliderLists[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
