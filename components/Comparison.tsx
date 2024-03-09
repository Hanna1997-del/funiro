
import { CompareProduct } from "@/data/data";
import { FaStar } from "react-icons/fa6";

interface ComparProps {
   
}
 
const Compar: React.FC<ComparProps> = () => {
    return ( 
       
            <div>

<div className="w-[1332px] h-full mt-8">
        <div className="grid grid-cols-4 border-b pb-5 border-b-[#E8E8E8]">
          <div className="w-[223px] h-[200px] ml-6 ">
            <h1 className="font-medium text-3xl">
              Go to Product page for more Products
            </h1>
            <button className="font-medium text-xl text-[#727272] border-b border-black">
              View More
            </button>
          </div>
          {CompareProduct.map((cp: any) => (
               <div className="">
               <img src={cp.img} alt="" className="w-[280px] h-[177px] rounded-lg" />
                 <h1 className="font-medium text-2xl">{cp.name}</h1>
                 <p className="font-medium text-lg">{cp.price}</p>
                 <div className="flex  items-center">
                     <h2>{cp.rating}</h2>
                     {cp.stars.map((star:any)=>(
                         <div>
                         <FaStar width={20} height={20} className="text-[#FFC700] mr-2" />
                       
                       </div>
                     ))}
                     <p className="font-normal text-sm text-[#9F9F9F]">{cp.reviews} Review</p>
 
                 </div>
               </div>
          ))}

          <div>
            <h1 className="font-semibold text-2xl">Add A Product</h1>
            <button className="w-[242px] h-[39px] bg-[#B88E2F] font-semibold text-sm text-white">
              Choose a Product
            </button>
          </div>

         
        </div>
        <div className="ml-8 mt-10 ">
        
        <h1 className="font-medium text-xl">General</h1>
         <div className="grid grid-cols-4 py-8 ">
         <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8] ">
        
          <p>Sales Package</p>
          <p>Model Number</p>
          <p>Secondary Material</p>
          <p>Configuration</p>
          <p>Upholstery Material</p>
          <p>Upholstery Color</p>
         </div>
          {CompareProduct.map((cp)=>(
            <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8] pl-8">
              <p>{cp.package}</p>
              <p>{cp.Model}</p>
              <p>{cp.Material}</p>
              <p>{cp.Configuration}</p>
              <p>{cp.Upholstery}</p>
              <p>{cp.Color}</p>
            </div>
          ))}
         </div>
        </div>

        <div className="ml-8 mt-10">
        
        <h1 className="font-medium text-xl">Product</h1>
         <div className="grid grid-cols-4 py-8">
         <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8]">
        
          <p>Filling Material</p>
          <p>Finish Type</p>
          <p>Adjustable Headrest</p>
          <p>Maximum Load Capacity</p>
          <p>Origin of Manufacture</p>
          
         </div>
          {CompareProduct.map((cp)=>(
            <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8] pl-8">
              <p>{cp.Filling}</p>
              <p>{cp.FinishType}</p>
              <p>{cp.Adjustable}</p>
              <p>{cp.Capacity}</p>
              <p>{cp.Manufacture}</p>
              
            </div>
          ))}
         </div>
        </div>

        <div className="ml-8 mt-10">
        
        <h1 className="font-medium text-xl">Dimensions</h1>
         <div className="grid grid-cols-4 py-8">
         <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8]">
        
          <p>Width</p>
          <p>Height</p>
          <p>Depth</p>
          <p>Weight</p>
          <p>Seat Height</p>
          <p>Leg Height</p>
          
         </div>
          {CompareProduct.map((cp)=>(
            <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8] pl-8">
              <p>{cp.Width}</p>
              <p>{cp.Height}</p>
              <p>{cp.Depth}</p>
              <p>{cp.Seat_Height}</p>
              <p>{cp.Leg_Height}</p>
              
            </div>
          ))}
         </div>
        </div>

        <div className="ml-8 mt-10">
        
        <h1 className="font-medium text-xl">Warranty</h1>
         <div className="grid grid-cols-4 py-10">
         <div className="flex flex-col gap-12 border-r border-r-[#E8E8E8]">
        
          <p>Warranty Summary</p>
          <p>Warranty Service Type</p>
          <p>Covered in Warranty</p>
          <p>Not Covered in Warranty</p>
          <p>Domestic Warranty</p>
         
          
         </div>
          {CompareProduct.map((cp)=>(
            <div className="flex flex-col gap-5 border-r border-r-[#E8E8E8] pl-8" >
              <p>{cp.Warranty_Summary}</p>
              <p>{cp.Warranty_Service}</p>
              <p>{cp.CIW}</p>
              <p>{cp.NCIW}</p>
              <p>{cp.DW}</p>

              <button className="w-[215px] mt-10 h-[64px] text-white bg-[#B88E2F] rounded-lg">Add To Cart</button>
              
            </div>

           
          ))}
         </div>
        </div>
      </div>
             

              
            </div>
            
        
     );
}
 
export default Compar;