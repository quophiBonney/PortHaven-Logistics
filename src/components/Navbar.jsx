import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const CustomNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Navbar */}
      <Navbar
        fluid
        className="bg-gray-800 px-5 lg:px-10 py-5 w-full fixed z-50"
      >
        {/* Logo */}
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
           PortHaven Logistics
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 items-center list-none">
          <Link to="/" className="text-white no-underline">
            Home
          </Link>
          <Link to="/about-us" className="text-white no-underline">
            About
          </Link>
          <Link to="/services" className="text-white no-underline">
            Services
          </Link>
          <Link to="/contact" className="text-white no-underline">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={toggleDrawer}
          className="lg:hidden bg-white text-blue-500 rounded p-1"
          aria-label="Toggle Drawer"
        >
          <svg
            className=" w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </Navbar>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-[9999] ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={closeDrawer}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
          aria-label="Close Drawer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Links */}
        <nav className="mt-16 p-6 flex flex-col justify-center items-center gap-8 text-lg">
          <h3 className="text-3xl uppercase lg:hidden">Menu</h3>
          <Link to="/" onClick={closeDrawer} className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about-us" onClick={closeDrawer} className="hover:text-gray-300">
            About
          </Link>
          <Link
            to="/services"
            onClick={closeDrawer}
            className="hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={closeDrawer}
            className="hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Optional: backdrop when drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
          onClick={closeDrawer}
        />
      )}
    </>
  );
};

export default CustomNavbar;
