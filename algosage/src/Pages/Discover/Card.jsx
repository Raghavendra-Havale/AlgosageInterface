const cards = [
    {
        title: "Thena",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fa60f621.png&w=384&q=75",

    },
    {
        title: "QuickSwap",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9496288a.png&w=384&q=75",

    },
    {
        title: "Uniswap",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83e530b3.png&w=256&q=75",

    },
    {
        title: "Ramses",
        subtitle: "Decentralized Exchange",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.fa60f621.png&w=384&q=75",

    },
    {
        title: "Retro",
        img: "https://app.gamma.xyz/_next/static/media/logo.38b2ddf9.svg",

    },
    {
        title: "Camelot",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ed8a272c.png&w=256&q=75",

    },
    {
        title: "Synthswap",
        img: "https://app.gamma.xyz/_next/static/media/logo.e8045a7b.svg",

    },
    {
        title: "Lynex",
        img: "https://app.gamma.xyz/_next/static/media/logo.4e8773e6.svg",

    },
    {
        title: "Zyberswap",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.a47a4503.png&w=256&q=75",

    },
    {
        title: "Beamswap",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.18004ac7.png&w=256&q=75",

    },
    {
        title: "Sushi",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.52b66917.png&w=256&q=75",

    },
    {
        title: "StellaSwap",
        img: "https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d42d39c.png&w=256&q=75",

    },
    {
        title: "FusionX",
        img: "https://app.gamma.xyz/_next/static/media/logo.70ecb4dc.svg",

    },
];

const Card = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cards.map((card) => (
                <div className="ml-1 mt-4 p-2 rounded-lg sm:w-96 md:w-80 lg:w-96 xl:w-96 bg-secondary relative overflow-hidden">
                    <img className="absolute top-0 right-0 -mr-2 h-auto w-28" src={card.img} />
                    <h1 className="text-xl">{card.title}</h1>
                    <h2 className="text-gray-500 text-md">Decentralized Exchange</h2>
                    <div className="flex  mt-4 mr-2 ">
                        <div className="flex flex-col gap-1 border-r border-r-gray-500 px-3">
                            <div className="text-gray-500 text-sm ">TVL</div>
                            <div className="flex items-center text-xl">$27.96M</div>
                        </div>
                        <div className="flex flex-col gap-1 border-r border-r-gray-500 px-3 last:border-none">
                            <div className="text-gray-500 text-sm">Total Pairs</div>
                            <div className="flex items-center text-xl">143</div>
                        </div>
                    </div>
                    <button className="rounded-lg border-solid border-2 border-gray-500 w-full p-2 mt-6 enabled:hover:bg-gray-800">Provide Liquidity → </button>
                </div>
            ))}
            {/* <div className="">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    <div className="w-[550px] h-[200px] bg-secondary p-5 m-4 rounded-lg relative">
                        <img className="absolute top-0 right-0 -mr-2 h-auto w-28" src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstake-gamma-card-bg.fff15eaf.png&w=128&q=75" />
                        <h1 className="text-xl p-1">Stake GAMMA</h1>
                        <p className="text-sm text-gray-500 p-1">Stake GAMMA and receives fee distributions from protocol revenue<br/></p>
                        <button className="rounded-lg border-solid border-2 border-gray-500 w-30  p-2 mt-6 enabled:hover:bg-gray-800">Stake GAMMA →  </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    <div className="w-[550px] h-[200px] bg-secondary p-5 m-4 rounded-lg relative">
                        <img className="absolute top-0 right-0 -mr-2 h-auto w-28" src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpartners-card-bg.46fcd918.png&w=256&q=75" />
                        <h1 className="text-xl p-1">For Web3 Projects & Founders</h1>
                        <p className="text-sm text-gray-500 p-1">We implement automated strategies tailored to the needs of your project<br/></p>
                        <button className="rounded-lg border-solid border-2 border-gray-500 w-30  p-2 mt-6 enabled:hover:bg-gray-800">Stake GAMMA →  </button>
                    </div>
                </div>
            </div> */}
        </div>
    )
};





export default Card;