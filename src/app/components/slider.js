import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Slider({ slides }) {
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
    if (firstVisibleIndex + maxVisible < slides.length) {
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
    <main className="w-full h-screen bg-[#ffffff]">
      <div className="w-10/12 m-auto">
        <div className="pt-24 text-3xl font-bold text-start">
            <h1 className="pb-4 font-bold ">Projekte</h1></div>
        <p className="w-2/3">Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. </p>
      </div>

      <div className="w-10/12 m-auto overflow-hidden max-w-screen-2xl">
        <div className="flex items-center justify-center w-full h-auto gap-2 pt-6 pb-12 m-auto">
          {slides
            .slice(firstVisibleIndex, firstVisibleIndex + maxVisible)
            .map((url, index) => (
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
                  src={url}
                  width={300}
                  height={300}
                  alt="test"
                  className="object-cover h-full bg-cover border rounded-left-px"
                />
                <div className="pt-2">
                  <h2 className="font-bold">Name</h2>
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://coolors.co/palettes/trending"
                  >
                    <p>Link</p>
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="flex justify-center gap-32 m-auto text-center">
        <button className="px-8 py-2 rounded-lg bg-[#FFA500] text-black" onClick={showPrevious}>&lt;&lt;</button>
        <button onClick={showNext}>&gt;&gt;</button>
      </div>
    </main>
  );
}
