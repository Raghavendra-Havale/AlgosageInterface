import Body from "./Pages/Body/body";
import Navbar from "./components/navbar/navbar";

import Footer from "./components/footer";

function App() {
  return (
    <div className="text-white min-h-screen h-full w-full flex flex-col overflow-x-hidden bg-primary scroll-smooth antialiased font-sans">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
