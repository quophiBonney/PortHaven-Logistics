import React from 'react'
import port from '../assets/images/port_1.jpg'
import cargo from "../assets/images/cargo_1.jpg";
import airfreight from "../assets/images/air_freight_1.jpg";
import container from "../assets/images/container_1.jpg";
const CargoCars = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      <div>
        <img src={port} alt="containers at the port" className="h-full"/>
      </div>
      <div>
        <img src={cargo} alt="logistics & cargo" className="h-full"/>
      </div>
      <div>
        <img src={airfreight} alt="air freight" className="h-full"/>
      </div>
      <div>
        <img src={container} alt="packed containers at the port" className="h-full"/>
      </div>
    </div>
  );
}

export default CargoCars