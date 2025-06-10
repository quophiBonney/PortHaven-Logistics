import React from 'react'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
const WhyChooseUs = () => {
  return (
    <section className="mt-10 md:mt-20 px-5 md:px-10">
      <div className="flex flex-col justify-center items-center text-center lg:px-36 mb-10 space-y-4">
        <h3 className="text-2xl md:text-4xl">Why Choose Us?</h3>
        <p>
          No two companies are alike, so when you want to ship choose the
          company synonymous with trust in the shipping and logistics space, PH
          Logistics Ghana! Here is why;
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        <div className="bg-gray-200 p-4 rounded-xl h-56">
          <div className="bg-gray-400 w-16 h-16 rounded p-3 mb-5">
            <FaMoneyBillTransfer className="text-blue-700" size={40} />
          </div>
          <h4 className="text-2xl md:text-3xl">Cost Effective</h4>
          <p>Our rates are competitive and transparent</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-xl h-56">
          <div className="bg-gray-400 w-16 h-16 rounded p-3 mb-5">
            <GrSecure className="text-blue-700" size={40} />
          </div>
          <h4 className="text-2xl md:text-3xl">Speed & Safety</h4>
          <p>We are fast, reliable. credible and safe</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-xl h-56">
          <div className="bg-gray-400 w-16 h-16 rounded p-3 mb-5">
            <TbTruckDelivery className="text-blue-700" size={40}/>
          </div>
          <h4 className="text-2xl md:text-3xl">Door-to-Door Delivery</h4>
          <p>We deliver to your door – business and residential</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs