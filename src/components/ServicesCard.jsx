import { useState } from "react";
import seaFreightImg from "../assets/images/sea_freight_2.jpg";
import containerImg from "../assets/images/container_1.jpg";
import warehouseImg from "../assets/images/warehouse_2.jpg";
import cargoImg from "../assets/images/cargo_1.jpg";
import haulageImg from "../assets/images/haulage.jpg";
import clearanceImg from "../assets/images/clearance.jpg";
import deliveryImg from "../assets/images/delivery.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ServicesCard = () => {
  // State for each modal
  const [isSeaAirOpen, setIsSeaAirOpen] = useState(false);
  const [isImportExportOpen, setIsImportExportOpen] = useState(false);
  const [isWarehousingOpen, setIsWarehousingOpen] = useState(false);
  const [isDoorDeliveryOpen, setIsDoorDeliveryOpen] = useState(false);
  const [isCargoOpen, setIsCargoOpen] = useState(false);
  const [isClearanceOpen, setIsClearanceOpen] = useState(false);

  // Open handlers
  const openSeaAirModal = () => setIsSeaAirOpen(true);
  const openImportExportModal = () => setIsImportExportOpen(true);
  const openWarehousingModal = () => setIsWarehousingOpen(true);
  const openDoorDeliveryModal = () => setIsDoorDeliveryOpen(true);
  const openCargoModal = () => setIsCargoOpen(true);
  const openClearanceModal = () => setIsClearanceOpen(true);

  // Close handlers
  const closeSeaAirModal = () => setIsSeaAirOpen(false);
  const closeImportExportModal = () => setIsImportExportOpen(false);
  const closeWarehousingModal = () => setIsWarehousingOpen(false);
  const closeDoorDeliveryModal = () => setIsDoorDeliveryOpen(false);
  const closeCargoModal = () => setIsCargoOpen(false);
  const closeClearanceModal = () => setIsClearanceOpen(false);

  return (
    <>
      {/* Grid of service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 gap-5 md:gap-10 mt-10 md:mt-16">
        {/* Sea & Air Freight */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openSeaAirModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Sea & Air Freight
            </h3>
            <img
              src={seaFreightImg}
              alt="Sea & Air Freight"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>

        {/* Import & Export */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openImportExportModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Import & Export
            </h3>
            <img
              src={containerImg}
              alt="Import & Export"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>

        {/* Warehousing */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openWarehousingModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Warehousing</h3>
            <img
              src={warehouseImg}
              alt="Warehousing"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>

        {/* Door-to-Door Delivery */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openDoorDeliveryModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Door-to-Door Delivery
            </h3>
            <img
              src={deliveryImg}
              alt="Door-to-Door Delivery"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>

        {/* Cargo Handling & Haulage */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openCargoModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Cargo Handling & Haulage
            </h3>
            <img
              src={haulageImg}
              alt="Cargo Handling & Haulage"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>

        {/* Customs Clearance */}
        <div className="bg-gray-200 p-5 rounded">
          <div onClick={openClearanceModal}>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Customs Clearance
            </h3>
            <img
              src={clearanceImg}
              alt="Customs Clearance"
              loading="lazy"
              className="rounded hover:scale-105 hover:cursor-pointer hover:duration-500"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isSeaAirOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSeaAirModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">Sea & Air Freight</h3>
              <p className="text-center">
                Expand your reach with our reliable sea and air freight
                solutions. Whether you need cost-effective ocean shipping for
                bulk cargo or expedited air freight for time-sensitive
                deliveries, our global network and industry expertise guarantee
                your goods arrive safely and on schedule.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Get A Quote
              </Link>
            </motion.div>
          </motion.div>
        )}

        {isImportExportOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImportExportModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">Import & Export</h3>
              <p className="text-center">
                Simplify international trade with end-to-end import and export
                support. From regulatory compliance and documentation to
                shipment coordination, our specialists handle every detail—so
                you can focus on growing your business.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Get A Quote
              </Link>
            </motion.div>
          </motion.div>
        )}

        {isWarehousingOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWarehousingModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">
                Warehousing & Inventory Solutions
              </h3>
              <p className="text-center">
                Optimize your supply chain with our secure, climate-controlled
                warehousing. Enjoy real-time inventory tracking, flexible
                storage plans, and fast order fulfillment designed around your
                needs.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Reserve Warehouse Space
              </Link>
            </motion.div>
          </motion.div>
        )}

        {isDoorDeliveryOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDoorDeliveryModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">Door-to-Door Delivery</h3>
              <p className="text-center">
                Delight your customers with seamless door-to-door delivery. We
                collect your cargo, manage customs clearance, and deliver
                directly to the final destination—no middlemen, no delays.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Schedule Your Pickup
              </Link>
            </motion.div>
          </motion.div>
        )}

        {isCargoOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCargoModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">
                Cargo Handling & Haulage
              </h3>
              <p className="text-center">
                Protect your shipments with our professional cargo handling and
                haulage services. From heavy-lift operations to last-mile
                trucking, our trained teams use the right equipment and
                processes to ensure safe transit at every step.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Arrange Safe Haulage
              </Link>
            </motion.div>
          </motion.div>
        )}

        {isClearanceOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeClearanceModal}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold mb-4">Customs Clearance</h3>
              <p className="text-center">
                Navigate customs regulations effortlessly. Our in-house
                clearance experts prepare documentation, calculate duties, and
                liaise with authorities to expedite approvals—so your goods pass
                through borders without a hitch.
              </p>
              <Link
                to="/contact"
                className="bg-blue-500 text-white px-5 py-3 rounded mt-4"
              >
                Request Clearance Assistance
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesCard;
