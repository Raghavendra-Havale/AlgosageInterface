import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/router";


import merge from 'lodash.merge';


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#1976D2',
    // accentColor:"#757575"
    // accentColorForeground: '#1976D2',
    // actionButtonBorder: '...',
    // actionButtonBorderMobile: '...',
    // actionButtonSecondaryBackground: '...',
    // closeButton: '...',
    closeButtonBackground: '#1976D2',
    connectButtonBackground: '#1976D2',
    connectButtonBackgroundError: '#1976D2',
    connectButtonInnerBackground: '#1976D2',
    // connectButtonText: '...',
    // connectButtonTextError: '...',
    // connectionIndicator: '...',
    downloadBottomCardBackground: '#1976D2',
    downloadTopCardBackground: '#1976D2',
  },
} );

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={myTheme} chains={chains}>
      <RouterProvider router={router} />
    </RainbowKitProvider>
  </WagmiConfig>
  </>
  
);
