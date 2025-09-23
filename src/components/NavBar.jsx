"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";

// 🔗 ActiveLink wrapper
function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-white truncate text-sm lg:text-md transition-colors duration-400",
        isActive
          ? "!text-black font-bold bg-white px-1 rounded-full"
          : "hover:text-cyan-400"
      )}
    >
      {children}
    </Link>
  );
}

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center bg-black/60 backdrop-blur-md p-2">
      <div className="w-full xl:container mx-auto flex justify-between items-center">
        <div className="w-full min-h-[82px] flex items-center rounded-full bg-[#191b24] pr-[20px] pl-[40px] shadow-lg">
          <div className="grid grid-cols-7 w-full">
            {/* Logo */}
            <Link
              href="/"
              className="max-w-[90px] flex justify-center items-center"
              rel="noopener noreferrer"
            >
              <img loading="lazy" src="/assets/logo/logo.png" alt="Logo" />
            </Link>

            {/* Desktop / Mobile Nav */}
            <div
              className={clsx(
                "col-span-5 flex items-center justify-center",
                isNavOpen ? "flex-col" : "hidden md:flex"
              )}
            >
              <nav
                className={clsx(
                  "flex w-full md:w-auto",
                  isNavOpen ? "flex-col items-center" : "items-center"
                )}
              >
                <ul
                  className={clsx(
                    "flex gap-5 m-0 p-0 w-full md:w-auto",
                    isNavOpen ? "flex-col items-center" : "items-center"
                  )}
                >
                  {/* Dropdown Menu Example */}
                  <li>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger>
                          <h2 className="text-white truncate text-sm lg:text-md flex items-center gap-1 transition-colors duration-400 cursor-pointer">
                            Marketing Services{" "}
                            <span className="text-xs">
                              <ChevronDown size={20} />
                            </span>
                          </h2>
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem asChild>
                            <Link href="/service/seo-company-in-lucknow">
                              SEO Marketing
                            </Link>
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem asChild>
                            <Link href="/service/pay-per-click-services">
                              Google Ads Services
                            </Link>
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem asChild>
                            <Link href="/service/social-media-marketing">
                              Social Media Marketing
                            </Link>
                          </MenubarItem>
                          {/* <MenubarSeparator />
                          <MenubarItem asChild>
                            <Link href="/content-marketing">
                              Content Marketing
                            </Link>
                          </MenubarItem> */}
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </li>

                  {/* Regular Links */}
                  <li>
                    <ActiveLink href="/service/graphic-designing-services">
                      Graphic Design Services
                    </ActiveLink>
                  </li>
                  <li>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger>
                          <h2 className="text-white truncate text-sm lg:text-md flex items-center gap-1 transition-colors duration-400 cursor-pointer">
                            Development Services{" "}
                            <span className="text-xs">
                              <ChevronDown size={20} />
                            </span>
                          </h2>
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem asChild>
                            <Link href="/service/website-design-and-development">
                              Website Development
                            </Link>
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem asChild>
                            <Link href="/service/mobile-application-development">
                              App Development
                            </Link>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </li>
                  <li>
                    <ActiveLink href="/portfolio">Portfolio</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/about-us">About Us</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/career">Career</ActiveLink>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center ml-auto">
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
            <div
              className="md:hidden flex flex-col items-end gap-1 w-6 cursor-pointer"
              onClick={handleBurgerClick}
            >
              <div
                className={clsx(
                  "w-full h-0.5 bg-white rounded-2xl transition-all duration-400",
                  isNavOpen && "rotate-45 translate-y-2"
                )}
              />
              <div
                className={clsx(
                  "w-full h-0.5 bg-white rounded-2xl transition-all duration-400",
                  isNavOpen && "opacity-0"
                )}
              />
              <div
                className={clsx(
                  "w-full h-0.5 bg-white rounded-2xl transition-all duration-400",
                  isNavOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavBar);
