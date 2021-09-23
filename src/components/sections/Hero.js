import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

import { Button } from "react-bootstrap";
import ProgressBar from "./progress-bar.component";
import "react-animated-slider/build/horizontal.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../elements/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import background from "../../assets/images/frame2.20b8a8ae.png";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};
// const params = {
//   autoplay: {
//     delay: 15,
//     reverseDirection: true,
//     waitForTransition: true,
//   },
//   effect: "flip",
//   simulateTouch: false,
//   allowTouchMove: false,
//   grabCursor: true,
//   autoplayDisableOnInteraction: true,
//   loop: true,
//   loopPreventsSlide: true,
//   loopAdditionalSlides: 4,
//   loopedSlides: 4,
//   slidesPerView: 1,
//   speed: 4000,
// };

const testData = [{ bgcolor: "#6a1b9a", completed: 100 }];
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="main-content" id="slideeimae">
        <div className="row">
          <div className="col-md-6">
            <span className="sappy"> Sappy Seals </span>
            <p className="mintfont">Minted 10000/10000</p>
            <div className="progressbarfied">
              {testData.map((item, idx) => (
                <ProgressBar key={idx} />
              ))}
            </div>
            <div className="butonmint mt-32">
              <Button variant="primary" className="buttonmint" size="lg">
                <span className="font-button_"> M i n t</span>
              </Button>
            </div>
          </div>
          <div className="col-md-6" id="coasdf">
            <div
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "105% 120%",
                backgroundPositionX: "center",
                width: "365px",
                backgroundPositionY: "center",
                boxShadow:
                  "inset 0 0 50px hsl(0deg 0% 100% / 12%), 0 40px 50px rgb(0 0 0 / 43%)",
              }}
            >
              <Slider {...settings}>
                <div>
                  <Image
                    id="imagefileded"
                    src={require("./../../assets/images/1slider/2.54df04f3.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefileded"
                    src={require("./../../assets/images/1slider/3.f676d1c0.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefileded"
                    src={require("./../../assets/images/1slider/4.c602824a.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefileded"
                    src={require("./../../assets/images/1slider/5.50834565.png")}
                  />
                </div>
              </Slider>
              <Image
                id="stone1"
                src={require("./../../assets/images/stone/1stone.png")}
              />
              <Image
                id="stone2"
                src={require("./../../assets/images/stone/2stone.png")}
              />
              <Image
                id="stone3"
                src={require("./../../assets/images/stone/3stone.png")}
              />
              <Image
                id="stone4"
                src={require("./../../assets/images/stone/4stone.png")}
              />
              <Image
                id="stone5"
                src={require("./../../assets/images/stone/5stone.png")}
              />
            </div>
            {/* <Swiper {...params}>
              <SwiperSlide>
                <Image
                  id="imagefileded"
                  src={require("./../../assets/images/1slider/2.54df04f3.png")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  id="imagefileded"
                  src={require("./../../assets/images/1slider/3.f676d1c0.png")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  id="imagefileded"
                  src={require("./../../assets/images/1slider/4.c602824a.png")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  id="imagefileded"
                  src={require("./../../assets/images/1slider/5.50834565.png")}
                />
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
