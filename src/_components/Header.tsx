"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavLinkProps } from "@/interfaces/header";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pathMatchRoute = (route: string) => {
    return route === pathname;
  };

  const NavbarMenu = ({ route, label }: NavLinkProps) => {
    console.log("Route:", route);
    console.log("Label:", label);
    console.log("Pathname:", pathname);

    const activeClass = pathMatchRoute(route)
      ? "text-black border-b-red-500"
      : "text-gray-400";

    const handleClick = () => {
      router.push(route);
    };

    return (
      <>
        <li
          className={`cursor-pointer py-3 text-sm font-semibold ${activeClass} border-b-[3px] border-b-transparent`}
          onClick={handleClick}
        >
          {label}
        </li>
      </>
    );
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="Brand Logo"
            className="h-5 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <NavbarMenu route="/" label="Home" />
            <NavbarMenu route="/offers" label="Offers" />
            <NavbarMenu route="/sign-in" label="Sign In" />
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
