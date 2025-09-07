import React from "react";
import { Link } from "react-router-dom";
import { 
  FaCalendarCheck, 
  FaNotesMedical, 
  FaUserMd, 
  FaFilePrescription, 
  FaHospital, 
  FaTint, 
  FaAmbulance 
} from "react-icons/fa";

const PatientDashboard = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start pt-24 py-10">

      {/* Glowing Backgrounds */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-500 blur-3xl opacity-20 top-32 left-10"></div>
      <div className="absolute w-80 h-80 rounded-full bg-red-500 blur-3xl opacity-20 bottom-20 right-20"></div>

      {/* Dashboard Title */}
      <h1 className="text-5xl font-bruno tracking-wider bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent z-10">
        Patient Dashboard
      </h1>
      <p className="text-gray-400 mt-3 mb-10 text-lg text-center max-w-2xl bg-transparent">
        Manage your health journey — book consultations, view records, track prescriptions, 
        and stay updated with your doctors and healthcare services in one place.
      </p>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-10 bg-transparent">

        {/* Appointments */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaCalendarCheck className="text-blue-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Appointments</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Schedule and track your upcoming consultations easily with our expert doctors.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-sm transition-all">
            View Appointments
          </button>
        </div>

        {/* Medical Records */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaNotesMedical className="text-green-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Medical Records</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Access your health history, reports, lab results, and treatment progress securely.
          </p>
          <button className="mt-4 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full text-sm transition-all">
            View Records
          </button>
        </div>

        {/* Doctors */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaUserMd className="text-red-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Doctors</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Connect with certified specialists for consultations, advice, and care anytime.
          </p>
          <button className="mt-4 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm transition-all">
            Browse Doctors
          </button>
        </div>

        {/* Prescriptions */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaFilePrescription className="text-yellow-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Prescriptions</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            View and download your prescribed medicines and follow-ups directly.
          </p>
          <button className="mt-4 bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-full text-sm transition-all">
            View Prescriptions
          </button>
        </div>

        {/* Hospitals */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaHospital className="text-purple-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Hospitals</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Find nearby hospitals with emergency services, specialists, and inpatient facilities.
          </p>
          <Link to='/hospitals'><button className="mt-4 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full text-sm transition-all">
            Explore Hospitals
          </button></Link>
        </div>

        {/* Blood Banks */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaTint className="text-pink-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Blood Banks</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Access information on blood banks, availability of blood types, and donation drives.
          </p>
          <button className="mt-4 bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-full text-sm transition-all">
            Locate Blood Banks
          </button>
        </div>

        {/* Ambulance */}
        <div className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 transition-all">
          <FaAmbulance className="text-teal-400 text-4xl mb-4 bg-transparent" />
          <h3 className="text-2xl font-michroma mb-2 bg-transparent">Ambulance</h3>
          <p className="text-gray-400 text-sm bg-transparent">
            Request quick ambulance services during emergencies with real-time tracking.
          </p>
          <button className="mt-4 bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-full text-sm transition-all">
            Request Ambulance
          </button>
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;
