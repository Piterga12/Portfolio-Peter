import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import SliderImages from "../../components/sliderimages";
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
          <video autoPlay muted controls>
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
              {`Play With Me is a charming puzzle game featuring a lovable 
              pirate toy as the protagonist. In this indie game, you play 
              as the pirate toy who wants nothing more than to be played 
              with by your human owner. Unfortunately, your owner is too busy 
              with distractions like TV, smartphones, and tablets. It's up to you 
              to solve a series of whimsical puzzles and riddles to destroy these 
              distractions and get your owner to play with you.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`With its colorful and cartoon-like graphics, Play With Me offers 
              a playful and light-hearted atmosphere that's perfect for gamers of 
              all ages. As you progress through the game, you'll encounter a variety 
              of challenges that will test your problem-solving skills and creativity. 
              From navigating through obstacle courses to manipulating objects in the 
              environment, you'll need to think outside the box to succeed.`}
            </p>
            <p className="font-zyzolText my-4 z-10 text-xl">
              {`Whether you're a fan of puzzle games, pirates, or just looking for a 
              fun and engaging way to pass the time, Play With Me is the perfect choice. 
              So set sail on an adventure like no other and help this pirate toy get 
              the attention it deserves!`}
            </p>
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
