import Link from "next/link";
import list from "./projects-list.json";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 flex w-full bg-slate-900 text-white justify-between px-6 py-4 z-50">
      <div>
        <Link
          href={"/"}
          className="cursor-pointer hover:underline font-oswald text-2xl"
        >
          Pedro González-Anta
        </Link>
      </div>
      <ul className="flex">
        <li className="ml-8 mr-8">
          <Link
            href={"/#about"}
            className="cursor-pointer hover:underline font-oswald text-xl"
          >
            About Me
          </Link>
        </li>

        <li className="mr-4">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer hover:underline font-oswald text-xl"
          >
            <Link
              href={"/#projects"}
              className="cursor-pointer hover:underline font-oswald text-xl"
            >
              Projects
            </Link>
            {!isOpen ? (
              <AiOutlineCaretDown className="w-16 active:text-black" />
            ) : (
              <AiOutlineCaretUp className="w-16 active:text-black" />
            )}
          </button>
          {isOpen && (
            <div className="bg-slate-900 absolute top-20 flex flex-col items-start rounded-lg p-2 border border-white">
              {list.map((item, i) => (
                <div
                  className="flex w-full justify-between font-raleway hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                  key={i}
                >
                  <Link href={item.link}>{item.project}</Link>
                </div>
              ))}
            </div>
          )}
        </li>
        <li className="ml-4 mr-4">
          <Link
            href={"/projects/curriculum"}
            className="cursor-pointer hover:underline font-oswald text-xl"
          >
            Curriculum
          </Link>
        </li>
        <li className="ml-4 mr-4">
          <Link
            href={"/#contact"}
            className="cursor-pointer hover:underline font-oswald text-xl"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
