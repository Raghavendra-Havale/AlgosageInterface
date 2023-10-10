import { Link } from "react-router-dom";

const chains = [
  {
    title: "BNB Chain",
    img: "https://app.gamma.xyz/_next/static/media/bnb.5470df19.svg",
    amount: `$${23.17}M`,
  },
  {
    title: "Ethereum",
    img: "https://app.gamma.xyz/_next/static/media/eth.fdd82abb.svg",
    amount: `$${5.16}M`,
  },
  {
    title: "Polygon PoS",
    img: "https://app.gamma.xyz/_next/static/media/polygon.a8468c20.svg",
    amount: `$${2.42}M`,
  },
  {
    title: "Arbitrum",
    img: "https://app.gamma.xyz/_next/static/media/arbitrum.b084ab24.svg",
    amount: `$${812.44}K`,
  },
  {
    title: "Moonbeam",
    img: "https://app.gamma.xyz/_next/static/media/moonbeam.2978f403.svg",
    amount: `$${55.48}K`,
  },
  {
    title: "Celo",
    img: "https://app.gamma.xyz/_next/static/media/celo.3df3ed56.svg",
    amount: `$${1.26}K`,
  },
];

function TvlChains() {
  return chains.map((chain) => (
    <>
      <Link
        to="/dashboard"
        className="flex justify-between items-center bg-light/10 rounded-lg py-3 px-4 gap-12 cursor-default select-none w-[241px] h-[48px] overflow-hidden"
        key={chain.title}
      >
        <div className="flex items-center gap-2">
          <img alt={`${chain.title} logo`} src={chain?.img} className="" />
          <span className="whitespace-nowrap font-medium text-white">
            {chain.title}
          </span>
        </div>
        <div className="font-medium text-white">{chain.amount}</div>
      </Link>
    </>
  ));
}

export default TvlChains;
