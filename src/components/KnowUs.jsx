import React from "react";
import { Link } from "react-router-dom";
import sea1 from "../assets/images/sea_freight_2.jpg";
import air1 from "../assets/images/air_freight_1.jpg";
import cargo1 from "../assets/images/haulage.jpg";
import warehouse1 from '../assets/images/delivery.jpg'
const KnowUs = () => {
  return (
    <section className="bg-blue-100 grid grid-cols-1 gap-5 md:gap-10 lg:gap-20 md:grid-cols-1 lg:grid-cols-2 mt-10 md:mt-16 p-5 md:p-10">
      <div className="flex flex-col justify-center space-y-5">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          What We Do
        </h4>
        <p>
          We provide customized cross-border e-commerce, fulfilment, shipping
          and logistics solutions from the US, UK, Dubai, Turkey and China to
          Ghana for individuals, small and large businesses.
        </p>
        <p>
          We serve our customers with wide range of services from
          freight/forwarding, logistics, shipping, warehousing down to
          door-to-door delivery. Be part of the <strong>5000+</strong> Ghanaians
          experiencing easy, cost-effective and smooth shipment and all related
          services
        </p>
        <div>
          <button className="bg-blue-500 text-white p-3 rounded">
            <Link to="/services">Explore More</Link>
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-5 h- space-y-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={sea1}
              alt=""
              className="rounded h-full md:h-64"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            Partner with us today and turn complex logistics into your
            competitive advantage!
          </div>
        </div>
        <p className="font-bold text-gray-700">
          Shipping seamlessly and happily by land, by air and by sea{" "}
        </p>
        <div className="flex gap-5 items-center">
          <div className="w-1/3">
            <img src={air1} alt="" className="rounded h-full md:h-40" />
          </div>
          <div className="w-1/3">
            <img src={cargo1} alt="" className="rounded h-full md:h-40" />
          </div>
          <div className="w-1/3">
            <img src={warehouse1} alt="" className="rounded h-full md:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
