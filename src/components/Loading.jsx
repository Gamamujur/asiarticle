import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Loading = () => {
  const controls = useAnimation();
  
  const loadingAnimation = {
    width: ["0%", "100%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    controls.start(loadingAnimation);
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-sky-200">
      <motion.div
        className="h-2 bg-blue-300 rounded-md"
        initial={{ width: "0%" }}
        animate={controls}
      />
      
    </div>
  );
};

export default Loading;
