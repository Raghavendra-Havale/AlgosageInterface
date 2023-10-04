import { Outlet } from "react-router-dom";
import ProtocolStats from "../../components/ProtocolStats";

const Body = () => {
  return (
    <main>
      <ProtocolStats />
      <div className="bg-primary text-white">
        <Outlet />
      </div>
    </main>
  );
};

export default Body;
