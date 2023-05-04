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
          <p className="font-zyzol text-6xl">2D Unity Game Test</p>
        </div>
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <TextSquare imageUrl="/images/UnityTest.png">
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`The project is a 2D Unity game created for learning purposes. 
              The game includes basic mechanics such as player movement, as well 
              as enemies that follow the player using simple AI.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`The project contains the source code and assets for the game, 
              which can be used as a reference for learning how to create 2D 
              games using Unity. The game features event triggers that allow 
              certain actions to be performed when the player enters a certain 
              area, such as spawning enemies or triggering animations.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`The enemy AI is implemented using simple algorithms that make 
              the enemies follow the player when they are within a certain distance.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Overall, this project serves as a basic introduction to creating 2D 
              games using Unity, and provides a starting point for further learning 
              and experimentation with game development techniques.`}
            </p>
          </TextSquare>
        </div>
        <div className="flex justify-between">
          <a href="https://github.com/Piterga12/testgitunity">
            <Image
              className="mr-16"
              src="/images/GitHubButton.png"
              alt="GitHub Button"
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
