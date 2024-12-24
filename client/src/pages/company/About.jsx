import earthnetwork from "../../assets/Earth Network Image.jpeg";
import satellitenetwork from "../../assets/Satellite Network.avif";
import teams from "../../assets/Pin page image (1).jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative text-white bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={earthnetwork}
            alt="Earth Network"
            className="object-cover w-full h-full opacity-30"
          />
        </div>
        <div className="relative z-10 px-6 py-16 mx-auto text-center max-w-7xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            Empowering Connectivity
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Bridging the gap and bringing high-speed internet to every corner.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="px-6 py-12 md:py-20 md:px-12">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
            <p className="mt-4 text-gray-600">
              PT Nusantara Star Connect (NSC) is a leading satellite service
              solution provider in Indonesia. We provide connectivity services
              through a Low Earth Orbit satellite communication system with a
              Starlink network, enabling increasing bandwidth utilization.
            </p>
            <p className="mt-4 text-gray-600">
              NSC covers a nationwide area for various industries, including Oil
              & Gas, Mining, Plantation, Maritime, IoT ecosystem, and more. We
              are committed to delivering tailored communication services to
              meet customer needs.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={satellitenetwork}
              alt="Satellite Network"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="px-6 py-12 bg-white md:py-20 md:px-12">
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={teams} // Replace with a more suitable image if needed
              alt="Vision and Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 md:text-left">
              Vision & Mission
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Vision</h3>
              <p className="mt-2 text-gray-600">
                To become revolutionize the satellite service provider by
                providing state-of-the-art technology and innovative solutions
                to bridge the digital divide in Indonesia.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Mission</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>
                  To provide quality services and appropriate solutions to
                  resolve the digital divide in Indonesia.
                </li>
                <li>To honorably serve the best value to our stakeholders.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-12 bg-gray-50 md:py-20 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-8">
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">S</h3>
            <p className="mt-2 text-gray-600">Service Oriented</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">T</h3>
            <p className="mt-2 text-gray-600">Trust Worthy</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">A</h3>
            <p className="mt-2 text-gray-600">Accountable</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">R</h3>
            <p className="mt-2 text-gray-600">Respectful</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md md:col-start-2">
            <h3 className="text-xl font-bold text-blue-600">R</h3>
            <p className="mt-2 text-gray-600">Reliable</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">P</h3>
            <p className="mt-2 text-gray-600">Proactive</p>
          </div>
          <div className="col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">M</h3>
            <p className="mt-2 text-gray-600">Manageability Solution</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
