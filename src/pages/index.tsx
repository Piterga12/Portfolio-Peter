import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";
import LowMenu from "../components/lowmenu";
import TextSquare from "../components/textsquare";
import SliderImages from "../components/sliderimages";
import Meta from "../components/meta";
import Assistant from "../components/assistant";
import { textList } from "../components/texts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = [
    {
      src: "/images/PlayWithMe.png",
      alt: "Play with Me",
      width: 640,
      height: 360,
      link: "/projects/playwithme",
    },
    {
      src: "/images/CamToObj.png",
      alt: "Camera to Obj",
      width: 640,
      height: 360,
      link: "/projects/camtoobj",
    },
    {
      src: "/images/UnityTest.png",
      alt: "2D Unity Game Test",
      width: 640,
      height: 360,
      link: "/projects/unitytest",
    },
    {
      src: "/images/image4.jpg",
      alt: "Image 4",
      width: 640,
      height: 360,
      link: "/projects/second",
    },
  ];

  return (
    <>
      <Meta title="Portfolio" description="Portfolio Peter." />
      <Menu />
      <main className="min-h-screen items-center justify-between bg-transparent">
        <video
          className="fixed z-[-1] w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/backgroundLight.mp4" type="video/mp4" />
        </video>
        <div>
          <p className="font-zyzol invisible text-4xl">About Me</p>
        </div>
        <div className="margin-top-16">
          <TextSquare imageUrl="/images/PeterG-A.jpg">
            {textList[0]}
            {textList[1]}
            {textList[2]}
            {textList[3]}
          </TextSquare>
        </div>
        <SliderImages images={images} />
        <div className="margin-top-16">
          <TextSquare>
            {textList[4]}
            {textList[5]}
            {textList[6]}
            {textList[7]}
            {textList[8]}
            {textList[9]}
          </TextSquare>
        </div>
        <Assistant />
      </main>
      <LowMenu />
    </>
  );
}
