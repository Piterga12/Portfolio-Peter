import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import SliderImages from "../../components/sliderimages";
import Meta from "../../components/meta";
import { textList3 } from "../../components/texts";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const handleGithubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  window.open("https://github.com/Piterga12/CamToObj", "_blank");
};

const handleWebClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  window.open("https://piterga12.github.io/CamToObj", "_blank");
};

export default function Home() {
  return (
    <>
      <Meta title="CamToObj" description="Camera to Object." />
      <Menu />
      <video
        className="fixed z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/backgroundLight.mp4" type="video/mp4" />
      </video>
      <main className="flex flex-col items-center justify-between">
        <div className="m-4">
          <p className="font-zyzol text-6xl">Camera to 3dObject</p>
        </div>
        <div className="bg-white z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <TextSquare imageUrl="/images/CamToObj.png">
            {textList3[0]}
            {textList3[1]}
            {textList3[2]}
          </TextSquare>
        </div>
        <div className="py-4 bg-slate-900 w-full flex items-center justify-center">
          <button
            className=" mx-2 mr-4"
            onClick={handleGithubClick}
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="6x" className="text-white" />
          </button>
          <button
            className=" mx-2 mr-4"
            onClick={handleWebClick}
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faChrome} size="6x" className="text-white" />
          </button>
        </div>
      </main>
      <LowMenu />
    </>
  );
}
