import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countrylist } from "../datafile/country";
import Wrapper from "../assets/Wrapper";

const Hero = ({ handleButtonRoute }) => {
  const [activeCountry, setActiveCountry] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const preloadImages = async () => {
    const images = countrylist.map((country) => country.cover);
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    try {
      await Promise.all(imagePromises);
      setLoading(false);
    } catch (error) {
      console.error("Error preloading images:", error);
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  const countryVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-50%" },
  };

  const imgvariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const handleCountryChange = (index) => {
    setActiveCountry(index);
  };

  return (
    <div
      className={`w-screen h-screen bg-white bg-cover bg-center bg-no-repeat relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/50" />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${countrylist[activeCountry].cover})`,
            }}
            key={activeCountry}
            variants={imgvariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-start justify-center w-full h-full p-4 md:w-1/2">
        <div className="flex flex-col p-2 overflow-hidden bg-gradient-to-tr from-black/20 to-slate-600/20 backdrop-blur-sm backdrop-contrast-75">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCountry}
              variants={countryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4"
            >
              <h2 className="mb-5 text-3xl font-bold tracking-wider text-white font-mons">
                {countrylist[activeCountry].name}
              </h2>
              <p className="mb-5 text-[16px] font-light leading-loose tracking-wide text-white md:leading-relaxed font-mons md:text-lg">
                {countrylist[activeCountry].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4">
          <button
            className="w-32 h-10 text-base font-medium tracking-wide text-white transition duration-300 bg-green-600 hover:scale-110 hover:bg-green-800"
            onClick={() => {
              handleButtonRoute(countrylist[activeCountry].id);
            }}
          >
            Learn More
          </button>
        </div>

        <div className="mt-4">
          {countrylist.map((country, index) => (
            <button
              key={country.id}
              className={`py-2 px-2 mr-4 rounded ${
                activeCountry === index ? "bg-green-200/40" : ""
              } hover:bg-green-700 transition-colors`}
              onClick={() => handleCountryChange(index)}
            >
              <img
                src={country.icon}
                alt={country.name}
                className="w-5 h-auto"
                // Tambahkan efek bayangan pada ikon
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroWrap = Wrapper(Hero);
export default HeroWrap;
