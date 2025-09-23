"use client";

import React from "react";
import {
  IconHome,
  IconTerminal2,
  IconGraph,
  IconCode,
  IconPhoto,
  IconMessage,
} from "@tabler/icons-react";
import { Contact } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// 🔗 ActiveLink wrapper
function ActiveLink({ href, children, activeClass, inactiveClass }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "transition-all duration-200",
        isActive ? activeClass : inactiveClass
      )}
    >
      {children}
    </Link>
  );
}

const FloatingDock = () => {
  // ✅ Updated services list from NavBar
  const services = [
    {
      title: "SEO Marketing",
      icon: <IconGraph className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/seo-company-in-lucknow",
    },
    {
      title: "Google Ads Services",
      icon: <IconMessage className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/pay-per-click-services",
    },
    {
      title: "Social Media Marketing",
      icon: <IconMessage className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/social-media-marketing",
    },
    {
      title: "Graphic Design",
      icon: <IconPhoto className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/graphic-designing-services",
    },
    {
      title: "Website Development",
      icon: <IconCode className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/website-design-and-development",
    },
    {
      title: "App Development",
      icon: <IconCode className="h-5 w-5 text-neutral-300 group-hover:text-blue-400" />,
      href: "/service/mobile-application-development",
    },
  ];

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "About Us",
      icon: <IconTerminal2 className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
      href: "/about-us",
    },
    {
      title: "Services",
      icon: (
        <Drawer>
          <DrawerTrigger>
            <IconGraph className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
          </DrawerTrigger>
          <DrawerContent className="bg-gray-900 border-gray-800">
            <DrawerHeader className="pb-2">
              <DrawerTitle className="text-white text-xl font-semibold text-center">
                Our Services
              </DrawerTitle>
              <DrawerDescription className="text-gray-400 text-center">
                Explore our marketing, design, and development solutions
              </DrawerDescription>
            </DrawerHeader>

            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <DrawerClose key={index} asChild>
                    <ActiveLink
                      href={service.href}
                      activeClass="group flex flex-col items-center p-4 rounded-xl border bg-blue-500/20 border-blue-500/40 text-blue-400"
                      inactiveClass="group flex flex-col items-center p-4 rounded-xl border bg-gray-800/50 border-gray-700/50 text-neutral-300 hover:bg-gray-800 hover:border-gray-600"
                    >
                      <div className="mb-2 p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors">
                        {service.icon}
                      </div>
                      <p className="text-sm font-medium text-center leading-tight">
                        {service.title}
                      </p>
                    </ActiveLink>
                  </DrawerClose>
                ))}
              </div>
            </div>

            <DrawerFooter className="pt-2">
              <DrawerClose>
                <div className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Close
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
      href: "#",
    },
    {
      title: "Portfolio",
      icon: <IconPhoto className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
      href: "/portfolio",
    },
    {
      title: "Career",
      icon: <IconTerminal2 className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
      href: "/career",
    },
    {
      title: "Contact Us",
      icon: <Contact className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
      href: "/contact-us",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-2 shadow-lg flex z-50 items-center">
      <div className="flex justify-around w-full h-full">
        {links.map((link, index) => (
          <ActiveLink
            key={index}
            href={link.href}
            activeClass="p-2 rounded-full flex flex-col items-center justify-center gap-1 bg-gray-700 text-blue-400"
            inactiveClass="p-2 rounded-full flex flex-col items-center justify-center gap-1 hover:bg-gray-700 text-neutral-300"
          >
            {link.icon}
            <span className="text-xs font-extralight">{link.title}</span>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default FloatingDock;
