"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/nart-logo.svg";
import AnimatedHamburger from "./animatedHamburger";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuVisible(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      setIsMenuOpen(true);
      setTimeout(() => setMenuVisible(true), 50);
    }
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handClickOutside);
    return () => document.removeEventListener("mousedown", handClickOutside);
  }, [isMenuOpen, toggleMenu]);
  return (
    <header className="p-4 flex border-2 justify-between items-center">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Nart The Designer logo"
            width={50}
            height={20}
            // layout="responsive"
          />
        </Link>
      </div>
      <div className="z-50 relative">
        <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
      </div>

      {isMenuOpen && (
        <nav
          className={`fixed inset-0 bg-smoky-black z-40 transition-opacity duration-300 ease-in-out flex items-center justify-center ${
            menuVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="text-center">
            {["About", "Portfolio", "Say Hello", "Blog"].map((item) => (
              <li key={item} className="my-4">
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-2xl crayola"
                  onClick={() => toggleMenu()}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {/* <div>
        <Link href={"/"} className="">
          Home
        </Link>
      </div>
      <div className="sticky nav-container flex-col lg:flex-row lg:justify-between  flex px-4 py-4 xl:items-center">
        <div className="flex justify-between mb-8 lg:mb-0 xl:mb-0 lg:w-1/4 xl:w-1/4 ">
          <Link href={"/"} className="">
            <Image
              src={Logo}
              alt="Nart Logo Design"
              layout="responsive"
              style={{
                maxWidth: "30%",
              }}
              //   objectFit="contain"
            ></Image>
          </Link>
          <div className="w-12 lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {
                <FontAwesomeIcon
                  icon={isMenuOpen ? faXmark : faBars}
                  className=""
                />
              }
            </button>
          </div>
        </div>
        <div
          className={
            isOpen
              ? "lg:flex lg:flex-row lg:w-3/4 xl:w-3/4 lg:gap-20  xl:items-center"
              : "hidden lg:flex lg:flex-row lg:w-3/4 xl:w-3/4 lg:gap-20  xl:items-center"
          }
        >
          <ul className="flex flex-col lg:flex-row mb-4 lg:mb-0 xl:mb-0 lg:w-2/3 lg:justify-between h-auto">
            {navLinks.map((link, index) => {
              return (
                <li className={link.className}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
            {/* <li className="py-4  mb-4 xl:mb-0 px-4 hover:font-bold">
              <Link href={"/work"}>Works</Link>
            </li>
            <li className="py-4  mb-4 xl:mb-0 px-4 hover:font-bold">
              <Link href={"/about"}>About Me</Link>
            </li>
            <li className="py-4  mb-4 xl:mb-0 px-4 hover:font-bold">
              <Link href={"/blog"}>Read My Blog</Link>
            </li>
            <li className="py-4  mb-4 xl:mb-0 px-4 hover:font-bold">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li> */}
      {/* </ul>
          <div className="w-full lg:w-1/3 lg:h-full xl:h-full">
            <button className="bg-black text-white w-full xl:h-full rounded px-4 py-4 rounded-xl">
              Reach out
            </button>
          </div>
        </div>
      </div>  */}
    </header>
  );
};
export default Navbar;
