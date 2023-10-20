import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <main className="flex-1">
      <Outlet />
    </main>
  );
};

export default Body;
