export const Header = ({ heading, subtitle }) => (
  <>
    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-left md:text-center tracking-tight font-semibold text-black dark:text-white">
      {heading}
    </h4>
    <p className="text-md md:text-lg  max-w-2xl  my-4 mx-auto text-neutral-500 text-left md:text-center font-normal dark:text-neutral-300">
      {subtitle}
    </p>
  </>
);
