import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import PremiumProgram from "./Components/PremiumProgram";
import About from "./Components/About";
import Success from "./Components/Success";
import Blog from "./Components/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const navText = "Start for INR 499";
  const bookingText = "Book a Demo Slot";
  const explore = "Explore the Details";
  const start = "Start Now";
  const enroll = "Enroll Now";
  const babyKit = "Baby Kit";
  const program = "Program";
  const enrollmentBtn = "Enrollment";
  return (
    <>
      <BrowserRouter>
        <NavBar text={navText} enroll={enroll} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bookingText={bookingText}
                enroll={enroll}
                start={start}
                explore={explore}
                enrollmentBtn={enrollmentBtn}
                program={program}
                babyKit={babyKit}
              />
            }
          />
          <Route path="/premium_program" element={<PremiumProgram />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
