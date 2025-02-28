import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    // <div className="w-full px-0 lg:px-8 py-10 h-full" >
    <div className="container mx-auto px-5 lg:px0 py-5">

<div className="flex flex-wrap  mt-5">
        
        <div className="pt-12 w-full lg:w-[60%]">
          <div className="overflow-hidden rounded-lg min-h-[600px] md:h-[500px] relative">
            <h2 className="text-4xl font-bold text-gray-300 leading-tight">
              Smart Designs, Sharp Results  
              <br />
              <span className="bg-gradient-to-r from-green-500 to-orange-800 text-transparent bg-clip-text">
                Choose Pitchers for Digital <br /> Excellence. <br /> Get In Touch With Us Today!
              </span>
            </h2>
          
             <h3 className="text-2xl mt-20 font-bold text-gray-300">Follow Us</h3>
            <p className="text-gray-400 mt-2">
              Stay connected and inspired! Follow us on our social media platforms 
              <br/>to keep up with the latest design trends,
              
               project updates, 
               <br/>and behind-the-scenes insights.
            </p>

            {/* Social Media Icons */}
            <div className="flex  gap-6 mt-4">
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="p-3 bg-[rgb(26,26,26)] rounded-full hover:bg-orange-700 transition">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - 30% */}
        {/* <div className="w-full lg:w-[30%] space-y-12 mb-20 h-auto relative">
          <div className="bg-neutral-900 m-6 rounded-lg text-white p-6 shadow-lg h-auto"> */}
 <div className="w-full md:w-[30%] flex flex-col justify-center h-full">
 <div className="bg-[rgb(26,26,26)] m-6 rounded-3xl text-white p-8 shadow-lg w-full h-full">
 <h1 className="text-center text-3xl font-bold text-gray-300 leading-tight mb-6">
              Get In Touch With Pitchers!
            </h1>

            {/* Formik Form */}
            <Formik
              initialValues={{ email: "", name: "", project: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email").required("Required"),
                name: Yup.string().min(2, "Too Short!").required("Required"),
                project: Yup.string().min(10, "Please describe more").required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-600 rounded-lg text-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-600 rounded-lg  text-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field
                      as="textarea"
                      name="project"
                      placeholder="Briefly describe your project"
                    //   className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white h-32 resize-none"
                      className="w-full p-3 border rounded-lg  text-white min-h-[120px]"

/>
                    <ErrorMessage name="project" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-green-800 hover:bg-orange-800 transition text-white p-3 font-bold"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
