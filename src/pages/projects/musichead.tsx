import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import Assistant from "../../components/assistant";
import Meta from "../../components/meta";
import { textList5 } from "../../components/texts";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta title="MusicHead" description="Music head." />
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
          <p className="font-zyzol text-6xl m-6">Music Head</p>
          <video autoPlay muted controls>
            <source src="/videos/MusicHeadIntro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className=" w-full items-center justify-between">
          <TextSquare bgColor="slate-900">
            {textList5[0]}
            {textList5[1]}
            {textList5[2]}
          </TextSquare>
        </div>
        <div className="bg-white w-full">
          <TextSquare>
            {textList5[3]}
            {textList5[4]}
          </TextSquare>
        </div>
        <div className="py-4 bg-slate-900 w-full flex items-center justify-center">
          <a href="https://github.com/Piterga12/MusicHead">
            <Image
              src="/images/GitHubButton.png"
              alt="GitHub Button"
              width={640}
              height={360}
            />
          </a>
        </div>
        <Assistant />
      </main>
      <LowMenu />
    </>
  );
}
