import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import SliderImages from "../../components/sliderimages";
import Meta from "../../components/meta";
import { textList3 } from "../../components/texts";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
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
          <a href="https://github.com/Piterga12/CamToObj">
            <Image
              className="mr-16"
              src="/images/GitHubButton.png"
              alt="GitHub Button"
              width={640}
              height={360}
            ></Image>
          </a>
          <a href="https://piterga12.github.io/CamToObj/">
            <Image
              src="/images/WebButton.png"
              alt="Web Button"
              width={200}
              height={200}
            ></Image>
          </a>
        </div>
      </main>
      <LowMenu />
    </>
  );
}
