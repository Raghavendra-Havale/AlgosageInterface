import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function Analytics() {
  return (
    <div className="max-w-6xl mx-auto my-6 w-full px-5 xl:px-0">
      <div className="flex flex-col gap-y-4 pb-8">
        <div className="relative flex gap-x-[10px] rounded-sm border-l-2 border-l-white bg-light/10 p-4">
          <div className="pt-1 text-white/50">
            <AiOutlineInfoCircle />
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-sm text-white/70">
              Analytics may not always be 100% accurate. At times, data may be
              inaccurate due to bugs, RPC outages, or issues with 3rd party APIs
              among other potential reasons. If you see any discrepancies,
              please notify our{" "}
              <a
                href="https://discord.gg/gammastrategies"
                className="inline-flex items-center gap-x-1 hover:text-white"
              >
                Discord <FiExternalLink />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center pb-6 sm:justify-end">
          <div className="flex rounded-lg border border-light/50 bg-light/10 text-xs font-medium divide-x divide-black/50">
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              24h
            </button>
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              7d
            </button>
            <button className="px-3.5 py-2 hover:text-white/90 bg-light/40 text-white-90">
              14d
            </button>
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              30d
            </button>
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              90d
            </button>
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              180d
            </button>
            <button className="px-3.5 py-2 text-light hover:text-white/80 bg-light/20">
              1y
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-light/10 p-5 text-white">
            <div className="flex items-center justify-between pb-6">
              <h3 className="text-base font-semibold text-white">LP vs HOLD</h3>
            </div>
            <div className="relative w-full h-[200px]"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="relative flex flex-1 flex-col gap-1.5 rounded-lg bg-light/10 p-4">
              <p className="text-xs flex items-center font-medium text-white/70">
                <button className="border-b border-dashed border-light flex items-center gap-x-2 pb-1">
                  Algo vs HOLD
                </button>
              </p>
              <div className="relative flex items-center text-xl text-success">
                0.219%
              </div>
            </div>
            <div className="relative flex flex-1 flex-col gap-1.5 rounded-lg bg-light/10 p-4">
              <p className="text-xs flex items-center font-medium text-white/70">
                <button className="border-b border-dashed border-light flex items-center gap-x-2 pb-1">
                  <span className="flex item-center h-2.5 w-2.5 rounded-sm bg-white"></span>
                  Algo Position
                </button>
              </p>
              <div className="relative flex items-center text-xl text-success">
                1.212%
              </div>
            </div>
            <div className="relative flex flex-1 flex-col gap-1.5 rounded-lg bg-light/10 p-4">
              <p className="text-xs flex items-center font-medium text-white/70">
                <button className="border-b border-dashed border-light flex items-center gap-x-2 pb-1">
                  <span className="flex item-center h-2.5 w-2.5 rounded-sm bg-yellow"></span>
                  HOLD Initial Deposit
                </button>
              </p>
              <div className="relative flex items-center text-xl text-success">
                0.99%
              </div>
            </div>
            <div className="relative flex flex-1 flex-col gap-1.5 rounded-lg bg-light/10 p-4">
              <p className="text-xs flex items-center font-medium text-white/70">
                <button className="border-b border-dashed border-light flex items-center gap-x-2 pb-1">
                  <span className="flex item-center h-2.5 w-2.5 rounded-sm bg-purple"></span>
                  HOLD 100% WETH
                </button>
              </p>
              <div className="relative flex items-center text-xl text-success">
                1.827%
              </div>
            </div>
            <div className="relative flex flex-1 flex-col gap-1.5 rounded-lg bg-light/10 p-4">
              <p className="text-xs flex items-center font-medium text-white/70">
                <button className="border-b border-dashed border-light flex items-center gap-x-2 pb-1">
                  <span className="flex item-center h-2.5 w-2.5 rounded-sm bg-cyan"></span>
                  HOLD 100% WBNB
                </button>
              </p>
              <div className="relative flex items-center text-xl text-success">
                0.07%
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-light/10 p-5 text-white/90">
            <div className="flex items-center justify-between pb-6">
              <h3 className="text-base font-semibold text-white">
                Price vs Order Range
              </h3>
            </div>
            <div className="relative w-full h-[200px]"></div>
          </div>
          <div className="rounded-lg bg-light/10 p-5 text-white/90">
            <div className="flex items-center justify-between pb-6">
              <h3 className="text-base font-semibold text-white">
                Net (%) Return Over Time
              </h3>
            </div>
            <div className="relative w-full h-[200px]"></div>
          </div>
          <div className="rounded-lg bg-light/10 p-5 text-white/90">
            <div className="flex items-center justify-between pb-6">
              <h3 className="text-base font-semibold text-white">
                Wide vs. Narrow Return (%) Over Time
              </h3>
            </div>
            <div className="relative w-full h-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
