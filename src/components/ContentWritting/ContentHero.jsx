import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Animation variants for the subheading
const subheadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
};

// Animation variants for the button
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
  }
};

// Animation variants for the services list
const listVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.6
    }
  }
};

// Animation variants for each service item
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HeroSection = () => {
  // Custom cursor effect
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background with Unsplash image and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }} 
      />
      {/* Aceternity UI grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-center bg-no-repeat opacity-10" 
        style={{ backgroundImage: "url('https://aceternity.com/images/patterns/grid.svg')" }} 
      />
      
      {/* Custom cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)',
          x: cursorXSpring,
          y: cursorYSpring
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Words that connect. Strategies that convert.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Transform your brand with our cutting-edge digital marketing expertise, crafted to captivate and convert.
        </motion.p>

        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            "Content Strategy & Calendars",
            "Blog Writing & Guest Posts",
            "Website & Landing Page Copywriting",
            "Script Writing for Videos"
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={listItemVariants}
              className="text-lg text-gray-300 bg-gray-900/50 backdrop-blur-sm py-3 px-5 rounded-lg border border-gray-700/50"
            >
              {service}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button 
            className={cn(
              "px-10 py-4 text-lg font-semibold rounded-full",
              "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
              "transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            )}
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;