"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-4xl text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            Mirante <span className="text-accent">.</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`capitalize text-xl hover:text-accent transition-all ${
                  usePathname() === link.path && "text-accent border-b-2 border-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
