// app/layout.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "@/components/theme-provider.jsx";

import "./globals.css";
import "./app.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Handle hash navigation
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="">
            <NavBar />
          </div>
          <div className="lg:hidden block">
            <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center !bg-none  p-2">
                  <div className="w-full xl:container mx-auto flex justify-between items-center">
                    <div className="w-full min-h-[82px] flex items-center rounded-full bg-[#191b24] pr-[20px] pl-[40px] shadow-lg">
                      <div className="flex justify-between w-full">
                        {/* Logo */}
                        <Link
                          href="/"
                          className="max-w-[90px] flex justify-center items-center"
                          rel="noopener noreferrer"
                        >
                          <Image loading="lazy" src="/assets/logo/logo.png" alt="Logo" width={90} height={90} />
                          {/* <img loading="lazy" src="/assets/logo/logo.png" alt="Logo" /> */}
                        </Link>
            
                        {/* Desktop / Mobile Nav */}
                        
            
                        {/* Contact Button */}
                        <div className="flex items-center ml-auto">
                          <Link
                            href="/contact-us"
                            className="relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"
                          >
                            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                              <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
                              <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                                <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                    height="100%"
                                    width="100%"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white">
                              Contact Us
                            </div>
                          </Link>
                        </div>
            
                        {/* Burger Menu */}
                        
                      </div>
                    </div>
                  </div>
                </div>
            <FloatingDock />
          </div>

          {/* Page content */}
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
