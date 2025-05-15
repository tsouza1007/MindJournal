"use client";

  

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

  

const Navbar1 = () => {

return (

// Full-width navbar with glassmorphism styles and negative margin bottom

//<nav className="col-span-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-6 py-2 mt-4 shadow-lg">
<nav className="col-span-12  rounded-xl px-6 py-2 mt-4 shadow-lg">

<div className="flex items-center justify-between w-full">

{/* Left: Logo */}

<div className="text-lg font-bold tracking-widest text-white">

JournalMind

</div>

  

{/* Right: Buttons or Hamburger */}

<div className="flex items-center gap-4">

{/* Desktop Buttons */}

<div className="hidden md:flex gap-4">

<Button variant="secondary">Login</Button>

<Button variant="outline">Signup</Button>

</div>

  

{/* Mobile Hamburger Menu */}

<div className="md:hidden">

<Sheet>

<SheetTrigger asChild>

<Menu className="text-white cursor-pointer" />

</SheetTrigger>

<SheetContent className="bg-black text-white">

<div className="flex flex-col gap-2 mt-4">

<Button variant="secondary">Login</Button>

<Button variant="outline">Signup</Button>

</div>

</SheetContent>

</Sheet>

</div>

</div>

</div>

</nav>

);

};

  

export default Navbar1;