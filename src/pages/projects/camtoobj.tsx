import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import SliderImages from "../../components/sliderimages";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
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
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <TextSquare imageUrl="/images/CamToObj.png">
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`The project, which was developed through the internship at ProduktiaTV,
               is a Unity-based project that appears to be a 3D game object viewer with 
               the capability of adding points that, when clicked, display a written explanation`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`The project contains the source code and assets for the software, 
              which can be used to create 3D game object visualizations with the additional 
              feature of explanatory points. The software is built using the Unity game engine 
              and utilizes various Unity components such as game objects, scripts, and UI elements.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Users can import 3D game objects into the software and create 
              explanatory points that can be placed within the 3D scene. When 
              clicked, these points display a written explanation, providing 
              additional context for the object being viewed.`}
            </p>
          </TextSquare>
        </div>
        <div className="flex justify-between">
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
