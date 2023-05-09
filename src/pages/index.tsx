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
            <p className="my-4 font-serif text-2xl z-10">
              {`Hi, I'm Pedro González-Anta Torrents-Faura!`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`I'm a junior video game developer with a strong
              background in programming languages like C++ and experience using
              Unity to create exciting games. I'm passionate about game
              development, and my LinkedIn profile showcases my academic
              background, experience, and skills in this field.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`Through my projects and internships, I have developed strong problem-solving
              and analytical skills that are essential in game programming. I also
              have experience working collaboratively in teams and meeting project
              deadlines, and I'm committed to delivering high-quality work.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`In addition to my technical skills, 
              I'm fluent in Spanish, Catalan, and English, which can
              be a valuable asset for companies with international operations or
              clients. Overall, I'm a motivated and skilled video
              game developer with a strong work ethic and a commitment to
              delivering high-quality work. I'm excited to continue learning
              and growing in my field and to create games that entertain and
              inspire players.`}
            </p>
          </TextSquare>
        </div>
        <SliderImages images={images} />
        <div className="margin-top-16">
          <TextSquare>
            <p className="my-4 font-serif text-xl z-10">
              {`I have gained extensive experience as a web programmer during 
              my tenure at Mon Petit Nicolás in Barcelona. My role involved 
              developing and maintaining the company's website using WordPress. 
              I was able to transfer my knowledge to the team, and they eventually 
              became proficient in managing the site without my assistance.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`Additionally, I have experience in sports coaching, having worked
               as the second coach for the U.E Cornellá's infantil E team. This 
               role gave me the opportunity to interact with young players and their 
               parents, honing my communication and interpersonal skills.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`I also briefly worked as an attendant at L'Illa Diagonal,
               where I gained experience in customer service and further developed my people skills.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`More recently, I completed an internship at Produktia TV,
               where I focused on virtual reality programming. I am currently 
               pursuing a Master's degree in Advanced Programming for AAA Video 
               Games at the UPC. My strong foundation in programming languages 
               such as C, C++, and C#, as well as my basic understanding of web 
               development technologies such as JavaScript, HTML, and CSS, enables 
               me to contribute to the development of immersive video games.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`My advanced people skills and strong computer skills are highly 
              valuable in the game development industry. The combination of my 
              practical experience and formal education in game development, as 
              well as my knowledge of programming languages and web development 
              technologies, makes me a strong candidate for various roles in the game development industry.`}
            </p>
            <p className="my-4 font-serif text-xl z-10">
              {`Overall, my diverse range of experience and skills make me a 
              well-rounded candidate for various job opportunities, especially 
              in the fields of web programming and game development.`}
            </p>
          </TextSquare>
        </div>
        <Assistant />
      </main>
      <LowMenu />
    </>
  );
}
