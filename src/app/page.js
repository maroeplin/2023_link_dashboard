"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Slider from "./components/slider";
import Loader from "./components/loader";

const projects = [
  {
    index: 0,
    name: 'Bozkurt Burak Oguzhan und Darkhabani Mohammed',
    url: 'https://metacampus-mmsys.vercel.app/',
    image: '/images/00.jpg'
  },
  {
    index: 1,
    name: 'Tanja Hoogestraat und Mia Behnke',
    url: 'https://glittery-trifle-375e1d.netlify.app/detail',
    image: '/images/01.jpg'
  },
  {
    index: 2,
    name: 'Ngoc Anh Tran',
    url: 'https://ngoc-anh.netlify.app/',
    image: '/images/02.jpg'
  },
  {
    index: 3,
    name: 'Memo Loran Tuku, Manuel Said und Shion Kimu',
    url: 'https://javascript-indol.vercel.app/',
    image: '/images/04.jpg'
  },
  {
    index: 4,
    name: 'Josef Debase',
    url: 'https://jd21195.github.io/Studium-Adventure/',
    image: '/images/05.jpg'
  },
  {
    index: 5,
    name: 'Leonora Zullufi und Ahmad Hasan Ahmad',
    url: 'https://ahmadhasan.netlify.app/',
    image: '/images/06.jpg'
  },
  {
    index: 6,
    name: 'Marcel Bastian Kromm',
    url: 'https://mm-sys-marcel-kromm.netlify.app/',
    image: '/images/07.jpg'
  },
  {
    index: 7,
    name: 'Cina Behzad und Ahmad Aroud',
    url: 'https://metacampus-mmsys.vercel.app/',
    image: '/images/08.jpg'
  },
  {
    index: 8,
    name: 'Elem Yildez und Ilknur Gencer',
    url: 'http://elem1.wp.hs-hannover.de/Abgabe_Javascript/',
    image: '/images/09.jpg'
  },
  {
    index: 9,
    name: 'Anastasia Cernyh und Celine Akgün',
    url: 'http://anastasiacernyh.wp.hs-hannover.de/mms_abgabe/',
    image: '/images/10.jpg'
  },
  {
    index: 10,
    name: 'Ergün Gizem und Anna Feldbarg',
    url: 'https://hergizhappa.github.io/MMS-Projekt/',
    image: '/images/11.jpg'
  },
]

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading ? document.querySelector("body").classList.add("loading") : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (

    <AnimatePresence>

    {loading ? (<motion.div>
      <Loader setLoading={setLoading} />
    </motion.div>) : (
      <>
     
    <Slider 
      projects={projects}
    />
   
    </>
    )}
    
  
    
    </AnimatePresence>
  );
}
