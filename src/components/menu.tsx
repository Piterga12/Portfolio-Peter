import { useState } from "react";
import Link from "next/link";

interface MenuProps {
  isDark: boolean;
  handleToggle: () => void;
}

function Menu({ isDark, handleToggle }: MenuProps) {
  return (
    <nav className="flex w-full bg-gray-900 text-white justify-between px-6 py-4">
      <div>
        <Link href={"/"} className="font-bold text-lg">
          Home
        </Link>
      </div>
      <ul className="flex">
        <li className="ml-4">
          <Link href={"/projects/second"}>About</Link>
        </li>
        <li className="ml-4">
          <Link href={"/projects/second"}>Projects</Link>
        </li>
        <li className="ml-4">
          <Link href={"/projects/second"}>Contact</Link>
        </li>
        <li className="ml-4">
          <button onClick={handleToggle}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
