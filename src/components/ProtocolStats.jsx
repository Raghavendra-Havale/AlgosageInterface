function ProtocolStats() {
  const initial = () => {
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
                      $81.58M
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                    <div className="whitespace-nowrap text-xs font-medium text-light">
                      Total Fees Accrued
                    </div>
                    <div className="flex items-center gap-2 text-xl text-white">
                      $14.09M
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 break-all border-r border-r-[#454545] px-3 first:pl-0 last:border-none">
                    <div className="whitespace-nowrap text-xs font-medium text-light">
                      Algo Staking APY
                    </div>
                    <div className="flex items-center gap-2 text-xl text-white">
                      1.94%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return initial();
}

export default ProtocolStats;
