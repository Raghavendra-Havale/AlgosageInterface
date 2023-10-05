import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-primary px-5 sm:sticky">
      <div className="flex items-center lg:gap-x-6 xl:gap-x-8">
        <Link to={"/discover"} className=" pr-2.5">
          <p className="text-white/80 text-sm font-mono">ALGOSAGE</p>
        </Link>
        <nav className="hidden h-full items-center lg:flex">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>

          <ul className="m-0 flex h-full list-none items-center gap-4 p-0">
            <li>
              <Link
                to={"/discover"}
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard"}
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"/staking"}
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
              >
                Stake algo
              </Link>
            </li>
            <li>
              <Link
                to={"/revenue"}
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
              >
                Revenue
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex h-full items-center lg:hidden">
          <span className="mr-3 h-[17px] w-px bg-[#393939] xl:mr-8"></span>
          <div className="cursor-pointer text-2xl relative outline-none transform-none text-white">
            <AiOutlineMenu />
          </div>
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
