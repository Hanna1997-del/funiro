import clsx from "clsx";

import Link from "next/link";

interface ProductsProps {
    img:string;
    percent:string;
    name:string;
    title:string;
    price:string;
    discount:string;
    id:number
}
 
const Products: React.FC<ProductsProps> = ({img,id,percent,name,title,price,discount}) => {
    
    return ( 
        <div >
         
            <div className="bg-[#F4F5F7] h-[446px]">
               <div className="relative" key={id}>
               <Link href={`/Shop/${id}`}>
               <img src={img} alt="" width={285} height={301}/>
               </Link>
              
               {percent? (  <p className={clsx(
                "absolute text-white top-6 right-6  flex justify-center items-center w-12 h-12 rounded-full",
                percent === "New" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
               )}>{percent}</p>):(<h2></h2>)}
               </div>
               
               <div className="mt-4 ml-4">
               <h1 className="text-2xl font-semibold">{name}</h1>
               <p className="text-base font-medium text-[#898989] pt-2">{title}</p>
               <div className="flex gap-3 items-center">
               <h2 className="text-[#3A3A3A] text-xl font-semibold pt-2">{price}</h2>
               {discount? (<h2 className="text-[#B0B0B0] font-normal">{discount}</h2>):(<h2></h2>)}
                </div>
               </div>
              
            </div>
           
          
        </div>
       
     );
}
 
export default Products;