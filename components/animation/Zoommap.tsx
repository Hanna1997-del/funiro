import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ZoommapProps {
    src:string;
    index:number
   
    scale:any
}
 
const Zoommap: React.FC<ZoommapProps> = ({src,index,scale}) => {
    return ( 
        
           
                <motion.div  style={{scale}}   className="flex justify-center items-center  pl-10 absolute top-0  w-full h-full">
                
               {index == 1  ?( <motion.img  src={src} alt="" className="object-cover w-[295px]   h-[392px] relative"/>): ""}
                 
                
               {index == 2? ( <motion.img  src={src} alt="" className="absolute top-10  left-0  h-[382px]" />): ""}
                {index ==3 ? (<motion.img src={src}  alt="" className="absolute top-28 left-20 w-[451px] pl-5 h-[312px]" />): ""}
                {index ==4 ? (<motion.img src={src} alt="" className="absolute top-[440px] left-0 w-[170px] h-[323px]" />):""}
                {index ==5 ? (<motion.img src={src}   alt="" className="absolute top-[440px] left-48 w-[344px] h-[242px]" />): ""}
                {index ==8 ? (<motion.img src={src}  alt="" className="absolute top-0 right-0 w-[200px] h-[433px]" />):""}
                {index == 6 ? (<motion.img src={src} alt="" className="absolute top-20 right-52 w-[290px] h-[348px]"/>):""}
                {index == 9? (<motion.img src={src}  alt="" className="absolute top-[440px] right-10 w-[258px] h-[196px]" />): ""}
                {index ==7 ? (<motion.img src={src}  alt="" className="absolute top-[440px] right-[310px] w-[178px] h-[242px]" />): ""}
               </motion.div>
            
          
     );
}
 
export default Zoommap;