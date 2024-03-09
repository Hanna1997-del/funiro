import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";

interface BannerProps {
    name: string;
    href1:string;
    href2:string;
    path1: string;
    path2:string;
}
 
const Banner: React.FC<BannerProps> = ({name, href1, href2, path1, path2}) => {
    return ( 
        <div >
           <div className="relative">
           <img src="/banner.png" alt="banner" />
           <div className="absolute top-[121px] left-[658px]">
            <h1 className="font-medium text-5xl">{name}</h1>
            <div className="flex justify-center items-center gap-3 mt-[2px]">
            <Link href={href1} className="font-medium text-base">{path1}</Link> 
            <FaGreaterThan />
            <Link href={href2} className="font-medium text-base">{path2}</Link>
            </div>
           </div>
           </div>
        </div>
     );
}
 
export default Banner;