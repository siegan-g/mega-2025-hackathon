import { AnimatedButton } from "./AnimatedButton";

const Hero = () => {
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
            <div>
              <AnimatedButton
                text="Play"
                transitionText="🏆"
                className="bg-[#1ED760] px-12 py-4 rounded-full font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 flex justify-center group/modal-btn w-[150px]"
                to="/games"
              ></AnimatedButton>
            </div>
            <div>
              <AnimatedButton
                text="Learn"
                transitionText="📖"
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200  transition duration-200 flex justify-center group/modal-btn w-[150px]"
                to="/learn"
              ></AnimatedButton>
            </div>
          </div>
        </div>
        <div className="flex md:w-1/4 items-center">
          <img
            className="absolute p-10 opacity-40 -z-10 md:opacity-100"
            src="https://8caxhaun8wrbazbn.public.blob.vercel-storage.com/hero-image-GTCLUXUhAaroD9wMtFnNgFvKvE0s45.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
