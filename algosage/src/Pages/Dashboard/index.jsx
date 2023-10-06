import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { PiMagnifyingGlass } from "react-icons/pi";
import ProtocolStats from "../../components/ProtocolStats";

const Dashboard = () => {
  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0">
        <p className="pb-2 text-sm text-light">TVL by Chain</p>
        <div className="grid auto-cols-max grid-flow-col gap-x-2 overflow-auto text-sm font-medium">
          <Link
            to="/dashboard"
            className="flex justify-between items-center bg-light/10 rounded-lg py-3 px-4 gap-12 cursor-default select-none w-[241px] h-[48px]"
          >
            <div className="flex items-center gap-2">
              <img
                alt="BNB logo"
                src="https://app.gamma.xyz/_next/static/media/bnb.5470df19.svg"
                className=""
              />
              <span className="whitespace-nowrap font-medium text-white">
                BNB Chain
              </span>
            </div>
            <div className="font-medium text-white">$28.17M</div>
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0">
        <div className="mb-4 flex flex-wrap gap-3">
          <div className="w-fit rounded-lg bg-light/10 p-[2px] hidden md:block">
            <button className="text-sm py-2.5 px-5 rounded-lg hover:text-white font-medium text-white bg-light/20">
              All Vaults
            </button>
            <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Incentivized Vaults
            </button>
            <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Stable
            </button>
            <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Volatile
            </button>
          </div>
          <div className="hidden grow md:block"></div>
          <button className="bg-light/10 hover:bg-light/30 cursor-pointer flex items-center gap-1.5 px-3 py-2 text-sm outline-none justify-between font-medium select-none h-11 w-45 shrink-0 rounded-lg text-white">
            <button className="">All Strategies</button>
            <AiOutlineDown />
          </button>
          <div className="h-11 w-full text-sm md:w-[300px]">
            <div className="relative h-full">
              <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-light" />
              <input
                type="text"
                className="placeholder:text-light h-full w-full rounded-lg bg-light/10 px-8 text-sm text-light outline-none z-0"
                placeholder="Search for a token symbol"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full overflow-hidden rounded-lg">
            <thead>
              <tr>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    Algo Vault
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    strategy
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    tvl
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    total apr (24h)
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    balance
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-t border-t-black bg-light/20 hover:bg-light/30"
                role="button"
              >
                <td className="px-5 py-3 pr-8 text-sm text-white">
                  <Link to={"/vault"}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center shrink-0">
                        <img
                          src="	https://app.gamma.xyz/_next/static/media/icon.dddcef40.svg"
                          alt="weth"
                          className="z-0 -mr-1.5"
                          decoding="async"
                        />
                        <img
                          src="https://app.gamma.xyz/_next/static/media/icon.ca2e2bd7.svg"
                          alt="wbnb"
                          className="z-0 -mr-1.5 "
                          decoding="async"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="whitespace-nowrap font-semibold text-white/80">
                          WETH-WBNB
                        </span>
                        <span className="text-xs text-white/60">Thena</span>
                      </div>
                      <div className="flex gap-x-2">
                        <span className="rounded-xl bg-light/50 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                          0.1277%
                        </span>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="px-5 py-3 pr-8 text-sm text-white">
                  <Link to={"/vault"}>
                    <span className="rounded-xl bg-light/50 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                      Narrow
                    </span>
                  </Link>
                </td>
                <td className="px-5 py-3 pr-8 text-sm text-white">$3.82M</td>
                <td className="px-5 py-3 pr-8 text-sm text-white">
                  <span className="flex items-center gap-x-1">
                    7.58%<button className="text-sm">✨</button>
                  </span>
                </td>
                <td className="px-5 py-3 pr-8 text-sm text-white">-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td
                  className="border-t border-t-black bg-light/20 p-4"
                  colSpan={5}
                >
                  <div className="flex w-full items-center justify-between text-xs">
                    <div className="flex items-center gap-x-8">
                      <p className="font-medium text-light">
                        Show
                        <span className="text-white/90"> 1-100</span>
                        <span className="font-medium"> of</span>
                        <span className="text-white/90"> 143</span>
                      </p>
                      <div className="flex items-center gap-x-2">
                        <p className="font-medium text-light">Rows per page</p>
                        <button className="hover:bg-light/50 cursor-pointer flex items-center gap-1.5 py-2 outline-none justify-between  font-medium select-none w-12 bg-light/30 px-2 text-xs rounded-lg">
                          <span>100</span>
                          <AiOutlineDown />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-x-6 font-medium">
                      <button
                        disabled
                        className="flex items-center gap-x-0.5 enabled:hover:text-white text-light"
                      >
                        <AiOutlineDown className="rotate-90" /> Previous
                      </button>
                      <button className="text-white/90 flex items-center gap-x-0.5 enabled:hover:text-white">
                        Next <AiOutlineDown className="-rotate-90" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
