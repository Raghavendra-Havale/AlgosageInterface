import Body from "./Pages/Body/body";
import Navbar from "./components/navbar/navbar";
import ProtocolStats from "./components/ProtocolStats";

function App() {
  return (
    <div className="text-white h-screen w-screen overflow-y-scroll overflow-x-hidden bg-primary">
      <Navbar />
      <main>
        <ProtocolStats />
        <Body />
      </main>
    </div>
  );
}

export default App;
