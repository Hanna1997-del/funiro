interface ServiceProps {
    
}
 
const Service: React.FC<ServiceProps> = () => {
    return ( 
        <div className="bg-[#FAF3EA] w-[1440px] h-[270px] mt-20 flex gap-10 px-8">
           <div className="flex  items-center gap-2">
           <img src="trophy.png" alt="trophy" className="w-[60px] h-[60px]"/>
             <div>
             <h1 className="font-semibold text-[25px]">High Quality</h1>
             <p className="text-[#898989] font-medium text-xl">crafted from top materials</p>
             </div>
           </div>
           <div className="flex  items-center gap-2">
           <img src="guarantee.png" alt="guarantee" className="w-[60px] h-[60px]"/>
             <div>
             <h1 className="font-semibold text-[25px]">Warranty Protection</h1>
             <p className="text-[#898989] font-medium text-xl">Over 2 years</p>
             </div>
           </div>
           <div className="flex  items-center gap-2">
           <img src="shipping.png" alt="shipping" className="w-[60px] h-[60px]"/>
             <div>
             <h1  className="font-semibold text-[25px]">Free Shipping</h1>
             <p className="text-[#898989] font-medium text-xl">Order over 150 $</p>
             </div>
           </div>
           <div className="flex  items-center gap-2">
           <img src="customer-support.png" alt="customer-support" className="w-[60px] h-[60px]"/>
             <div>
             <h1 className="font-semibold text-[25px]">24 / 7 Support</h1>
             <p className="text-[#898989] font-medium text-xl">Dedicated support</p>
             </div>
           </div>
        </div>
     );
}
 
export default Service;