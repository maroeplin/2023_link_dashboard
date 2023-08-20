import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <main className="w-full h-auto bg-[#ffffff]">
      <div className="w-10/12 m-auto">
        <div className="pt-24 text-3xl font-bold text-start">
            <h1 className="pb-4 font-bold ">Multimediasysteme</h1></div>
        <p className="w-2/3">Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. <span className="font-semibold cursor-pointer" href="#footer"><Link href="#footer">Impressum</Link></span> </p>
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
       absolute z-0 w-full h-[280px] md:bg-[#FFA500]"></div>
      
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
                  alt="test"
                  className="object-cover h-full bg-cover border rounded-xl"
                />
                
                <div className="pt-2">
                  <h2 className="font-bold">{project.name}</h2>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.url}
                  >
                    <p>zum Projekt</p>
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

<div className="w-full ">
    <div className="w-10/12 m-auto pt-[12vh] pb-12 " id="footer">
      <Image src={Logo} />
    </div>
    </div>
    </main>
  );
}
