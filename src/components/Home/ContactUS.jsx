import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Settings,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import WavyPattern from "../../components/WaveyPattern";
import ColourfulText from "@/components/ui/colourful-text";
import NawabMap from "@/components/NawabMap";
import ContactIcons from "../../components/ContactIcons";
import Banner from "../../components/Banner";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    subService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [contactInfo, setContactInfo] = useState({
    email: ["wedigitalnawab@gmail.com"],
    phone_no: ["+919335621987"],
    location: "B12 A, L Rd, Mahanagar, Lucknow, Uttar Pradesh 226006",
  });

  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://dashboard.digitalnawab.com/api/get_service",
          headers: {},
        };

        const response = await axios.request(config);
        setServices(response.data);
      } catch (error) {
        toast.error("Failed to fetch services");
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  // Fetch contact details on component mount
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://dashboard.digitalnawab.com/api/getcontactdetail",
          headers: {},
        };

        const response = await axios.request(config);
        const data = response.data.data[0];
        setContactInfo({
          email: data?.email,
          phone_no: data?.phone_no,
          location: data?.location,
        });
      } catch (error) {
        // toast.error('Failed to fetch contact details');
        console.error(error);
      }
    };

    fetchContactDetails();
  }, []);

  // Update subservices when service changes
  useEffect(() => {
    if (formData.service) {
      const selectedService = services.find((s) => s.name === formData.service);
      setSubServices(selectedService ? selectedService.subservices : []);
      setFormData((prev) => ({ ...prev, subService: "" }));
    } else {
      setSubServices([]);
    }
  }, [formData.service, services]);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!/^[a-zA-Z\s]+$/.test(value) && value !== "") {
          error = "Name should only contain letters and spaces";
        } else if (value.length < 2 && value !== "") {
          error = "Name must be at least 2 characters";
        }
        break;
      case "phone":
        if (!/^\d+$/.test(value) && value !== "") {
          error = "Phone number should only contain digits";
        } else if (value.length !== 0 && value.length !== 10) {
          error = "Phone number must be exactly 10 digits";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value !== "") {
          error = "Please enter a valid email address";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Prevent invalid input
    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return;
    }

    // Validate and set errors
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
      if (!formData[key] && key !== "subService") {
        newErrors[key] = "This field is required";
      }
    });

    if (formData.service && !formData.subService) {
      newErrors.subService = "Please select a specific service";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const selectedService = services.find(
          (s) => s.name === formData.service
        );
        const selectedSubService = subServices.find(
          (s) => s.name === formData.subService
        );

        const data = JSON.stringify({
          name: formData.name,
          email: formData.email,
          number: formData.phone,
          city: formData.city,
          service_id: selectedService ? selectedService.id : null,
          subservice_id: selectedSubService ? selectedSubService.id : null,
          message: formData.message,
        });

        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://dashboard.digitalnawab.com/api/post_enquiry",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: data,
        };

        const response = await axios.request(config);
        toast.success("Enquiry submitted successfully!");
        console.log(JSON.stringify(response.data));

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          service: "",
          subService: "",
          message: "",
        });
      } catch (error) {
        toast.error("Failed to submit enquiry");
        console.error(error);
      }
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="relative bg-gradient-to-br from-black via-gray-700 to-black py-16 px-4 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #ffffff 0.5px, transparent 0.5px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Additional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left Column - Info */}
            <div className="space-y-8">
              {/* Contact Us Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-white/90 custom text-sm">Contact Us</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl custom-bold text-white leading-tight">
                  HAVE{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent custom-bold">
                    QUESTIONS?
                  </span>
                </h1>
                <h2 className="text-4xl lg:text-5xl custom-bold text-white leading-tight mt-2">
                  WE'RE HERE TO HELP!
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Our dedicated team is ready to provide the answers and support
                you need. Whether it's a quick question or a detailed concern,
                we're just a call, email, or chat away.
              </p>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Message Us
                    </h3>
                    <p className="text-white/80">{contactInfo?.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-white/80">{contactInfo?.phone_no}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-white/80">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Compact Enhanced Form */}
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get In Touch
                </h3>
                <p className="text-white/80 text-sm">
                  Fill out the form and we'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                      <User className="inline w-3 h-3 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className={`w-full px-4 py-3 bg-black/20 border ${
                        errors.name ? "border-red-400" : "border-white/10"
                      } rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white placeholder-white/60 backdrop-blur-sm`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                      <Phone className="inline w-3 h-3 mr-1" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9199999999999"
                      maxLength={13}
                      minLength={10}
                      required
                      className={`w-full px-4 py-3 bg-black/20 border ${
                        errors.phone ? "border-red-400" : "border-white/10"
                      } rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white placeholder-white/60 backdrop-blur-sm`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                      <Mail className="inline w-3 h-3 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className={`w-full px-4 py-3 bg-black/20 border ${
                        errors.email ? "border-red-400" : "border-white/10"
                      } rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white placeholder-white/60 backdrop-blur-sm`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                      <Building2 className="inline w-3 h-3 mr-1" />
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Lucknow"
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white placeholder-white/60 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                      <Settings className="inline w-3 h-3 mr-1" />
                      Service Category *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white backdrop-blur-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-800 text-white">
                        Select category
                      </option>
                      {services?.map((service) => (
                        <option
                          key={service.id}
                          value={service.name}
                          className="bg-slate-800 text-white"
                        >
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.service && (
                    <div className="animate-fadeIn">
                      <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                        <Settings className="inline w-3 h-3 mr-1" />
                        Specific Service *
                      </label>
                      <select
                        name="subService"
                        value={formData.subService}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all text-white backdrop-blur-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-800 text-white">
                          Select service
                        </option>
                        {subServices.map((subService) => (
                          <option
                            key={subService.id}
                            value={subService.name}
                            className="bg-slate-800 text-white"
                          >
                            {subService.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/90 font-medium mb-2 text-xs uppercase tracking-wide">
                    <MessageSquare className="inline w-3 h-3 mr-1" />
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={3}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all resize-none text-white placeholder-white/60 backdrop-blur-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-4 focus:ring-purple-300/50 focus:outline-none"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>

                {/* Privacy Notice */}
                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                  <p className="text-white/80 text-xs text-center">
                    🔒 Your information is encrypted and secure. We never share
                    your details with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section - Full Width Below */}
      <NawabMap />
    </>
  );
};

export default ContactUs;
