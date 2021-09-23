import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import Modal from "react-modal";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);
  const openmodal = () => {
    setIsOpen(true);
  };
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
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://twitter.com/">
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
            src={require("./../../../assets/images/modalreset.svg")}
            alt="imagefield"
            id="modalimage"
          />
        </div>
        <div className="modalfooter">
          <Button onClick={closeModal}>close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default FooterSocial;
