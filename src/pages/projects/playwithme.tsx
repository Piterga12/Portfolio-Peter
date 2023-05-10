import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import SliderImages from "../../components/sliderimages";
import Meta from "../../components/meta";
import { textList2 } from "../../components/texts";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const images = [
  {
    src: "/images/PlayWithMe.png",
    alt: "Play with Me",
    width: 640,
    height: 360,
  },
  {
    src: "/images/PlayWithMe2.jpg",
    alt: "Play with Me 2",
    width: 640,
    height: 360,
  },
  {
    src: "/images/PlayWithMe3.jpg",
    alt: "Play with Me 3",
    width: 640,
    height: 360,
  },
  {
    src: "/images/PlayWithMe4.jpg",
    alt: "Play with Me 4",
    width: 640,
    height: 360,
  },
  {
    src: "/images/PlayWithMe5.jpg",
    alt: "Play with Me 5",
    width: 640,
    height: 360,
  },
  {
    src: "/images/PlayWithMe6.jpg",
    alt: "Play with Me 6",
    width: 640,
    height: 360,
  },
];

export default function Home() {
  return (
    <>
      <Meta title="PlayWithMe" description="Play with me." />
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
          <p className="font-zyzol text-6xl m-6">Play With Me</p>
          <video autoPlay muted controls>
            <source src="/videos/PlayWithMe-Trailer.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <TextSquare imageUrl="/images/PlayWithMe.png">
            {textList2[0]}
            {textList2[1]}
            {textList2[2]}
          </TextSquare>
        </div>
        <div>
          <TextSquare>
            {textList2[3]}
            {textList2[4]}
            {textList2[5]}
          </TextSquare>
          <SliderImages images={images} />
        </div>
        <div>
          <a href="https://store.steampowered.com/app/2051650/Play_With_Me/">
            <Image
              src="/images/SteamButton.png"
              alt="Steam Button"
              width={640}
              height={360}
            ></Image>
          </a>
        </div>
      </main>
      <LowMenu />
    </>
  );
}
