import React from "react";
import Image from "../elements/Image";

const ProgressBar = (props) => {
  const containerStyles = {
    height: ".5rem",
    width: "100%",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
    position: "relative",
    top: "-57px",
    left: "45%",
  };

  return (
    <div style={containerStyles}>
      <div className="backgrondnddd">
        <span style={labelStyles}>
          <img
            src={require("./../../assets/images/slider.0979faea.png")}
            alt="imagefield"
            id="imageanimation"
          />
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
