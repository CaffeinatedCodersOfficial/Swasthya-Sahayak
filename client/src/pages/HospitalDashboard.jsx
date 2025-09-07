import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const mockHospitalData = {
  name: "GLA University Hospital",
  bedsTotal: 120,
  bedsAvailable: 24,
  icuTotal: 16,
  icuAvailable: 4,
  bloodBank: [
    { bloodType: "A+", unitsAvailable: 12 },
    { bloodType: "B+", unitsAvailable: 8 },
    { bloodType: "O+", unitsAvailable: 10 },
  ],
  doctors: [
    { name: "Dr. Ashok Sharma", speciality: "Cardiologist", availability: true, consultationFee: 500 },
    { name: "Dr. Neha Singh", speciality: "Orthopedic Surgeon", availability: false, consultationFee: 700 },
    { name: "Dr. Rahul Gupta", speciality: "Pediatrician", availability: true, consultationFee: 400 },
  ],
  services: [
    { name: "Emergency care", fee: 1500 },
    { name: "Surgery", fee: 3000 },
    { name: "Dialysis", fee: 2500 },
  ],
};

export default function HospitalDashboard() {
  const [hospital, setHospital] = useState(mockHospitalData);

  // Beds & ICU updates
  const updateField = (field, value) => {
    setHospital({ ...hospital, [field]: Number(value) });
  };

  // Blood Bank CRUD
  const addBloodType = () => {
    setHospital({
      ...hospital,
      bloodBank: [...hospital.bloodBank, { bloodType: "New", unitsAvailable: 0 }],
    });
  };
  const updateBloodBank = (index, field, value) => {
    const updated = [...hospital.bloodBank];
    updated[index][field] = field === "unitsAvailable" ? Number(value) : value;
    setHospital({ ...hospital, bloodBank: updated });
  };
  const removeBloodBank = (index) => {
    const updated = hospital.bloodBank.filter((_, i) => i !== index);
    setHospital({ ...hospital, bloodBank: updated });
  };

  // Doctors CRUD
  const addDoctor = () => {
    setHospital({
      ...hospital,
      doctors: [...hospital.doctors, { name: "New Doctor", speciality: "Specialist", availability: true, consultationFee: 0 }],
    });
  };
  const updateDoctor = (index, field, value) => {
    const updated = [...hospital.doctors];
    updated[index][field] = field === "consultationFee" ? Number(value) : value;
    setHospital({ ...hospital, doctors: updated });
  };
  const removeDoctor = (index) => {
    setHospital({ ...hospital, doctors: hospital.doctors.filter((_, i) => i !== index) });
  };

  // Services CRUD
  const addService = () => {
    setHospital({
      ...hospital,
      services: [...hospital.services, { name: "New Service", fee: 0 }],
    });
  };
  const updateService = (index, field, value) => {
    const updated = [...hospital.services];
    updated[index][field] = field === "fee" ? Number(value) : value;
    setHospital({ ...hospital, services: updated });
  };
  const removeService = (index) => {
    setHospital({ ...hospital, services: hospital.services.filter((_, i) => i !== index) });
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start pt-28 py-10">
      
      {/* Glowing Backgrounds */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-500 blur-3xl opacity-20 top-20 left-10"></div>
      <div className="absolute w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-20 bottom-20 right-20"></div>

      {/* Title */}
      <h1 className="text-5xl font-bruno tracking-wider bg-gradient-to-r from-white via-purple-500 to-white bg-clip-text text-transparent z-10">
        {hospital.name} Dashboard
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 z-10 bg-transparent w-full max-w-6xl mt-10">

        {/* Beds Section */}
        <div className="p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg bg-transparent">
          <h2 className="bg-transparent text-2xl font-michroma text-indigo-400 mb-4">Beds & ICU</h2>
          <div className="space-y-2 bg-transparent flex flex-col gap-5">
            
              <label className="bg-transparent  ">Total Beds: 
              <input 
                type="number" 
                value={hospital.bedsTotal} 
                onChange={(e) => updateField("bedsTotal", e.target.value)} 
                className="ml-2 px-2 py-1 rounded bg-gray-800 border border-gray-600 w-20"
              />
            </label>
            <label className="bg-transparent">Available Beds: 
              <input 
                type="number" 
                value={hospital.bedsAvailable} 
                onChange={(e) => updateField("bedsAvailable", e.target.value)} 
                className="ml-2 px-2 py-1 rounded bg-gray-800 border border-gray-600 w-20"
              />
            </label>
              <label>ICU Total: 
              <input 
                type="number" 
                value={hospital.icuTotal} 
                onChange={(e) => updateField("icuTotal", e.target.value)} 
                className="ml-2 px-2 py-1 rounded bg-gray-800 border border-gray-600 w-20"
              />
            </label>
            <label>ICU Available: 
              <input 
                type="number" 
                value={hospital.icuAvailable} 
                onChange={(e) => updateField("icuAvailable", e.target.value)} 
                className="ml-2 px-2 py-1 rounded bg-gray-800 border border-gray-600 w-20"
              />
            </label>
          </div>
        </div>

        {/* Blood Bank */}
        <div className="p-6 rounded-2xl bg-transparent backdrop-blur-md border border-white/10 shadow-lg">
          <h2 className="text-2xl font-michroma text-pink-400 mb-4 flex justify-between items-center bg-transparent">
            Blood Bank
            <button onClick={addBloodType} className="text-sm bg-pink-600 hover:bg-pink-500 px-3 py-1 rounded-full flex items-center gap-2">
              <FaPlus className="bg-transparent"/> Add
            </button>
          </h2>
          <ul className="space-y-3 bg-transparent">
            {hospital.bloodBank.map((blood, i) => (
              <li key={i} className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded-lg bg-transparent">
                <div className="flex gap-2 items-center">
                  <input 
                    value={blood.bloodType} 
                    onChange={(e) => updateBloodBank(i, "bloodType", e.target.value)} 
                    className="bg-gray-700 rounded px-2 py-1 w-16"
                  />
                  <input 
                    type="number" 
                    value={blood.unitsAvailable} 
                    onChange={(e) => updateBloodBank(i, "unitsAvailable", e.target.value)} 
                    className="bg-gray-700 rounded px-2 py-1 w-20"
                  />
                  <span className="text-gray-400">units</span>
                </div>
                <button onClick={() => removeBloodBank(i)} className="text-red-500 hover:text-red-400"><FaTrash /></button>
              </li>
            ))}
          </ul>
        </div>

        {/* Doctors */}
        <div className="p-6 rounded-2xl  backdrop-blur-md border border-white/10 shadow-lg md:col-span-2 bg-transparent">
          <h2 className="text-2xl font-michroma text-indigo-400 mb-4 flex justify-between items-center bg-transparent">
            Doctors
            <button onClick={addDoctor} className="text-sm bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded-full flex items-center gap-2">
              <FaPlus className="bg-transparent" /> Add
            </button>
          </h2>
          <div className="space-y-3 bg-transparent">
            {hospital.doctors.map((doc, i) => (
              <div key={i} className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded-lg bg-transparent">
                <input value={doc.name} onChange={(e) => updateDoctor(i, "name", e.target.value)} className="bg-gray-700 rounded px-2 py-1 w-40"/>
                <input value={doc.speciality} onChange={(e) => updateDoctor(i, "speciality", e.target.value)} className="bg-gray-700 rounded px-2 py-1 w-40"/>
                <select value={doc.availability} onChange={(e) => updateDoctor(i, "availability", e.target.value === "true")} className="bg-gray-700 rounded px-2 py-1">
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
                <input type="number" value={doc.consultationFee} onChange={(e) => updateDoctor(i, "consultationFee", e.target.value)} className="bg-gray-700 rounded px-2 py-1 w-24"/>
                <button onClick={() => removeDoctor(i)} className="text-red-500 hover:text-red-400"><FaTrash /></button>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="p-6 rounded-2xl  backdrop-blur-md border border-white/10 shadow-lg md:col-span-2 bg-transparent">
          <h2 className="text-2xl font-michroma text-pink-400 mb-4 flex justify-between items-center bg-transparent">
            Services
            <button onClick={addService} className="text-sm bg-pink-600 hover:bg-pink-500 px-3 py-1 rounded-full flex items-center gap-2">
              <FaPlus className="bg-transparent"/> Add
            </button>
          </h2>
          <div className="space-y-3 bg-transparent">
            {hospital.services.map((srv, i) => (
              <div key={i} className="flex justify-between items-center bg-transparent px-3 py-2 rounded-lg ">
                <input value={srv.name} onChange={(e) => updateService(i, "name", e.target.value)} className="bg-gray-700 rounded px-2 py-1 w-40"/>
                <input type="number" value={srv.fee} onChange={(e) => updateService(i, "fee", e.target.value)} className="bg-gray-700 rounded px-2 py-1 w-24"/>
                <button onClick={() => removeService(i)} className="text-red-500 hover:text-red-400"><FaTrash /></button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
