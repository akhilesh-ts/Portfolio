import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Header from "./Header";
import { toast, Toaster } from "sonner";
import { ThreeDot } from "react-loading-indicators";
import { validateContactForm } from "../schema/ContactForm";

const Contact = () => {
  const ref = useRef(null);
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMeaasge, setErrorMessage] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
   
    const name = ref.current.elements["user_name"]?.value;
    const email = ref.current.elements["user_email"]?.value;
    const message = ref.current.elements["message"]?.value;
    const validation = validateContactForm(name, email, message);
    setErrorMessage(validation);
    if (validation) return;
    setIsLoading((prev) => !prev);
    emailjs
      .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, ref.current, {
        publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      })
      .then((response) => {
        setIsLoading((prev) => !prev);
        toast.message("Email has been sent", {
          description: `Date: ${date}, Time: ${time}`,
        });
        ref.current.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header heading1={`LET'S WORK`} heading2={"TOGETHER"} />
      <Toaster position="bottom-right" />
      <div className="w-full py-5">
        <form ref={ref} onSubmit={handelSubmit}>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-light">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full rounded-lg bg-secondary-color p-3 border-none text-white font-light"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-light">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full rounded-lg bg-secondary-color p-3 border-none text-white font-light"
                placeholder="Your@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="message" className="text-white font-light">
              Message
            </label>
            <textarea
              name="message"
              className="w-full rounded-lg bg-secondary-color p-3 border-none text-white font-light"
              placeholder="Message"
            ></textarea>
          </div>
          {errorMeaasge ?<p className="text-orange-400 text-center">{errorMeaasge}</p>  : null}
          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white rounded-lg mt-5"
          >
            {isLoading ? (
              <ThreeDot color="#FFFFFF" size="medium" text="" textColor="" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <footer className="flex justify-center items-center p-4 sm:p-6 md:p-8 text-center text-gray-500 text-sm mt-10">
        <span className="text-orange-500 font-semibold mr-1">AKHILESH TS</span>
        <span>© {new Date().getFullYear()}. All Rights Reserved.</span>
      </footer>
    </>
  );
};

export default Contact;
