import Body from "./Pages/Body/body";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Notifications from "./components/notifications";
import NotificationOverlay from "./components/notifications/overlay";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import router from "./routing/router";
import { useState, useEffect } from "react";
import { useContractRead,useContractWrite, usePrepareContractWrite ,useWaitForTransaction, useAccount ,useWalletClient} from "wagmi";
import ASVTabi from "./ASVT_ABI.json";
import { getAddress } from "viem";


// import merge from "lodash.merge";

// import "@rainbow-me/rainbowkit/styles.css";
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
// } from "@rainbow-me/rainbowkit";

// const myTheme = merge(darkTheme(), {
//   colors: {
//     accentColor: "#1976D2",
//     closeButtonBackground: "#1976D2",
//     connectButtonBackground: "#1976D2",
//     connectButtonBackgroundError: "#1976D2",
//     connectButtonInnerBackground: "#1976D2",
//     downloadBottomCardBackground: "#1976D2",
//     downloadTopCardBackground: "#1976D2",
//   },
// });

// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   zora,
//   goerli,
// } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";



function App(){

// const { chains, publicClient } = configureChains(
//   [mainnet, polygon, optimism, arbitrum, base, zora, goerli],
//   [publicProvider()]
// );

// const { connectors } = getDefaultWallets({
//   appName: "My RainbowKit App",
//   projectId: "YOUR_PROJECT_ID",
//   chains,
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

// useContractRead({})

// const { address} = useAccount();

// const {data : readData } = useContractRead({
//   address: "0x8523c71015a6E7B6eb7D67590a6abA6064e094f0",
//   abi: ASVTabi,
//   functionName: "getBalance",
//   args: [address],
// })

// console.log(address ,readData);
// console.log("hiiiiiiiiiii");





  return (
    <div className="min-h-screen h-full flex flex-col bg-primary">
      <Navbar />
      <Body />
      <Footer />
      <Notifications />
      <NotificationOverlay />
      
    </div>
  );
}

export default App;
