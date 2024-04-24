import Banner from "@/components/Banner";
import Compar from "@/components/Comparison";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";


interface ComparisonProps {}

const Comparison: React.FC<ComparisonProps> = () => {
  return (
    <div>
      <Navbar />
      <Banner
        name={"Product Comparison"}
        href1={"/"}
        href2={"/comparison"}
        path1={"Home"}
        path2={"Comparison"}
      />
      <Compar/>
      <Service/>
      <Footer/>
      <Footer/>
    </div>
  );
};

export default Comparison;
