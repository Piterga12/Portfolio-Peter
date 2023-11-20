import React from "react";
import Image from "next/image";

interface Package {
  pictureSrc: string;
  alt: string;
  text: string;
  text2: string;
}

interface TextWithPictureProps {
  packages: Package[];
}

const TextWithPicture: React.FC<TextWithPictureProps> = ({ packages }) => {
  return (
    <div className="flex flex-col py-8 bg-slate-900 items-center">
      <a className="font-oswald text-gray-300 underline text-4xl z-10 mb-8">
        Projects
      </a>
      {packages.map((packageItem, index) => (
        <div key={index} className="mb-8">
          <Image
            src={packageItem.pictureSrc}
            alt={packageItem.alt}
            width={400} // Set the width you desire
            height={300} // Set the height you desire
          />
          <p className="text-lg text-gray-300 font-oswald">
            {packageItem.text}
          </p>
          <p className="text-lg font-raleway text-gray-300">
            {packageItem.text2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TextWithPicture;
