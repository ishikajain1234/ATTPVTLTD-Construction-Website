import React from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxu06kf", // Replace with your EmailJS service ID
        "template_gal2myl", // Replace with your EmailJS template ID
        e.target, // The form itself
        "uDtbrKow3bq08WTkS" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(); // Refresh the page after sending the message
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4">
      <div className="w-full max-w-screen-xl mx-auto">
        {" "}
        {/* Full-width container */}
        <div className="w-full px-8 py-6 bg-gray-800 rounded-lg shadow-lg">
          {" "}
          {/* Full-width form container */}
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-200 mb-1" htmlFor="from_name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your name"
                type="text"
                name="from_name"
                id="from_name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                rows={4}
                placeholder="Enter your message"
                name="message"
                id="message"
              />
            </div>
            <button
              className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
