"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/nart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isLaptop, setIsLaptop] = useState(false);

  const navLinks = [
    {
      href: "/work",
      label: "Works",
      className: "py-4  mb-4 xl:mb-0 px-4 hover:font-bold",
    },
    {
      href: "/about",
      label: "About Me",
      className: "py-4  mb-4 xl:mb-0 px-4 hover:font-bold",
    },
    {
      href: "/blog",
      label: "Read My Blog",
      className: "py-4  mb-4 xl:mb-0 px-4 hover:font-bold",
    },
    {
      href: "/contact-us",
      label: "Contact Us",
      className: "py-4  mb-4 xl:mb-0 px-4 hover:font-bold",
    },
    {
      href: "/publish",
      label: "Publish a Blog",
      className: "py-4  mb-4 xl:mb-0 px-4 hover:font-bold",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  //   useEffect(() => {
  //     const handleResize = () => {
  //       const width = window.innerWidth;
  //       setIsLaptop(width >= 1023);
  //       setIsOpen(true);
  //     };
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => window.addEventListener("resize", handleResize);
  //   }, []);

  //   isLaptop ? isOpen : !isOpen;
  return (
    <nav>
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
                  icon={isOpen ? faXmark : faBars}
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
          </ul>
          <div className="w-full lg:w-1/3 lg:h-full xl:h-full">
            <button className="bg-black text-white w-full xl:h-full rounded px-4 py-4 rounded-xl">
              Reach out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
