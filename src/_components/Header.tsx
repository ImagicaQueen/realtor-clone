"use client";
import React, { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NavLinkProps } from "@/interfaces/header";

const Header = () => {
  const router = useRouter();
  const path = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/offers",
      label: "Offers",
    },
    {
      route: "/sign-in",
      label: "Sign In",
    },
  ];
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
        <nav>
          <ul className="flex space-x-10">
            {path.map((ele, index) => (
              <NavbarMenu key={index} route={ele.route} label={ele.label} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

const NavbarMenu: React.FC<NavLinkProps> = ({ route, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    router.push(route);
  }, [router, route]);

  const pathMatchRoute = (route: string) => {
    return route === pathname
      ? "text-black border-b-red-500 border-b-[3px]"
      : "";
  };

  const isActive = pathMatchRoute(route);

  return (
    <li
      className={`cursor-pointer py-3 text-sm font-semibold ${isActive}`}
      onClick={handleClick}
    >
      {label}
    </li>
  );
};
