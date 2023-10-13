import Body from "./Pages/Body/body";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-primary">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
