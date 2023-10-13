import ProtocolStats from "../../components/ProtocolStats";
import "./index.css";

function CreateStrategy() {
  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-4 xl:px-0 ">
        <div className="flex-col md:flex-row p-4 rounded-lg bg-secondary">
          <div className="">
            <h1 className="text-2xl font-semibold pb-1 ">ℚuadrat</h1>
            <p className="text-sm pb-3 text-light">
              The open market of Asset Management on Ethereum,
              <br />
              Polygon, BNB Chain, Avalanche, Optimism, Arbitrum, Base
            </p>
            <h1 className="text-2xl font-semibold   pb-1">
              Create New Strategy
            </h1>
            <p className="text-sm pb-8 text-light">
              Quadrat allows you to create Uniswap V3 strategies for <br />{" "}
              managing your personal funds or public funds with a <br />{" "}
              revenue-sharing model.
            </p>
          </div>
          <form className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-4 mt-4">
            <div>
              <label className="block text-sm text-gray-500 ">
                Choose Network
              </label>
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-light/10">
                <option>Ethereum</option>
                <option>Polygon</option>
                <option>BNB Chain</option>
                <option>Avalanche</option>
                <option>Optimisn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">
                Choose DEX (Liquidity Source){" "}
              </label>
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-light/10">
                <option>Uniswap V3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500">Select pair</label>
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-light/10">
                <option>WETH</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                Select Fee Type:
              </label>
              <select className="p-3 focus:outline-none rounded-lg w-full text-sm bg-light/10">
                <option> DynamicFeesOnly</option>
                <option>FlatProfit</option>
                <option>DynamicProfit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                Input Pool Address:
              </label>
              <input
                type="text"
                placeholder="Pool Address"
                className="p-3 focus:outline-none placeholder:text-light rounded-lg w-full text-sm bg-light/10"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 ">
                Input Oracle Address:
              </label>
              <input
                type="text"
                placeholder="Oracle Address"
                className="p-3 focus:outline-none placeholder:text-light rounded-lg w-full text-sm bg-light/10"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">Vault Visibility:</p>
              <label className="switch cursor-pointer">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 break-all">WhiteListedDeposits:</p>
              <label className="switch cursor-pointer">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

            <button className="font-semibold flex items-center gap-x-2 justify-center bg-light text-black/100 hover:bg-white/40 px-3 py-7 rounded-lg w-full col-span-full text-xl">
              Connect Wallet
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateStrategy;
