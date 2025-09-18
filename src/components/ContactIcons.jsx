"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const DecorativeCircle = ({ className }) => (
  <div className={`absolute w-20 h-20 rounded-full opacity-10 ${className}`}>
    <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-lg" />
  </div>
);

const ContactIcons = () => (
  <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 relative overflow-hidden">
    {/* Decorative Elements */}
    <DecorativeCircle className="-top-10 -left-10" />
    <DecorativeCircle className="top-1/2 -right-10" />
    <DecorativeCircle className="-bottom-10 left-1/4" />

    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px]" />

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* Email Card */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl opacity-20 blur" />
          <div className="relative bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-inner">
              <Mail className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <a
              href="mailto:wedigitalnawab@gmail.com"
              className="text-black hover:text-pink-500 transition-colors text-center"
            >
              wedigitalnawab@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 blur" />
          <div className="relative bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-inner">
              <Phone className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <a
              href="tel:+919335621987"
              className="text-black hover:text-purple-500 transition-colors text-center"
            >
              +91 93356 21987
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl opacity-20 blur" />
          <div className="relative bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-inner">
              <MapPin className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700 text-center">
              B12 A, L Rd, Mahanagar,
              <br />
              Lucknow, Uttar Pradesh 226006
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactIcons;
