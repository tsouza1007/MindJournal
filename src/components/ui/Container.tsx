import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-12 min-h-screen w-full bg-black text-white px-[50px] relative z-10"> {/* Added relative positioning and z-index */}
      <div className="col-span-12"> {/* Ensure children occupy all 12 grid columns */}
        {children}
      </div>
    </div>
  );
};

export default Container;