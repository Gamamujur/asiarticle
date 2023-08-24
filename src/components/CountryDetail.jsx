import { useParams } from "react-router-dom";
import { countrylist, countrydetail } from "../datafile/country";
import Wrapper from "../assets/Wrapper";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CountryDetail = () => {
  const { id } = useParams();
  const countrydetaildata = countrydetail.find(
    (country) => country.id === parseInt(id)
  );

  const countrydesc = countrylist.find(
    (country) => country.id === parseInt(id)
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const imgVariants = {
    initial: {
      y: "-150%",
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "100%",
    },
  };

  const wordVariant = (index) => ({
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.5 + index * 0.01,
        duration: 1,
      },
    },
  });

  return (
    <>
      <div className="relative">
        <section
          id="imgcontainer"
          className="sticky top-0 w-screen bg-slate-100 h-fit"
        >
          <div className="w-screen pt-20 overflow-y-hidden md:pt-4 h-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={countrydetaildata.img[activeIndex]}
                alt={countrydetaildata.name}
                className="object-cover w-[90vw] md:w-3/4 lg:w-1/2 mx-auto h-[300px] md:h-[500px] rounded-3xl"
                loading="lazy"
                variants={imgVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center w-screen pb-4 mt-2">
            {countrydetaildata.img.map((imageUrl, index) => (
              <button
                key={imageUrl}
                className={`mr-2 h-14 w-14 p-1 rounded-md ${
                  index === activeIndex && "bg-red-400 transition duration-300"
                }`}
                onClick={() => handleIndexChange(index)}
              >
                <img
                  src={imageUrl}
                  alt={countrydetaildata.name}
                  className="object-center w-full h-full rounded-md"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </section>

        <section
          id="description"
          className="sticky top-0 w-screen pb-10 bg-gray-100 h-fit"
        >
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover opacity-10"
            style={{
              backgroundImage: `url(${countrydesc.backdrop})`,
            }}
          />
          <div className="relative z-20 flex flex-col items-center w-full h-full">
            <h1 className=" mt-10 text-[35pt] md:text-[40pt] font-medium font-cinzel">
              {countrydesc.name}
            </h1>
            <p className="w-full p-1 mt-20 overflow-hidden text-sm font-medium leading-loose text-center bg-orange-300 h-fit md:w-1/2 md:text-lg font-mons">
              {countrydesc.desc}
            </p>
            <p className="w-[90vw] md:w-1/2 mt-10 text-sm leading-7 md:text-md font-medium font-mons whitespace-break-spaces text-left">
              <span>
                {countrydetaildata.description
                  .split(" ")
                  .map((description, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-1"
                      variants={wordVariant(index)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: "all" }}
                    >
                      {description}
                    </motion.span>
                  ))}
              </span>
            </p>

            <p className="w-[90vw] md:w-1/2 mt-10 text-sm leading-7 md:text-md font-medium font-mons whitespace-break-spaces text-left">
              <span>
                {countrydetaildata.weather.split(" ").map((weather, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    variants={wordVariant(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: "all" }}
                  >
                    {weather}
                  </motion.span>
                ))}
              </span>
            </p>

            <div className="px-2 text-center">
              <h1 className=" mt-10 text-[20pt] md:text-[25pt] font-semibold font-rale mb-4">
                FunFacts
              </h1>
              {countrydetaildata.funFacts.map((facts, index) => (
                <li
                  key={index}
                  className="mb-2 text-sm text-left whitespace-normal font-mons"
                >
                  {facts}
                </li>
              ))}

              <h1 className=" mt-10 text-[20pt] md:text-[25pt] font-semibold font-rale mb-4">
                Popular Activities
              </h1>
              {countrydetaildata.popularActivities.map((facts, index) => (
                <li
                  key={index}
                  className="mb-2 text-sm text-left whitespace-normal font-mons"
                >
                  {facts}
                </li>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const WrappedCountryDetail = Wrapper(CountryDetail);
export default WrappedCountryDetail;
