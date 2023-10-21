// File: /src/components/navbar/ConnectWalletButton.jsx
// import React from "react";
import { useConnect } from "@rainbow-me/rainbowkit";

const ConnectWalletButton = () => {
    const { connectors, connect, isLoading, pendingConnector } = useConnect();

    const handleConnect = async (connector) => {
        try {
            await connect({ connector });
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    return (
        <div>
            {connectors.map((connector) => (
                <button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    disabled={isLoading && pendingConnector?.id === connector.id}
                >
                    Connect {connector.name}
                    {isLoading && pendingConnector?.id === connector.id && " (Connecting...)"}
                </button>
            ))}
        </div>
    );
};

export default ConnectWalletButton;


