import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { PiMagnifyingGlass } from "react-icons/pi";
import ProtocolStats from "../../components/ProtocolStats";
import TvlChains from "./components/TvlChains";
import tokenLogos from "../../assets/tokenLogos.json";
import feeCutType from "../../assets/feeCutType.json";

// let defaultLogoURL = "https://cryptogo.cc/logos/solana-sol-logo.png";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const [tokenPrices, setTokenPrices] = useState({});

  const rowsPerPage = 25;

  // Fetch data from the API when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://algosage-backend-as1k.onrender.com/api/data"
        );
        const result = await response.json();

        const tokenAddresses = new Set();
        result.forEach((item) => {
          tokenAddresses.add(item.token0_address);
          tokenAddresses.add(item.token1_address);
        });

        const prices = await getPricesForAddresses([...tokenAddresses]);
        setTokenPrices(prices);

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Handler functions for pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Get current data based on pagination
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  async function getPricesForAddresses(addresses) {
    const joinedAddresses = addresses.join(",");
    const url = `https://algosage-backend-as1k.onrender.com/proxy?url=https://api.1inch.dev/price/v1.1/1/${joinedAddresses}`;

    const tokenPrices = {};

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer bF3vSjsD3ni6gCuTmBmq2kAIJ6ZWWPGd",
        },
      });

      // Check if the response is okay
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error with status ${response.status}: ${errorText}`);
        return tokenPrices;
      }

      const prices = await response.json();
      Object.keys(prices).forEach((key) => {
        tokenPrices[key] = prices[key];
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // console.log(tokenPrices);
    return tokenPrices;
  }

  // const getTotalValue = (item) => {
  //   const price0Raw = (item.token0_address.toLowerCase() === "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984") ? undefined : tokenPrices[item.token0_address.toLowerCase()];
  //   const price1Raw = (item.token1_address.toLowerCase() === "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984") ? undefined : tokenPrices[item.token1_address.toLowerCase()];

  //   console.log("price0Raw",price0Raw);
  //   console.log("price1Raw",price1Raw);

  //   // Check for undefined prices
  //   if (price0Raw === undefined && price1Raw === undefined) {
  //     return (
  //       <div className="relative group inline-block">
  //         <span>--</span>
  //         <div className="absolute left-0 z-10 hidden mt-2 p-2 bg-gray-800 text-white text-sm rounded-lg group-hover:block">
  //           TVL estimates not available for Goerli Testnet
  //         </div>
  //       </div>
  //     );
  //   }

  //   let tvl0 = 0;
  //   let tvl1 = 0;

  //   if (price0Raw !== undefined) {
  //     const price0 = price0Raw / Math.pow(10, 18);
  //     tvl0 = price0 * parseFloat(item.total_assets_token0);

  //     console.log("price0", price0);

  //     if (price1Raw === undefined && parseFloat(item.total_assets_token1) !== 0) {
  //       // If price1 is not defined, use price0 and the liquidity pair ratio to derive price1
  //       const derivedPrice1 = (price0 * parseFloat(item.total_assets_token0)) / parseFloat(item.total_assets_token1);
  //       tvl1 = derivedPrice1 * parseFloat(item.total_assets_token1);
  //     }
  //   }

  //   if (price1Raw !== undefined) {
  //     const price1 = price1Raw / Math.pow(10, 18);
  //     tvl1 += price1 * parseFloat(item.total_assets_token1);

  //     console.log("price1", price1);

  //     if (price0Raw === undefined && parseFloat(item.total_assets_token0) !== 0) {
  //       // If price0 is not defined, use price1 and the liquidity pair ratio to derive price0
  //       const derivedPrice0 = (price1 * parseFloat(item.total_assets_token1)) / parseFloat(item.total_assets_token0);
  //       tvl0 = derivedPrice0 * parseFloat(item.total_assets_token0);
  //     }
  //   }

  //   console.log("tvl0", tvl0);
  //   console.log("tvl1", tvl1);
  //   // Return the sum of the TVL values for both tokens
  //   return (tvl0 + tvl1).toFixed(3); // Assuming you want the result rounded to three decimal places
  // };

  const InfoTooltip = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-black text-lowercase hover:bg-gray-300 cursor-pointer">
          i
        </div>
        {isHovered && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full -mb-12 w-25 bg-gray-700 text-white text-center text-xs rounded-lg px-2 py-1 opacity-100 transition-opacity duration-200">
            coming soon
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0">
        <p className="pb-2 text-sm text-light">TVL by Chain</p>
        <div className="grid auto-cols-max grid-flow-col gap-x-2 overflow-auto text-sm font-medium">
          <button className="text-sm py-2.5 px-5 rounded-lg hover:text-white font-medium text-white bg-light/20">
            All Vaults
          </button>
          <TvlChains />
        </div>
      </section>
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0">
        <div className="mb-4 flex flex-wrap gap-3">
          {/* <div className="w-fit rounded-lg bg-light/10 p-[2px] hidden md:block"> */}
            {/* <button className="text-sm py-2.5 px-5 rounded-lg hover:text-white font-medium text-white bg-light/20">
              All Vaults
            </button> */}
            {/* <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Incentivized Vaults
            </button>
            <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Stable
            </button>
            <button className="text-sm py-2.5 px-5 rounded-lg text-light hover:text-white  font-medium">
              Volatile
            </button> */}
          {/* </div> */}
          <div className="hidden grow md:block"></div>
          <button className="bg-light/10 hover:bg-light/30 cursor-pointer flex items-center gap-1.5 px-3 py-2 text-sm outline-none justify-between font-medium select-none h-11 w-45 shrink-0 rounded-lg text-white">
            <span className="">All Strategies</span>
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
                    AlgoSage Vaults
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-5 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    strategy
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-5 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    tvl
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white group">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    total apr (24h){" "}
                    <span>
                      <InfoTooltip />
                    </span>
                  </div>
                </th>
                <th className="whitespace-nowrap bg-light/40 p-4 text-left text-xs font-semibold uppercase text-white">
                  <div className="cursor-pointer select-none flex items-center gap-2">
                    balance{" "}
                    <span>
                      <InfoTooltip />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ******************************** */}

              {!loading &&
                currentData.map((item) => (
                  <tr
                    key={item.vault_address}
                    className="border-t border-t-black bg-light/20 hover:bg-light/30"
                    role="button"
                  >
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <Link to={"/vault"}>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 shrink-0">
                            <img
                              src={
                                tokenLogos[item.token0_symbol.toLowerCase()] ||
                                "https://w7.pngwing.com/pngs/449/160/png-transparent-error-inoperative-invalid-none-nothing-null-void-pinpoint-notification-icon-thumbnail.png"
                              }
                              alt={item.token0_symbol}
                              width={24}
                              height={24}
                              className="z-0 rounded-full"
                              decoding="async"
                            />
                            <img
                              src={
                                tokenLogos[item.token1_symbol.toLowerCase()] ||
                                "https://w7.pngwing.com/pngs/449/160/png-transparent-error-inoperative-invalid-none-nothing-null-void-pinpoint-notification-icon-thumbnail.png"
                              }
                              alt={item.token1_symbol}
                              width={24}
                              height={24}
                              className="z-0 rounded-full"
                              decoding="async"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="whitespace-nowrap font-semibold text-white/80">
                              {item.token0_symbol}-{item.token1_symbol}
                            </span>
                            <span className="text-xs text-white/60">
                              Goerli
                            </span>
                          </div>
                          <div className="flex gap-x-2">
                            <span className="rounded-xl bg-light/50 px-3 py-1 text-center text-xs text-[#c9c9c9] whitespace-nowrap">
                              {(item.fee_tier)/10000}%
                            </span>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <Link to={"/vault"}>
                        <span className="text-center text-xs text-[#c9c9c9] ">
                          {feeCutType[item.feecuttype] || "Unknown"}
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                    <div className="relative inline-block">
  <Link to={"/vault"} className="flex items-center gap-1">
    --
    <span className="relative group">
      <span className="bg-black text-white absolute top-11 left-11 transform -translate-x-1/2 -translate-y-full bg-opacity-75 text-xs rounded p-1 invisible group-hover:visible whitespace-nowrap min-w-[250px]">
        TVL estimates not available for Goerli Testnet
      </span>
      &#9432;{" "}
      {/* This is the Unicode character for the information symbol */}
    </span>
  </Link>
</div>

                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <Link to={"/vault"}>
                        <span className="flex items-center gap-x-1">
                          0.00%<button className="text-sm">✨</button>
                        </span>
                      </Link>
                    </td>
                    <td className="px-5 py-3 pr-8 text-sm text-white">
                      <Link to={"/vault"}>-</Link>
                    </td>
                  </tr>
                ))}

              {/* ****************************** */}
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
                        <span className="text-white/90">
                          {" "}
                          {(currentPage - 1) * rowsPerPage + 1}-
                          {currentPage * rowsPerPage <= data.length
                            ? currentPage * rowsPerPage
                            : data.length}
                        </span>
                        <span className="font-medium"> of</span>
                        <span className="text-white/90"> {data.length}</span>
                      </p>
                      <div className="flex items-center gap-x-2">
                        <p className="font-medium text-light">Rows per page</p>
                        {/* You can make rowsPerPage selectable if you wish */}
                        <span>{rowsPerPage}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-6 font-medium">
                      <button
                        disabled={currentPage === 1}
                        onClick={prevPage}
                        className={`flex items-center gap-x-0.5 ${
                          currentPage === 1
                            ? "opacity-50 cursor-not-allowed"
                            : "enabled:hover:text-white"
                        } text-light`}
                      >
                        <AiOutlineDown className="rotate-90" /> Previous
                      </button>
                      <button
                        disabled={currentPage === totalPages}
                        onClick={nextPage}
                        className={`text-white/90 flex items-center gap-x-0.5 ${
                          currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "enabled:hover:text-white"
                        }`}
                      >
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
