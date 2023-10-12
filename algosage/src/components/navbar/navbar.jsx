import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [reveal, setReveal] = useState(false);

  function handleNavBar(page) {
    setActiveTab(page);
    setReveal(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-primary px-5 sm:sticky">
      <div className="flex items-center lg:gap-x-6 xl:gap-x-8">
        <Link
          to={"/discover"}
          className=" pr-2.5"
          onClick={() => setActiveTab("discover")}
        >
          <p className="text-white/80 text-sm font-mono">ALGOSAGE</p>
        </Link>
        <nav className="h-full items-center flex relative">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>
          <div
            className="cursor-pointer text-2xl relative outline-none transform-none text-white flex lg:hidden"
            onClick={() => setReveal(true)}
          >
            <AiOutlineMenu />
          </div>
          {window.innerWidth <= 975 && reveal && (
            <div className="flex-col lg:flex-row m-0 flex h-screen lg:h-full list-none items-left lg:items-center lg:gap-4 px-4  lg:p-0 absolute top-[40px] lg:top-0 w-[1000px] bg-primary lg:bg-transparent lg:relative -left-[105px] lg:left-0">
              <div onClick={() => handleNavBar("discover")}>
                <Link
                  to={"/discover"}
                  className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-lg lg:text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "discover" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Discover
                </Link>
              </div>
              <div onClick={() => handleNavBar("dashboard")}>
                <Link
                  to={"/dashboard"}
                  className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light${
                    activeTab === "dashboard" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Dashboard
                </Link>
              </div>
              <div onClick={() => handleNavBar("create-strategy")}>
                <Link
                  to={"/create-strategy"}
                  className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light ${
                    activeTab === "create-strategy"
                      ? "text-white bg-light/30"
                      : ""
                  } `}
                >
                  Create Strategy
                </Link>
              </div>
              <div onClick={() => handleNavBar("manage-strategy")}>
                <Link
                  to={"/manage-strategy"}
                  className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light ${
                    activeTab === "manage-strategy"
                      ? "text-white bg-light/30"
                      : ""
                  } `}
                >
                  Manage Strategy
                </Link>
              </div>
            </div>
          )}
          {window.innerWidth > 975 && (
            <div className="flex-col lg:flex-row m-0 flex h-[600px] lg:h-full list-none items-left lg:items-center lg:gap-4 px-4  lg:p-0 absolute top-[40px] lg:top-0 w-[500px] bg-primary lg:bg-transparent lg:relative -left-[105px] lg:left-0">
              <div onClick={() => setActiveTab("discover")}>
                <Link
                  to={"/discover"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "discover" ? "text-white bg-light/30" : ""
                  } `}
                >
                  Discover
                </Link>
              </div>
              <div onClick={() => setActiveTab("dashboard")}>
                <Link
                  to={"/dashboard"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light${
                    activeTab === "dashboard" ? "text-white bg-light/30" : ""
                  } `}
                  page={1}
                >
                  Dashboard
                </Link>
              </div>
              <div onClick={() => setActiveTab("create-strategy")}>
                <Link
                  to={"/create-strategy"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "create-strategy"
                      ? "text-white bg-light/30"
                      : ""
                  } `}
                >
                  Create Strategy
                </Link>
              </div>
              <div onClick={() => setActiveTab("manage-strategy")}>
                <Link
                  to={"/manage-strategy"}
                  className={`flex p-4 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light ${
                    activeTab === "manage-strategy"
                      ? "text-white bg-light/30"
                      : ""
                  } `}
                >
                  Manage Strategy
                </Link>
              </div>
            </div>
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
