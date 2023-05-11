import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import TextSquare from "../../components/textsquare";
import LowMenu from "../../components/lowmenu";
import Meta from "../../components/meta";
import { textList4 } from "../../components/texts";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Meta title="UnityTest" description="Unity 2D test." />
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
            {textList4[0]}
            {textList4[1]}
            {textList4[2]}
            {textList4[3]}
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
