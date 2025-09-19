import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Zap,
  Award,
  Users,
  Volume2,
  VolumeX,
} from 'lucide-react';

const ReelsSection = ({ reels }) => {
  const [hoveredReel, setHoveredReel] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showControls, setShowControls] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const videoRefs = useRef({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Total Views', value: '50M+', icon: Eye, color: 'from-blue-500 to-cyan-500' },
    { label: 'Average ROI', value: '340%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Viral Reels', value: '25+', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { label: 'Happy Clients', value: '98%', icon: Award, color: 'from-purple-500 to-pink-500' },
  ];

  const handlePlayPause = async (reelId) => {
    const video = videoRefs.current[reelId];
    if (!video) return;

    try {
      if (playingVideo === reelId) {
        video.pause();
        setPlayingVideo(null);
      } else {
        Object.values(videoRefs.current).forEach((v) => {
          if (v && !v.paused) v.pause();
        });

        setIsLoading((prev) => ({ ...prev, [reelId]: true }));
        await video.play();
        setPlayingVideo(reelId);
        setIsLoading((prev) => ({ ...prev, [reelId]: false }));

        setTimeout(() => {
          if (playingVideo === reelId) {
            setShowControls((prev) => ({ ...prev, [reelId]: false }));
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Error playing video:', error);
      setIsLoading((prev) => ({ ...prev, [reelId]: false }));
    }
  };

  const handleVideoEnded = (reelId) => {
    setPlayingVideo(null);
    setShowControls((prev) => ({ ...prev, [reelId]: true }));
  };

  const handleVideoClick = (reelId) => {
    setShowControls((prev) => ({ ...prev, [reelId]: true }));
    if (playingVideo === reelId) {
      setTimeout(() => {
        setShowControls((prev) => ({ ...prev, [reelId]: false }));
      }, 3000);
    }
  };

  const toggleMute = (reelId, e) => {
    e.stopPropagation();
    const video = videoRefs.current[reelId];
    if (video) {
      video.muted = !video.muted;
      setIsMuted((prev) => ({ ...prev, [reelId]: video.muted }));
    }
  };

  const handleMouseEnter = (reelId) => {
    setHoveredReel(reelId);
    setShowControls((prev) => ({ ...prev, [reelId]: true }));
  };

  const handleMouseLeave = (reelId) => {
    setHoveredReel(null);
    if (playingVideo !== reelId) {
      setShowControls((prev) => ({ ...prev, [reelId]: false }));
    }
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full border border-purple-200 mb-8">
            <div className="relative">
              <Play className="w-5 h-5 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping" />
            </div>
            <span className="text-purple-700 font-medium">Viral Reels Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent leading-tight">
            Scroll-Stopping
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Reels That Convert
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We create viral content that doesn't just get views—it drives real business results.
            Our reels have generated over <span className="text-purple-600 font-semibold">$2M in client revenue</span> and counting.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 transition-all duration-300 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 sm:p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reels Grid - Phone-like format */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 transition-all duration-300 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="group relative bg-black rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-[500px] w-[300px] mx-auto cursor-pointer"
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={() => handleMouseLeave(reel.id)}
              onClick={() => handleVideoClick(reel.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full overflow-hidden">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[reel.id] = el;
                  }}
                  src={`https://dashboard.digitalnawab.com/${reel.video}`}
                  className="w-full h-full object-cover"
                  muted={isMuted[reel.id] !== false}
                  loop
                  playsInline
                  onEnded={() => handleVideoEnded(reel.id)}
                  onLoadStart={() => setIsLoading((prev) => ({ ...prev, [reel.id]: true }))}
                  onCanPlay={() => setIsLoading((prev) => ({ ...prev, [reel.id]: false }))}
                />
                {isLoading[reel.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                {playingVideo !== reel.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                )}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    showControls[reel.id] || playingVideo !== reel.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayPause(reel.id);
                    }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      hoveredReel === reel.id || playingVideo === reel.id
                        ? 'scale-110 bg-gradient-to-r from-purple-500/50 to-pink-500/50 border-white/50 shadow-2xl shadow-purple-500/30'
                        : 'border-white/30 hover:scale-105'
                    }`}
                    disabled={isLoading[reel.id]}
                  >
                    {isLoading[reel.id] ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : playingVideo === reel.id ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300" fill="currentColor" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 transition-all duration-300" fill="currentColor" />
                    )}
                  </button>
                </div>
                <button
                  onClick={(e) => toggleMute(reel.id, e)}
                  className={`absolute top-16 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${
                    showControls[reel.id] || hoveredReel === reel.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  {isMuted[reel.id] !== false ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                  <span className="text-white text-xs font-medium">{reel.duration}</span>
                </div>
                <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                  <span className="text-white text-xs font-medium">{reel.type}</span>
                </div>
                <div
                  className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                    playingVideo === reel.id && !showControls[reel.id] ? 'opacity-50' : 'opacity-100'
                  }`}
                >
                  <div className="text-white">
                    <h3 className="text-sm font-semibold mb-1 line-clamp-2 drop-shadow-lg">{reel.title}</h3>
                    <p className="text-xs text-gray-200 mb-2 drop-shadow-lg">{reel.description}</p>
                  </div>
                </div>
                {playingVideo === reel.id && (
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white text-xs font-medium">LIVE</span>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-purple-600/10 via-pink-600/5 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${
                  hoveredReel === reel.id ? 'opacity-100' : ''
                }`}
              />
            </div>
          ))}
        </div>

        {/* Single Like Content Section */}
        <div
          className={`text-center mt-16 transition-all duration-300 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 p-8 sm:p-12 rounded-3xl border border-purple-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20 opacity-50" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Go <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Viral?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join our roster of successful clients and watch your engagement soar.
                We don't just create content—we create <span className="text-purple-600 font-semibold">viral moments</span> that drive real business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Start Your Viral Campaign
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="group bg-transparent border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-purple-700 transition-all duration-300 inline-flex items-center gap-3 hover:bg-purple-50">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;