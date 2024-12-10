"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Constants moved outside component
const NAV_LINKS = [
  {
    id: 1,
    navLink: "Work",
    link: "work",
  },
  {
    id: 2,
    navLink: "Info",
    link: "info",
  },
  {
    id: 3,
    navLink: "News",
    link: "news",
  },
];

const SOCIAL_LINKS = [
  {
    id: 1,
    navLink: "LinkedIn",
    link: "https://www.linkedin.com/in/daniel-adonis-6485b7202/",
  },
  {
    id: 2,
    navLink: "Instagram",
    link: "https://www.instagram.com/nartthedesigner/",
  },
  {
    id: 3,
    navLink: "Behance",
    link: "https://www.behance.net/adonisdaniel",
  },
];

const NAV_LINK_CLASS =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-regular text-5xl block";
const SOCIAL_LINK_CLASS =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-semibold text-xl block";

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <nav
        className="flex justify-between items-center max-w-7xl mx-auto relative"
        role="navigation"
      >
        {/* Hamburger Menu Button */}
        <div className="absolute top-0 right-0 z-50 p-4">
          <button
            className="space-y-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2 bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "opacity-0 bg-white" : "bg-black"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-black"
              }`}
            ></div>
          </button>
        </div>

        {/* Header Name */}
        <div className="p-4 w-full text-center">
          <Link
            href="/"
            className={`text-base font-br-firma-semibold transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            Daniel Adonis
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 w-full h-full bg-black p-4 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="h-3/4 overflow-y-auto">
            <h2 className="text-white uppercase text-xs font-br-firma-semibold mt-10">
              Menu
            </h2>
            <ul className="space-y-4 mt-4">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={NAV_LINK_CLASS}
                    onClick={closeMenu}
                  >
                    {item.navLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-1/4">
            <h2 className="text-white uppercase text-xs font-br-firma-semibold mt-10">
              Follow
            </h2>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SOCIAL_LINK_CLASS}
                    onClick={closeMenu}
                  >
                    {item.navLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarNew;
