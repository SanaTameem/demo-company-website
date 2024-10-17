"use client"
import Image from "next/image";
import "./navbar.css";
import Links from "../links/Links.jsx";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const userScroll = () => {
      if (window.scrollY > 70) {
        navbar.classList.add("bg-secondary");
        navbar.classList.remove("bg-white");
      } else {
        navbar.classList.remove("bg-secondary");
        navbar.classList.add("bg-white");
      }
    };

    window.addEventListener("scroll", userScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", userScroll);
    };
  }, []); // Empty dependency array to run on mount and unmount
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/logo.jpg" alt="logo" width="50" height="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Links />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
