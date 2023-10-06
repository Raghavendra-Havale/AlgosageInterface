import Card from "./Card";
import ProtocolStats from "../../components/ProtocolStats";

function Discover() {
  return (
    <>
      <ProtocolStats />
      <section className="mx-auto max-w-6xl my-6 w-full px-5 xl:px-0 flex flex-col gap-y-6">
        <Card />
      </section>
    </>
  );
}

export default Discover;
