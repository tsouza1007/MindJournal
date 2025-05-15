"use client";

import React from "react";
import "@/app/globals.css";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar"; // Make sure this path is correct
import { usePathname } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import JournalTypes from "@/components/ui/JournalTypes";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Container>
          <Navbar />
          {pathname === "/" && (
            <> {/* Render Hero and JournalTypes only on the landing page */}
              <Hero />
              <JournalTypes />
            </>
          )}
          {children}
        </Container>
      </body>
    </html>
  );
}
