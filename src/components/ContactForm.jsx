import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormValidation from "../validations/FormValidation";
import toast from "react-hot-toast";
import { BsEnvelope } from "react-icons/bs";
import {FaClock, FaPhoneAlt} from 'react-icons/fa'

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const templateParams = {
        to_name: "Receipient Name",
        ...values,
      };

      await emailjs.send(
        "service_b37onvx",
        "template_i7dvlui",
        templateParams,
        "a2ef4MiEsH7o-2VWs"
      );

      toast.success("Message sent successfully");
      resetForm();
    } catch (err) {
      toast.error("Message failed");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enquiry-container mt-10 md:mt-16">
      <div className="text-center mb-10 pt-10 text-white">
        <h3 className="text-xl md:text-4xl font-bold">Need to talk to us?</h3>
        <p>Let's hear from you so we get you started.</p>
      </div>
      <div className="form-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 md:p-10 text-white gap-10">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="p-2 text-white flex flex-col justify-center items-center space-y-1">
              <FaPhoneAlt size={35} />
              <h4 className="text-2xl md:text-xl">Call Us</h4>
              <p>+233549485984</p>
            </div>
            <div className="p-2 text-white flex flex-col justify-center items-center space-y-1">
              <BsEnvelope size={35} />
              <h4 className="text-2xl md:text-xl">Email Us</h4>
              <p>phlogisticsghana@gmail.com</p>
            </div>
            <div className="p-2 text-white flex flex-col justify-center items-center space-y-1">
              <FaClock size={35} />
              <h4 className="text-2xl md:text-xl">Working Hours</h4>
              <p>24/7</p>
            </div>
          </div>

          <div className="mt-16 flex flex-col lg:flex-row gap-5">
            <div className="p-2 text-white space-y-1 w-full lg:w-1/2  text-center md:text-start">
              <h4 className="text-2xl md:text-3xl">Ghana Office</h4>
              <p>Floor #20</p>
              <p>Airport Shell Road</p>
              <p>+233549485984</p>
              <p>Accra, Ghana</p>
            </div>
            <div className="p-2 text-white space-y-1 w-full lg:w-1/2  text-center md:text-start">
              <h4 className="text-2xl md:text-3xl">Ghana Warehouse</h4>
              <p>23 Avenue</p>
              <p>Madina - Adenta</p>
              <p>+233549485984</p>
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>
        <div>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={FormValidation}
          >
            <Form>
              <div className="flex flex-col md:flex-row gap-5 lg:gap-10 mb-2">
                <div className="w-full">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="off"
                    className="w-full border-0 p-3 rounded text-black"
                    placeholder="John"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-600 font-bold"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="w-full border-0 p-3 rounded text-black"
                    placeholder="Doe"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-600 font-bold"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 lg:gap-10 mb-2">
                <div className="w-full">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="w-full border-0 p-3 rounded text-black"
                    placeholder="john@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 font-bold"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    className="w-full border-0 p-3 rounded text-black"
                    placeholder="02XXXXXXXX"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 font-bold"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="message">Your Message</label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="How may we help you?"
                  className="w-full border-0 p-3 rounded text-black"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 font-bold"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-auto px-6 py-3 rounded bg-blue-600 text-white font-semibold ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
