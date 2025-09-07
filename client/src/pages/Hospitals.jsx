import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Hospitals = () => {
  const { hospitals } = useContext(AppContext);
  console.log(hospitals);
  

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start pt-24 py-10">
      {/* Glowing Backgrounds */}
      <div className="absolute w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-20 top-32 left-10"></div>
      <div className="absolute w-80 h-80 rounded-full bg-blue-500 blur-3xl opacity-20 bottom-20 right-20"></div>

      {/* Page Title */}
      <h1 className="text-5xl font-bruno tracking-wider bg-gradient-to-r from-white via-purple-500 to-white bg-clip-text text-transparent z-10">
        Hospitals
      </h1>
      <p className="text-gray-400 mt-3 mb-10 text-lg text-center max-w-2xl bg-transparent">
        Discover trusted hospitals, check specialties, contacts, and more.
        Find facilities for emergencies, advanced care, and routine consultations in one place.
      </p>

      {/* Hospital Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-10 bg-transparent">
        {hospitals.map((hospital) => (
          <div
            key={hospital._id}
            className="p-8 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all flex flex-col items-start bg-transparent"
          >
            {/* Logo or Initial */}
            {hospital.logoFile ? (
              <img
                src={hospital.logoFile}
                alt={`${hospital.name} logo`}
                className="w-16 h-16 object-cover rounded-full mb-4 border border-white/20"
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg mb-4">
                {hospital.name.charAt(0)}
              </div>
            )}

            {/* Hospital Name */}
            <h2 className="text-2xl font-michroma mb-2 bg-transparent">
              {hospital.name}
            </h2>

            {/* Location */}
            <p className="text-gray-300 text-sm bg-transparent mb-2 font-bold">
              Location:{" "}
              <span className="font-normal text-gray-400 bg-transparent">
                {hospital.address?.city}, {hospital.address?.state},{" "}
                {hospital.address?.country}
              </span>
            </p>

            {/* Contact */}
            <p className="text-gray-400 text-sm bg-transparent mb-2">
              📞 {hospital.phone}
            </p>

            {/* Website */}
            {hospital.website && (
              <a
                href={hospital.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline text-sm bg-transparent mb-2"
              >
                🌐 {hospital.website}
              </a>
            )}

            {/* Departments */}
            {hospital.departments?.length > 0 && (
              <p className="text-gray-400 text-sm bg-transparent mb-2">
                🏥 Departments:{" "}
                <span className="text-gray-300">
                  {hospital.departments.slice(0, 3).join(", ")}
                  {hospital.departments.length > 3 && " ..."}
                </span>
              </p>
            )}

            {/* Facilities */}
            {hospital.facilities?.length > 0 && (
              <p className="text-gray-400 text-sm bg-transparent mb-2">
                🛠 Facilities:{" "}
                <span className="text-gray-300">
                  {hospital.facilities.slice(0, 3).join(", ")}
                  {hospital.facilities.length > 3 && " ..."}
                </span>
              </p>
            )}

            {/* View More Button */}
            <Link
              to={`/hospitals/${hospital._id}`}
              className="bg-transparent mt-4"
            >
              <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-sm transition-all shadow">
                View More Info
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
