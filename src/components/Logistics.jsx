import React from "react";
import freight from "../assets/images/sea_freight_2.jpg";
import { Link } from "react-router-dom";
const Logistics = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10 md:mt-16 px-5 md:px-16 gap-5 md:gap-10">
        <div>
          <img src={freight} alt="" className="rounded" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-5xl font-bold">
            <span className="text-blue-500">Who</span> We Are
          </h3>
          <p>
            PortHaven Logistics is a Ghanaian based logistics company
            established over a decade ago. As a logistics company in Ghana we
            have the license to undertake Clearing/ Freight Forwarding, Customs
            Brokerage, Warehousing, Import /Export and Logistics Service among
            many others. PortHaven Logistics provides a full range of service
            with the highest level of standard and ethics in the logistics
            industry.
          </p>
          <p>
            We serve the amazing people around the world with seamless,
            top-notch and exceptional shipping, logistics and warehousing
            services. Want to know more about us and our services?
          </p>
          <button className="bg-blue-500 p-3 text-white rounded">
            <Link to="/services">Find Out More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
