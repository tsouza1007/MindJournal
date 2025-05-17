"use client";

import React, { useState, useEffect, createContext } from "react";
import "@/app/globals.css";
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar"; // Make sure this path is correct
import { usePathname } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import JournalTypes from "@/components/ui/JournalTypes";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: (newTheme: string) => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
});

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

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Provide theme context */}
      <html lang="en" className={theme === "dark" ? "dark" : ""}> {/* Apply dark class dynamically */}
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
    </ThemeContext.Provider>
  );
}
