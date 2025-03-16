import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { Header } from "./Header";
import WorldleImage from "../assets/WorldleImage.png"; 
import TriviaGameImage from "../assets/TriviaGame.png"; 
import SnakeGameImage from "../assets/SnakeGameImage.png";
import StatsPngs from "../assets/stats.png";
import SDGImage from "../assets/SDGImage.png";
import { useNavigate } from "react-router-dom";

export function Features() {
  const features = [
    {
      title: "Stats for Nerds 🤓",
      description:
        "Explore powerful visualizations and analytics that transform complex sustainability data into actionable insights, empowering you to track global progress across the UN's SDGs and discover where your impact matters most.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800 border-neutral-100",
    },
    {
      title: "Learning Hub 📚",
      description:
        "Unlock a treasure trove of captivating resources, thought-provoking articles, and hands-on interactive tools that bring the UN Sustainable Development Goals to life in extraordinary ways.",
      skeleton: <SkeletonThree />,
      className:
        "border-b col-span-1 lg:col-span-3 dark:border-neutral-800 border-neutral-100",
    },
    {
      title: "Interactive Games 🎮",
      description:
        "Dive into fun, interactive games that transform UN Sustainable Development Goals into exciting adventures for the whole family!",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 lg:col-span-6 dark:border-neutral-800 border-neutral-100",
    },
  ];
  return (
    <section id="games" className="pt-10 md:pt-30 px-12">
      <div className="relative pt-10 lg:pt-40 max-w-7xl mx-auto">
        <Header
          heading="Making Learning About Sustainability Accessible"
          subtitle="Explore, learn, and play your way to a sustainable future with our interactive tools and resources"
        />
        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800 border-neutral-100">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <div className="flex justify-center">
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </div>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className=" max-w-5xl mx-auto text-center tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl  mx-auto",
        "text-neutral-500  font-normal dark:text-neutral-300",
        "text-center max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <img
            src={StatsPngs}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
            onClick={() => navigate("/analytics")}
          />
        </div>
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  
  const navigate = useNavigate();
  return (
    <a 
    target="__blank"
      className="relative flex gap-10  h-full group/image">
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <button>Click Here to Learn!</button>
          <img
            src={SDGImage}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
            onClick={() => navigate("/learn")}
          />
        </div>
      </div>
      </a>
  );
};

export const SkeletonTwo = () => {
  const navigate = useNavigate();

  const images = [
    { src: SnakeGameImage, route: "/snake" },
    { src: TriviaGameImage, route: "/trivia" },
    { src: WorldleImage, route: "/wordle" },
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex justify-center items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={"images-first" + idx}
            variants={imageVariants}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => navigate(image.route)} 
            className="rounded-xl -mr-4 mt-4 p-1 cursor-pointer bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image.src}
              alt="game image"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10"></div>
  );
};