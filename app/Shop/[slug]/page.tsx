

import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import { ProList, products } from "@/data/data";

import { notFound } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaStar, FaTwitter } from "react-icons/fa6";

interface ShopDetailsProps {
  params: {
    slug: string;
  };
}
export const generateStaticParams = () =>
  ProList.map((Product) => ({ slug: Product.id }));

const getProductDetailsByParams = (slug: string) => {
  const foundData = ProList.find((p) => p.id === slug);
  if (!foundData) {
    notFound();
  }
  return foundData;
};


const ShopDetails: React.FC<ShopDetailsProps> = ({ params: { slug } }) => {
 
  const shopToRender = getProductDetailsByParams(slug);
  return (
    <div className="w-full h-full overflow-hidden  text-black">
      <Navbar/>
      <div className=" px-4 flex mt-16 ml-[99px] gap-5">
        <div className="w-[76px] h-[416px] flex flex-col gap-8">
          <img
            src={shopToRender.img}
            alt={shopToRender.name}
            className="w-[76px] h-[80px] rounded-lg"
          />
          <img
            src={shopToRender.img}
            alt={shopToRender.name}
            className="w-[76px] h-[80px] rounded-lg"
          />
          <img
            src={shopToRender.img}
            alt={shopToRender.name}
            className="w-[76px] h-[80px] rounded-lg"
          />
           <img
            src={shopToRender.img}
            alt={shopToRender.name}
            className="w-[76px] h-[80px] rounded-lg"
          />
        </div>
        <div className="w-[481px] h-[500px]">
           <img
          src={shopToRender.img}
          alt={shopToRender.name}
          className="w-[423px] h-[500px] rounded-lg"
        />
        </div>

        <div className="w-[600px] h-[730px]">
          <h1 className="text-[42px] font-normal">{shopToRender.name}</h1>
          <p className="text-[24px] font-medium text-[#9F9F9F]">{shopToRender.price}</p>
           <div className="flex gap-1  items-center ">
           {shopToRender.stars?.map((star)=>(
           <div>
             <FaStar width={20} height={20} className="text-[#FFC700] mr-2" />
           
           </div>
          ))}
           <p className="border-s-2 pl-5 text-[13px] text-[#9F9F9F]">{shopToRender.reviews} Customer Review</p>
           </div>
          <p className="text-[13px] font-normal w-[424px] h-[80px] mt-4">{shopToRender.about}</p>
          <p className="text-[14px]  text-[#9F9F9F]">Size</p>
          <div className="flex gap-4 mt-3">
                <button className="w-[30px] h-[30px] text-white rounded-lg bg-[#B88E2F]">L</button>
                <button className="w-[30px] h-[30px] bg-[#F9F1E7] rounded-lg">XL</button>
                <button className="w-[30px] h-[30px] bg-[#F9F1E7] rounded-lg">XS</button>
               
            </div>
            <p className="text-[14px] text-[#9F9F9F] mt-4">Color</p>
            <div className="flex gap-4 mt-3">
              <button className="w-[30px] rounded-full  h-[30px] bg-[#816DFA]"></button>
              <button className="w-[30px] rounded-full  h-[30px] bg-[#000000]"></button>
              <button className="w-[30px] rounded-full  h-[30px] bg-[#B88E2F]"></button>
            </div>
           <div className="flex  mt-8 gap-4 border-b border-b-[#D9D9D9] pb-14">
           <div className="flex w-[123px]  h-[64px] gap-5 justify-center items-center border border-black rounded-lg">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>

          <div>
            <button className="w-[215px] h-[64px] border border-black rounded-lg">Add to Cart</button>
          </div>
          <div>
            <button className="w-[215px] h-[64px] border border-black rounded-lg"><span>+</span> Compare</button>
          </div>
           </div>
           <div>
          <div className="flex mt-[41px] pb-3 gap-5 text-[#9F9F9F] text-base">
            <p>SKU  <span>:</span></p>
            <p>{shopToRender.SKU}</p>
          </div>
          <div className="flex gap-5 pb-3 text-[#9F9F9F] text-base">
            <p>Category  <span>:</span></p>
            <p>{shopToRender.Category}</p>
          </div>
          <div className="flex gap-5 pb-3 text-[#9F9F9F] text-base">
            <p>Tags  <span>:</span></p>
            <p>{shopToRender.Tags}</p>
          </div>
          <div className="flex gap-5 pb-3">
            <p className="text-[#9F9F9F] text-base">Share  <span>:</span></p>
             <div className="flex items-center gap-6">
             <FaFacebook width={20} height={20}/>
             <FaLinkedin width={20} height={20} />
             <FaTwitter width={20} height={20}/>
             </div>
          </div>
           </div>
        </div>
         
      </div>
      <Description 
      desOne={shopToRender.descriptionOne} 
      desTwo={shopToRender.descriptionTwo} 
      img1={shopToRender.img} 
      img2={shopToRender.img}/>

<div className="mt-14 ml-24 mr-24 ">
        <h1 className="text-center text-[#3A3A3A] font-medium text-4xl">Related Products</h1>
      <div className="grid grid-cols-4 gap-5 mt-8">
       {products.map((product:any)=>(
        <Products {...product} />
      ))}
       </div>
       <div className="flex justify-center mt-8">
       <button className="w-[245px] h-[48px] border  border-[#B88E2F] text-[#B88E2F] text-base font-semibold">Show More</button>
       </div>
      </div>
       <div className="mt-16">
       <Footer/>  
       </div>
    </div>
  );
};

export default ShopDetails;
