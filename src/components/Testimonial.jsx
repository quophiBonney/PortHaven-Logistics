import React from "react";
import haulage from "../assets/images/haulage.jpg";
import customer from "../assets/images/customer.jpg";
const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 gap-5 md:gap-10 mt-10 md:mt-6 mb-10">
      <div>
        <h4 className="text-xl md:text-3xl mb-3">
          What Our Clients Says About Us
        </h4>
        <img src={haulage} className="rounded-xl" alt="logistics & haulage" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="border-t border-gray-300 flex flex-col justify-center items-center md:p-3">
          <img
            src={customer}
            alt="Black/african man in suit"
            className="w-36 h-36 rounded-full mt-5 mb-5"
          />
          <h4 className="text-lg text-center md:text-xl text-gray-500 mb-2">
            Samuel Smith, Director of IMedia Incorporation, Turkey
          </h4>
          <p className="border-b pb-5 border-gray-300 text-center">
            <em>
              “PortHaven Logistics is the company we contact for all our
              shipment, logistics and others. We stand to recommend Benjamin
              Cargo Ghana to anyone.”
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
