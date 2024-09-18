import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const navText = "Start for INR 499";
  const bookingText = "Book a Demo Slot";
  const explore = "explore the Details";
  return (
    <>
      <NavBar text={navText} />
      <Home bookingText={bookingText} explore={explore} />
    </>
  );
}

export default App;
