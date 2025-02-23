import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-12 flex items-center justify-center">
      <div className="container mx-auto px-12">
        <div className="bg-black w-full h-64 md:h-128 relative rounded-xl">
          <img
            src="https://picsum.photos/1440/512"
            className="w-full h-full rounded-xl"
          ></img>

          <div className="lg:absolute bottom-0 left-0 translate-y-0 w-full flex flex-col items-start p-6 shadow-lg mx-4 md:mx-0 text-white text-5xl font-medium gap-2">
            <h2>Promoting Education</h2>
            <h2>
              Protecting the Earth
            </h2>
            <h2>Securing Our Future</h2>
          </div>
          {/* Card - Repositioned */}
          <div className="lg:absolute md:relative bottom-0 right-0 translate-y-0 w-full md:w-1/3 flex flex-col items-start bg-white p-6 shadow-lg mx-4 md:mx-0 rounded-tl-xl">
            {/* Play Button */}
            <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
              <Play className="size-4" fill="white" />
            </div>
            {/* Text Content */}
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              gravida urna risus, sit amet consectetur lacus dictum ut.
              Phasellus hendrerit finibus sapien, quis luctus lorem dictum
              consectetur. Nulla a purus maximus, accumsan semper nulla ut,
              malesuada dignissim nunc. Ut ut magna dapibus, convallis ante nec,
              lobortis neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
