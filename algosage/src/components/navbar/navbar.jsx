import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("discover");
  const [reveal, setReveal] = useState(false);
  console.log(reveal);

  function handleReveal() {
    setReveal((reveal) => !reveal);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-primary px-5 sm:sticky">
      <div className="flex items-center lg:gap-x-6 xl:gap-x-8">
        <Link to={"/discover"} className=" pr-2.5">
          <p className="text-white/80 text-sm font-mono">ALGOSAGE</p>
        </Link>
        <nav className="hidden h-full items-center lg:flex">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>

          <ul className="m-0 flex h-full list-none items-center gap-4 p-0">
            <li onClick={() => setActiveTab("discover")}>
              <Link
                to={"/discover"}
                className={`flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                  activeTab === "discover" ? "text-white bg-light/30" : ""
                } `}
              >
                Discover
              </Link>
            </li>
            <li onClick={() => setActiveTab("dashboard")}>
              <Link
                to={"/dashboard"}
                className={`flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                  activeTab === "dashboard" ? "text-white bg-light/30" : ""
                } `}
                page={1}
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => setActiveTab("staking")}>
              <Link
                to={"/staking"}
                className={`flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                  activeTab === "staking" ? "text-white bg-light/30" : ""
                } `}
              >
                Stake algo
              </Link>
            </li>
            <li onClick={() => setActiveTab("revenue")}>
              <Link
                to={"/revenue"}
                className={`flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                  activeTab === "revenue" ? "text-white bg-light/30" : ""
                } `}
              >
                Revenue
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex h-full items-center lg:hidden relative">
          <span className="mr-3 h-[17px] w-px bg-[#393939] xl:mr-8"></span>
          <div
            className="cursor-pointer text-2xl relative outline-none transform-none text-white"
            onClick={handleReveal}
          >
            <AiOutlineMenu />
          </div>
          {reveal && (
            <ul className="absolute top-[40px] m-0 flex h-[700px] w-screen -left-[103px] list-none flex-col p-0 bg-secondary">
              <li>
                <Link
                  to={"/discover"}
                  className={`flex p-4 select-none items-center hover:bg-light hover:text-white font-medium text-sm border-b border-b-black/95 text-white/60 bg-secondary w-full ${
                    activeTab === "discover" ? "bg-light text-white" : ""
                  } `}
                >
                  Discover
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard"}
                  className={`flex p-4 select-none items-center hover:bg-light hover:text-white font-medium text-sm border-b border-b-black/95 text-white/60 bg-secondary w-full ${
                    activeTab === "dashboard" ? "bg-light text-white" : ""
                  } `}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={"/staking"}
                  className={`flex p-4 select-none items-center hover:bg-light hover:text-white font-medium text-sm border-b border-b-black/95 text-white/60 bg-secondary w-full ${
                    activeTab === "staking" ? "bg-light text-white" : ""
                  } `}
                >
                  Stake Algo
                </Link>
              </li>
              <li>
                <Link
                  to={"/revenue"}
                  className={`flex p-4 select-none items-center hover:bg-light hover:text-white font-medium text-sm border-b border-b-black/95 text-white/60 bg-secondary w-full ${
                    activeTab === "revenue" ? "bg-light text-white" : ""
                  } `}
                >
                  Revenue
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-light/10 hover:bg-light/30 rounded-lg">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Navbar;
