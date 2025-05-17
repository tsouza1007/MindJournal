"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  toggleTheme: (newTheme: string) => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <nav className="col-span-12 rounded-xl px-6 py-2 mt-4 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo */}
        <div className="text-lg font-bold tracking-widest text-white">
          JournalMind
        </div>

        {/* Right: Buttons or Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <Link href="/auth/login">
              <Button variant="secondary">Login</Button>
            </Link>
            <Button variant="outline">Signup</Button>
            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded bg-gray-700 text-white"
            >
              {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="text-white cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="bg-black text-white">
                <div className="flex flex-col gap-2 mt-8"> {/* Adjusted margin-top to move buttons below the cross mark */}
                  <Link href="/auth/login">
                    <Button variant="secondary" className="w-full text-sm py-2">Login</Button> {/* Made buttons smaller with text-sm and py-2 */}
                  </Link>
                  <Button variant="outline" className="w-full text-sm py-2">Signup</Button> {/* Made buttons smaller with text-sm and py-2 */}
                  {/* Theme Toggle */}
                  <button
                    onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded bg-gray-700 text-white"
                  >
                    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;