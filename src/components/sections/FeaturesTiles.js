import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";

import SwiperCore, { Autoplay, A11y, Scrollbar } from "swiper";
import Swiper from "react-id-swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import Image from "../elements/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
SwiperCore.use([Autoplay, Scrollbar, A11y]);

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const params = {
    autoplay: {
      delay: 1,
    },
    centeredSlides: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    freeMode: true,
    freeModeMomentumBounce: false,
    freeModeMomentumRatio: 0.1,
    simulateTouch: false,
    allowTouchMove: false,
    setWrapperSize: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    roundLengths: true,
    loopPreventsSlide: true,
    freeModeMomentumVelocityRatio: 0.1,
    freeModeSticky: true,
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 6, // slidesNum contains the initial slides number
    loopedSlides: 9,
    speed: 2000,
    breakpoints: {
      479: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },
    // spaceBetween: 6,
    // slidesPerView: 20,
    // effect: "coverflow",
    // grabCursor: true,
    // initialSlide: 0,
    // centeredSlides: true,
    // edgeSwipeDetection: true,
    // allowTouchMove: false,
    // followFinger: false,
    // enabled: true,
    // edgeSwipeThreshold: 140,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // loopAdditionalSlides: 6,
    // speed: 4000,
    // loopPreventsSlide: true,
    // direction: "horizontal",
    // slideBlankClass: "swiper-slide-invisible-blank",
    // autoplay: {
    //   delay: 0.01,
    //   disableOnInteraction: false,
    //   reverseDirection: false,
    //   waitForTransition: true,
    // },
    // centerInsufficientSlides: true,
  };

  const params1 = {
    autoplay: {
      delay: 1,
      reverseDirection: true,
      waitForTransition: true,
    },
    centeredSlides: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    freeMode: true,
    freeModeMomentumBounce: false,
    freeModeMomentumRatio: 0.1,
    simulateTouch: false,
    allowTouchMove: false,
    setWrapperSize: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    roundLengths: true,
    loopPreventsSlide: true,
    freeModeMomentumVelocityRatio: 0.1,
    freeModeSticky: true,
    grabCursor: true,

    loop: true,
    loopAdditionalSlides: 6, // slidesNum contains the initial slides number
    loopedSlides: 9,
    speed: 2000,
    breakpoints: {
      479: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },
  };

  const params2 = {
    autoplay: {
      delay: 1,
    },
    centeredSlides: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    freeMode: true,
    freeModeMomentumBounce: false,
    freeModeMomentumRatio: 0.1,
    simulateTouch: false,
    allowTouchMove: false,
    setWrapperSize: true,
    slideToClickedSlide: true,
    watchSlidesVisibility: true,
    roundLengths: true,
    loopPreventsSlide: true,
    freeModeMomentumVelocityRatio: 0.1,
    freeModeSticky: true,
    grabCursor: true,
    loop: true,
    loopAdditionalSlides: 6, // slidesNum contains the initial slides number
    loopedSlides: 9,
    speed: 2000,
    breakpoints: {
      479: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    touchMove: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    touchMove: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings1 = {
    dots: false,
    infinite: true,
    rtl: true,
    arrows: false,
    touchMove: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="main-content">
        <div className="row mt-32">
          <div className="col-md-12 mt-32">
            <span className="collection-style">The Collection</span>
          </div>
        </div>

        <div className="row mt-32">
          <div className="col-md-12 mt-32 align-center">
            <div className="slider2image">
              <Slider {...settings}>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/1.14eb56b9.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/2.54df04f3.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/3.f676d1c0.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/4.c602824a.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/5.50834565.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/7.d3f91701.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/8.26c3d9b9.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/9.f116ad08.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/1slider/10.7c489b3d.png")}
                  />
                </div>
              </Slider>
            </div>
            <div className="slider3image">
              <Slider {...settings1}>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/6.83687117.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/11.d57cc550.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/12.03d3c482.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/13.3cc28f19.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/14.d158d214.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/15.34c13285.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/16.32c2ce6f.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/17.3366dedf.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/2slider/18.814d5772.png")}
                  />
                </div>
              </Slider>
            </div>
            <div className="slider4image">
              <Slider {...settings2}>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/11.d57cc550.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/19.4482d57d.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/20.89d2685b.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/21.6c83c51d.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/22.b5417c91.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/23.400e2dd1.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/26.dd3d5ae3.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/27.8506bc40.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled"
                    src={require("./../../assets/images/3slider/121.9758cc01.png")}
                  />
                </div>
              </Slider>
            </div>
            <div className="slider1image">
              {/* <Swiper {...params}>
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/1.14eb56b9.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/2.54df04f3.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/3.f676d1c0.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/4.c602824a.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/5.50834565.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/7.d3f91701.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/8.26c3d9b9.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/9.f116ad08.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/1slider/10.7c489b3d.png")}
                />
              </Swiper>
              <br /> */}
            </div>
            {/* <div className="slider2image">
              <Swiper {...params1}>
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/6.83687117.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/11.d57cc550.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/12.03d3c482.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/13.3cc28f19.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/14.d158d214.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/15.34c13285.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/16.32c2ce6f.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/17.3366dedf.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/2slider/18.814d5772.png")}
                />
              </Swiper>
              <br />
            </div>
            <div className="slider3image">
              <Swiper {...params2}>
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/11.d57cc550.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/19.4482d57d.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/20.89d2685b.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/21.6c83c51d.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/22.b5417c91.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/23.400e2dd1.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/26.dd3d5ae3.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/27.8506bc40.png")}
                />
                <Image
                  id="imagefiled"
                  src={require("./../../assets/images/3slider/121.9758cc01.png")}
                />
              </Swiper>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
