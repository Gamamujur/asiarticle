import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed z-30 flex items-center justify-center w-screen h-screen bg-white"
      initial={{ x: 0 }}
      animate={{
        x: "150%",
        transition: { delay: 2.5, type: "tween" },
      }}
      exit={{
        x: 0,
        transition: { type: "spring", damping: 16, stiffness: 100 },
      }}
    >
      <div>
        <h1 className="text-[30pt] md:text-[40pt] font-semibold tracking-widest text-orange-500 font-cinzel p-20">
          Asiarticle
          <p className="font-sans text-base font-medium text-center text-orange-600">Loading Your Page</p>
        </h1>
        
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
