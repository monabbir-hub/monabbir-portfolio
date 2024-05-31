"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 ">
      {links.map((links, index) => {
        return (
          <Link
            href={links.path}
            key={index}
            className={`${
              links.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {links.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
