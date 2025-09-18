// app/layout.js
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "@/components/theme-provider.jsx";

import './globals.css'
import './app.css'


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
      <body>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <div className="lg:block hidden">
          <NavBar />
        </div>
        <div className="lg:hidden block">
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
