import ProtocolStats from "../../components/ProtocolStats";
import "./index.css";
import ABI from "./ABI.json";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNotifications, updateLoading } from "../../state/slice";

const options = [
  {
    value: "option1",
    label: "Ethereum",
    image: "../../../ethereum-eth-logo.svg",
  },
  {
    value: "option2",
    label: "Polygon",
    image: "../../../polygon-matic-logo.svg",
  },
  {
    value: "option3",
    label: "Avalanche",
    image: "../../../avalanche-avax-logo.svg",
  },
  {
    value: "option4",
    label: "optimism",
    image: "../../../optimism-ethereum-op-logo.svg",
  },
  {
    value: "option5",
    label: "BNB Chain",
    image: "../../../bnb-bnb-logo.svg",
  },
  {
    value: "option6",
    label: "Goerli",
    image: "../../../ethereum-eth-logo.svg",
  },
];

const CreateStrategy = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.app);
  const address = "0xfCA26911D88E6667aE92AeC3677F14e214B1E77E";
  const [contract, setContract] = useState(null);
  const [wallet, setWallet] = useState("");

  // const [network, setNetwork] = useState("");
  // const [dex, setDex] = useState("");
  const [poolAddress, setPoolAddress] = useState("");
  const [feeType, setFeeType] = useState(0);
  const [swapRouter, setSwapRouter] = useState("");
  const [oracleAddress, setOracleAddress] = useState("");
  const [vaultVisible, setVaultVisible] = useState(false);
  const [whiteDeposit, setWhiteDeposit] = useState(false);
  const [loading, setLoading] = useState(false);

  //// choose network state ///
  const [selectedOption, setSelectedOption] = useState(options[5]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("current wallet", wallet);
    setLoading(true);

    const parsedFeeType = parseInt(feeType, 10);

    try {
      dispatch(
        updateLoading({
          type: "loading",
          header: "Creating New Vault",
          info: ["Transaction pending..."],
          overlay: true,
        })
      );

      const tx = await contract.launchVault(
        poolAddress,
        oracleAddress,
        swapRouter,
        vaultVisible,
        whiteDeposit,
        parsedFeeType
      );
      console.log("vault creation pending... ");
      const receipt = await tx.wait();
      console.log("vault created successfuly !");
      dispatch(updateLoading({}));
      console.log(receipt);
      if (receipt) {
        dispatch(
          updateNotifications([
            ...notifications,
            {
              type: "successful",
              header: "Transaction Successfull👍",
              info: [
                "Transaction Hash: ",
                {
                  text: "View Here",
                  link: `https://goerli.etherscan.io/tx/${receipt.transactionHash}`,
                },
              ],
              overlay: true,
            },
          ])
        );
      }
      // console.log("Deposit successful!");
      // setMessage("deposit successful !");
    } catch (error) {
      console.error();
      console.log(error.message);
      //////////Several possible error outcomes //////////////////////
      const errorMsg =
        error.message.includes("insufficient funds") && "Insufficient funds";
      const reject =
        error.message.includes("user rejected transaction") &&
        "Transactioin terminated!!!";
      const noinput =
        error.message.includes(
          "resolver or addr is not configured for ENS name"
        ) && "Input Error!!!";
      const nonceerror =
        error.message.includes("nonce has already been used") &&
        "Nonce already used!!!";
      const failedtransac =
        error.message.includes("transaction failed") && "Transaction Failed!!!";

      dispatch(updateLoading({}));
      dispatch(
        updateNotifications([
          ...notifications,
          {
            type: "error",
            info: [errorMsg, reject, noinput, nonceerror, failedtransac],
            overlay: true,
          },
        ])
      );
    } finally {
      setLoading(false);
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
        setContract(contract);
        setWallet(walletAddress);
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    const watchWallet = () => {
      if (wallet !== "") return true;
    };
    watchWallet();
  }, [wallet]);

  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-4 xl:px-0 ">
        <div className="flex-col md:flex-row p-3 md:p-4 rounded-lg bg-secondary">
          <div className="">
            <h1 className="text-2xl font-semibold pb-1">Create New Strategy</h1>
            <p className="text-sm pb-8 text-light">
              Create Uniswap V3 strategies for <br /> managing your personal
              funds or public funds with a <br /> revenue-sharing model.
            </p>
          </div>
          <form className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-4 mt-4">
            <div className="flex flex-col justify-between">
              <label className="block text-sm text-gray-500 ">
                Choose Network
              </label>
              <div
                className="flex gap-2 items-center py-[9px] px-[9px] w-full relative bg-[#29292999] rounded-lg mt-auto mb-0"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={selectedOption.image}
                  alt={selectedOption.label}
                  className="w-4 h-auto"
                />
                <span>{selectedOption.label}</span>

                {isDropdownOpen && (
                  <div className="bg-[#292929] rounded-lg absolute top-[100%] left-0 py-2 flex flex-col w-full z-10">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="flex gap-3 hover:bg-light/50 cursor-pointer py-3 px-3"
                        onClick={() => handleOptionSelect(option)}
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          className="w-4 h-auto"
                        />
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* 
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-[#29292999]">
                <option className="bg-light/10">
                  <img
                    src="../../../ethereum-eth-logo.svg"
                    alt="ethereum logo"
                    className="w-4 h-auto"
                  />
                  Ethereum
                </option>
                <option className="bg-light/10">Polygon</option>
                <option className="bg-light/10">BNB Chain</option>
                <option className="bg-light/10">Avalanche</option>
                <option className="bg-light/10">Optimisn</option>
                <option className="bg-light/10">Goreli - testnet</option>
              </select> */}
            </div>
            <div>
              <label className="block text-sm text-gray-500">
                Choose DEX (Liquidity Source){" "}
              </label>
              <select
                className="p-3 focus:outline-none rounded-lg w-full text-sm bg-[#29292999]"
                // onChange={(e) => setDex(e.target.value)}
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
                value={feeType}
                onChange={(e) => setFeeType(e.target.value)}
              >
                <option value={0}>Flat Fess Only</option>
                <option value={1}>Dynamic Fees Only</option>
                <option value={2}>Flat Profit</option>
                <option value={3}>Dynamic Profit</option>
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

            {!wallet && (
              <button
                className="font-semibold flex items-center gap-x-2 justify-center bg-error/30 text-white hover:bg-error/40 px-3 py-5 rounded-lg w-full lg:w-1/2 col-span-full mx-auto text-xl disabled:cursor-not-allowed"
                onClick={handleClick}
                type="submit"
                disabled
              >
                Wallet Not Connected
              </button>
            )}

            {wallet && (
              <button
                className="font-semibold flex items-center gap-x-2 justify-center  text-black/100  px-3 py-5 rounded-lg col-span-full mx-auto text-xl  bg-light hover:bg-white/40 cursor-pointer w-full lg:w-1/2"
                onClick={handleClick}
                type="submit"
                disabled={loading ? true : false}
              >
                Create Strategy
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateStrategy;
