import React from "react";
import Button from "./Button";

const NavBar = ({ text }) => {
  return (
    <>
      <div className="navBar">
        <h1 className="logo">LOGO .</h1>
        <ul className="navLinks">
          <li className="navLink">Home</li>
          <li className="navLink">Premium Program</li>
          <li className="navLink">Success story</li>
          <li className="navLink">About</li>
          <li className="navLink">Blog</li>
          <Button text={text} />
        </ul>
      </div>
    </>
  );
};

export default NavBar;
