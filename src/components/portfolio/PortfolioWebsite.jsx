import React from "react";
import { ExternalLink, Play, Pause } from "lucide-react";

const PortfolioSection = ({ projects }) => {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  const handleVideoPlay = (videoId) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = (videoId) => {
    setPlayingVideo(null);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            My Projects
          </span>
          <h2 className="text-4xl font-bold text-black mt-6 mb-4">
            Check out my latest work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>

        {/* Projects Grid - 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Video */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  poster={project.image}
                  preload="metadata"
                  muted
                  loop
                  autoPlay
                  onPlay={() => handleVideoPlay(project.id)}
                  onPause={() => handleVideoPause(project.id)}
                >
                  <source
                    src={`https://dashboard.digitalnawab.com/${project.video}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                {playingVideo !== project.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <div className="bg-white bg-opacity-95 rounded-full p-4 shadow-xl transform hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{project.duration}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 leading-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {JSON.parse(project.tech_used).map((tech, index) => {
                    const getSkillColor = (skillName) => {
                      const colors = {
                        "React JS": "from-cyan-500 to-blue-600 text-white",
                        JavaScript: "from-yellow-400 to-orange-500 text-white",
                        SQL: "from-orange-500 to-red-600 text-white",
                        Laravel: "from-red-500 to-pink-600 text-white",
                        TailwindCSS: "from-teal-400 to-cyan-600 text-white",
                        RazorPay: "from-blue-600 to-indigo-700 text-white",
                        "Material Tailwind":
                          "from-indigo-500 to-purple-600 text-white",
                        AOS: "from-green-500 to-emerald-600 text-white",
                        Redux: "from-purple-600 to-indigo-700 text-white",
                        CSS: "from-blue-400 to-blue-600 text-white",
                        HTML: "from-orange-400 to-orange-600 text-white",
                      };
                      return (
                        colors[skillName] ||
                        "from-gray-600 to-gray-700 text-white"
                      );
                    };

                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r ${getSkillColor(
                          tech
                        )} shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:from-black hover:via-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group-hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
