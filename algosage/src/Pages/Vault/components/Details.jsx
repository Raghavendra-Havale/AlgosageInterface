import {
  // BsFillPatchCheckFill,
  BsArrow90DegLeft,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import ABI from "./ABI.json";
import UNIabi from "./UNI.json";
import SOLabi from "./SOL.json";

function Details() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [display, setDisplay] = useState("your share");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function handleOpen1() {
    setOpen1((open) => !open);
  }
  function handleOpen2() {
    setOpen2((open) => !open);
  }
  function handleOpen3() {
    setOpen3((open) => !open);
  }
  return (
    <div className="max-w-6xl mx-auto my-6 w-full px-5 xl:px-0">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="order-2 flex flex-1 flex-col gap-10 md:order-1">
          <div>
            <div className="flex justify-between pb-4">
              <h3 className="text-base font-semibold text-white">Strategy</h3>
            </div>

            <div className="bg-light/30 rounded-lg overflow-hidden">
              <div className="border-b border-black/30 last-of-type:border-none text-sm font-medium">
                <h3 className="flex" onClick={handleOpen1}>
                  <button className="px-4 flex flex-1 items-center justify-between py-4 transition-all">
                    Type <AiOutlineDown className="" />
                  </button>
                </h3>
                {!open1 && (
                  <div className="overflow-hidden bg-black/30 text-white/80 text-sm font-normal transition-all">
                    <img
                      src="https://app.gamma.xyz/_next/static/media/dynamic-narrow.2d1f8bd2.svg"
                      alt="dynamic narrow"
                      className=""
                      decoding="async"
                    />
                    <div className="flex gap-x-2 px-4 pt-4">
                      <span className="rounded-xl bg-light/20 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                        Automated
                      </span>
                      <span className="rounded-xl bg-light/20 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                        Manual
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-4 p-4">
                      <p>
                        Liquidity ranges are automatically rebalanced when
                        certain rebalance triggers are hit.
                      </p>
                      <p>
                        A liquidity range is set at 10% and 1,000% of current
                        price, and rebalance triggers are set at 7.5%. When the
                        price moves from 7.5% of the distance from the current
                        price to either the lower or upper range, the position
                        will be automatically rebalanced in a new range of 10%
                        and 1,000% of the current price.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b border-black/30 last-of-type:border-none text-sm font-medium">
                <h3 className="flex" onClick={handleOpen2}>
                  <button className="px-4 flex flex-1 items-center justify-between py-4 transition-all">
                    Benefits <AiOutlineDown className="" />
                  </button>
                </h3>
                {!open2 && (
                  <div className="overflow-hidden bg-black/30 text-white/80 text-sm font-normal transition-all">
                    <div className="flex flex-col gap-y-4 p-4">
                      <p>
                        Accrued fees will be compounded back into the position
                        on a regular basis on behalf of LPs compounding yield.
                      </p>
                      <p>
                        Auto-rebalancing allows for a passive LP experience.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-b border-black/30 last-of-type:border-none text-sm font-medium">
                <h3 className="flex" onClick={handleOpen3}>
                  <button
                    className="px-4 flex flex-1 items-center justify-between py-4 transition-all"
                    // onClick={() => handleOpen3((open) => !open)}
                  >
                    Trade-offs <AiOutlineDown className="" />
                  </button>
                </h3>
                {!open3 && (
                  <div className="overflow-hidden bg-black/30 text-white/80 text-sm font-normal transition-all">
                    <div className="flex flex-col gap-y-4 p-4">
                      <p>
                        Upon each rebalance, price ranges are set at a fixed
                        range of current price, and asset allocations could vary
                        from 50/50.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between pb-4">
              <h3 className="text-base font-semibold text-white">
                Pool Composition
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-lg">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap bg-light/30 p-4 text-left text-xs font-semibold uppercase text-white-90">
                      Token
                    </th>
                    <th className="whitespace-nowrap bg-light/30 p-4 text-left text-xs font-semibold uppercase text-white-90">
                      Pool Ratio
                    </th>
                    <th className="whitespace-nowrap bg-light/30 p-4 text-left text-xs font-semibold uppercase text-white-90">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-black bg-light/20 hover:bg-light/30">
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://app.gamma.xyz/_next/static/media/icon.ca2e2bd7.svg"
                          alt="WBNB"
                          width={24}
                          height={24}
                          decoding="async"
                        />
                        <span className="whitespace-nowrap font-semibold text-white/90">
                          rETH
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      54.93%
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">-- --</td>
                  </tr>
                  <tr className="border-t border-t-black bg-light/20 hover:bg-light/30">
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://app.gamma.xyz/_next/static/media/icon.dddcef40.svg"
                          alt="WBNB"
                          width={24}
                          height={24}
                          decoding="async"
                        />
                        <span className="whitespace-nowrap font-semibold text-white/90">
                          WETH
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      24.93%
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">-- --</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk & Audit
          <div>
            <h3 className="text-base font-semibold text-white pb-4">
              Risk & Audit
            </h3>
            <div className="flex flex-col items-start justify-start gap-y-4 pb-4 text-sm text-white-90 md:flex-row md:items-center md:gap-y-0">
              <p className="flex items-center gap-x-1">
                <a
                  href=""
                  className="flex items-center gap-x-1 text-light/80 hover:text-white"
                >
                  <BsFillPatchCheckFill />
                  Audit performed by Arbitruary Execution
                </a>
              </p>
              <div className="mx-3 hidden h-[14px] w-[2px] bg-light/80 md:block"></div>
              <p className="flex items-center gap-x-1">
                <a
                  href=""
                  className="flex items-center gap-x-1 text-light/80 hover:text-white"
                >
                  <BsFillPatchCheckFill />
                  Audit performed by ConsenSys diligence
                </a>
              </p>
            </div>
            <p className="text-sm text-light/80">
              Your access to and use of Algosage through this interface is
              entirely at your own risk and could lead to substantial losses.
              You take full responsibility for your use of the interface, and
              acknowledge that you use it on the basis of your own enquiry,
              without solicitation or inducement.
            </p>
          </div> */}
        </div>
        <div className="order-1 flex h-fit flex-col gap-y-3 md:order-2 md:w-[360px]">
          <div className="rounded-lg overflow-hidden">
            {display === "your share" && <YourShare setDisplay={setDisplay} />}
            {display === "withdraw" && <Withdraw setDisplay={setDisplay} />}
            {display === "deposit" && (
              <Deposit
                setDisplay={setDisplay}
                input1={input1}
                setInput1={setInput1}
                input2={input2}
                setInput2={setInput2}
              />
            )}
          </div>

          {/* <div className="rounded-lg overflow-hidden">
            <div
              className="p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center bg-light/20"
              role="button"
            >
              ✨ Staking Incentives <AiOutlineDown />
            </div>
          </div> */}

          <div className="rounded-lg overflow-hidden">
            <div
              className="p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center bg-light/20"
              role="button"
            >
              Vault Address <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;

function YourShare({ setDisplay }) {
  return (
    <>
      <div className="bg-light/40 p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center">
        Your Share
      </div>
      <div className="bg-light/20 font-normal text-xs">
        <div className="grid grid-cols-2 border-b border-b-black">
          <div className="p-4 border-r last:border-none border-r-black-95">
            <div className="pb-1 text-xs font-normal text-white-80">
              Your Balance
            </div>
            <div className="pb-2 text-sm text-white">-</div>
            <div className="text-xs text-light/80">0.00 LP</div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-x-3 pb-4">
            <span className="rounded-xl bg-light/60 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap hover:bg-light/40">
              <a
                href="http://app.uniswap.org"
                className="flex flex-row items-center gap-x-2"
              >
                Get WETH token
              </a>
            </span>
            <span className="rounded-xl bg-light/60 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap hover:bg-light/40">
              <a
                href="http://app.uniswap.org"
                className="flex flex-row items-center gap-x-2"
              >
                Get WBNB token
              </a>
            </span>
          </div>

          <div className="flex gap-x-1.5">
            <button
              className="font-medium flex items-center gap-x-2 justify-center bg-white text-black enabled:hover:bg-white/90 px-3 py-[11px] text-sm rounded-lg w-full flex-1"
              onClick={() => setDisplay("deposit")}
            >
              Deposit
            </button>
            <button
              className="font-medium flex items-center gap-x-2 justify-center bg-light/40 text-white-100 enabled:hover:bg-light/30 px-3 py-[11px] text-sm rounded-lg w-full flex-1"
              onClick={() => setDisplay("withdraw")}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Deposit({ setDisplay }) {
  const [message, setMessage] = useState("");
  const address = "0xaf159dd96a0dbe6cfd5d3a21936378150291c6f2"; //contract  address
  const UNIaddress = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const SOLaddress = "0xe032756D2aBaC260a1cA5a9F1BAf4f2E6Fd57692";
  const [contract, setContract] = useState(null);
  const [metamask, setMetamask] = useState(false);
  const [user, setUser] = useState("");
  const [UNIcontract, setUNIcontract] = useState(null);
  const [SOLcontract, setSOLcontract] = useState(null);
  const [coin0Amount, setCoin0Amount] = useState(0);
  const [coin1Amount, setCoin1Amount] = useState(0);
  const handleCoin0 = (e) => {
    setCoin0Amount(e.target.value);
  };
  const handleCoin1 = (e) => {
    setCoin1Amount(e.target.value);
  };
  useEffect(() => {
    const initialize = async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, ABI, signer);
        const UNIContract = new ethers.Contract(UNIaddress, UNIabi, signer);
        const SOLContract = new ethers.Contract(SOLaddress, SOLabi, signer);
        const signers = await provider.listAccounts();
        const walletAddress = signers[0];
        setUser(walletAddress);
        setUNIcontract(UNIContract);
        setSOLcontract(SOLContract);
        setContract(contract);
      }
    };
    initialize();
  }, []);
  const handleDeposit = async () => {
    console.log("current wallet", user);

    try {
      if (coin0Amount === null || coin0Amount === undefined) {
        console.error("Coin 0 amount is not valid.");
        return;
      }

      if (coin1Amount === null || coin1Amount === undefined) {
        console.error("Coin 1 amount is not valid.");
        return;
      }
      const amountToken0 = ethers.utils.parseEther(coin0Amount);
      const amountToken1 = ethers.utils.parseEther(coin1Amount);

      //const isApprovedToken0 = await UNIcontract.allowance(user,address);
      const app1 = await UNIcontract.approve(address, amountToken0);
      await app1.wait();
      console.log("coin 0 aproved");
      //  if(!isApprovedToken0){
      //  const app1=await UNIcontract.approve(address, amountToken0);
      //  await app1.wait();
      //  console.log('Token 0 approved.');
      // }else {console.log("token 0 already approved;")}
      // const isApprovedToken1 = await SOLcontract.allowance(user,address);
      // if(!isApprovedToken1){
      //  const app2=await SOLcontract.approve(address, amountToken1);
      //  await app2.wait();
      //  console.log('Token 1 approved.');
      // }else{console.log("token 1 already approved;")}
      const app2 = await SOLcontract.approve(address, amountToken1);
      await app2.wait();
      console.log("coin 1 aproved");
      const tx = await contract.deposit(amountToken0, amountToken1, {
        gasLimit: 270000,
        gasPrice: 20000000000,
      });

      const receipt = await tx.wait();
      console.log(receipt);
      console.log("Deposit successful!");
      setMessage("deposit successful !");
    } catch (error) {
      console.error("Error during deposit:", error.message || error);
      setMessage(error.message);
    }
  };
  return (
    <>
      <div className="bg-light/30 p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center">
        <div className="flex gap-x-3">
          <BackArrow setDisplay={setDisplay} />
          Deposit
        </div>
      </div>
      <div className="bg-light/10 font-normal text-xs">
        <div className="p-4">
          <div className="pb-6">
            <div className="flex flex-col gap-y-[6px]">
              <div className="flex justify-between text-light">
                <span>Amount</span>
                <span>Balance 0.00</span>
              </div>
              <div className="flex h-[42px] items-center justify-between gap-x-3 overflow-hidden rounded-lg bg-light/10">
                <div className="flex flex-1 gap-x-2 pl-4 items-center">
                  <input
                    type="number"
                    placeholder="0.00"
                    value={coin0Amount}
                    onChange={handleCoin0}
                    className="w-full bg-transparent text-base font-normal text-white outline-none truncate [appearance:textfield] placeholder:text-white/20 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-opacity duration-300 ease-in-out"
                  />
                </div>
                <div className="flex h-full items-center justify-center bg-light/20 px-5 text-xs text-white/80">
                  UNI
                </div>
              </div>
            </div>
            <div className="mt-6 mb-[2px] flex items-center justify-center">
              <div className="rounded-md bg-light/20 p-1.5">
                <GrAdd className="text-white/80 text-base" />
              </div>
            </div>
            <div className="flex flex-col gap-y-[6px]">
              <div className="flex justify-between text-light">
                <span>Amount</span>
                <span>Balance 0.00</span>
              </div>
              <div className="flex h-[42px] items-center justify-between gap-x-3 overflow-hidden rounded-lg bg-light/10">
                <div className="flex flex-1 gap-x-2 pl-4 items-center">
                  <input
                    type="number"
                    placeholder="0.00"
                    value={coin1Amount}
                    onChange={handleCoin1}
                    className="w-full bg-transparent text-base font-normal text-white outline-none truncate [appearance:textfield] placeholder:text-white/20 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-opacity duration-300 ease-in-out"
                  />
                </div>
                <div className="flex h-full items-center justify-center bg-light/20 px-5 text-xs text-white/80">
                  SOL
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-light/20 p-3 flex flex-col gap-y-2 mb-4">
            <div className="flex items-center justify-between text-white/50 text-xs font-normal">
              <div className="truncate">Total liquidity providing (In USD)</div>
              <div>-</div>
            </div>
            <div className="items-center justify-between text-white/80 text-xs font-normal hidden">
              <div className="truncate">Gas Estimate</div>
              <div>-</div>
            </div>
          </div>
          <button
            className="font-medium flex items-center gap-x-2 justify-center bg-white/100 text-black/100 hover:bg-white/90 px-3 py-[11px] text-sm rounded-lg w-full"
            onClick={handleDeposit}
          >
            DEPOSIT
          </button>
        </div>

        {/* displaying error message */}
        {message !== "" && (
          <p className="p-3 rounded-lg bg-gray-400 border border-rose-500">
            {message}
          </p>
        )}
      </div>
    </>
  );
}
function Withdraw({ setDisplay }) {
  return (
    <>
      <div className="bg-light/30 p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center">
        <div className="flex gap-x-3">
          <BackArrow setDisplay={setDisplay} />
          Withdraw
        </div>
      </div>
      <div className="bg-light/10 font-normal text-xs">
        <div className="p-4">
          <div className="pb-6">
            <div className="flex flex-col gap-y-[6px]">
              <div className="flex justify-between text-light">
                <span>Amount</span>
                <span>Balance 0.00</span>
              </div>
              <div className="flex h-[42px] items-center justify-between gap-x-3 overflow-hidden rounded-lg bg-light/10">
                <div className="flex flex-1 gap-x-2 pl-4 items-center">
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-transparent text-base font-normal text-white outline-none truncate [appearance:textfield] placeholder:text-white/20 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-opacity duration-300 ease-in-out"
                  />
                </div>
                <div className="flex h-full items-center justify-center bg-light/20 px-5 text-xs text-white/80">
                  UNI-SOL
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-light/20 p-3 flex flex-col gap-y-2 mb-4">
            <div className="flex items-center justify-between text-white/50 text-xs font-normal">
              <div className="truncate">Your Balance (In USD)</div>
              <div>-</div>
            </div>
            <div className="items-center justify-between text-white/80 text-xs font-normal hidden">
              <div className="truncate">Gas Estimate</div>
              <div>-</div>
            </div>
          </div>
          <button className="font-medium flex items-center gap-x-2 justify-center bg-white/100 text-black/100 hover:bg-white/90 px-3 py-[11px] text-sm rounded-lg w-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
}
function BackArrow({ setDisplay }) {
  return (
    <button onClick={() => setDisplay("your share")}>
      <BsArrow90DegLeft />
    </button>
  );
}
BackArrow.propTypes = {
  setDisplay: PropTypes.func,
};
YourShare.propTypes = {
  setDisplay: PropTypes.func,
};
Deposit.propTypes = {
  setDisplay: PropTypes.func,
};
Withdraw.propTypes = {
  setDisplay: PropTypes.func,
};
