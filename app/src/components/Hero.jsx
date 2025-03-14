const Hero = () => {
  const HeroButton = ({ label, colour, href }) => (
    <div className="flex justify-between">
      <button
        className={`display-block bg-[${colour}] font-bold text-white px-4 py-2 w-full rounded-md text-xl md:text-2xl`}
      >
        <a className="px-5 py-12" href={href}>
          {label}
        </a>
      </button>
    </div>
  );
  return (
    <section id="home" className="pt-30 md:pt-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-6 items-center md:items-start justify-center md:justify-start w-screen md:py-24 md:px-12 md:w-2/3 ">
          <div className=" flex flex-col gap-4 text-4xl md:text-7xl font-bold">
            <div>
              <h2>Promoting Education</h2>
            </div>
            <div>
              <div>
                <h2>
                  Protecting <span className="inline italic">the Earth</span>
                </h2>
              </div>
            </div>
            <h2>Securing Our Future</h2>
          </div>
          <div className="text-md md:text-lg px-10 md:px-0">
            <h3 className="text-[#63677A] text-left">
              Together, we can build a future where people, planet, and
              prosperity thrive in harmony. Join us in driving awareness and
              action for the United Nations&apos; Sustainable Development Goals.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <HeroButton label="Play" href="#programs" colour="#0BA159" />
            <HeroButton label="Learn" href="#learn" colour="#63677A" />
          </div>
        </div>
        <div className="flex md:w-1/4 items-center">
          <img
            className="absolute p-10 opacity-40 -z-10 md:opacity-100"
            src="../src/assets/earth2.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
