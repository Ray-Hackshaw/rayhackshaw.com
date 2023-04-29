import Link from "next/link";

export const HomeContent = () => {
  return (
    <div className="text-white text-center w-full border-2 bg-[#191919] rounded-3xl relative h-[700px] flex flex-col justify-evenly">
      <div className="max-w-2xl mx-auto h-1/2 space-y-4">
        <h1 className="text-6xl">Web Developer</h1>
        <p className="text-3xl">Based in Auckland, New Zealand</p>
        <p className="text-sm">
          Web developer who specializes in TypeScript, Next.js, and Tailwind
          CSS. Building quality web-applications and websites. Always committed
          to learning and working on new projects in my free time.
        </p>
      </div>

      <Link href="mailto:ray@rayhackshaw.com">
        <a className="hover:text-xl duration-300">Contact me!</a>
      </Link>
    </div>
  );
};
