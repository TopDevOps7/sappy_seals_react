import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import ReactCardFlip from "react-card-flip";
import { Card, Button } from "react-bootstrap";
import Image from "../elements/Image";
import { height } from "dom7";

const propTypes = {
  ...SectionTilesProps.types,
};
const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Customer testimonials",
    paragraph:
      "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
  };
  const handleClick = (e) => {
    e.preventDefault();
    setisFlippe(!isFlipped);
  };
  const [isFlipped, setisFlippe] = useState(false);

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className="cardlist">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/7.d3f91701.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/27.8506bc40.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/110.9b5eff38.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/111.48063bf3.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/112.cbf21fae.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/115.cc9c2752.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/116.b5a6847c.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/117.84abc32c.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/118.979a956a.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/120.7fe3914a.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/121.9758cc01.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/122.276018bd.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/123.ef9d3448.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/124.bd660b2c.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/download.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/unknown.c29f9ce8.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-md-2">
              <div className="carditem">
                <Card style={{ width: "15rem", padding: "10px" }}>
                  <Card.Header>
                    <p className="cardheaaerspan">Featured</p>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      id="cardimage"
                      src={require("./../../assets/images/bottomimage/unknown.c29f9ce8.png")}
                    />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
