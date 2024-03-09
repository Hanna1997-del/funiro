"use client"
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Service from "@/components/Service";
import { ProList } from "@/data/data";
import clsx from "clsx";

import Link from "next/link";
import { useState } from "react";

interface ShopProps {
    
}
 
const Shop: React.FC<ShopProps> = () => {
   
    return ( 
        <div className="overflow-hidden">
            <Navbar/>
            <Banner name={"Shop"} href1={"/"} href2={"/Shop"} path1={"Home"} path2={"Shop"}/>
            <div className="w-[1440px] h-[100px] bg-[#F9F1E7] flex justify-around">
               <div className="flex justify-center items-center gap-5 ">
               <div className="flex justify-center items-center gap-2">
               <button>
                <img src="filter.png" alt="filter" width={25} height={25} />
               </button>
               <p>Filter</p>
               </div>
               <button>
                <img src="grid.png" alt="filter" width={24} height={24} />
               </button>
               <button>
                <img src="view-list.png" alt="filter" width={24} height={24} />
               </button>
                <p className="pl-10 border-s-2 border-[#9F9F9F]">Showing 1–16 of 32 results</p>
               </div>
                 <div className="flex gap-2">
                     <div className="flex justify-center items-center gap-2">
                     <h1>Show</h1>
                    <input  placeholder="16"  className="w-[55px] h-[55px] px-5"/>
                     </div>
                     <div className="flex justify-center items-center gap-2">
                     <h1>Short by</h1>
                    <input type="text" placeholder="Default" className="w-[188px] h-[55px] px-5" />
                     </div>
                 </div>
            </div>
            {/* Products list */}
            
             <div className="mt-14 ml-24 mr-24">
             <div className=" grid grid-cols-4 gap-5 mt-8">
                 {ProList.map((list:any) => (
                  <Products {...list}/>
                 ))}
              </div>
              <div className="flex gap-5 justify-center mt-[70px]">
                <button className="w-[60px] h-[60px] text-white rounded-lg bg-[#B88E2F]">1</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">2</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">3</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">Next</button>
            </div>
              </div>

            <Service/>
            <Footer/>
        </div>
     );
}
 
export default Shop;