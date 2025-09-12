import Link from "next/link";
import React from "react";


const Nav = () => {
  return (
    <nav className="bg-gradient text-white shadow-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center min-h-[100px] w-full">
        <div className="logo font-bold text-4xl ms-5">imageQ</div>
        <div className="links flex gap-8 text-sm me-5">
          <Link href="/">Services</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
