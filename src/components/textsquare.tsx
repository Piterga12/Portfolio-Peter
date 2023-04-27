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
      className={`bg-${color}-300 rounded-md p-4 text-${size} text-center`}
      style={{ backgroundColor: "rgb(55 65 81)", margin: "0 100px" }}
    >
      {text ? text : children}
    </div>
  );
};

export default TextSquare;
