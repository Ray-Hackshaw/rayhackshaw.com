import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Bars3Icon } from "./Bars3Icon";
import * as Dialog from "@radix-ui/react-dialog";
import MobileDropdownMenu from "./MobileDropdownMenu";

export const NavButton = ({
  text,
  url,
  router,
}: {
  text: string;
  url: string;
  router: NextRouter;
}) => {
  return (
    <>
      {text === "Contact" && (
        <Link href="mailto:ray@rayhackshaw.com">
          <a className="uppercase">Contact</a>
        </Link>
      )}
      {text !== "Contact" && (
        <button
          className="cursor-pointer"
          onClick={() => router.push(`${url}`)}
        >
          <p className="uppercase">{text}</p>
        </button>
      )}
    </>
  );
};

export const Header = () => {
  const router = useRouter();
  return (
    <>
      {/* Mobile header */}
      <div className="sticky text-black top-0 z-50 w-full flex md:hidden items-center bg-white justify-between p-4">
        <Image alt="logo" src={"/favicon.ico"} width={20} height={20} />
        <div>Ray Hackshaw</div>

        <MobileDropdownMenu router={router} />

        {/* <div onClick={(e) => setOpen(e)} className="text-black">
          <Dialog.Root>
            <Dialog.Trigger asChild>
             
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">
                  Edit profile
                </Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  Make changes to your profile here. Click save when you're
                  done.
                </Dialog.Description>
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="Input"
                    id="name"
                    defaultValue="Pedro Duarte"
                  />
                </fieldset>
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="Input"
                    id="username"
                    defaultValue="@peduarte"
                  />
                </fieldset>
                <div
                  style={{
                    display: "flex",
                    marginTop: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <Dialog.Close asChild>
                    <button className="Button green">Save changes</button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    x
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div> */}
      </div>

      {/* Desktop header */}
      <div className="sticky hidden top-0 z-50 py-8 text-black md:flex bg-white items-center w-full gap-20 justify-center">
        <div className="flex gap-8">
          <NavButton text="Home" url="#" router={router} />
          <NavButton text="About" url="#about" router={router} />
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => router.push("#")}
        >
          <Image alt="logo" src={"/favicon.ico"} width={20} height={20} />
        </div>
        <div className="flex uppercase gap-10">
          <NavButton text="Works" url="#works" router={router} />
          <NavButton
            text="Contact"
            url="mailto:ray@rayhackshaw.com"
            router={router}
          />
        </div>
      </div>
    </>
  );
};
