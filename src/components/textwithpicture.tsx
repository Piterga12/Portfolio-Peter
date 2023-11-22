import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Package {
  pictureSrc: string;
  alt: string;
  text: string;
  text2: string;
  link: string;
}

interface TextWithPictureProps {
  packages: Package[];
}

const TextWithPicture: React.FC<TextWithPictureProps> = ({ packages }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col py-8 bg-slate-900 items-center">
      <h2 className="font-oswald text-gray-300 underline text-4xl z-10 mt-8 mb-8">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {packages.map((packageItem, index) => (
          <div
            key={index}
            className="mb-8 mx-4 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={packageItem.link} passHref>
              <div>
                <div className="relative">
                  <Image
                    src={packageItem.pictureSrc}
                    alt={packageItem.alt}
                    width={400}
                    height={300}
                  />
                  {hoveredIndex === index && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                      <p className="text-white text-lg font-raleway">
                        View Project
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
            <p className="text-2xl text-gray-300 font-oswald">
              {packageItem.text}
            </p>
            <p className="text-lg font-raleway text-gray-300">
              {packageItem.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextWithPicture;
