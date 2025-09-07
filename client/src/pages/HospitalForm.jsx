import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import Aurora from "../Backgrounds/Aurora";

const HospitalForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: name || "",
    branchCode: "",
    phone: "",
    email: email || "",
    licenceNo: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    departments: "",
    facilities: "",
    website: "",
    logoFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // store File object if it's a file input
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = new FormData();

      // Append all fields to FormData
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          dataToSend.append(key, formData[key]);
        }
      });

      const { data } = await axios.post(
        "http://localhost:4000/api/hospital/create",
        dataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data.success) {
        toast.success("Hospital registered successfully!");
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[100dvh] h-auto relative bg-transparent flex justify-center items-start">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className="absolute flex justify-center items-center bg-transparent py-10">
        <div className="backdrop-blur-md bg-transparent px-10 py-10 rounded-3xl flex flex-col items-center border-2 border-white/25 relative w-full max-w-2xl">
          <h3 className="bg-transparent text-white text-3xl font-semibold mb-10">
            Hospital Registration
          </h3>

          {loading && (
            <div className="absolute z-50 inset-0 flex items-center justify-center rounded-3xl">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className={`bg-transparent w-full space-y-6 ${
              loading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {/* Hospital Name */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Hospital Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter hospital name..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                required
              />
            </label>

            {/* Branch Code */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Branch Code
              <input
                type="text"
                name="branchCode"
                value={formData.branchCode}
                onChange={handleChange}
                placeholder="Enter branch code..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
              />
            </label>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-4 bg-transparent">
              <label className="flex flex-col text-white gap-2 bg-transparent">
                Phone
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number..."
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  required
                />
              </label>

              <label className="flex flex-col text-white gap-2 bg-transparent">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email..."
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  required
                />
              </label>
            </div>

            {/* Licence Number */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Licence Number
              <input
                type="text"
                name="licenceNo"
                value={formData.licenceNo}
                onChange={handleChange}
                placeholder="Enter licence number..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                required
              />
            </label>

            {/* Address */}
            <div className="grid grid-cols-2 gap-4 bg-transparent">
              {["street", "city", "state", "zip"].map((field) => (
                <label
                  key={field}
                  className="flex flex-col text-white gap-2 bg-transparent"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field}...`}
                    className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  />
                </label>
              ))}
            </div>

            {/* Country */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Country
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
              />
            </label>

            {/* Departments */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Departments
              <input
                type="text"
                name="departments"
                value={formData.departments}
                onChange={handleChange}
                placeholder="Enter departments (comma separated)..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
              />
            </label>

            {/* Facilities */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Facilities
              <input
                type="text"
                name="facilities"
                value={formData.facilities}
                onChange={handleChange}
                placeholder="Enter facilities (comma separated)..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
              />
            </label>

            {/* Website */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Website
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter website..."
                className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
              />
            </label>

            {/* Logo */}
            <label className="flex flex-col text-white gap-2 bg-transparent">
              Upload Logo
              <input
                type="file"
                name="logoFile"
                onChange={handleChange}
                className="bg-transparent"
              />
            </label>

            {/* Submit */}
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold disabled:opacity-50"
              >
                Submit Hospital Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HospitalForm;
