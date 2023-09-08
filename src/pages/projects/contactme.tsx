import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import LowMenu from "../../components/lowmenu";
import Meta from "../../components/meta";
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
      <Meta title="Contact Me" description="Curriculum Vitae." />
      <Menu />
      <video
        className="fixed z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/backgroundLight.mp4" type="video/mp4" />
      </video>
      <main className="flex flex-col items-center justify-center h-screen overflow-hidden">
        {/* Add the centered contact box */}
        <div className="bg-gray-700 py-8 text-center rounded-lg shadow-xl">
          <div className="text-white mb-4">
            ************************************************************************************
          </div>
          <div className="text-white mb-4">
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
          <div className="text-white mt-4">
            Email: <a href="mailto:pitergatf@gmail.com">pitergatf@gmail.com</a>
          </div>
          <div className="text-white mt-4">
            ************************************************************************************
          </div>
        </div>
      </main>
      <LowMenu />
    </>
  );
}
