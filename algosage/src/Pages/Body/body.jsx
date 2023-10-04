import { Outlet } from "react-router-dom";
import ProtocolStats from "../../components/ProtocolStats";

const Body = () => {
  return (
    <main>
      <ProtocolStats />
      <div className="mx-auto max-w-6xl w-full px-5 xl:px-0 flex flex-col">
        <Outlet />
      </div>
    </main>
  );
};

export default Body;
