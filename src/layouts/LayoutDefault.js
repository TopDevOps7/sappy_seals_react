import React from "react";
import { useMemo } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID
);

const network = process.env.REACT_APP_SOLANA_NETWORK;
// WalletAdapterNetwork = network;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const LayoutDefault = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <Header
            candymachineid={candyMachineId}
            config={config}
            connection={connection}
            startdate={startDateSeed}
            treasury={treasury}
            txtimeout={txTimeout}
            navPosition="right"
            className="reveal-from-bottom"
          />
          <main className="site-content">{children}</main>
          <Footer />
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
export default LayoutDefault;
