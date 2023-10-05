import { Outlet } from "react-router-dom";
import ProtocolStats from "../../components/ProtocolStats";

const Body = () => {
  return (
    <main className="flex-1">
      <ProtocolStats />
      <div className="bg-primary text-white">
        <Outlet />
      </div>
    </main>
  );
};

export default Body;
