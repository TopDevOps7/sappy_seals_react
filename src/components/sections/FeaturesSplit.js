import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import MediaQuery from "react-responsive";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="roadmap-content">
        <div className="row mt-32">
          <div className="col-md-12 mt-32 align-center">
            <span className="collection-style">Our Story</span>
            <br />
            <div className="collection-style_ mt-32">
              Run Animation in Reverse Direction or Alternate Cycles The
              animation-direction property specifies whether an animation should
              be played forwards, backwards or in alternate cycles. The
              animation-direction property can have the following values: normal
              - The animation is played as normal (forwards). This is default
              reverse - The animation is played in reverse direction (backwards)
              alternate - The animation is played forwards first, then backwards
              alternate-reverse - The animation is played backwards first, then
              forwards The following example will run the animation in reverse
              direction (backwards):
            </div>
          </div>
        </div>
        <div className="row mt-32">
          <div className="col-md-8 mt-32">
            <span className="roadmap-style">Roadmap</span>
          </div>
          <div className="col-md-2 mt-32 bigstone-img">
            <Image src={require("./../../assets/images/stone/bigstone.png")} />
          </div>
          <div className="col-md-2 mt-32"></div>
        </div>
        <MediaQuery minWidth={910}>
          <div className="row mt-32">
            <div className="roadmaped">
              <div className="iceberg1">
                <Image src={require("./../../assets/images/roadmap_1.png")} />
              </div>
              <div className="iceberg2">
                <Image src={require("./../../assets/images/roadmap_2.png")} />
              </div>
              <div className="iceberg3">
                <Image src={require("./../../assets/images/roadmap_3.png")} />
              </div>
              <div className="iceberg4">
                <Image src={require("./../../assets/images/roadmap_4.png")} />
              </div>
              <div className="area25">
                <span className="goal donation">Donation</span>
                <p className="number">25%</p>
                <p className="spanloadmap">
                  We'll be donating $10K to the
                  <span className="loadmapspan">Ocean Cleanup</span>
                </p>
              </div>
              <div className="area50">
                <span className="goal merch">Merch</span>
                <p className="number">50%</p>
                <p className="spanloadmap">
                  We'll be donating $10K to the
                  <span className="loadmapspan">Ocean Cleanup</span>
                </p>
              </div>
              <div className="area75">
                <span className="goal donation">Donation</span>
                <p className="number">75%</p>
                <p className="spanloadmap">
                  We'll be donating $10K to the
                  <span className="loadmapspan">Ocean Cleanup</span>
                </p>
              </div>
              <div className="area100">
                <span className="goal drop">Merch</span>
                <p className="number">100%</p>
                <p className="spanloadmap">
                  We'll be donating $10K to the
                  <span className="loadmapspan">Ocean Cleanup</span>
                </p>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={100} maxWidth={910}>
          <div className="row mt-32">
            <div className="roadmapmin">
              <div className="row">
                <div className="col-sm-6">
                  <div className="araea1">
                    <span className="donation">Donation</span>
                    <p className="numberpro">25%</p>
                    <p className="areaspan1">
                      We'll be donating $10K to the
                      <span className="innerspan">Ocean Cleanup</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="araea1">
                    <span className="merch">Merch</span>
                    <p className="numberpro">50%</p>
                    <p className="areaspan1">
                      We'll be launching Sappy Seals merch!.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="iceberugimage">
                  <img
                    src={require("./../../assets/images/iceberug.svg")}
                    alt="imagefield"
                    id="modalimage"
                  />
                </div>
              </div>
              <div className="row" id="footerbuttonfield">
                <div className="col-sm-6">
                  <div className="araea1">
                    <span className="donation">Donation</span>
                    <p className="numberpro">75%</p>
                    <p className="areaspan1">
                      We'll be donating an extra $30K to the Ocean Cleanup
                      <span className="innerspan">Ocean Cleanup</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="araea1">
                    <span className="nftdrop">NFT Drop</span>
                    <p className="numberpro">100%</p>
                    <p className="areaspan1">
                      HODLers will get their own rare PixSeal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
