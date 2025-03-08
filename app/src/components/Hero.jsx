const Hero = () => {
  const HeroButton = ({ label, href }) => (
    <div className="flex justify-between">
      <button className="display-block bg-[#0BA159] font-bold text-white px-4 py-2 w-full rounded-md text-xl md:text-2xl">
        <a className="px-5 py-12" href={href}>
          {label}
        </a>
      </button>
    </div>
  );
  return (
    <section id="home" className="">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-6 items-center md:items-start justify-center md:justify-start w-screen md:py-24 md:px-12 md:w-2/3 ">
          <div className="text-4xl md:text-7xl font-bold">
            <h2>Promoting Education</h2>
            <h2>
              Protecting <span className="inline italic">the Earth</span>
            </h2>
            <h2>Securing Our Future</h2>
          </div>
          <div className="text-md md:text-lg px-10 md:px-0">
            <h3 className="text-[#63677A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              bibendum, eros ut rutrum euismod, nunc justo semper justo, in
              hendrerit metus mi at ante. Etiam a orci a felis euismod faucibus
              in vitae turpis.
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <HeroButton label="Play" href="#programs" />
            <HeroButton
              label="Learn More"
              href="#learn"
              className="bg-[#63677A]"
            />
          </div>
        </div>
        <div className="flex md:w-1/4 items-center">
          <img className="p-10" src="../src/assets/earth2.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
