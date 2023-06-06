import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface IPreviousJob {
  jobName: string;
  companyName: string;
  companyLogo: string;
}

const previousJobs: IPreviousJob[] = [
  {
    jobName: "Software QA Engineer",
    companyName: "EROAD",
    companyLogo: "/eroad-logo.png",
  },
  {
    jobName: "Data Entry Operator",
    companyName: "Electoral Commission NZ",
    companyLogo: "/electoral-commission.jpg",
  },
  {
    jobName: "Quality Technician",
    companyName: "GoodTech",
    companyLogo: "/goodtech-logo.png",
  },
];

export const AboutContent = () => {
  const router = useRouter();

  const handleReNav = (company: string) => {
    switch (company) {
      case "EROAD":
        router.push("https://www.eroad.co.nz");
        break;
      case "Electoral Commission NZ":
        router.push("https://elections.nz");
        break;
      case "GoodTech":
        router.push("https://www.goodtech.co.nz/");
    }
  };
  return (
    <div className="text-white text-center w-full border-2 bg-[#191919] rounded-3xl relative h-[700px] flex flex-col justify-evenly">
      <div className="max-w-2xl mx-auto space-y-4 min-h-1/2 px-2">
        <p className="text-5xl md:text-6xl">Ray Hackshaw</p>
        <p className="text-3xl">Based in Auckland, New Zealand</p>
        <p className="">
          Hi. I'm a web developer currently working for{" "}
          <Link target="_blank" href="https://www.cubdigital.co.nz">
            <span className="underline cursor-pointer">Cub Digital</span>
          </Link>
          , a software company based in New Zealand. We work on a variety of
          different things, mainly websites and web applications.{" "}
        </p>

        {/* <p>
          Though I am currently a web developer, some of my previous positions
          include:
        </p>
        {previousJobs.map(({ jobName, companyName, companyLogo }) => (
          <div
            key={jobName}
            onClick={() => handleReNav(companyName)}
            className="grid grid-cols-2 items-center cursor-pointer border-2 rounded-lg shadow bg-white text-black transition-all duration-400 ease-in-out"
          >
            <p>{jobName}</p>

            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="relative w-10 h-10">
                <Image
                  src={companyLogo}
                  layout="fill"
                  style={{ objectFit: "contain" }}
                  alt={`${companyName} logo`}
                />
              </div>
              <p className="uppercase">{companyName}</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
