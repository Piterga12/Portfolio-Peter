import { useState } from "react";

const Assistant = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "ArrowLeft":
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.max(prevPosition.x - 10, 0),
        }));
        break;
      case "ArrowRight":
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.min(prevPosition.x + 10, window.innerWidth - 50),
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        position: "fixed",
        bottom: 0,
        left: `${position.x}px`,
        width: "50px",
        height: "50px",
        backgroundColor: "red",
      }}
    />
  );
};

export default Assistant;
