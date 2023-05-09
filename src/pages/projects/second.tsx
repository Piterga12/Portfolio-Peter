import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Menu from "../../components/menu";
import { useState } from "react";
import Meta from "../../components/meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta title="PageDev" description="Page in development" />
      <Menu />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Page in development sorry for the inconvenience
          <Link href={"/"}> Go Back</Link>
        </div>
      </main>
    </>
  );
}
