import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import ToastProvider from "@/lib/toast-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
