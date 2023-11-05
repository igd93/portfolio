import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center sm:flex"
    >
      <form action="" className="flex flex-col max-w-[1000px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4"> Submit the form below</p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white bg-red-500 hover:border-red-700 
        px-4 py-3 my-8 mx-auto flex items-center"
        >Send a contact form</button>
      </form>
    </div>
  );
};

export default Contact;
