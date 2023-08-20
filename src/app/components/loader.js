import { motion } from "framer-motion";

const { useEffect } = require("react");

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  });

  

  return (
    <>
   
        
    <motion.div initial={{opacity: 0}} transition={{opacity: 1, duration: 1000, delay: 0.1}} animate={{opacity: 1}} className="absolute z-50 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 translate">
    <h1 className="absolute z-50 justify-center m-auto text-6xl font-bold text-center">
            2023
          </h1>
    </motion.div>
      <motion.div
        initial={{ y: 2000, x: -300, rotate: 15, /* opacity: 0 */ }}
        animate={{ y: -1000, x: -300, rotate: 17, /* opacity: 100 */ }}
        transition={{
          type: "easeInOut",
          stiffness: 100,
          duration: 1.7,
          opacity: 0,
        }}
        className="bg-[#FFA500] w-[300vw] h-[100vh] m-auto relative z-30 "
      >
     
      </motion.div>

      {/*   <motion.div 
        initial={{y: 2000, x: -300, rotate: 15, opacity: 0, delay: 0.1}}
          animate={{ y: -1000, x: -300, rotate: 17, opacity: 100}}
          transition={{ type: "easeInOut", stiffness: 100, duration: 2, opacity: 0}}
          className="bg-[#000] w-[300vw] h-32 m-auto relative z-0">

        </motion.div> */}
    </>
  );
};

export default Loader;
