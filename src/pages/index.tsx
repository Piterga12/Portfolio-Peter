import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Peter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="2jnM1AoXQEkKAfi-2hjdsjt14rkuRzDrkBMPwGtSPu8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Portfolio de Peter González-Anta Torrents-Faura
      </main>
    </>
  );
}
