import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="text-white relative w-full flex items-center justify-center bg-[#191919] h-screen">
      <Link href="mailto:ray@rayhackshaw.com">
        <a className="absolute hover:text-xl duration-300">
          ray hackshaw! dot com!
        </a>
      </Link>
    </div>
  );
};

export default Home;
