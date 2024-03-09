import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

interface CartProps {
    
}
 
const Cart: React.FC<CartProps> = () => {
    return ( 
        <div className="overflow-hidden">
            <Navbar/>
            <Banner name={"Cart"} href1={"/"} href2={"/cart"} path1={"Home"} path2={"Cart"}/>

            <div className="flex gap-8 mt-[72px] w-[1440px] h-[525px] ">
                <div className="w-[817px] h-[215px] ml-24">
                <div className="w-[817px] h-[55px] flex justify-around items-center bg-[#F9F1E7] text-base font-medium">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <div className="flex justify-around items-center mt-14 mr-40 gap-16">
                  <div className="flex  items-center gap-5 ">
                  <img src="syl.png" alt="syl" width={105} height={105} className="rounded-lg" />
                  <p className="text-[#9F9F9F]">Asgaard sofa</p>
                  </div>
                  <p className="text-[#9F9F9F]">Rs 250,000,00</p>
                  <p>1</p>
                  <p className="">Rs. 250,000.00</p>
                    
                </div>
                </div>

                <div className="w-[393px] h-[390px] bg-[#F9F1E7] flex flex-col pt-4  items-center">
                    <h2 className="text-3xl font-semibold">Cart Totals</h2>

                    <div className="flex text-base gap-16 pt-16">
                        <p className="font-medium">Subtotal</p>
                        <p className="font-normal text-[9F9F9F]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex gap-16 pt-8">
                        <p className="font-medium text-base">Total</p>
                        <p className="font-normal text-xl text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                    <button className="w-[144px] h-[30px] text-xl p-5 mt-10 flex justify-center items-center border border-black rounded-lg">Check Out</button>
                </div>
            </div>
            <Service/>
            <div className="mt-5">
            <Footer/>
            </div>
        </div>
     );
}
 
export default Cart;