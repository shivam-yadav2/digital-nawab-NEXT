const milestones = [
  {
    year: "2015",
    title: "Started with Local SEO & Digital Marketing Solutions",
    desc: "Digital Nawab began a digital journey in 2015, when it was a performance-oriented local SEO agency in Lucknow. Our focus is on helping local businesses establish a robust online presence, supported by our effective strategies. Our introductory activities provided the ideal foundation for achieving sustainable success for our clients through our effective SEO campaigns, scalable growth, and data-driven digital marketing services.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2017",
    title: "Launched SEO & Content Marketing Services",
    desc: "Our reputation as the best SEO agency in India has been established, thanks to our track record of successfully managing over 100 client campaigns. We help brands across various industries to base their operations on data-driven approaches, predictable reporting, and scalable performance. Our campaigns are designed to achieve better rankings, maximise traffic, and deliver ROI to meet the growth requirements of our clients.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2019",
    title: "100+ Clients Served with Proven SEO Campaigns",
    desc: "We are expanding our sphere of influence by offering strategically crafted SEO services in Lucknow, with over 100 clients and counting, to achieve long-term digital success. Performance-based, personalised, and analytical campaigns were offered. The customers were able to see an improvement in their ranking, particularly in terms of involvement and online presence. The ingredients that largely contributed to its success are our strategy, consistency, and knowledge of search behaviour.",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2021",
    title: "Introduced PPC Ads & Social Media Marketing",
    desc: "Digital Nawab has emerged as a leader in PPC campaigns and high-level Meta Ads management in the service sector. These brands were more exposed, received leads, and used tactics related to the platforms. This was a significant change because such services helped businesses grow faster by utilising paid media and ensured brand consistency across digital platforms.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2023",
    title: "Awarded Top Digital Marketing Agency in India",
    desc: "Digital Nawab has established a reputation for utilising innovative strategies and delivering excellent performance in Google Ads management at a national level. Our successes in developing high-conversion campaigns are due to the confidence we demonstrate in fulfilling the expectations of businesses across various sectors. The award was a testament to years of dedication, measurable client successes, and an eyes-on-the-future philosophy that continually finds ways to make it happen.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
  },
];

const AboutTimeline = () => (
  <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="bg-[#C73673]/20 text-[#C73673] px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase">
          Our Milestone
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4">
          Our Growth Journey in Digital Marketing Since 2015
        </h2>
        <p className="text-gray-300 text-lg mt-4 max-w-4xl mx-auto">
          With decades of experience, we have established a reputation as a strategic provider of online marketing services that can help you promote your brand, increase traffic, and enhance engagement levels.
        </p>
      </div>
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full lg:border-l-2 border-dotted border-[#C73673]" style={{ top: 0, bottom: 0 }} />
        <div className="flex flex-col gap-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text Block */}
              <div className={`md:w-1/2 px-4 md:px-8 text-center md:text-${index % 2 === 0 ? "right" : "left"}`}>
                <h3 className="text-[#C73673] text-lg font-bold mb-1">{item.year}</h3>
                <h4 className="text-white text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
              {/* Connector Dot */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-[#C73673] via-[#8F5AFF] to-[#FF6FD8] rounded-full shadow-lg transition-transform duration-300 scale-100 group-hover:scale-110 animate-pulse"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-[#C73673] rounded-full shadow-md"></div>
              </div>
              {/* Image Block */}
              <div className="md:w-1/2 px-4 md:px-8 mt-6 md:mt-0">
                <img
                  src={item.image}
                  alt={item.year}
                  className="rounded-xl shadow-lg w-full max-w-xs mx-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutTimeline;