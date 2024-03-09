import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <Banner
        name={"Checkout"}
        href1={"/"}
        href2={"/checkout"}
        path1={"Home"}
        path2={"Checkout"}
      />

      <div>
        <div>
          <div className="w-full h-[1829px] flex justify-around mt-24">
            <form action="" className="w-[608px] h-[1714px] max-w-lg">
              <h1 className="font-semibold text-4xl">Billing details</h1>
              <div className="flex flex-wrap -mx-3 mb-6 mt-9">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="appearance-none block mt-5 w-[211px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="first-name"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="appearance-none block mt-5 w-[211px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Company Name (Option)
                </label>
                <input
                  type="text"
                  className="appearance-none block mt-5 w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Country/Region
                </label>
                <div className="relative mt-5">
                  <select
                    className="block appearance-none w-[453px] h-[75px]  border bg-white border-[#9F9F9F] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    id="grid-state"
                  >
                    <option>Sri Lanka</option>
                    <option>Missouri </option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-[-280px] flex  items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Street address
                </label>
                <input
                  type="text"
                  className="appearance-none mt-5 block w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  className="appearance-none block mt-5 w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Province
                </label>
                <div className="relative mt-5">
                  <select
                    className="block appearance-none w-[453px] h-[75px]  border bg-white border-[#9F9F9F] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    id="grid-state"
                  >
                    <option>Western Province</option>
                    <option>Asian Province </option>
                    <option>Africa Province</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-[-280px] flex  items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  className="appearance-none block mt-5 w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="appearance-none mt-5 block w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="appearance-none mt-5 block w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  placeholder="Additional information"
                  className="appearance-none mt-5 block w-[453px] h-[75px] border border-[#9F9F9F] rounded  mb-3 leading-tight"
                />
              </div>
            </form>

            <div className="w-[608px] h-[789px]  ">
              <div className="flex justify-between h-[300px] border-b border-b-[#D9D9D9]">
                <div className="flex flex-col gap-4">
                  <h1 className="font-medium text-2xl">Product</h1>
                  <p className="font-normal text-base text-[#9F9F9F]">
                    Asgaard sofa{" "}
                    <span className="font-medium text-xs text-black">*1</span>
                  </p>
                  <p className="font-normal text-base">Subtotal</p>
                  <p className="font-normal text-base">Total</p>
                </div>
                <div className="flex flex-col gap-4 ">
                  <h1 className="font-medium text-2xl">Subtotal</h1>
                  <p className="text-base font-light">Rs. 250,000.00</p>
                  <p className="text-base font-light">Rs. 250,000.00</p>
                  <p className="font-bold text-2xl text-[#B88E2F]">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-8 mt-5">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer"
                      htmlFor="html_version"
                    >
                      <input
                        name="description"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="html_version"
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="html_version"
                    >
                      <div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                          Direct Bank Transfer
                        </p>
                        <p className="block font-sans text-base antialiased font-light leading-normal text-[#9F9F9F]">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer"
                      htmlFor="react_version"
                    >
                      <input
                        name="description"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="react_version"
                        checked
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="react_version"
                    >
                      <div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-[#9F9F9F]">
                          Direct Bank Transffer
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer"
                      htmlFor="react_version2"
                    >
                      <input
                        name="description"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        id="react_version2"
                      />
                      <span className="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px font-light text-gray-700 cursor-pointer select-none"
                      htmlFor="react_version2"
                    >
                      <div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-[#9F9F9F]">
                          Cash on Delivery
                        </p>
                        <p className="block font-sans text-base antialiased font-light leading-normal ">
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our{" "}
                          <span className="font-semibold">privacy policy</span>.
                        </p>
                      </div>
                    </label>
                  </div>
                  <button className="w-[318px] h-[64px] border mx-auto mt-10 border-black rounded-lg">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service/>
      <Footer/>
    </div>
  );
};

export default Checkout;
