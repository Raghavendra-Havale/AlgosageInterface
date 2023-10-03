import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="fixed flex h-[var(--header-height)] items-center justify-between px-5 sm:sticky py-3">
      <div className="flex items-center lg:gap-x-6 xl:gap-x-8">
        <a className="-ml-2.5 p-2.5" href="/">
          <Link to={"/discover"}>
            <svg
              width={70}
              height={12}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.282.593v1.89H4.856c-1.04 0-1.799.278-2.277.834-.467.544-.7 1.442-.7 2.691 0 1.24.233 2.137.7 2.692.467.545 1.226.817 2.277.817H6.64c.531 0 .913-.138 1.147-.416.233-.289.35-.657.35-1.106 0-.438-.111-.774-.334-1.01-.213-.245-.542-.368-.987-.368H4.426v-1.65h2.58c.965 0 1.682.278 2.149.833.467.545.7 1.287.7 2.227 0 .47-.063.914-.19 1.33a2.725 2.725 0 0 1-.59 1.074c-.265.299-.61.54-1.035.72-.413.172-.923.257-1.528.257H4.856c-1.57 0-2.776-.443-3.614-1.33C.414 9.181 0 7.824 0 6.008c0-1.826.414-3.183 1.242-4.07C2.08 1.042 3.285.594 4.856.594h4.426ZM12.613 11.408h-2.07l3.774-9.614c.201-.512.483-.87.844-1.073.371-.214.844-.32 1.417-.32.562 0 1.024.106 1.385.32.371.203.653.56.844 1.073l3.63 9.614H20.35l-3.264-8.7c-.095-.246-.27-.369-.525-.369s-.436.123-.542.369l-3.407 8.7ZM25.879 11.408h-1.863V2.82c0-.727.212-1.309.637-1.747C25.077.625 25.725.4 26.595.4c.765 0 1.37.187 1.815.561.446.363.743.887.892 1.57l1.513 6.618c.095.406.334.609.716.609.372 0 .61-.203.717-.61l1.512-6.617c.149-.683.43-1.207.844-1.57.425-.374 1.024-.56 1.8-.56.87 0 1.517.224 1.942.672.424.438.636 1.02.636 1.747v8.588H37.12V2.916c0-.214-.07-.38-.207-.497-.128-.128-.313-.192-.558-.192-.223 0-.392.053-.51.16a.737.737 0 0 0-.238.417L34.063 9.42c-.17.716-.452 1.26-.844 1.635-.393.363-.96.544-1.704.544-.753 0-1.337-.186-1.751-.56-.404-.374-.685-.914-.844-1.619L27.39 2.804a.7.7 0 0 0-.254-.417c-.117-.107-.282-.16-.494-.16-.244 0-.435.064-.573.192-.128.118-.191.283-.191.497v8.492ZM43.418 11.408h-1.863V2.82c0-.727.212-1.309.637-1.747C42.616.625 43.264.4 44.134.4c.764 0 1.37.187 1.815.561.446.363.743.887.892 1.57l1.512 6.618c.096.406.335.609.717.609.371 0 .61-.203.716-.61L51.3 2.532c.148-.683.43-1.207.844-1.57.424-.374 1.024-.56 1.799-.56.87 0 1.518.224 1.942.672.425.438.637 1.02.637 1.747v8.588h-1.863V2.916c0-.214-.069-.38-.207-.497-.127-.128-.313-.192-.557-.192-.223 0-.393.053-.51.16a.737.737 0 0 0-.238.417L51.6 9.42c-.17.716-.45 1.26-.843 1.635-.393.363-.961.544-1.704.544-.754 0-1.337-.186-1.752-.56-.403-.374-.684-.914-.843-1.619L44.93 2.804a.7.7 0 0 0-.255-.417c-.116-.107-.28-.16-.493-.16-.244 0-.435.064-.573.192-.128.118-.191.283-.191.497v8.492ZM60.176 11.408h-2.07l3.774-9.614c.202-.512.483-.87.844-1.073.371-.214.844-.32 1.417-.32.562 0 1.024.106 1.385.32.371.203.653.56.844 1.073L70 11.408h-2.086l-3.264-8.7c-.095-.246-.27-.369-.525-.369s-.435.123-.541.369l-3.408 8.7Z"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </a>
        <nav className="hidden h-full items-center lg:flex">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>

          <ul className="m-0 flex h-full list-none items-center gap-4 p-0">
            <li>
              <a
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
                href="/"
              >
                <Link to={"/discover"}>Discover</Link>
              </a>
            </li>
            <li>
              <a
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
                href="/"
              >
                <Link to={"/dashboard"}>Dashboard</Link>
              </a>
            </li>
            <li>
              <a
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
                href=""
              >
                <Link to={"/staking"}>Stake algo</Link>
              </a>
            </li>
            <li>
              <a
                className="flex px-[10px] h-[37px] select-none items-center hover:bg-light/30 hover:rounded hover:text-white font-medium text-sm whitespace-nowrap rounded text-light"
                href="/"
              >
                <Link to={"/revenue"}>Revenue</Link>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex h-full items-center lg:hidden">
          <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8"></span>
          <div className="cursor-pointer text-2xl relative outline-none transform-none">
            <AiOutlineMenu />
          </div>
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-light/10 hover:bg-light/30 rounded-lg">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
