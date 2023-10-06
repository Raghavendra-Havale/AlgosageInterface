export const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="relative rounded-lg border border-[#272C31] bg-light/10 p-5">
        <img
          className="absolute top-5 right-8 mr-2  w-28 h-32 hidden lg:block"
          src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstake-gamma-card-bg.fff15eaf.png&w=128&q=75"
        />
        <h1 className="text-xl p-1 text-white/80">Stake GAMMA</h1>
        <p className="text-sm text-gray-500 p-1 pb-6">
          Stake GAMMA and receives fee distributions from protocol <br />
          revenue
        </p>
        <button className="font-medium flex items-center justify-center bg-light/20 text-white enabled:hover:bg-light/40 px-3 py-[11px] text-sm rounded-lg gap-x-2">
          Stake GAMMA →{" "}
        </button>
      </div>

      <div className="relative rounded-lg border border-[#272C31] bg-light/10 p-5">
        <img
          className="absolute top-5 right-10 mr-2  w-28 h-32 hidden lg:block"
          src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpartners-card-bg.46fcd918.png&w=256&q=75"
        />
        <h1 className="text-xl p-1 text-white/80">
          For Web3 Projects & Founders
        </h1>
        <p className="text-sm text-gray-500 p-1 pb-6">
          We implement automated strategies tailored to the <br />
          needs of your project
        </p>
        <button className="font-medium flex items-center justify-center bg-light/20 text-white enabled:hover:bg-light/40 px-3 py-[11px] text-sm rounded-lg gap-x-2">
          Apply here ↗{" "}
        </button>
      </div>
    </div>
  );
};
