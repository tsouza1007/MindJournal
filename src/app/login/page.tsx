import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button className="w-full bg-primary text-white">Login</Button>
      </form>
      <div className="mt-6 flex justify-between w-full max-w-sm">
        <Link href="/signup">
          <Button variant="link" className="text-white underline">Sign Up</Button>
        </Link>
        <Link href="/">
          <Button variant="link" className="text-white underline">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
