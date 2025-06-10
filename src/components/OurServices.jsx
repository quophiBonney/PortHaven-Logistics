import React from "react";
import { PiWarehouseDuotone } from "react-icons/pi";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { GiCargoCrate } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { BsClipboardCheckFill } from "react-icons/bs";
const OurServices = () => {
  return (
    <section className="our-services-bg mt-10 md:mt-16 px-5 md:px-10">
      <h3 className="text-2xl md:text-4xl font-bold text-white text-center py-10">
        Our Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 pb-10 md:pb-16">
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-md rounded-full p-3 flex justify-center items-center mb-3">
              <BiSolidPlaneTakeOff className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">
            Sea & Air Freight
          </h4>
          <p>
            At PortHaven Logistics Ghana we understand the importance of
            providing a reliable and consistent international freight service.
            We have developed our full range of freight forwarding services over
            so many years.
          </p>
        </div>
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-md rounded-full p-3 flex justify-center items-center mb-3">
              <BsClipboardCheckFill className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">
            Customer Clearance
          </h4>
          <p>
            Get your cargo cleared and delivered fast! PortHaven Logistics
            typically completes clearance within 3-5 working days from the
            moment we receive your documents and your goods arrive.
          </p>
        </div>
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-2xl rounded-full p-3 flex justify-center items-center mb-3">
              <FaTruckMoving className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">Haulage</h4>
          <p>
            From farm fresh produce to factory machines, we get your cargo where
            it needs to be, on time and on budget. Forget logistical headaches –
            our diverse haulage solutions keep your supply chain smooth.
          </p>
        </div>
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-md rounded-full p-3 flex justify-center items-center mb-3">
              <PiWarehouseDuotone className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">Warehousing</h4>
          <p>
            Warehousing is the act of buying goods from a manufacturer and then
            storing them in a warehouse before fulfilling the orders. We have
            warehouse management system to warehouse your cargo which comes with
            collateral management.
          </p>
        </div>
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-md rounded-full p-3 flex justify-center items-center mb-3">
              <GiCargoCrate className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">Cargo Handling</h4>
          <p>
            Move your goods faster, safer, and more cost-effectively with our
            comprehensive cargo handling expertise. We navigate the complex
            world of logistics, ensuring your shipments arrive on time and in
            perfect condition.
          </p>
        </div>
        <div className="text-white text-center">
          <center>
            <div className="w-16 h-16 bg-white shadow-md rounded-full p-3 flex justify-center items-center mb-3">
              <FaCogs className="text-blue-400" size={30} />
            </div>
          </center>
          <h4 className="text-blue-400 text-xl md:text-2xl">Project Cargo</h4>
          <p>
            Tame the logistics beast with our specialized handling for oversized
            and complex project cargo. Wind turbines, oil rigs, even entire
            factories - we conquer the challenges of moving your behemoths
            safely and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
