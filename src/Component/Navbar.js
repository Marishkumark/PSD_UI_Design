import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <div className=" bg-sky-500">
        <nav className="navbar ">
          <h1 className="logo">Logo</h1>
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About Us</li>
            </Link>
            <Link to="/">
              <li>Services</li>
            </Link>
            <Link to="/">
              <li>Projects</li>
            </Link>
            <Link to="/">
              <li>Gallery</li>
            </Link>
            <Link to="/">
              <li>Contact</li>
            </Link>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <div className="text-color">
                <ImCross />
              </div>
            ) : (
              <FaBars />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}
