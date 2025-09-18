import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const blogPreviews = [
  {
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "WEB DEV",
    date: "June 3, 2025",
    title: "Modern Web Development Trends",
    excerpt: "Explore the latest trends in web development and stay ahead of the curve."
  },
  {
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "SOCIAL",
    date: "June 2, 2025",
    title: "Social Media Marketing Tips",
    excerpt: "Boost your social media presence with proven strategies."
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "DESIGN",
    date: "June 1, 2025",
    title: "Creative Ad Design Principles",
    excerpt: "Learn how to create compelling ad designs that convert."
  }
];

export default function BlogSection() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-8 group hover:shadow-lg transition-all duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-[#FF1F6D] to-[#C73673] rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-sm font-semibold tracking-wide">LATEST POSTS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl custom-bold text-gray-900 mb-4">
              From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F6D] to-[#C73673]">Blog</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Explore the latest insights about digital marketing, web development, and industry trends.
            </p>
            <button className="bg-gradient-to-r from-[#FF1F6D] to-[#C73673] text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-6 flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Featured Blog Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            {/* <div className="relative transform hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1F6D] to-[#C73673] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                 
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FF1F6D] to-[#C73673] mx-auto rounded-full"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SEO Strategies Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="SEO Strategies"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C73673]/90"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">SEO Strategies</h3>
                  <p className="text-white/90">Digital Marketing Insights</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Calendar className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="p-8">
              <div className="text-[#FF1F6D] text-sm font-semibold mb-3">
                June 4, 2025
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                6 SEO strategies that will boost your rankings in 2025
              </h3>
              <button className="inline-flex items-center gap-2 text-[#C73673] font-semibold hover:gap-3 transition-all duration-200">
                Read more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company Journey Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Company Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C73673]/90"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Journey</h3>
                  <p className="text-white/90">Success Story</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Calendar className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="p-8">
              <div className="text-[#FF1F6D] text-sm font-semibold mb-3">
                June 1, 2025
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                Digital Nawab's journey: Celebrating milestones and looking ahead 🚀
              </h3>
              <button className="inline-flex items-center gap-2 text-[#C73673] font-semibold hover:gap-3 transition-all duration-200">
                Read more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Blog Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {blogPreviews.map((blog, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C73673]/90"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    {blog.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#FF1F6D] text-xs font-semibold mb-2">{blog.date}</div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#C73673] transition-colors duration-200">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}