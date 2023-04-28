import React from "react";

interface TextSquareProps {
  text?: string;
  children: React.ReactNode;
  size?: string;
  color?: string;
}

const TextSquare: React.FC<TextSquareProps> = ({
  text,
  children,
  size = "md",
  color = "gray",
}) => {
  return (
    <div
      className={`bg-${color}-700 bg-opacity-80 border-2 border-black rounded-md p-16 text-${size} text-center mx-16`}
    >
      {text ? text : children}
    </div>
  );
};

export default TextSquare;
