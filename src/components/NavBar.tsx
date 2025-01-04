"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const { offsetTop, offsetHeight } = element;
        return (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        );
      });

      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-chesnut-dark text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-evenly items-center h-16">
          {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>


          <div className={"hidden sm:flex space-x-8"}>
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((label, index) => {
              const section = label.toLowerCase();
              return (
                <Link
                  key={index}
                  href={`#${section}`}
                  className={`text-sm font-semibold tracking-widest ${
                    activeSection === section ? "underline" : "text-white"
                  } hover:underline transition-colors`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      
      

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 py-4">
          {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((label, index) => {
            const section = label.toLowerCase();
            return (
              <Link
                key={index}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`text-center text-sm font-semibold tracking-widest ${
                  activeSection === section ? "underline" : "text-white"
                } hover:underline transition-colors`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-2 left-0 right-0 h-[1px] bg-gray-300"></div>
    </nav>
  );
}
