"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoLight from "@/public/images/logo-light.png";
import LogoDark from "@/public/images/logo-dark.png";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import MenuBar from "./MenuBar";

const NavBar = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const isDarkMode = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(isDarkMode);

  // Effect to handle scroll event
  useEffect(() => {
    setIsScrolled(isDarkMode);
    const handleScroll = () => {
      setIsScrolled(window.scrollY < 400);
    };
    if (isDarkMode) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

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
    {
      href: `/market`,
      label: "Market",
      active: pathname === `/market`,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center px-8 py-3 fixed top-0 left-0 right-0 z-10",
        !isScrolled && "bg-white border-b border-b-stroke"
      )}
    >
      {/* Menu Btn */}
      <div className="flex items-center md:hidden">
        <MenuBar isDarkMode={isScrolled} />
      </div>
      <div className="flex flex-row items-center gap-10 self-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={isScrolled ? LogoDark : LogoLight}
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
                  : isScrolled
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
