import { FaTag, FaUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

interface BlogProps {
    img: string;
    tag1:string;
    tag2:string;
    tag3:string;
    title:string;
    des: string
}
 
const Blog: React.FC<BlogProps> = ({img,tag1,tag2,tag3,title,des}) => {
    return ( 
        <div>
        <div className="w-[820px] mt-24 ml-24">
           <img src={img} alt="img" className="w-[817px] h-[500px]" /> 
           <div className="flex text-[#9F9F9F]  font-normal text-base gap-9">
            <div className="flex items-center">
            <FaUser />
           <p>{tag1}</p>
            </div>
            <div className="flex items-center">
            <MdOutlineDateRange />
           <p>{tag2}</p>
            </div>
            <div className="flex items-center">
            <FaTag />
           <p>{tag3}</p>
            </div>
           </div>
           <h2 className="font-medium text-3xl mt-3">{title}</h2>
           <p className="font-normal text-[#9F9F9F] mt-3 text-sm">{des}</p>

           <p className="mt-3 underline">Read More</p>
        </div>
      </div>
     );
}
 
export default Blog;