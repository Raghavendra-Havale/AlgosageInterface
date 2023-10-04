import React from 'react'

export const Cards = () => {
  return (
    <div className="flex ">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mr-6">
                    <div className="w-[560px] h-[180px] bg-secondary p-5 m-4 rounded-lg relative">
                        <img className="absolute top-5 right-8 mr-2  w-28 h-32" src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstake-gamma-card-bg.fff15eaf.png&w=128&q=75" />
                        <h1 className="text-xl p-1">Stake GAMMA</h1>
                        <p className="text-sm text-gray-500 p-1">Stake GAMMA and receives fee distributions from protocol <br/>revenue</p>
                        <button className="rounded-lg  w-30  p-2 mt-6 enabled:hover:bg-gray-800 font-semibold">Stake GAMMA →  </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mr-4">
                    <div className="w-[560px] h-[180px] bg-secondary p-5 m-4 rounded-lg relative">
                        <img className="absolute top-5 right-10 mr-2  w-28 h-32" src="https://app.gamma.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpartners-card-bg.46fcd918.png&w=256&q=75" />
                        <h1 className="text-xl p-1">For Web3 Projects & Founders</h1>
                        <p className="text-sm text-gray-500 p-1">We implement automated strategies tailored to the <br/>needs of your project</p>
                        <button className="rounded-lg   w-30  p-2 mt-6 enabled:hover:bg-gray-800 font-semibold">Apply here ↗  </button>
                    </div>
                </div>
            </div>
  )
}
