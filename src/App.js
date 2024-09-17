import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
function App() {
  const navText = "Start for INR 499";
  const bookingText = "Book a Demo Slot";
  return (
    <>
      <NavBar text={navText} />
      <Home bookingText={bookingText} />
    </>
  );
}

export default App;
