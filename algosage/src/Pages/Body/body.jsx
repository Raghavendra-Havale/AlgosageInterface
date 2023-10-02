import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
};

export default Body;
