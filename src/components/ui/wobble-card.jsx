"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({ children, containerClassName, className }) => {
  return (
    <section
      className={cn(
        "mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden transition-transform duration-200 ease-out hover:scale-[1.015] hover:-translate-y-1",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div className={cn("h-full px-4 py-10 sm:px-10 transition-transform duration-200 ease-out", className)}>
          <Noise />
          {children}
        </div>
      </div>
    </section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/assets/images/image.png)",
        backgroundSize: "30%",
        backgroundRepeat: "repeat",
      }}
    ></div>
  );
};
