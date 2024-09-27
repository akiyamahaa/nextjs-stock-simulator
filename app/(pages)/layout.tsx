import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <NavBar isDarkMode={true} />
      <Hero />
      {children}
    </div>
  );
}
