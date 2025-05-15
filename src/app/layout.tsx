// app/layout.tsx
import React from "react";
import "@/app/globals.css";
import JournalTypes from "@/components/ui/JournalTypes"
import Container from "@/components/ui/Container";
import Navbar from "@/components/ui/Navbar"; // Make sure this path is correct
import Hero from '@/components/Hero/Hero'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Container>
          <Navbar />
          <div className="flex flex-col"> {/* Added a flex-col container to stack Hero and JournalTypes vertically */}
            <Hero />
            <JournalTypes />
          </div>
          {children}
        </Container>
      </body>
    </html>
  );
}
