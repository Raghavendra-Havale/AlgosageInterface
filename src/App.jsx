import Body from "./Pages/Body/body";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Notifications from "./components/notifications";
import NotificationOverlay from "./components/notifications/overlay";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-primary">
      <Navbar />
      <Body />
      <Footer />
      <Notifications />
      <NotificationOverlay />
    </div>
  );
}

export default App;
