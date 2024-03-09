"use client"




import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Lenis from '@studio-freight/lenis';
import Navbar from "@/components/Navbar";
import { products } from "@/data/data";
import Products from "@/components/Products";
import ZoomParallax from "@/components/animation/ZoomParalllax";
import Footer from "@/components/Footer";





export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time:any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
  
  return (
    <main className="max-w-[1440px] bg-white overflow-hidden">
     <Navbar/>
     <div className="mt-6 relative">
      <img src="/interiorbg.png" alt="bg" />
      <div className="bg-[#FFF3E3] w-[40rem] h-[27rem] pl-5 pt-12 absolute top-36 right-14 ">
         <p className="text-sm font-medium">New Arrival</p>
         <h1 className="font-bold text-[52px] w-[390px] h-[127px] text-[#B88E2F]">Discover Our New Collection</h1>
         <p className="text-sm w-[390px] pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
         <button className="bg-[#B88E2F] px-[35px] mt-12 py-[7px] text-white">Buy Now</button>
      </div>
     </div>
     {/* Browse */}

     <div className="mt-[3.5rem] ">
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Browse The Range</h1>
      <p className="text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-3 mt-[3.9rem]  ml-16">
        <div>
        <img src="/Dining.png" alt="dining" className="w-[23rem] h-[30rem] " />
        <p className="text-center mt-[1.8rem] text-[24px] font-semibold ">Dining</p>
        </div>
        <div>
        <img src="/living room.png" alt="lv" className="w-[23rem] h-[30rem]" />
        <p className="text-center mt-[1.8rem] text-[24px] font-semibold ">Living</p>
        </div>
        <div>
        <img src="/Bedroom.png" alt="bd" className="w-[23rem]  h-[30rem]" />
        <p className="text-center mt-[1.8rem] text-[24px] font-semibold ">Bedroom</p>
        </div>
      </div>

     </div>

      {/* product */}
      <div className="mt-14 ml-24 mr-24">
        <h1 className="text-center text-[#3A3A3A] font-bold text-4xl">Our Products</h1>
      <div className="grid grid-cols-4 gap-5 mt-8">
       {products.map((product:any)=>(
        <Products {...product} />
      ))}
       </div>
       <div className="flex justify-center mt-8">
       <button className="w-[245px] h-[48px] border  border-[#B88E2F] text-[#B88E2F] text-base font-semibold">Show More</button>
       </div>
      </div>

      {/* beautiful room */}
       <div className="w-full h-[41rem] flex bg-[#FCF8F3] mt-16 gap-3 ml-24 ">
          <div className="  w-[422px] h-[220px] mt-56 ">
            <h1 className="text-[#3A3A3A] font-bold text-4xl">50+ Beautiful rooms inspiration</h1>
            <p className="text-[#616161] w-[368px] font-medium text-base">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="bg-[#B88E2F] px-[36px] mt-12 py-[12px] text-white">Explore More</button>
          </div>
           <div className="relative">
           <img src="/room1.png" alt="room 1" width={404}  height={582}/>
           <div className="absolute flex flex-col justify-center items-center w-[217px] h-[130px] bg-white bottom-24 left-6 z-40">
            <p className="text-[#727272]">01 __ Bed Room</p>
            <h2 className="text-[#3A3A3A] font-semibold text-2xl">Inner Peace</h2>
           
           </div>
           <div className="absolute bottom-24 right-32">
           <button className="bg-[#B88E2F]  px-3  py-3 mt-12  text-white"><FaArrowRight width={10} height={10}/></button>
           </div>
           </div>
           <div>
           <img src="/room2.png" alt="room 2" width={372} height={486}/>
           </div>
       </div>

        {/* share setup */}
        <ZoomParallax/>

        {/* Footer */}
         <Footer/>
    </main>
  )
}
