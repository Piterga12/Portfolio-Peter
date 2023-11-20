// components/ContactMe.js

import { Inter } from "next/font/google";
import Menu from "./menu";
import LowMenu from "./lowmenu";
import Meta from "./meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function ContactMe() {
  const handleTwitterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open("https://twitter.com/Peterga_12", "_blank");
  };

  const handleInstagramClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open("https://www.instagram.com/peterga.12/", "_blank");
  };

  const handleLinkedInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/pedro-gonz%C3%A1lez-anta-torrents-faura-a89270267/",
      "_blank"
    );
  };

  return (
    <>
      <div className="bg-slate-900 py-8 text-center shadow-xl">
        <div className="my-4 font-oswald text-gray-300 underline text-4xl z-10">
          Contact Me
        </div>
        <div className="text-gray-300 font-ralewaySemibold mb-4">
          Feel free to contact me on social media or via email:
        </div>
        <nav className="flex justify-center items-center">
          <button
            className="mx-4"
            onClick={handleTwitterClick}
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </button>
          <button
            className="mx-4"
            onClick={handleInstagramClick}
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </button>
          <button
            className="mx-4"
            onClick={handleLinkedInClick}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </button>
        </nav>
        <div className="text-gray-300 font-ralewaySemibold mt-4 mb-4">
          Email: <a href="mailto:pitergatf@gmail.com">pitergatf@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export const ContactMeFunction = () => {
  // You can add any logic or UI specific to calling ContactMe as a function
  return <ContactMe />;
};
