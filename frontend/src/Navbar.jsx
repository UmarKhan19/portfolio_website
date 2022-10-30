import React from "react";

const Navbar = () => {
  return (
    <nav className="text-[#bdbdbd] flex justify-between h-12 items-center px-20 bg-[#11468F]">
      <span>Logo</span>
      <ul className="flex gap-8">
        <li className="hover:scale-110 duration-300 ">
          <a href="#">Home</a>
        </li>
        <li className="hover:scale-110 duration-300 ">
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
