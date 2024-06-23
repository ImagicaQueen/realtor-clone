"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/interfaces/header";
import Link from "next/link";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [pageState, setPageState] = useState<string>("Sign In");
  const [path, setPath] = useState<NavLinkProps[]>([
    { route: "/", label: "Home" },
    { route: "/offers", label: "Offers" },
    { route: "/sign-in", label: "Sign In" },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
        setPath((prev) =>
          prev.map((p) =>
            p.route === "/sign-in"
              ? { ...p, route: "/profile", label: "Profile" }
              : p
          )
        );
      } else {
        setPageState("Sign In");
        setPath((prev) =>
          prev.map((p) =>
            p.route === "/profile"
              ? { ...p, route: "/sign-in", label: "Sign In" }
              : p
          )
        );
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <Link href="/">
            <img
              src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
              alt="Brand Logo"
              className="h-5 cursor-pointer"
            />
          </Link>
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
  const pathname = usePathname();

  const pathMatchRoute = (route: string) => {
    return route === pathname
      ? "text-black border-b-red-500 border-b-[3px]"
      : "";
  };

  const isActive = pathMatchRoute(route);

  return (
    <li className={`cursor-pointer py-3 text-sm font-semibold ${isActive}`}>
      <Link href={route}>{label}</Link>
    </li>
  );
};
