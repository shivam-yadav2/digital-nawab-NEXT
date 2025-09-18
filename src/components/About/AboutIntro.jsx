import ColourfulText from "../../components/ui/colourful-text";

const AboutIntro = () => (
  <section className="bg-white py-12 px-4 md:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-2 md:px-8">
      {/* Left: Text */}
      <div>
        <h1 className="text-2xl md:text-4xl custom-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>
        <ColourfulText text="Grow and Rise" /><br />  Making organization<br />towards Success with ease!
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
         In this digital age, when everything has turned towards the blue screen, marketing has not remained untouched. Being digitally sound means you are all set to achieve your goal 3X faster than those who still follow the traditional method of marketing and implement the old sales technique. We at Digital Nawab makes sure to launch your business on a platform where success is the ultimate solution packed with growth.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">Digital Nawab is a digital marketing company that believes in bringing solutions and growth-hacking answers for our end-clients. Our start-up believes in continuously utilizing various improvement procedures, plans, and programs which best suit your concern, while bringing in solutions which perfectly suits the client’s need. We have this ideal vision to offer the most extreme solutions and put customer’s need at first while designing the strategy for marketing solutions. All this leads to create reliable associations with our customers.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="text-center transition-all duration-500 hover:scale-105">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#C73673] to-[#FF1F6D] bg-clip-text text-transparent transition-all duration-500">500+</div>
            <div className="text-xs md:text-sm text-gray-700 mt-1">Projects Completed</div>
          </div>
          <div className="text-center transition-all duration-500 hover:scale-105">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#C73673] to-[#FF1F6D] bg-clip-text text-transparent transition-all duration-500">95%</div>
            <div className="text-xs md:text-sm text-gray-700 mt-1">Client Retention Rate</div>
          </div>
          <div className="text-center transition-all duration-500 hover:scale-105">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#C73673] to-[#FF1F6D] bg-clip-text text-transparent transition-all duration-500">1,200+</div>
            <div className="text-xs md:text-sm text-gray-700 mt-1">Leads Generated Monthly</div>
          </div>
          <div className="text-center transition-all duration-500 hover:scale-105">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#C73673] to-[#FF1F6D] bg-clip-text text-transparent transition-all duration-500">30%</div>
            <div className="text-xs md:text-sm text-gray-700 mt-1">Average Increase in ROI</div>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Team working together"
          className="rounded-2xl shadow-xl w-full max-w-md object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  </section>
);
export default AboutIntro;