import Link from "next/link";

function Menu() {
  return (
    <nav className="sticky top-0 flex w-full bg-gray-900 text-white justify-between px-6 py-4 z-50">
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
      </ul>
    </nav>
  );
}

export default Menu;
