import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const LowMenu = () => {
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
    <div className="bg-gray-700 w-full py-8">
      <nav className="flex justify-end items-center mx-8">
        <button className="mx-2 mr-4" onClick={handleTwitterClick}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </button>
        <button className="mx-2 mr-4" onClick={handleInstagramClick}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </button>
        <button className="mx-2 mr-4" onClick={handleLinkedInClick}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </button>
      </nav>
    </div>
  );
};

export default LowMenu;
