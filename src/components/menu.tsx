import { useState, useEffect } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuItemClick = (path: string) => {
    setIsOpen(false);

    // If not on the index page, navigate to the index first
    if (router.pathname !== "/") {
      router.push("/", undefined, { shallow: true });
    }

    // Wait for the navigation to complete and then scroll to the section
    setTimeout(() => {
      const targetElement = document.querySelector(path);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the delay if needed
  };

  return (
    <nav className="sticky top-0 flex w-full bg-slate-900 text-white justify-between px-6 py-4 z-50 border-b">
      <div>
        <Link href={"/"} passHref>
          <div className="cursor-pointer hover:underline font-oswald text-2xl">
            Pedro González-Anta
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        {/* For small screens, show a dropdown menu */}
        {isSmallScreen && (
          <div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="cursor-pointer hover:underline font-oswald text-xl"
            >
              {isOpen ? (
                <AiOutlineCaretUp className="w-16 active:text-black" />
              ) : (
                <AiOutlineCaretDown className="w-16 active:text-black" />
              )}
            </button>
            {isOpen && (
              <div className="bg-slate-900 absolute top-20 left-0 right-0 flex flex-col items-start rounded-lg p-2 border border-white">
                <div
                  onClick={() => handleMenuItemClick("#about")}
                  className="flex w-full justify-between font-raleway hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                >
                  About Me
                </div>
                <div
                  onClick={() => handleMenuItemClick("#projects")}
                  className="flex w-full justify-between font-raleway hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                >
                  Projects
                </div>
                <div
                  onClick={() => handleMenuItemClick("#curriculum")}
                  className="flex w-full justify-between font-raleway hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                >
                  Curriculum
                </div>
                <div
                  onClick={() => handleMenuItemClick("#contact")}
                  className="flex w-full justify-between font-raleway hover:bg-gray-700 cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4"
                >
                  Contact Me
                </div>
              </div>
            )}
          </div>
        )}

        {/* For larger screens, show a horizontal menu */}
        {!isSmallScreen && (
          <ul className="hidden sm:flex ml-8">
            <li className="mr-8">
              <div
                onClick={() => handleMenuItemClick("#about")}
                className="cursor-pointer hover:underline font-oswald text-xl"
              >
                About Me
              </div>
            </li>
            <li className="mr-4">
              <div
                onClick={() => handleMenuItemClick("#projects")}
                className="cursor-pointer hover:underline font-oswald text-xl"
              >
                Projects
              </div>
            </li>
            <li className="mr-4">
              <div
                onClick={() => handleMenuItemClick("#curriculum")}
                className="cursor-pointer hover:underline font-oswald text-xl"
              >
                Curriculum
              </div>
            </li>
            <li className="mr-4">
              <div
                onClick={() => handleMenuItemClick("#contact")}
                className="cursor-pointer hover:underline font-oswald text-xl"
              >
                Contact Me
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Menu;
