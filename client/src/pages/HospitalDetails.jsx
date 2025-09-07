import React from "react";
import { useParams } from "react-router-dom";

const placeholderImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80";

const hospitals = [
  {
    name: "GLA University Hospital",
    location: "Mathura, Uttar Pradesh",
    openDate: "2005-08-15",
    image: placeholderImg,
    facilities: {
      beds: 120,
      bedsAvailable: 24,
      icuTotal: 16,
      icuAvailable: 4,
      bloodBank: { "A+": 12, "B+": 8, "O+": 10, "AB-": 2 },
    },
    services: [
      "Emergency care",
      "Cardiology",
      "Orthopedics",
      "Pediatrics",
      "Surgery",
      "Dialysis",
      "Radiology",
    ],
    doctors: [
      { name: "Dr. Ashok Sharma", speciality: "Cardiologist" },
      { name: "Dr. Neha Singh", speciality: "Orthopedic Surgeon" },
      { name: "Dr. Rahul Gupta", speciality: "Pediatrician" },
    ],
  },
];

const HospitalDetail = () => {
  const { hospitalname } = useParams();
  const hospitalInfo = hospitals.find(
    (h) =>
      h.name.toLowerCase().trim() ===
      decodeURIComponent(hospitalname).toLowerCase().trim()
  );

  if (!hospitalInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500 font-bold text-2xl">
        Hospital not found
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center pt-28 pb-16 px-6 md:px-16 bg-transparent">
      {/* Background circles */}
      <div className="absolute rounded-full bg-indigo-600 opacity-20 blur-3xl w-72 h-72 top-20 left-10 pointer-events-none"></div>
      <div className="absolute rounded-full bg-pink-600 opacity-20 blur-3xl w-96 h-96 bottom-10 right-20 pointer-events-none"></div>

      {/* Title & Image */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full z-10 bg-transparent">
        <img
          src={hospitalInfo.image}
          alt="Hospital"
          className="bg-transparent rounded-3xl shadow-xl w-full max-w-md object-cover border-4 border-transparent hover:border-indigo-500 transition-all duration-300"
        />
        <div className="flex flex-col max-w-xl bg-transparent">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-300 via-purple-500 to-indigo-300 bg-clip-text text-transparent mb-4 bg-transparent">
            {hospitalInfo.name}
          </h1>
          <p className="bg-transparent text-gray-400 text-xl tracking-wide mb-2">{hospitalInfo.location}</p>
          <p className="bg-transparent text-gray-400 text-md mb-8">
            Opened: <time className="bg-transparent">{hospitalInfo.openDate}</time>
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12 max-w-6xl w-full z-10 bg-transparent">
        {[
          {
            title: "Beds",
            total: hospitalInfo.facilities.beds,
            available: hospitalInfo.facilities.bedsAvailable,
            color: "text-indigo-400",
          },
          {
            title: "ICU",
            total: hospitalInfo.facilities.icuTotal,
            available: hospitalInfo.facilities.icuAvailable,
            color: "text-pink-400",
          },
          {
            title: "Blood Bank",
            details: hospitalInfo.facilities.bloodBank,
            color: "text-red-400",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-8 border border-gray-700 shadow-lg hover:scale-105 transition-scale duration-300 bg-transparent backdrop-blur-md "
          >
            <h3 className={`text-2xl font-semibold mb-4 bg-transparent ${item.color}`}>
              {item.title}
            </h3>
            {item.details ? (
              <ul className="text-gray-400 text-base space-y-1">
                {Object.entries(item.details).map(([type, qty]) => (
                  <li key={type} className="flex justify-between">
                    <span>{type}</span>
                    <span className="text-green-400 font-medium">{qty} units</span>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className="text-gray-400">
                  Total: <span className="font-semibold">{item.total}</span>
                </p>
                <p className="text-green-400 font-semibold">
                  Available: {item.available}
                </p>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Doctors & Services */}
      <section className="flex flex-col md:flex-row gap-10 max-w-6xl w-full z-10 bg-transparent">
        <div className="flex-1 bg-transparent  rounded-3xl p-8 border border-gray-700 shadow-lg hover:scale-105 transition-scale duration-300">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-6 bg-transparent">Doctors</h2>
          <ul className="text-gray-300 space-y-3 text-lg bg-transparent">
            {hospitalInfo.doctors.map((doc) => (
              <li key={doc.name} className="bg-transparent">
                <p className="bg-transparent">
                  <span className="font-bold bg-transparent">{doc.name}</span>{" "}
                  <span className="text-gray-500 bg-transparent">({doc.speciality})</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 rounded-3xl p-8 border border-gray-700 shadow-lg hover:scale-105 transition-scale duration-300 bg-transparent">
          <h2 className="text-3xl font-semibold text-pink-400 mb-6 bg-transparent">Services</h2>
          <ul className="text-gray-300 space-y-3 text-lg bg-transparent">
            {hospitalInfo.services.map((srv) => (
              <li className="bg-transparent" key={srv}>{srv}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Actions */}
      <div className="flex gap-8 mt-14 z-10 bg-transparent">
        <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg transition-colors duration-300 shadow-indigo-700">
          Book a Bed
        </button>
        <button className="bg-pink-600 hover:bg-pink-500 px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg transition-colors duration-300 shadow-pink-700">
          Book a Consult
        </button>
      </div>
    </div>
  );
};

export default HospitalDetail;
