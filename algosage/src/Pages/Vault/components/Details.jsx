import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

function Details() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);

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
                        Dynamic
                      </span>
                      <span className="rounded-xl bg-light/20 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                        Narrow
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
                          WBNB
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      54.93%
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      $2.06M
                    </td>
                  </tr>
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
                          WETH
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      24.93%
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      $1.69M
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
              Your access to and use of Gamma through this interface is entirely
              at your own risk and could lead to substantial losses. You take
              full responsibility for your use of the interface, and acknowledge
              that you use it on the basis of your own enquiry, without
              solicitation or inducement.
            </p>
          </div>
        </div>
        <div className="order-1 flex h-fit flex-col gap-y-3 md:order-2 md:w-[360px]">
          <div className="rounded-lg overflow-hidden">
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
                      href="https://swap.defillama.com/?chain=bsc&to=0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                      className="flex flex-row items-center gap-x-2"
                    >
                      Get WETH token
                    </a>
                  </span>
                  <span className="rounded-xl bg-light/60 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap hover:bg-light/40">
                    <a
                      href="https://swap.defillama.com/?chain=bsc&to=0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                      className="flex flex-row items-center gap-x-2"
                    >
                      Get WBNB token
                    </a>
                  </span>
                </div>
                <div className="flex gap-x-1.5">
                  <button className="font-medium flex items-center gap-x-2 justify-center bg-white text-black enabled:hover:bg-white/90 px-3 py-[11px] text-sm rounded-lg w-full flex-1">
                    Deposit
                  </button>
                  <button className="font-medium flex items-center gap-x-2 justify-center bg-light/40 text-white-100 enabled:hover:bg-light/30 px-3 py-[11px] text-sm rounded-lg w-full flex-1">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div
              className="p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center bg-light/20"
              role="button"
            >
              ✨ Staking Incentives <AiOutlineDown />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div
              className="p-4 text-white-100 font-semibold text-sm rounded-t-lg select-none flex justify-between items-center bg-light/20"
              role="button"
            >
              Contact Addresses <AiOutlineDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
