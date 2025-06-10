import React from "react";
import { Link } from "react-router-dom";
import warehouse1 from "../assets/images/warehouse_2.jpg";
import aboutBg from "../assets/images/img1.jpg";
import airFreight from "../assets/images/air_freight_1.jpg";
import port from "../assets/images/port_1.jpg";
const Hello = () => {
  return (
    <section className="bg-blue-100 grid grid-cols-1 gap-5 md:gap-10 lg:gap-20 md:grid-cols-1 lg:grid-cols-2 mt-10 md:mt-16 p-5 md:p-10">
      <div className="flex flex-col justify-center space-y-5">
        <h4 className="text-2xl md:text-3xl font-bold">Say Hello To .....</h4>
        <p>
          We are committed to maximizing productivity and efficiency by
          delivering uniquely designed Shipping and Logistics solutions to both
          corporate and individual clients. Unleash the power of both worlds
          with PortHaven Logistics seamless Sea & Air Freight solutions. Whether
          you need the speed of air or the cost-efficiency of sea, we expertly
          navigate every route, ensuring your cargo arrives on time and on
          budget. Let's hear from you.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-5 h- space-y-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={aboutBg}
              alt=""
              className="rounded h-full md:h-60"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Feel free to send us all your enquiries for we are more than ready
              to serve you.
            </p>
          </div>
        </div>
        <p className="font-bold text-gray-700">
          Shipping seamlessly and happily by land, by air and by sea{" "}
        </p>
        <div className="flex gap-5 items-center">
          <div className="w-1/3">
            <img src={port} alt="" className="rounded h-full md:h-40" />
          </div>
          <div className="w-1/3">
            <img src={airFreight} alt="" className="rounded h-full md:h-40" />
          </div>
          <div className="w-1/3">
            <img src={warehouse1} alt="" className="rounded h-full md:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
