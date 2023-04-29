import Image from "next/image";
import Link from "next/link";
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
    companyName: "Electral Commission NZ",
    companyLogo: "/electoral-commission.jpg",
  },
  {
    jobName: "Quality Technician",
    companyName: "GoodTech",
    companyLogo: "/goodtech-logo.png",
  },
];

export const AboutContent = () => {
  const [open, setOpen] = useState(false);
  // todo: enum for company
  const [company, setCompany] = useState<string>();
  console.log(company);
  const handleJobModal = (company: string) => {
    setOpen(true);
    setCompany(company);
  };
  return (
    <div className="text-white text-center w-full border-2 bg-[#191919] rounded-3xl relative h-[700px] flex flex-col justify-evenly">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-6xl">Ray Hackshaw</p>
        <p className="text-3xl">Based in Auckland, New Zealand</p>
        <p className="">
          Hi. I'm a web developer currently working for{" "}
          <Link target="_blank" href="www.cubdigital.co.nz">
            <span className="underline cursor-pointer">Cub Digital</span>
          </Link>
          , a software company based in New Zealand. We work on a variety of
          different things, mainly websites and web applications.{" "}
        </p>

        <p>
          Like a lot of people, I grew up with technology all around me. Video
          games and the internet molded me into who I am today, driving my
          interest in computer science from a young age.
        </p>
        <p>
          Though I am currently a web developer, I have worked previously as a:
        </p>
        {previousJobs.map(({ jobName, companyName, companyLogo }) => (
          <div key={jobName} className="grid grid-cols-2 items-center">
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
            <button onClick={() => handleJobModal(companyName)}>
              {jobName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
