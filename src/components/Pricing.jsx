import React from "react";
import { MdCheckCircle } from "react-icons/md";
import map from "../assets/images/map.png";
const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-16 px-5 md:px-10">
      <div className="flex justify-center items-center">
        <img src={map} alt="" className="" loading="lazy" />
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl">
          Transparent pricing with no surprises
        </h3>
        <ul className="list-none">
          <li className="flex justify-center items-center gap-3">
            <MdCheckCircle className="text-blue-500" size={80} />
            We offer consolidation for only one shipment/week, and any items
            received after the shipment has departed will automatically be
            included in the next scheduled shipment
          </li>
          <li className="flex justify-center items-center gap-3">
            <MdCheckCircle className="text-blue-500" size={80} />
            Shipping fees are calculated based on the higher of the actual or
            volumetric weight. Please refer to the volumetric weight calculator
            for price estimates
          </li>
          <li className="flex justify-center items-center gap-3">
            <MdCheckCircle className="text-blue-500" size={80} />
            We deliver within 10-14 working days after payment of the invoice
            availed on the dashboard. Only paid packages will be shipped from
            the warehouse.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
