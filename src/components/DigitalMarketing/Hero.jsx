import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <>
      <div className="relative lg:pt-[80px] flex h-full w-full items-center justify-center bg-gradient-to-r from-[rgba(5,5,5,1)] via-[#050946] to-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className=" lg:min-h-screen z-30 flex items-center justify-center lg:py-0 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full grid grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Left Text Section */}
            <div className="text-center lg:text-left col-span-5 lg:col-span-3 space-y-6">
              <h1 className="text-3xl uppercase custom-bold sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Skyrocketing Your Brand with.
                <br />
                Digital Marketing.
              </h1>
              <p className="text-lg custom sm:text-xl text-white max-w-md mx-auto lg:mx-0">
                Unleash the power of data-driven strategies, engaging content,
                and cutting-edge campaigns to dominate the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#D4FF66] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#C0E55A] transition">
                  CLAIM YOUR FREE SEO AUDIT
                </button>
                <a
                  href="#"
                  className="text-white !underline text-lg hover:text-[#D4FF66] transition"
                >
                  SEE HOW WE RANK WEBSITES
                </a>
              </div>
            </div>

            {/* Right Graphic Section (Placeholder) */}
            <div className="mt-10 lg:mt-0 col-span-2 hidden lg:flex justify-center">
              <div className="relative   rounded-lg flex items-center justify-center">
                <img
                  fetchPriority="high"
                  src="/assets/images/bg/seoBanner.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
