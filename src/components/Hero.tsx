import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero-section text-center flex-col mt-16 sm:mt-32 overflow-hidden ">
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl font-display">
        Launch Your SaaS
        <br />
        <span className="bg-gradient-to-r from-teal-500 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
          In Minutes Not Days
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl max-w-3xl mx-auto">
        LYFT is the turbocharged engine empowering developers to swiftly bring
        their ideas to life and launch them into the digital universe.
      </h2>
      <div className="mx-auto mt-5 flex max-w-fit gap-2">
        <a
          href="#get-started"
          className="rounded-full mx-auto px-5 py-2 text-sm font-medium shadow-md border-gray-200 bg-black text-white hover:ring-gray-400 hover:ring-2"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="rounded-full mx-auto px-5 py-2 text-sm font-medium shadow-sm border-gray-800 bg-white text-black border-2 hover:ring-gray-400 hover:ring-2"
        >
          Learn More
        </a>
      </div>
      <div>
        <img
          src={heroImage}
          alt="Hero Section Image"
          className="scale-105 md:scale-110"
        />
      </div>
    </section>
  );
};

export default Hero;
