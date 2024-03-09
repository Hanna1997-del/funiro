
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import { FaClock, FaLocationDot, FaPhone   } from "react-icons/fa6";

interface ContactProps {
    
}
 
const Contact:React.FC<ContactProps> = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner name={"Contact"} href1={"/"} href2={"/contact"} path1={"Home"} path2={"Contact"}/>
             <div className="flex flex-col items-center mt-24">
             <h1 className="text-[36px] font-semibold">Get In Touch With Us</h1>
            <p className="font-normal text-base text-[#9F9F9F] w-[644px] pt-1 h-[48px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
             </div>
             <div className="flex justify-around items-center">
              <div className="w-[393px] h-[537px]  flex flex-col gap-10">
              <div className="flex gap-5">
                <FaLocationDot />
                 <div>
                 <h2 className="font-medium text-2xl">Address</h2>
                 <p className="w-[212px] h-[72px] font-normal text-base">236 5th SE Avenue, New York NY10000, United States</p>
                 </div>
                </div>

                <div className="flex gap-5">
                <FaPhone />
                <div>
                <h2 className="font-medium text-2xl">Phone</h2>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
                </div>
                </div>

                <div className="flex gap-5">
                <FaClock />
                 <div>
                 <h2 className="font-medium text-2xl">Working Time</h2>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
                 </div>
                </div>
              </div>

              <div className="w-[635px] h-[923px] flex flex-col justify-center">
                <p className="font-medium text-base">Your name</p>
                <input type="text" placeholder="Abc" className="w-[530px] px-5 mt-5 h-[75px] rounded-lg border border-[#9F9F9F]" />
                <p className="mt-3 font-medium text-base">Email address</p>
                <input type="text" placeholder="Abc@def.com" className="w-[530px] px-5 mt-5 h-[75px] rounded-lg border border-[#9F9F9F]" />
                <p className="mt-3 font-medium text-base">Subject</p>
                <input type="text" placeholder="This is an optional" className="w-[530px] h-[75px] px-5 mt-5 rounded-lg border border-[#9F9F9F]" />
                <p className="mt-3 font-medium text-base">Message</p>
               <textarea name="" id="" className="w-[530px] h-[120px] mt-5 px-5 rounded-lg border border-[#9F9F9F]"></textarea>
               <button className="bg-[#B88E2F] mt-12 rounded-md text-white w-[237px] h-[55px]">Submit</button>
              </div>
              
             </div>
             <Service/>

            <div className="mt-5">
            <Footer/>
            </div>
           
        </div>
     );
}
 
export default Contact;