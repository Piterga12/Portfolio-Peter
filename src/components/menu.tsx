import Link from "next/link";
import list from "./projects-list.json";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 flex w-full bg-slate-900 text-white justify-between px-6 py-4 z-50">
      <div>
        <Link href={"/"} className="font-bold text-lg">
          Pedro González-Anta
        </Link>
      </div>
      <ul className="flex">
        <li className="ml-8 mr-8">
          <Link href={"/projects/contactme"}>Contact Me</Link>
        </li>
        <li className="ml-4">
          <Link href={"/#about"}>Abou Me</Link>
        </li>
        <li className="ml-4">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:mr-10"
          >
            Projects
            {!isOpen ? (
              <AiOutlineCaretDown className="w-16 active:text-black" />
            ) : (
              <AiOutlineCaretUp className="w-16 active:text-black" />
            )}
          </button>
          {isOpen && (
            <div className="bg-gray-900 absolute top-20 flex flex-col items-start rounded-lg p-2">
              {list.map((item, i) => (
                <div
                  className="flex w-full justify-between hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                  key={i}
                >
                  <Link href={item.link}>{item.project}</Link>
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="ml-4">
          <Link href={"/projects/curriculum"}>Curriculum</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
