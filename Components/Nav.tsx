"use client"
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient text-white shadow-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center min-h-[100px] w-full px-4 sm:px-6 md:px-12">
        {/* Logo */}
        <div className="logo font-extrabold text-4xl sm:text-3xl xs:text-2xl ms-15">
          ImageQ
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-8 font-light font-inter text-white text-[14px] me-20">
          <Link href="/">Services</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient w-full px-4 pb-4 flex flex-col gap-4 font-light text-[14px]">
          <Link href="/" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
