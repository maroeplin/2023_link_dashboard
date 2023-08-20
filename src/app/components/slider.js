import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/images/Logo.svg"

export default function Slider({ projects }) {
  const [position, setPosition] = useState(0);
  const [maxVisible, setMaxVisible] = useState(4);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

 const getMaxVisibleBasedOnWindowWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 500) {
        return 3;
      } else {
        return 4;
      }
    }
    return 4; // Fallback value for server-side rendering
  };

  useEffect(() => {
    setMaxVisible(getMaxVisibleBasedOnWindowWidth());
  }, []);

   
  const showNext = () => {
    if (firstVisibleIndex + maxVisible < projects.length) {
      setFirstVisibleIndex(firstVisibleIndex + 1);
    }
  };



  const showPrevious = () => {
    if (firstVisibleIndex > 0) {
      setFirstVisibleIndex(firstVisibleIndex - 1);
    }
  };

  const toggleSelected = (index) => {
    if (selectedItemIndex === index) {
      setSelectedItemIndex(null);
    } else {
      setSelectedItemIndex(index);
    }
  };

  return (
  
    
          <motion.div initial={{opacity: 0}} transition={{opacity: 1, duration: 500, delay: 0.1}} animate={{opacity: 1}} className="w-full h-auto bg-[#ffffff]">
          <div className="w-10/12 m-auto">
            <div className="pt-24 text-3xl font-bold text-start">
            <h1 className="pb-4 text-sm font-light ">Studiengang Informationsmanagement</h1>
                <h1 className="pb-4 font-bold ">Multimediasysteme 2023</h1></div>
            <p className="w-2/3">Willkommen zu den Projektarbeiten der Studierenden, aus dem Seminar Multimediasysteme, welches Teil des Studiengangs Informationsmanagement ist. Gelehrt wird dieser an der Hochschule in Hannover. Viel Spaß mit den entstandenen Arbeiten! 
    
             </p>
    
             <div className="flex gap-4 pt-2">
            <p className="font-semibold cursor-pointer hover:text-[#FFA500]" ><Link href="https://im.f3.hs-hannover.de/" target="blank">Zum Studiengang</Link></p>
          
            </div>
          </div>
    
          <div className="relative z-50 flex justify-end gap-8 m-auto text-center max-w-screen-2xl xl:right-[8vw] lg:right-[8vw]">
            <button className="px-8 py-2 rounded-lg hover:text-[#FFA500] text-black bg-white" onClick={showPrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
    
            </button>
            <button className="bg-white px-8 py-2 rounded-lg hover:text-[#FFA500] text-black" onClick={showNext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
    
            </button>
          </div>
    
          <div className="top-[440px]
           absolute z-0 w-full h-[340px] md:bg-[#FFA500]"></div>
          
          <div className="relative z-50 w-10/12 m-auto overflow-hidden max-w-screen-2xl">
            <div className="grid items-center justify-center w-full h-auto grid-cols-3 gap-2 pt-6 m-auto md:flex">
              {projects
                .slice(firstVisibleIndex, firstVisibleIndex + maxVisible)
                .map((project, index) => (
                  <motion.div
                    key={index + firstVisibleIndex}
                    initial={{ scale: 0.6, rotation: -180 }}
                    animate={{
                      rotate: 0,
                      scale:
                        index === selectedItemIndex ? 1 : 0.8,
                      left: 30,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 40,
                    }}
                    className="w-full m-auto overflow-hidden cursor-pointer rounded-xl"
                    onClick={() => toggleSelected(index)}
                  >
                    
                    <Image
                      src={project.image}
                      width={300}
                      height={300}
                      alt="Multimediasysteme"
                      className="object-cover h-full bg-cover border rounded-xl"
                    />
                    
                    <div className="pt-2">
                      <h2 className="font-bold">{project.name}</h2>
                      <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.url}
                      >
                        <p className="hover:font-bold hover:text-white">zum Projekt</p>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
    
    <div className="w-full ">
      <div className="w-10/12 m-auto pt-[12vh] pb-12 grid md:grid-cols-2">
      <div className="" id="footer">
          <Image src={Logo} alt="Logo Hochschule Hannover"/>
        </div>
    
        <div className="pt-12 pl-2 md:pt-0">
          <h5>Verantwortlich für diese Seite:</h5>
          <p>Marcel Rose</p>
          <br/>
          <p>Hochschule Hannover Fakultät III
    </p>
    <p>Expo Plaza 12</p>
    <p>0511 92962558</p></div>
         
      </div>
    
        </div>
        </motion.div>
    

  );
}
