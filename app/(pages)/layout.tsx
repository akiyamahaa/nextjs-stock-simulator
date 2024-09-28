import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50">
      <NavBar />
      <Hero />
      <div className="px-8 py-24 xl:px-40">{children}</div>
      <Footer />
    </div>
  );
}
