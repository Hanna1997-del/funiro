import Link from "next/link";
import { FaUserPen } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    const Links = [
        {
            href: "/",
            path: "Home"
        },
        {
            href: "/Shop",
            path: "Shop"
        },
        {
            href: "/about",
            path: "About"
        },
        {
            href: "/contact",
            path: "Contact"
        },
    ]
    return ( 
        <div className="flex justify-around items-center ">
            <div className="flex gap-1 justify-center items-center">
                <img src="Meubel House.png" alt="logo" width={50} height={32} />
                <h1 className="font-bold text-[2rem]">Furniro</h1>
            </div>
            <div className="text-[1rem] font-medium flex gap-16">
                {Links.map((link,index)=>(
                   <div key={index}>
                     <Link href={link.href}>{link.path}</Link>
                   
                   </div>
                ))}
            </div>
            <div className="flex gap-11">
            <FaUserPen width={28} height={28}/>
            <FiSearch width={28} height={28} />
            <IoMdHeartEmpty width={28} height={28}/>
            <MdShoppingCart width={28} height={28}/>
            </div>
        </div>
     );
}
 
export default Navbar;