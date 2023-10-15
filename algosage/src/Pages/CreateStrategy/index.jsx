import ProtocolStats from "../../components/ProtocolStats";
import "./index.css";
import ABI from "./ABI.json";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const CreateStrategy = () => {
  const address = "0x2E9D4A3C9565a3E826641B749Dd71297A450B77e";
  const [user, setUser] = useState({});
  const [wallet, setWallet] = useState("");

  // const [network, setNetwork] = useState("");
  const [dex, setDex] = useState("");
  const [poolAddress, setPoolAddress] = useState("");
  const [feeType, setFeeType] = useState("");
  const [swapRouter, setSwapRouter] = useState("");
  const [oracleAddress, setOracleAddress] = useState("");
  const [vaultVisible, setVaultVisible] = useState(false);
  const [whiteDeposit, setWhiteDeposit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("current wallet", user);
    setLoading(true);

    try {
      const tx = await user.launchVault(
        poolAddress,
        oracleAddress,
        swapRouter,
        vaultVisible,
        whiteDeposit,
        Number(feeType),
        {
          gasLimit: 270000,
          gasPrice: 20000000000,
        }
      );

      const receipt = await tx.wait();
      console.log(receipt);
      // console.log("Deposit successful!");
      // setMessage("deposit successful !");
    } catch (error) {
      console.error("Error during deposit:", error.message || error);
      // setMessage(error.message);
    } finally {
      setLoading(false);
      // setMessage("");
    }
  };

  useEffect(() => {
    const initialize = async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, ABI, signer);
        const signers = await provider.listAccounts();
        const walletAddress = signers[0];
        setUser(contract);
        setWallet(walletAddress);
        // console.log(walletAddress);
        // console.log(contract);
      }
    };
    initialize();
  }, []);

  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-4 xl:px-0 ">
        <div className="flex-col md:flex-row p-4 rounded-lg bg-secondary">
          <div className="">
            <h1 className="text-2xl font-semibold   pb-1">
              Create New Strategy
            </h1>
            <p className="text-sm pb-8 text-light">
              Create Uniswap V3 strategies for <br /> managing your personal
              funds or public funds with a <br /> revenue-sharing model.
            </p>
          </div>
          <form className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-4 mt-4">
            <div>
              <label className="block text-sm text-gray-500 ">
                Choose Network
              </label>
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-[#29292999]">
                <option className="bg-light/10">Ethereum</option>
                <option className="bg-light/10">Polygon</option>
                <option className="bg-light/10">BNB Chain</option>
                <option className="bg-light/10">Avalanche</option>
                <option className="bg-light/10">Optimisn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">
                Choose DEX (Liquidity Source){" "}
              </label>
              <select
                className="p-3 focus:outline-none rounded-lg w-full text-sm bg-[#29292999]"
                onChange={(e) => setDex(e.target.value)}
              >
                <option value={`0xB4C5E700c8114d0C758b71865Cf9F70605cdF6d8`}>
                  Uniswap V3
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">
                Pool Address
              </label>
              <input
                type="text"
                value={poolAddress}
                placeholder="pool address"
                className="p-3 focus:outline-none placeholder:text-light rounded-lg w-full text-sm bg-[#29292999]"
                onChange={(e) => setPoolAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                Select Fee Type:
              </label>
              <select
                className="p-3 focus:outline-none rounded-lg w-full text-sm bg-[#29292999]"
                onChange={(e) => setFeeType(e.target.value)}
              >
                <option value={0}> DynamicFeesOnly</option>
                <option value={1}>FlatProfit</option>
                <option value={2}>DynamicProfit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                SwapRouter address:
              </label>
              <input
                type="text"
                value={swapRouter}
                placeholder="swaprouter"
                className="p-3 focus:outline-none placeholder:text-light rounded-lg w-full text-sm bg-[#29292999]"
                onChange={(e) => setSwapRouter(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                Oracle Address:
              </label>
              <input
                type="text"
                value={oracleAddress}
                placeholder="oracle"
                className="p-3 focus:outline-none placeholder:text-light rounded-lg w-full text-sm bg-[#29292999]"
                onChange={(e) => setOracleAddress(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Vault Visibility:</p>
              <label className="switch cursor-pointer">
                <input
                  type="checkbox"
                  checked={vaultVisible}
                  onChange={() => setVaultVisible(!vaultVisible)}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 break-all">WhiteListedDeposits:</p>
              <label className="switch cursor-pointer">
                <input
                  type="checkbox"
                  checked={whiteDeposit}
                  onChange={() => setWhiteDeposit(!whiteDeposit)}
                />
                <span className="slider"></span>
              </label>
            </div>

            {wallet === "" && (
              <button
                className="font-semibold flex items-center gap-x-2 justify-center bg-error/30 text-white hover:bg-error/40 px-3 py-5 rounded-lg w-1/2 col-span-full mx-auto text-xl disabled:cursor-not-allowed"
                onClick={handleClick}
                type="submit"
                disabled
              >
                Wallet Not Connected
              </button>
            )}

            {wallet !== "" && (
              <button
                className={`font-semibold flex items-center gap-x-2 justify-center  text-black/100  px-3 py-5 rounded-lg w-1/2 col-span-full mx-auto text-xl  ${
                  loading
                    ? "bg-yellow/50 disabled:cursor-not-allowed hover:bg-yellow/50"
                    : "bg-light hover:bg-white/40 cursor-pointer"
                }`}
                onClick={handleClick}
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? "Loading..." : "Create Strategy"}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateStrategy;
