import React from "react";

function Contact() {
  return (
    <section className="w-full px-6 py-12 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">Contact Us</h2>
      <p className="text-center text-gray-600 mb-4">Feel free to reach out to us!</p>

      {/* Contact Details */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Contact Details</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Email:</strong> support@myshop.com</li>
            <li><strong>Phone:</strong> +1 123 456 7890</li>
            <li><strong>Address:</strong> 123 MyShop Street, New York, NY 10001, USA</li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
