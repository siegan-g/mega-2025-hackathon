const Hero = () => {
  const HeroButton =({label,href}) =>(
    <button className="bg-[#0BA159] text-white px-4 py-2 w-full rounded-md">
      <a href={href}>{label}</a>
    </button>
  );
  return (
    <section id="home" className="">
      <div className="flex flex-col gap-6 items-center justify-center w-screen">
        <div className="text-4xl font-bold">
          <h2>Promoting Education</h2>
          <h2>
            Protecting <span className="inline italic">the Earth</span>
          </h2>
          <h2>Securing Our Future</h2>
        </div>
        <div className="text-md px-10">
          <h3 className="text-[#63677A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            bibendum, eros ut rutrum euismod, nunc justo semper justo, in
            hendrerit metus mi at ante. Etiam a orci a felis euismod faucibus in
            vitae turpis.
          </h3>
        </div>
        <div>
        <button className="bg-[#0BA159] text-white px-4 py-2 w-full rounded-md">
          <HeroButton label="Play" href="#programs" />
        </button>
        </div>
        <div>
          <HeroButton label="Learn More" href="#learn" className="bg-[#63677A]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;