
import church from "/churches/churchA1.webp";
import church2 from "/churches/churchC1.webp";
import believer from "/believers/believerA1.jpg";
import believer1 from "/believers/believerB1.jpg";
import believer2 from "/believers/believerC1.jpg";

import { Check } from "../helper/Check.jsx"


const FeatureItem = ({ text }) => (
  <li className="flex items-center">
    <Check/>
    {text}
  </li>
);

const ChurchCard = ({ image, label }) => (
  <div className="relative">
    <img
      src={image}
      alt={label}
      className="rounded-xl w-32 h-32 object-cover shadow-md"
    />
    <span className="absolute -top-4 left-8 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow-md">
      {label}
    </span>
  </div>
);

export function Info() {
  const believerImages = [believer, believer1, believer2];

  return (
    <section className="bg-theme text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex flex-col lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">
            Connect with 50,000+ believers and ministries through{" "}
            <span className="text-green-600">Salt & Light Ministries</span>.
          </h1>
          <p className="text-lg">
            Your gateway to discovering local churches, Christian organizations,
            and resources to grow in faith.
          </p>
          <ul className="space-y-3 text-lg">
            <FeatureItem text="Find churches near you" />
            <FeatureItem text="Access trusted Christian resources" />
            <FeatureItem text="Connect with believers worldwide" />
          </ul>
          <button className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600">
            Explore Now
          </button>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
          <div className="grid grid-cols-2 gap-4 items-center">
            <ChurchCard image={church} label="Church" />
            <ChurchCard image={church2} label="Ministry Resources" />

            <div className="relative col-span-2 flex items-center space-x-2 mt-4">
              <div className="flex -space-x-3">
                {believerImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Believer ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm">Join 18k+ believers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
