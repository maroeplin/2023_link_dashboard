"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Slider from "./components/slider";

export default function Home() {

  return (

    <>
    <Slider 
      slides={[

        '/images/00.jpg',
        '/images/01.jpg',
        '/images/03.webp',
        '/images/04.webp', 
        '/images/04.webp',
        '/images/04.webp',
        '/images/04.webp',
      ]}
    />
    </>
    
  );
}
