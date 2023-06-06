import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { AboutContent } from "../components/AboutContent";
import { ContactContent } from "../components/ContactContent";
import { HomeContent } from "../components/HomeContent";
import { WorksContent } from "../components/WorksContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Ray Hackshaw</title>
      </Head>
      <Layout>
        <div className="#" />
        <HomeContent />
        <div id="about" className="-translate-y-24" />
        <AboutContent />
        <div id="works" />
        <WorksContent />
        <ContactContent />
      </Layout>
    </>
  );
};

export default Home;
