import { RiArrowRightSFill, RiErrorWarningLine } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-[#02254F] to-[#034078] text-white">
      <div className="flex flex-col items-center justify-center px-5 text-center md:px-0">
        {/* Icon with animation */}
        <div className="flex justify-center mb-8">
          <RiErrorWarningLine
            size={120}
            className="text-red-500 animate-bounce"
          />
        </div>
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-6 text-2xl font-semibold">Oops! Page not found.</p>
        <p className="mb-8 text-lg text-gray-300">
          The page you`re looking for doesn`t exist or has been moved.
        </p>
        <a href="/" className="flex flex-row items-center justify-center gap-5 px-2 py-2 border-b-2 h-fit w-fit hover:scale-105">
          <p>Back to Home</p>
          <RiArrowRightSFill />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
