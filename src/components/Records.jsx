import React from 'react'

const Records = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-16 px-5 md:px-10 gap-5 md:gap-10">
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl text-blue-500">1.2K+</h4>
        <p className="font-bold">Customers</p>
      </div>
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl text-blue-500">3K+</h4>
        <p className="font-bold">Completed Orders</p>
      </div>
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl text-blue-500">200+</h4>
        <p className="font-bold">Countries Covered</p>
      </div>
      <div className="text-center">
        <h4 className="text-2xl md:text-4xl text-blue-500">500MT+</h4>
        <p className="font-bold">Weight of goods moved</p>
      </div>
    </div>
  );
}

export default Records