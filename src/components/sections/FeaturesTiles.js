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
import Marquee from "react-fast-marquee";

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
            <div className="marquee">
              <Marquee gradient={false} speed={50}>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/1.14eb56b9.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/2.54df04f3.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/3.f676d1c0.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/4.c602824a.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/5.50834565.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/7.d3f91701.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/8.26c3d9b9.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/9.f116ad08.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/1slider/10.7c489b3d.png")}
                  />
                </div>
              </Marquee>
            </div>
            <div className="marquee2" style={{ marginTop: "20px" }}>
              <Marquee gradient={false} speed={55} direction="right">
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/6.83687117.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/11.d57cc550.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/12.03d3c482.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/13.3cc28f19.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/14.d158d214.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/15.34c13285.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/16.32c2ce6f.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/17.3366dedf.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/2slider/18.814d5772.png")}
                  />
                </div>
              </Marquee>
            </div>
            <div className="marquee3" style={{ marginTop: "20px" }}>
              <Marquee gradient={false} speed={52} direction="left">
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/11.d57cc550.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/19.4482d57d.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/20.89d2685b.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/21.6c83c51d.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/22.b5417c91.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/23.400e2dd1.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/26.dd3d5ae3.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/27.8506bc40.png")}
                  />
                </div>
                <div>
                  <Image
                    id="imagefiled1"
                    src={require("./../../assets/images/3slider/121.9758cc01.png")}
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
