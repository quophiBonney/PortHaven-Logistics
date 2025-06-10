import React from "react";
import worldMap from "../assets/images/world.png";
const World = () => {
  return (
    <div className="mt-10 md:mt-16 flex flex-col justify-center items-center px-5">
      <div className="w-full md:w-[70%] text-center">
        <h4 className="text-lg md:text-3xl">Where We Ship From?</h4>
        <p>
          PortHaven Logistics helps you to ship from US, UK, China, Dubai &
          Turkey to all part of Ghana. Whether you're based locally or
          internationally, we're committed to providing you with exceptional
          service and support.
        </p>
      </div>
      <img src={worldMap} alt="world map" className="" />
    </div>
  );
};

export default World;
