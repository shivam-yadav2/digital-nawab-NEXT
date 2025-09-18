import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const TeamCard = ({ member, isVisible }) => (
  <div
    className={`group transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    style={{ transitionDelay: `${member.delay}ms` }}
  >
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C73673]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 text-center">
        <h3 className="custom-bold text-gray-900 text-base md:text-lg tracking-wider uppercase mb-2 transition-colors duration-300 group-hover:text-[#C73673]">
          {member.name.split(' ').map((word, i) => (
            <span key={i} className="block md:inline">
              {word}{' '}
            </span>
          ))}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700 whitespace-pre-line">
          {member.desc}
        </p>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  // Fetch team data from API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('https://dashboard.digitalnawab.com/api/getourteam', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        // Map API response to match TeamCard props
        const mappedData = response.data.data.map((member, index) => ({
          name: member.name,
          desc: member.designation || 'Team Member', // Use designation as desc, fallback if missing
          image: `https://dashboard.digitalnawab.com/${member.img}`, // Adjust base URL as needed
          delay: index * 100, // Generate delay for animation (100ms stagger)
        }));

        setTeamMembers(mappedData);
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError('Failed to load team members. Please try again later.');
      }
    };

    fetchTeamMembers();
  }, []);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-2 mb-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="w-6 h-6 bg-[#C73673] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-[#C73673] font-bold text-sm uppercase tracking-wider custom-bold">
              OUR TEAMS
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl custom-bold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C73673] to-[#FF1F6D]">BEST TEAM</span>
          </h2>
        </div>
        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}
          </div>
        )}
        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.length > 0 ? (
            teamMembers.map((member, index) => {
              console.log(member)
              return(
              <TeamCard
                key={`${member.name}-${index}`} // Use index to handle duplicates
                member={member}
                isVisible={isVisible}
              />
            )})
          ) : (
            <div className="col-span-full text-center text-gray-500">
              {error ? 'No team members available.' : 'Loading team members...'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;