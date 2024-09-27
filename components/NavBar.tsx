"use client";

import Image from "next/image";
import React from "react";
import LogoLight from "@/public/images/logo-light.png";
import LogoDark from "@/public/images/logo-dark.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import MenuBar from "./MenuBar";

type Props = {
  isDarkMode: boolean;
};

const NavBar = ({ isDarkMode }: Props) => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/news`,
      label: "News",
      active: pathname === `/news`,
    },
    {
      href: `/about`,
      label: "About",
      active: pathname === `/about`,
    },
  ];
  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center px-8 py-3 fixed top-0 left-0 right-0 z-10",
        !isDarkMode && "border-b border-b-stroke"
      )}
    >
      {/* Menu Btn */}
      <div className="flex items-center md:hidden">
        <MenuBar />
      </div>
      <div className="flex flex-row items-center gap-10 self-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={isDarkMode ? LogoDark : LogoLight}
            alt="logo"
            className="h-10 w-36"
          />
        </Link>
        {/* Main Nav */}
        <nav className="hidden flex-row gap-10 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-base font-semibold transition-colors hover:text-primary",
                route.active
                  ? "text-primary"
                  : isDarkMode
                    ? "text-white"
                    : "text-dark-2"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Auth button */}
      <div className="hidden md:block">
        {!isSignedIn && (
          <Link href="/sign-in">
            <Button className="px-6 text-base font-medium text-white">
              Sign in
            </Button>
          </Link>
        )}
      </div>
      {isSignedIn ? <UserButton /> : <div className="block md:hidden" />}
    </div>
  );
};

export default NavBar;
