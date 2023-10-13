import ProtocolStats from "../../components/ProtocolStats";

function CreateStrategy() {
  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0">
        <div className="bg-secondary">
          <h1 className="text-2xl font-semibold pb-1 ">ℚuadrat</h1>
          <p className="text-sm pb-3 ">
            The open market of Asset Management on Ethereum,
            <br />
            Polygon, BNB Chain, Avalanche, Optimism, Arbitrum, Base
          </p>
          <h1 className="text-2xl font-semibold   pb-1">Create New Strategy</h1>
          <p className="text-sm pb-8 ">
            Quadrat allows you to create Uniswap V3 strategies for <br />{" "}
            managing your personal funds or public funds with a <br />{" "}
            revenue-sharing model.
          </p>
          <form>
            <label className="block mb-2 text-sm text-gray-500">
              Choose Network
            </label>
            <select className="bg-gray-800 w-36 text-sm">
              <option>Ethereum</option>
              <option>Polygon</option>
              <option>BNB Chain</option>
              <option>Avalanche</option>
              <option>Optimisn</option>
            </select>
            <label className="block mb-2 pt-2 text-sm text-gray-500">
              Choose DEX (Liquidity Source){" "}
            </label>
            <select className="bg-gray-800 w-36 text-sm">
              <option>Uniswap V3</option>
            </select>
            <label className="block mb-2 pt-2 text-sm text-gray-500">
              Select pair
            </label>
            <select className="bg-gray-800 w-32 text-sm flex">
              <option>WETH</option>
            </select>
            <div className=" pt-2 text-sm">
              <u className="text-gray-500 no-underline">TVL: </u>
              <span className=" font-semibold">$245,999,810</span>
              <span className="mx-2"> </span>
              <u className="text-gray-500 no-underline">Volume 24h: </u>
              <span className=" font-semibold">$1,835,877</span>
              <span className="mx-2"> </span>
              <u className="text-gray-500 no-underline">Fees 24h: </u>
              <span className=" font-semibold">$5,507</span>
            </div>
            <div>
              <label className="block mb-2 pt-2 text-sm text-gray-500">
                Set Asset Manager Address
              </label>
              <a
                href="https://etherscan.io/address/0xBfe4a6FaFB8be8F2193AFBf488E100A6aA60b986"
                rel="noreferrer"
                target="_blank"
                className="text-sm cursor-pointer"
              >
                View on Etherscan
              </a>
            </div>
            <div>
              <label className="block mb-2 pt-2 text-sm text-gray-500">
                Set Management Fee
              </label>
              <div>
                <input
                  type="text"
                  className="bg-secondary w-16 h-8 border-stone-300"
                />
                <span>% </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateStrategy;
