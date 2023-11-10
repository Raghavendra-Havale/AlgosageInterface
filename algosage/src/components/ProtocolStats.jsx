import react, {useState, useEffect} from "react";

function ProtocolStats() {

  let [vaultCount, setVaultCount] = useState(0)
  // let [fulldata, setFulldata] = useState([])

  useEffect(()=>{
    fetch("https://algosage-backend-as1k.onrender.com/api/data")
    .then((response)=> response.json())
    .then((data)=>{
      setVaultCount(data.length)
      // setFulldata(data)
    })
  })


    return (
      <>
        <div className="h-[56px] sm:hidden"></div>
        <div className="w-full bg-secondary py-9 px-5">
          <div className="mx-auto max-w-6xl">
            <div className="flex justify-between">
              <div>
                <div className="text-xl text-white">Protocol Stats</div>
                <div className="flex mt-4">
                  <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                    <div className="whitespace-nowrap text-xs font-medium text-light">
                      Total Value Locked
                    </div>
                    <div className="flex items-center gap-2 text-xl text-white">
                      -- --
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                    <div className="whitespace-nowrap text-xs font-medium text-light">
                      Total Fees Accrued
                    </div>
                    <div className="flex items-center gap-2 text-xl text-white">
                      -- --
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                    <div className="whitespace-nowrap text-xs font-medium text-light">
                      Total Vaults Launched
                    </div>
                    <div className="flex items-center gap-2 text-xl text-white">
                      {vaultCount}
                      {/* {console.log("hello",fulldata)} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default ProtocolStats;
