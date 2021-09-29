import React, { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import HeaderSocial from "./partials/HeaderSocial";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import Countdown from "react-countdown";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useDispatch } from "react-redux";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../candy-machine.ts";

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
  const ConnectButton = styled(WalletDialogButton)``;

  const CounterText = styled.span``; // add your styles here

  const MintContainer = styled.div``; // add your styles here

  const MintButton = styled(Button)``; // add your styles here

  const wallet = useWallet();

  const [candyMachine, setCandyMachine] = useState();
  const [startdate, setStartDate] = useState(new Date(props.startdate));
  const [balance, setBalance] = useState();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [price, setPrice] = useState(null);

  const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <CounterText>
        {hours} hours, {minutes} minutes, {seconds} seconds
      </CounterText>
    );
  };
  const dispatch = useDispatch();

  const [isActive1, setIsactive] = useState(false);
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

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txtimeout,
          props.connection,
          "singleGossip",
          false
        );
      }
    } catch (error) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };
  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      };

      const {
        candyMachine,
        goLiveDate,
        itemsRemaining,
        itemsAvailable,
        price,
      } = await getCandyMachineState(
        anchorWallet,
        props.candymachineid,
        props.connection
      );
      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
      setItemsRemaining(itemsRemaining);
      setItemsAvailable(itemsAvailable);
      setPrice(price);
      dispatch({
        type: "SAVEDATA",
        itemsAvailable,
        itemsRemaining,
      });
    })();
  }, [wallet, props.candymachineid, props.connection]);
  useEffect(() => {
    isActive1 && openMenu();
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
    isActive1 && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive1 ||
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
        <div className="row">
          <div className="col-md-6">
            <Logo />
          </div>
          <div className="col-md-6">
            <div className="flex" id="headersocical">
              <HeaderSocial />
              <div id="buttonframe" className="ml-32 btn btn-primary">
                {!wallet.connected ? (
                  <ConnectButton className="font-button">
                    Connect Wallet
                  </ConnectButton>
                ) : (
                  <MintButton
                    disabled={isSoldOut || isMinting || !isActive}
                    onClick={onMint}
                    variant="contained"
                  >
                    {isSoldOut ? (
                      <span>
                        {shortenAddress(wallet.publicKey?.toBase58() || "")}
                      </span>
                    ) : isActive ? (
                      isMinting ? (
                        <CircularProgress />
                      ) : (
                        `MINT FOR ${price} SOL`
                      )
                    ) : (
                      <Countdown
                        date={startdate}
                        onMount={({ completed }) =>
                          completed && setIsActive(true)
                        }
                        onComplete={() => setIsActive(true)}
                        renderer={renderCounter}
                      />
                    )}
                  </MintButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
