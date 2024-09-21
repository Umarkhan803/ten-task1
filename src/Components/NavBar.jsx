import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";
const NavBar = ({ text, enroll }) => {
  const location = useLocation(); // Get the current route path
  const [currentPage, setCurrentPage] = useState("home");

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
        <h1 className="logo">LOGO .</h1>
        <ul className="navLinks">
          {currentPage === "premium_program" ? (
            <>
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
              <Button text={enroll} />
            </>
          ) : (
            <>
              <>
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
                <Button text={text} />
              </>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
