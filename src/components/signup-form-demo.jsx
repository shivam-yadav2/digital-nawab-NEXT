
"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X, Mail, Phone, User, MessageCircle, Send, Sparkles, MapPin, Settings } from "lucide-react";

// Enquiry Modal Component
const EnquiryModal = ({ 
  isOpen, 
  onClose, 
  title = "Get In Touch", 
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  ctaText = "Send Message",
  services = [],
  subServices = {},
  cities = [],
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    service: '',
    subService: '',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value,
      // Reset subService when service changes
      ...(field === 'service' ? { subService: '' } : {})
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        service: '',
        subService: '',
        city: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableSubServices = formData.service ? (subServices[formData.service] || []) : [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto p-0 bg-white dark:bg-gray-900 border-0 shadow-2xl">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Sparkles className="h-6 w-6 animate-pulse" />
                {title}
              </DialogTitle>
              <p className="text-blue-100 mt-2 text-sm">{subtitle}</p>
            </DialogHeader>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors hover:bg-white/20 rounded-full p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
          <LabelInputContainer>
            <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <User className="h-4 w-4 text-blue-600" />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base"
            />
          </LabelInputContainer>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Mail className="h-4 w-4 text-blue-600" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="number" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Phone className="h-4 w-4 text-blue-600" />
                Phone Number *
              </Label>
              <Input
                id="number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base"
              />
            </LabelInputContainer>
          </div>

          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="service" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Settings className="h-4 w-4 text-blue-600" />
                Service *
              </Label>
              <Select className="!w-full" value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="subService" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Settings className="h-4 w-4 text-purple-600" />
                Sub Service
              </Label>
              <Select 
                value={formData.subService} 
                onValueChange={(value) => handleInputChange('subService', value)}
                disabled={!formData.service || availableSubServices.length === 0}
              >
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base disabled:opacity-50">
                  <SelectValue placeholder="Select a sub service" />
                </SelectTrigger>
                <SelectContent>
                  {availableSubServices.map((subService) => (
                    <SelectItem key={subService} value={subService}>
                      {subService}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </LabelInputContainer>
          </div>

          {/* City */}
          <LabelInputContainer>
            <Label htmlFor="city" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="h-4 w-4 text-blue-600" />
              City *
            </Label>
            <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
              <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 h-12 text-base">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </LabelInputContainer>

          {/* Message */}
          <LabelInputContainer>
            <Label htmlFor="message" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MessageCircle className="h-4 w-4 text-blue-600" />
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project requirements..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              rows={4}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 text-base resize-none"
            />
          </LabelInputContainer>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {ctaText}
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Label Input Container Component
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// Demo Component showing how to use the modal
const EnquiryModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data - you can customize these
  const services = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "UI/UX Design",
    "E-commerce Solutions",
    "Consulting Services"
  ];

  const subServices = {
    "Web Development": ["Frontend Development", "Backend Development", "Full Stack Development", "WordPress Development", "Custom CMS"],
    "Mobile App Development": ["iOS Development", "Android Development", "React Native", "Flutter", "Hybrid Apps"],
    "Digital Marketing": ["SEO", "Social Media Marketing", "PPC Advertising", "Content Marketing", "Email Marketing"],
    "UI/UX Design": ["Web Design", "Mobile App Design", "Branding", "User Research", "Prototyping"],
    "E-commerce Solutions": ["Shopify", "WooCommerce", "Magento", "Custom E-commerce", "Payment Integration"],
    "Consulting Services": ["Business Strategy", "Technical Consulting", "Project Management", "Digital Transformation"]
  };

  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
    "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle"
  ];

  const handleFormSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    // You can send data to your API, email service, etc.
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Enquiry Modal Utility
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Click any of the buttons below to open the enquiry modal
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
          </Button>
          
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className="h-16 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Request Quote
          </Button>
          
          <Button
            onClick={() => setIsModalOpen(true)}
            className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </Button>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Responsive Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Custom Variables</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Dynamic Sub-services</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Form Validation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Beautiful Animations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Easy Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Let's Work Together"
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
        services={services}
        subServices={subServices}
        cities={cities}
        onSubmit={handleFormSubmit}
        ctaText="Send Enquiry"
      />
    </div>
  );
};

export default EnquiryModalDemo;