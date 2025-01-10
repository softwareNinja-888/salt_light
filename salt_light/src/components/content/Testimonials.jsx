import React from "react";

import church from "/churches/churchA1.webp";
import church2 from "/churches/churchC1.webp";

import believer from "/believers/believerA1.webp";
import believer1 from "/believers/believerB1.webp";
import believer2 from "/believers/believerC1.webp";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      logo: believer1, // Replace with actual church logo
      quote:
        "Salt & Light Ministries helped our church connect with hundreds of believers. Truly a blessing!",
      author: "Pastor John Doe",
      role: "Lead Pastor, Grace Church",
      rating: 4.9,
      feedback: "Amazing",
    },
    {
      id: 2,
      logo: church2, // Replace with actual ministry logo
      quote:
        "Through this platform, we discovered incredible ministry resources that have enriched our outreach.",
      author: "Sarah Jane",
      role: "Coordinator, Faith Outreach",
      rating: 4.8,
      feedback: "Excellent",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-16 lg:px-24">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        Empowering Ministries & Believers Worldwide
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-lime-100 p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            {/* Logo */}
            <img
              src={item.logo}
              alt={`${item.author}'s Ministry Logo`}
              className="h-44 w-auto mb-4"
            />
            {/* Quote */}
            <p className="text-lg font-semibold text-gray-800 mb-4">
              “{item.quote}”
            </p>
            {/* Author */}
            <p className="text-gray-700 text-sm mb-4">
              {item.author}, {item.role}
            </p>
            <hr className="border-gray-300 mb-4" />
            {/* Rating */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-800">
                {item.rating} {item.feedback}
              </p>
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(item.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Logos */}
      <div className="flex flex-wrap justify-center mt-8 gap-6">
        {["Grace Church", "Faith Outreach", "Hope Ministries", "Joyful Believers"].map(
          (ministry, index) => (
            <p
              key={index}
              className="text-gray-500 text-sm font-medium hover:text-gray-700"
            >
              {ministry}
            </p>
          )
        )}
      </div>
    </section>
  );
}
