interface DescriptionProps {
    desOne?: string;
    desTwo?:string;
    img1:string;
    img2:string;
}
 
const Description: React.FC<DescriptionProps> = ({desOne,desTwo,img1,img2}) => {
    return ( 
        <div className="w-[1440px] h-[744px] border border-y-[#D9D9D9] ">
          <div className="flex text-[24px] font-medium gap-12 justify-center mt-14">
            <h2>Description</h2>
            <h2>Additional Information</h2>
            <h2>Reviews [5]</h2>
          </div>

          <div className="w-[1026px] flex flex-col mx-auto gap-5 mt-9 h-[174px] text-[#9F9F9F] text-base">
              <p>{desOne}</p>
              <p>{desTwo}</p>
          </div>
          <div className="w-[1239px] h-[348px] flex gap-7 ml-16 mt-9">
             <img src={img1} alt="img-1" className="w-[605px] h-[348px] rounded-lg" />
             <img src={img2} alt="img-2" className="w-[605px] h-[348px] rounded-lg" />
          </div>
        </div>
     );
}
 
export default Description;