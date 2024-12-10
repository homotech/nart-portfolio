"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { escape } from "querystring";

const navLinkClass =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-regular text-5xl block";
const smLinkClass =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-semibold text-xl block";
const navLinks = [
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
const smLinks = [
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

const NewNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <header className="w-full">
      <nav
        className="flex justify-between items-center max-w-7xl relative"
        role="navigation"
      >
        {/* The button */}
        <div className="absolute top-0 right-0 z-50 p-4">
          <button
            className={"space-y-1.5 group"}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 transition-all ${
                isOpen ? "rotate-45 translate-y-2 bg-white" : "bg-black"
              }`}
            ></div>
            <div className={`w-6 h-0.5 transition-all bg-black`}></div>
            <div
              className={`w-6 h-0.5 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-black"
              }`}
            ></div>
          </button>
        </div>
        {/* End of the button */}

        {/* The name on the header  */}
        <div className={`p-4 w-full item-center`}>
          <Link
            href="/"
            className="text-base text-center font-br-firma-semibold block"
          >
            Daniel Adonis
          </Link>
        </div>
        {/* End of the name */}

        {/* Mobile Menu */}

        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 w-full h-full bg-black p-4 z-40 inset-0 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          //   style={{ display: isOpen ? "block" : "none" }}
          aria-hidden={!isOpen}
        >
          <div className="h-3/4 overflow-y-auto">
            <h3 className="text-white uppercase text-xs font-br-firma-semibold mt-10">
              Menu
            </h3>
            <ul className="space-y-4 mt-4">
              {navLinks.map((item) => (
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  className={navLinkClass}
                  onClick={closeMenu}
                  key={item.id}
                >
                  {item.navLink}
                </Link>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <h3 className="text-white uppercase text-xs font-br-firma-semibold mt-10">
              Follow
            </h3>
            <ul className="mt-4">
              {smLinks.map((item) => (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={smLinkClass}
                  key={item.id}
                  onClick={closeMenu}
                >
                  <h3>{item.navLink}</h3>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NewNav;
