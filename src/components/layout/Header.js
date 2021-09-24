import React, { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import HeaderSocial from "./partials/HeaderSocial";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const nav = useRef(null);
  const hamburger = useRef(null);
  const customStyles = {
    content: {
      top: "150px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "350px",
      height: "200px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };
  const openmodal = () => {
    // setIsOpen(true);
  };
  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );
  let subtitle;
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <header {...props} className={classes}>
      <div className="container mt-16">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          <div className="flex">
            <HeaderSocial />
            <Button className="ml-32" id="buttonframe">
              <span className="font-button">
                <a href="https://i.gyazo.com">Connect</a>
              </span>
            </Button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Modal</h2>
            <div className="imagefiled">
              <img
                src={require("./../../assets/images/modalreset.svg")}
                alt="imagefield"
                id="modalimage"
              />
            </div>
            <div className="modalfooter">
              <Button onClick={closeModal}>close</Button>
            </div>
          </Modal>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
