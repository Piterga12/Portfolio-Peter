import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const LowMenu = () => {
  const handleGithubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open("https://github.com/Piterga12", "_blank");
  };

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
    <div className="bg-slate-900 bg-opacity-80 w-full py-8 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center">
      <div className="sm:flex items-center mx-8">
        <h3 className="font-oswald text-gray-400 text-xl text-center sm:text-left">
          Copyright © 2023 by Pedro González-Anta | All images, logos, and names
          are used with permission
        </h3>
      </div>
      <nav className="flex justify-center items-center mt-4 sm:mt-0">
        <button
          className="mx-2"
          onClick={handleGithubClick}
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
        </button>
        <button
          className="mx-2"
          onClick={handleTwitterClick}
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
        </button>
        <button
          className="mx-2"
          onClick={handleInstagramClick}
          aria-label="Instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-white"
          />
        </button>
        <button
          className="mx-2"
          onClick={handleLinkedInClick}
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
        </button>
      </nav>
    </div>
  );
};

export default LowMenu;
