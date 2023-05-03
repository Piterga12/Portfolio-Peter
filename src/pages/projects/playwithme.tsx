import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
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
          <p className="font-zyzol text-6xl">Play With Me</p>
          <video controls autoPlay muted>
            <source src="/videos/PlayWithMe-Trailer.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <TextSquare imageUrl="/images/PlayWithMe.png">
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Creating "Play With Me" has been an incredible experience for me. 
              As an indie game developer, it was a challenging yet rewarding process 
              to bring this game to life. I had the opportunity to work with a talented 
              team of developers who were all passionate about the project.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`During the development process, I learned so much about game development, 
              from concept creation to finalizing the game. It was a steep learning curve, 
              but I was able to pick up skills in programming, game design, and user experience. 
              I even learned how to use new tools and software to create the game.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Overall, the experience of creating "Play With Me" was a highlight 
              of my career as an indie game developer. I look forward to taking the 
              lessons I've learned and applying them to future projects.`}
            </p>
          </TextSquare>
        </div>
        <div>
          <TextSquare>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Creating "Play With Me" has been an incredible experience for me. 
              As an indie game developer, it was a challenging yet rewarding process 
              to bring this game to life. I had the opportunity to work with a talented 
              team of developers who were all passionate about the project.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`During the development process, I learned so much about game development, 
              from concept creation to finalizing the game. It was a steep learning curve, 
              but I was able to pick up skills in programming, game design, and user experience. 
              I even learned how to use new tools and software to create the game.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Overall, the experience of creating "Play With Me" was a highlight 
              of my career as an indie game developer. I look forward to taking the 
              lessons I've learned and applying them to future projects.`}
            </p>
          </TextSquare>
        </div>
      </main>
      <LowMenu />
    </>
  );
}
