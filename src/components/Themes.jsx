import { useEffect } from "react";
import { navData } from "../assets/data/data";
import { Footer } from "./footer";

export const Themes = () => {
  useEffect(() => {
    const swiper = new window.Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      effect: "slide",
      lazy: true,
      rewind: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });

    return () => {
      if (swiper.length) {
        swiper.forEach((swiper) => {
          swiper.destroy();
        });
      } else {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="themes-main-container">
        <h1 className="font-size-24 fw-100 we-work">
          START WITH OUR DESIGN THEMES
        </h1>

        <div className="image-carousel">
          {navData.themes.map((data) => {
            return (
              <div className="swiper">
                <div className="swiper-wrapper">
                  {data.theme.map((images,i) => {
                    return (
                      <a
                        href={require(`../assets/images/${images}.jpeg`)}
                        className="swiper-slide"
                      >
                        <img
                          src={require(`../assets/images/${images}.jpeg`)}
                          className="swiper-slide"
                          alt={`themes-${i}`}
                        />
                      </a>
                    );
                  })}
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next swiper-button-next1"></div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};
