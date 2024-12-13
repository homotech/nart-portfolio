"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { escape } from "querystring";

const navLinkClass =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-regular text-5xl md:text-6xl block";
const smLinkClass =
  "transition duration-300 hover:text-neutral-500 text-white font-br-firma-semibold text-base md:text-2xl block";
const navLinks = [
  {
    id: 1,
    navLink: "Work",
    link: "",
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-white transform transition-transform duration-300 ${
        isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="relative" role="navigation">
        {/* The button */}
        <div className={`absolute px-4 md:px-8 lg:px-16 top-1/3 right-0 z-50 `}>
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
            <div
              className={`w-6 h-0.5 transition-all bg-black ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-black"
              }`}
            ></div>
          </button>
        </div>
        {/* End of the button */}

        {/* The name on the header  */}
        <div className={`p-4 w-full`}>
          <Link
            href="/"
            className="text-base lg:text-xl text-center font-br-firma-regular block"
          >
            Daniel Adonis
          </Link>
        </div>
        {/* End of the name */}

        {/* Mobile Menu */}

        <div
          id="mobile-menu"
          className={`absolute top-0 left-0 w-full h-screen md:px-8 lg:px-16 bg-black p-4 z-40 inset-0 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          //   style={{ display: isOpen ? "block" : "none" }}
          aria-hidden={!isOpen}
        >
          <div className="h-full flex flex-col">
            <div className="flex-grow">
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
            <div className="mb-8">
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
                    {item.navLink}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NewNav;
