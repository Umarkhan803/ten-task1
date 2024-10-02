import React, { useEffect, useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
const NavBar = ({ text, enroll }) => {
  const location = useLocation(); // Get the current route path
  const [currentPage, setCurrentPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPage("home");
    } else if (location.pathname === "/premium_program") {
      setCurrentPage("premium_program");
    } else if (location.pathname === "/success") {
      setCurrentPage("success");
    } else if (location.pathname === "/blog") {
      setCurrentPage("blog");
    }
  }, [location]);
  return (
    <>
      <nav className="navBar">
        <div className="menu" onClick={toggleSidebar}>
          {isOpen ? <GiHamburgerMenu /> : <IoClose />}
        </div>
        <div className="logo">
          <img
            src="https://www.uptodd.com/images/newWebsite/logo-image.webp"
            alt="Company Logo"
            style={{ height: "50px" }}
            onError={(e) => (e.target.src = "fallback-image-url")}
          />
        </div>
        <div className={`navLinks ${isOpen ? "open" : "close"}`}>
          {currentPage === "premium_program" ? (
            <>
              <ul>
                <li className="navLink">
                  <Link to="/premium_program">Home</Link>
                </li>
                <li className="navLink">
                  <Link to="/program"> Program </Link>
                </li>
                <li className="navLink">
                  <Link to="/successPage">Success Story </Link>
                </li>
                <li className="navLink">
                  <Link to="/aboutus"> About</Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className={`navLinks ${isOpen ? "open" : "close"}`}>
                <li className="navLink">
                  <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                  <Link to="/premium_program" target="_blank">
                    Premium Program
                  </Link>
                </li>
                <li className="navLink">
                  <Link to="/success">Success</Link>
                </li>
                <li className="navLink">
                  <Link to="/about">About</Link>
                </li>
                <li className="navLink">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </>
          )}
        </div>
        <div>
          {currentPage === "premium_program" ? (
            <Button text={enroll} />
          ) : (
            <Button text={text} />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
