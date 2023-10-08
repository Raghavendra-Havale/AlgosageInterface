import { AiOutlineDown } from "react-icons/ai";
import { BiMenuAltLeft, BiSolidPieChartAlt } from "react-icons/bi";
import Details from "./components/Details";
import Analytics from "./components/Analytics";
import { useState } from "react";
function Vault() {
  const [change, setChange] = useState(true);
  return (
    <>
      <div className="h-[56px] sm:hidden"></div>
      <div className="relative mb-8 w-full overflow-hidden bg-secondary px-5 pt-8">
        <div className="mx-auto max-w-6xl relative">
          <img
            alt="thena logo"
            src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fa60f621.png&w=3840&q=75"
            className="absolute -top-8 -right-12 w-[190px] md:right-0 md:-top-8 md:w-[360px]"
          />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://app.gamma.xyz/_next/static/media/bnb.5470df19.svg"
                alt="BNB logo"
                className=""
              />
              <span className="whitespace-nowrap font-medium text-white-90 white-70 text-xs">
                BNB Chain
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="flex gap-3 flex-col items-start md:flex-row md:items-center">
                <div className="flex shrink-0 items-center">
                  <img
                    src="https://app.gamma.xyz/_next/static/media/icon.dddcef40.svg"
                    alt="WETH"
                    className="z-0 -mr-1.5"
                  />
                  <img
                    src="https://app.gamma.xyz/_next/static/media/icon.ca2e2bd7.svg"
                    alt="WBNB"
                    className="z-0 -mr-1.5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="whitespace-nowrap text-white-90 text-xl font-normal">
                    WETH-WBNB
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <span className="rounded-xl bg-light/20 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                    0.05%
                  </span>
                  <span className="rounded-xl bg-light/20 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                    narrow
                  </span>
                  <span className="hidden items-center gap-x-2 font-normal text-light/10 sm:top-0 sm:flex sm:border-l sm:border-l-light/70 sm:pl-2 sm:text-sm sm:text-light/70 sm:hover:text-light/80">
                    All vaults <AiOutlineDown />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                <div className="whitespace-nowrap text-xs font-medium text-light">
                  Total Value Locked
                </div>
                <div className="flex items-center gap-2 text-xl text-white">
                  $81.58M
                </div>
              </div>
              <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                <div className="whitespace-nowrap text-xs font-medium text-light">
                  Reward APR
                </div>
                <div className="flex items-center gap-2 text-xl text-white">
                  $14.09M
                </div>
              </div>
              <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                <div className="whitespace-nowrap text-xs font-medium text-light">
                  Total APR (24H)
                </div>
                <div className="flex items-center gap-2 text-xl text-white">
                  1.94%
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex">
              <span
                className={`inline-flex gap-x-2 font-medium text-sm px-6 py-3 cursor-pointer items-center hover:text-white  relative text-white  ${
                  change ? "border-b-[#FF0000]" : " border-b-black/50"
                } border-b-2 hover:border-b-[#FF0000]`}
                onClick={() => setChange(true)}
              >
                <BiMenuAltLeft />
                Details
              </span>
              <span
                className={`inline-flex gap-x-2 font-medium text-sm px-6 py-3 cursor-pointer items-center hover:text-white  relative text-white  ${
                  !change ? "border-b-[#FF0000]" : " border-b-black/50"
                } border-b-2 hover:border-b-[#FF0000]`}
                onClick={() => setChange(false)}
              >
                <BiSolidPieChartAlt />
                Analytics
                <span className="rounded-full bg-light/50 px-2 py-[2px] text-[10px] font-medium leading-snug">
                  BETA
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="">{change ? <Details /> : <Analytics />}</section>
    </>
  );
}
export default Vault;
