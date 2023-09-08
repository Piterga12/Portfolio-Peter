import { Inter } from "next/font/google";
import Menu from "../components/menu";
import LowMenu from "../components/lowmenu";
import TextSquare from "../components/textsquare";
import SliderImages from "../components/sliderimages";
import SliderImages2 from "../components/sliderimages2";
import Meta from "../components/meta";
import Assistant from "../components/assistant";
import { textList } from "../components/texts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const videos = [
    {
      src: "/videos/PlayWithMeIntro.mp4",
      type: "video/mp4",
      alt: "Play with Me",
      link: "/projects/playwithme",
    },
    {
      src: "/videos/StarFallRebellionIntro.mp4",
      type: "video/mp4",
      alt: "StarFallRebellion",
      link: "https://starfall-rebellion.vercel.app/",
    },
    {
      src: "/videos/MusicHeadIntro.mp4",
      type: "video/mp4",
      alt: "MusicHead",
      link: "/projects/musichead",
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
          <p className="font-zyzol invisible text-4xl">Space</p>
        </div>
        <SliderImages2 videos={videos} />
        <div>
          <p className="font-zyzol invisible text-4xl">Space</p>
        </div>
        <div className="margin-top-16">
          <TextSquare>
            {textList[0]}
            {textList[1]}
            {textList[2]}
            {textList[3]}
          </TextSquare>
        </div>

        <div className="margin-top-16"></div>
        <Assistant />
      </main>
      <LowMenu />
    </>
  );
}
