import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Bars3Icon } from "./Bars3Icon";
import { NextRouter } from "next/router";
import { NavButton } from "./Header";

const MobileDropDownMenu = ({ router }: { router: NextRouter }) => (
  <div className="">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options">
          <Bars3Icon className="sticky top-0 z-50 w-8 h-8" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal className="bg-white border-2">
        <DropdownMenu.Content
          className="DropdownMenuContent bg-white border-2 text-black p-2"
          sideOffset={10}
        >
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavButton text="Home" url="#" router={router} />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavButton text="About" url="#about" router={router} />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavButton text="Works" url="#works" router={router} />
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavButton text="Contact" url="#contact" router={router} />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
);

export default MobileDropDownMenu;
