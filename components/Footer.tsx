import Link from "next/link";

interface FooterProps {
    
}
 
const Footer:React.FC<FooterProps> = () => {
    return ( 
       <div className="w-[1440px] h-[505px] border-t-2 pt-5">
          <div className=" flex justify-between">
           <div>
            <h1 className="font-bold text-2xl">Funiro</h1>
            <p className="mt-12 w-[285px] h-[72px] text-base font-normal text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
           
           </div>

           <div >
            <p className=" text-base font-normal text-[#9F9F9F]">Links</p>
            <div className="flex flex-col gap-11 mt-[55px]">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            </div>
           </div>
           <div>
            <p className=" text-base font-normal text-[#9F9F9F]">Help</p>
            <div className="flex flex-col gap-11 mt-[55px]">
            <Link href={"/"}>Payment Options</Link>
            <Link href={"/"}>Returns</Link>
            <Link href={"/"}>Privacy Policies</Link>
            </div>
          
           </div>

           <div className="mr-24">
            <p className=" text-base font-normal text-[#9F9F9F]">Newsletter</p>
           <div className="mt-[55px]">
           <input type="email" placeholder="Enter Your Email Address" className="border-bottom border-black "/>
            <button className="underline">Subscribe</button>
           </div>
           </div>
        </div>
        <p className="mt-24 border-t-2 pt-10 text-base font-base">2023 furino. All rights reverved</p>
       </div>
     );
}
 
export default Footer;