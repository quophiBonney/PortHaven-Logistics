import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="flex justify-center items-center description-bg mt-10 md:mt-16 h-full md:h-96 pt-16 pb-16 md:pt-0 md:pb-0">
      <div className="p-5 md:p-36 text-center text-white">
        <p className="">
          PortHaven Logistics is known globally for our reliable and convenient
          shipping and delivery services. At PH Logisitics, we handle all your
          shipping, clearing/forwarding, warehousing and other related services
          with unwavering care and professionalism. We have professional
          clearing agents and freight forwarders in Ghana right at your service.
          Would like to experience our unfailing and fastest door-to-door
          delivery system?
        </p>
        <button className="border-2 border-white p-3 font-bold mt-10 md:mt-6 rounded">
          <Link to="/contact">Let's Get Intouch</Link>
        </button>
      </div>
    </div>
  );
};

export default Description;
