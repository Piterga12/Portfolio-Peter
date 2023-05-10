import { useState, useEffect } from "react";

const Assistant = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [frame, setFrame] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "ArrowLeft":
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.min(prevPosition.x + 10, window.innerWidth - 100),
        }));
        setDirection("left");
        break;
      case "ArrowRight":
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: Math.max(prevPosition.x - 10, 0),
        }));
        setDirection("right");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % 38);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        position: "fixed",
        bottom: 0,
        right: `${position.x}px`,
        width: "156.5px",
        height: "156.5px",
        backgroundImage: "url('/images/spritesheet1.png')",
        backgroundPosition: `-${frame * 131.58}px 0`,
        transform: `scaleX(${direction === "left" ? -1 : 1})`,
      }}
    />
  );
};

export default Assistant;
