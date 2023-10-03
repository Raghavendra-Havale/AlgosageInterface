import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0 flex flex-col gap-y-6">
      <Outlet />
    </section>
  );
};

export default Body;
