import { RiArrowDropDownFill } from "react-icons/ri";
import { faqItems, productItems } from "../../assets/data/Data";
import { useHomeHooks } from "../../hooks/company/Home";
import bgpeta from "../../assets/Digital Slide Mobile Background.png";
import leogeo from "../../assets/Leo Geosat.webp";
import { bannerItems } from "../../assets/data/Data"; // Assuming bannerItems is in the same folder
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { openFaq, setOpenFaq } = useHomeHooks();
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change slides every 5 seconds
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Banner Section */}
      <section className="relative w-full h-screen bg-center bg-cover">
        <Slider {...sliderSettings}>
          {bannerItems.map((item) => (
            <div key={item.id} className="relative w-full h-screen">
              <div className="absolute inset-0 z-0 w-full">
                <img
                  src={item.img.src}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

              <div className="container relative z-20 flex flex-col items-center justify-center h-full gap-5 mx-auto text-center">
                <div className="flex flex-col items-center w-full px-10 text-white md:w-3/4 lg:w-1/2">
                  {
                    item.icon.src ? (
                      <div className="w-40 h-40">
                        <img
                          src={item.icon.src}
                          alt={item.icon.alt}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ) : null /* or you can use hidden class on an empty div */
                  }
                  <h1 className="text-4xl font-bold md:text-6xl">
                    {item.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl">{item.description}</p>
                  <button className="px-6 py-2 mt-6 text-lg font-semibold text-orange-500 bg-white rounded-full shadow-md hover:bg-gray-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Product Section */}
      <section className="w-full px-5 py-10 h-fit md:px-0">
        <div className="container grid w-full grid-cols-1 gap-5 mx-auto md:grid-cols-3">
          {/* Card */}
          {productItems.map((item) => (
            <div
              key={item.id}
              className="relative w-full overflow-hidden bg-center bg-cover h-80 rounded-3xl group"
              data-aos="fade-up"
              style={{
                backgroundImage: `url(${item.img.src})`, // Access img.src instead of img
              }}
            >
              {/* Smooth Hover Overlay from Bottom for Desktop and Tablet */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden text-white transition-all duration-300 ease-in-out bg-black opacity-50 rounded-3xl md:transform md:translate-y-full md:group-hover:translate-y-0"></div>

              {/* Static content on card with smooth text animation for Desktop */}
              <div className="absolute z-20 p-5 bottom-5 md:transition-all md:duration-300 md:ease-in-out md:group-hover:bottom-1/4">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white md:hidden">
                  {/* Displayed by default on mobile */}
                  {item.description}
                </p>
                <button className="px-4 py-2 mt-4 text-black bg-white rounded-full md:hidden">
                  {/* Displayed by default on mobile */}
                  Learn More
                </button>

                {/* Hidden on mobile, shown with hover on larger screens */}
                <p className="hidden text-sm text-white md:group-hover:block">
                  {item.description}
                </p>
                <button className="hidden px-4 py-2 mt-4 text-black bg-white rounded-full md:group-hover:block">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section GEO dan LEO */}
      <section
        className="relative w-full h-screen px-5 py-10 bg-center bg-cover md:py-20 md:px-0"
        style={{
          backgroundImage: `url(${bgpeta})`,
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-black opacity-20"></div>
        <div className="container relative z-20 flex flex-col-reverse w-full h-full gap-5 mx-auto md:flex-row">
          <div
            className="flex flex-col justify-center w-full h-full gap-2.5"
            data-aos="fade-up"
          >
            <p className="text-3xl font-bold text-white md:text-5xl">
              LEO SAT EDUCATIONAL HEADING
            </p>
            <p className="text-sm text-white md:text-xl xl:text-2xl">
              Berdedikasi untuk memberikan konektivitas di seluruh wilayah
              Indonesia, kami memberikan edukasi yang mendalam tentang Orbit
              satelit. Ada dua kategori orbit yang perlu dipahami, mulai dari
              GEO (Geostationary Earth Orbit) dan LEO (Low Earth Orbit). Kedua
              kategori orbit satelit ini memiliki karakteristik serta kegunaan
              yang unik dan kegunaan yang berbeda. Namun persamaannya adalah
              keduanya memiliki peran yang penting dalam infrastruktur satelit
              global untuk dapat memenuhi berbagai kebutuhan komunikasi dan
              penelitian.
            </p>
            <button className="px-6 py-2 text-lg font-semibold text-white bg-orange-500 rounded-full w-fit">
              Learn More
            </button>
          </div>
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain"
            data-aos="fade-up"
            style={{
              backgroundImage: `url(${leogeo})`,
            }}
          ></div>
        </div>
      </section>

      {/* section faq */}
      <section className="w-full h-full px-5 py-10 bg-[#02254F] md:px-0 text-white">
        <div
          className="container flex flex-col gap-5 mx-auto"
          data-aos="fade-up"
        >
          <p className="text-3xl font-bold md:text-5xl">FAQ</p>
          <div className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <div key={item.id} className="border-b-2">
                <button
                  className="flex flex-row items-center justify-between w-full py-3 text-xl font-semibold text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === item ? null : item)}
                >
                  <p>{item.question}</p>
                  <RiArrowDropDownFill className="w-6 h-6" />
                </button>
                {openFaq === item && (
                  <p className="px-4 pb-4 text-md">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
