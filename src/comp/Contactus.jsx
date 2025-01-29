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
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="text-white py-12 px-6"
      style={{
        background:
          "linear-gradient(90deg, rgba(69,61,17,1) 0%, rgba(0,0,0,1) 50%, rgba(69,61,17,1) 100%)",
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Side: Contact Form */}
        <div className="md:col-span-7 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-yellow-300 mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="from_name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition duration-300"
                placeholder="Enter your name"
                type="text"
                name="from_name"
                id="from_name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition duration-300"
                rows={4}
                placeholder="Enter your message"
                name="message"
                id="message"
                required
              />
            </div>
            <button
              className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Company Details */}
        <div className="md:col-span-5 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-yellow-300 mb-6">
            Company Details
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="font-bold text-yellow-400">Company Name:</span>{" "}
              Civil-Site Co.
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-yellow-400">Phone:</span> +1 (123)
              456-7890
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-yellow-400">Email:</span>{" "}
              contact@civilsite.com
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-yellow-400">Address:</span> 123
              Main Street, Suite 100, Cityville, State, Country
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-yellow-400">Business Hours:</span>{" "}
              Mon-Fri, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
