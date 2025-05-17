"use client";

import React, { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en" className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}> {/* Apply theme classes */}
      <body>
        <Container>
          {pathname !== "/auth/login" && pathname !== "/auth/signup" && <Navbar toggleTheme={toggleTheme} theme={theme} />} {/* Pass theme props to Navbar */}
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
