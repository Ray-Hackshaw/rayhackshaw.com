import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

const NavButton = ({
  text,
  url,
  router,
}: {
  text: string;
  url: string;
  router: NextRouter;
}) => {
  return (
    <button onClick={() => router.push(`${url}`)}>
      <p className="uppercase">{text}</p>
    </button>
  );
};

export const Header = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 py-8 text-black flex bg-white items-center w-full gap-20 justify-center">
      <div className="flex gap-8">
        <NavButton text="Home" url="#" router={router} />
        <NavButton text="About" url="#about" router={router} />
      </div>

      <div className="logo w-5 h-5 border-2 bg-black" />

      <div className="flex uppercase gap-10">
        <NavButton text="Works" url="#works" router={router} />
        <NavButton text="Contact" url="#contact" router={router} />
      </div>
    </div>
  );
};
