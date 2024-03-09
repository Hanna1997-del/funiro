"use client";
import { useRef } from "react";
import {motion, useScroll, useTransform} from 'framer-motion';
import Zoommap from "./Zoommap";

interface ZoomParallaxProps {
    
}
 
const ZoomParallax: React.FC<ZoomParallaxProps> = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start","end end"]
    })
    const scale1 = useTransform(scrollYProgress,[0,0.5],[1,3])
    const scale2 = useTransform(scrollYProgress,[0,1],[1,5])
    const scale3 = useTransform(scrollYProgress,[0,1],[1,6])
    const scale4 = useTransform(scrollYProgress,[0,1],[1,7])
    const scale5 = useTransform(scrollYProgress,[0,1],[1,8])
    const scale6 = useTransform(scrollYProgress,[0,1],[1,9])
    const scale7 = useTransform(scrollYProgress,[0,1],[1,10])
    const scale8 = useTransform(scrollYProgress,[0,1],[1,11])
    const scale9 = useTransform(scrollYProgress,[0,1],[1,12])

    const pictures = [
        {
            src:"/image 1.png",
            scale:scale1,
            index:1
        },
        {
            src:"/image 2.png",
            scale:scale2,
            index:2
        },
        {
            src:"/image 3.png",
            scale:scale3,
            index:3
        },
        {
            src:"/image 4.png",
            scale:scale4,
            index:4
        },
        {
            src:"/image 5.png",
            scale:scale5,
            index:5
        },
        {
            src:"/image 6.png",
            scale:scale6,
            index:6
        },
        {
            src:"/image 7.png",
            scale:scale7,
            index:7
        },
        {
            src:"/image 8.png",
            scale:scale8,
            index:8
        },
        {
            src:"/image 9.png",
            scale:scale9,
            index:9
        },
    ]
    return ( 
        <div ref={ref} className="w-full h-[300vh]  relative">
            <div className="flex flex-col items-center">
                <p className="text-[#616161] text-xl font-semibold">Share your setup with</p>
                <h2 className="font-bold text-[40px]">#FuniroFurniture</h2>
            </div>
            <div className="sticky top-0 overflow-hidden h-[200vh] ">
            {pictures.map((pic,index, scale)=>(
                 <Zoommap   {...pic} key={index}    />
            ))}
            </div>
        </div>
     );
}
  
export default ZoomParallax;