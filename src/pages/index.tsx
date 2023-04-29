import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { AboutContent } from "../components/AboutContent";
import { ContactContent } from "../components/ContactContent";
import { HomeContent } from "../components/HomeContent";
import { WorksContent } from "../components/WorksContent";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeContent />
      <AboutContent />
      <WorksContent />
      <ContactContent />
    </Layout>
  );
};

export default Home;
