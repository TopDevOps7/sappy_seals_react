import React from "react";
import classNames from "classnames";

const HeaderSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://facebook.com/">
            <img
              src={require("./../../../assets/images/discord.fdbd0cb6.png")}
              alt="imagefield"
              id="social"
            />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/">
            <img
              src={require("./../../../assets/images/facebook.png")}
              alt="imagefield"
              id="social"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderSocial;
