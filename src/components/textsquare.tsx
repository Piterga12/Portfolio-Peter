import Image from "next/image";
import React from "react";

interface TextSquareProps {
  text?: string;
  children: React.ReactNode;
  size?: string;
  color?: string;
  imageUrl?: string;
  bgColor?: string; // Added bgColor prop for background color
}

const TextSquare: React.FC<TextSquareProps> = ({
  text,
  children,
  size = "md",
  color = "white",
  imageUrl,
  bgColor = "white", // Default background color is white
}) => {
  const [imageWidth, setImageWidth] = React.useState<number>(0);
  const [imageHeight, setImageHeight] = React.useState<number>(0);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setImageWidth(event.currentTarget.naturalWidth);
    setImageHeight(event.currentTarget.naturalHeight);
  };

  const containerClasses = imageUrl
    ? "flex flex-col md:flex-row items-center "
    : "flex flex-col md:flex-row items-center  md:justify-center";

  return (
    <div className={containerClasses}>
      <div
        className={`bg-${bgColor} p-16 text-${size} ${
          imageUrl ? "md:w-1/2 md:ml-32" : ""
        }`}
      >
        {text ? text : children}
      </div>
      {imageUrl && (
        <div
          className={`bg-${bgColor} mt-4 md:mt-0 md:ml-16 md:mr-4 flex justify-center`}
          style={{ width: imageWidth, height: imageHeight }}
        >
          <Image
            src={imageUrl}
            alt="Image"
            width={360}
            height={457}
            onLoad={handleImageLoad}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </div>
  );
};

export default TextSquare;
