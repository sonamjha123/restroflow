import React from "react";

const Contact = () => {
  return (
    <section className="max-w-5xl m-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Have questions about our food ordering app? Reach out to us and we’ll
            get back to you as soon as possible.
          </p>

          <div className="space-y-2">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Address:</span> 123 Food Street,
              New York, USA
            </p>
            <p className="text-gray-700">
              📞 <span className="font-semibold">Phone:</span> +1 234 567 890
            </p>
            <p className="text-gray-700">
              ✉️ <span className="font-semibold">Email:</span>{" "}
              support@foodapp.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
