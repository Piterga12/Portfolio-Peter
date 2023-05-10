import { useState, useEffect, useRef } from "react";

const Assistant = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [frame, setFrame] = useState(0);
  const [direction, setDirection] = useState("left");
  const [isMoving, setIsMoving] = useState(false);
  const assistantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowLeft":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.min(prevPosition.x + 15, window.innerWidth - 100),
          }));
          setDirection("left");
          setIsMoving(true);
          break;
        case "ArrowRight":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: Math.max(prevPosition.x - 15, 0),
          }));
          setDirection("right");
          setIsMoving(true);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowLeft":
        case "ArrowRight":
          setIsMoving(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrame((prevFrame) => (prevFrame + 1) % (isMoving ? 10 : 38));
    }, 50);

    return () => clearInterval(intervalId);
  }, [isMoving]);

  useEffect(() => {
    if (assistantRef.current) {
      assistantRef.current.style.right = `${position.x}px`;
    }
  }, [position]);

  const spriteSheet = isMoving
    ? "/images/spritesheet2.png"
    : "/images/spritesheet1.png";

  return (
    <div
      ref={assistantRef}
      tabIndex={0}
      style={{
        position: "fixed",
        bottom: 0,
        right: `${position.x}px`,
        width: isMoving ? "131.9px" : "156.5px",
        height: isMoving ? "157px" : "156.5px",
        backgroundImage: `url('${spriteSheet}')`,
        backgroundPosition: `-${frame * (isMoving ? 131.9 : 131.58)}px 0`,
        transform: `scaleX(${direction === "left" ? -1 : 1})`,
      }}
    />
  );
};

export default Assistant;
