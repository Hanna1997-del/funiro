
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import { Post, blog } from "@/data/data";


import { FaTag, FaUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Navbar/>
      <Banner
        name={"Blog"}
        href1={"/"}
        href2={"/about"}
        path1={"Home"}
        path2={"Blog"}
      />

      <div className="flex gap-24">
        <div>
          {blog.map((b) => (
            <Blog {...b} />
          ))}
        </div>
        <div className="mt-24">
          <input
            type="text"
            className="w-[311px] h-[58px] rounded-lg border border-[#9F9F9F]"
          />
          <h2 className="mt-10 font-medium text-2xl">Categories</h2>
          <div className="mt-8 text-[#9F9F9F] text-base font-normal" >
            <div className="flex justify-between ">
              <p>Crafts</p>
              <p>2</p>
            </div>
            <div className="flex justify-between pt-8">
              <p>Design</p>
              <p>8</p>
            </div>
            <div className="flex justify-between pt-8">
              <p>Handmade</p>
              <p>7</p>
            </div>
            <div className="flex justify-between  pt-8">
              <p>interior</p>
              <p>1</p>
            </div>
            <div className="flex justify-between pt-8">
              <p>wood</p>
              <p>6</p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mt-10 font-medium text-2xl">Recent Posts</h2>

            <div>
              {Post.map((p)=>(
                <div className="flex gap-2 mt-10">
                  <img src={p.img} alt="img" width={80} height={80} />
                  <div className="w-[119px] h-[65px]">
                    <h2 className="font-normal text-sm">{p.title}</h2>
                    <p className="text-[#9F9F9F] text-xs font-normal">{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-[70px]">
                <button className="w-[60px] h-[60px] text-white rounded-lg bg-[#B88E2F]">1</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">2</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">3</button>
                <button className="w-[60px] h-[60px] bg-[#F9F1E7] rounded-lg">Next</button>
            </div>

            <Service/>
           <div className="mt-5">
           <Footer/>
           </div>
    </div>
  );
};

export default About;
