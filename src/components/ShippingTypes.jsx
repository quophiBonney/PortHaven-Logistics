import React from 'react'

const ShippingTypes = () => {
  return (
    <section className="mt-10 md:mt-20 px-5 md:px-10 mb-10">
      <div className="flex flex-col justify-center items-center text-center lg:px-36 mb-10 space-y-4">
        <h3 className="text-2xl md:text-4xl">
          Ship From USA, UK, China, Turkey, Dubai To Ghana{" "}
        </h3>
        <p>
          With our global logistics network, we provide reliable transportation
          solutions to your destination. We handle everything from customs
          clearance to documentation for safe, on-time delivery. Trust our
          expertise in air, sea, and land transportation to handle even the most
          complex shipments. Let us bring the world to your doorstep.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        <div className="by-sea-bg p-4 rounded-xl h-56 text-white">
          <h4 className="text-2xl md:text-4xl text-end">By Sea</h4>
        </div>
        <div className="by-air-bg p-4 rounded-xl h-56 text-white text-end">
          <h4 className="text-2xl md:text-4xl">By Air</h4>
        </div>
        <div className="by-land-bg p-4 rounded-xl text-end h-56 text-white">
          <h4 className="text-2xl md:text-4xl">By Land</h4>
        </div>
      </div>
    </section>
  );
}

export default ShippingTypes