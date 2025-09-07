import React, { useContext, useEffect, useState } from "react";
import Aurora from "../Backgrounds/Aurora";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { backendUrl, isLoggedIn, userData } = useContext(AppContext);
  const navigate = useNavigate();

  // Form states
  const [role, setRole] = useState("Patient");
  const [state, setState] = useState("Login"); // Login | Register | ForgotPassword | VerifyResetOtp | ResetPassword
  const [step, setStep] = useState("form"); // form | otp (for register only)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpAttempt, setOtpAttempt] = useState(1);
  const [timer, setTimer] = useState(0);

  // UI states
  const [loading, setLoading] = useState(false);

  // Toggle login/register
  const handleState = () => {
    if (state === "Login") {
      setState("Register");
    } else {
      setState("Login");
    }
  };

  // 🔹 Login / Register submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (state === "Register" && step === "form") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
          role,
        });
        if (data.success) {
          toast.success(data.message);
          setStep("otp"); // move to OTP step
          setTimer(30);
        } else {
          toast.error(data.message);
        }
      } else if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          toast.success(data.message);
          clearForm();
          navigate("/");
          location.reload();
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Verify Registration OTP
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (otpAttempt < 3) {
        const { data } = await axios.post(
          backendUrl + "/api/auth/verify-registeration-otp",
          { email, otp }
        );
        if (data.success) {
          toast.success(data.message);
          setOtp("");
          setStep("form");
          setOtpAttempt(1);
          if (role === "Hospital") {
            navigate("/hospital-form",{
              state: {
                name,
                email
              },}
            );
            location.reload();
          } else {
            setState("Login");
          }
        } else {
          toast.error(data.message);
          setOtpAttempt(otpAttempt + 1);
        }
      } else {
        
        toast.error("Max attempt reached, Register again");
        
        clearForm();
        setStep("form");
        setOtp("");
        setOtpAttempt(1);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Resend Registration OTP
  const resendOtp = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(backendUrl + "/api/auth/resend-otp", {
        email,
      });
      if (data.success) {
        toast.success("OTP resent successfully!");
        setTimer(20);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Forgot Password: send OTP
  const sendResetOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        { email }
      );
      if (data.success) {
        toast.success("OTP sent to email");
        setState("VerifyResetOtp");
        setTimer(30);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resendResetOtp  = async()=>{
    try {
      setLoading(true);
      const { data } = await axios.post(backendUrl + "/api/auth/resend-reset-otp", {
        email,
      });
      if (data.success) {
        toast.success("OTP resent successfully!");
        setTimer(20);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  // 🔹 Forgot Password: verify OTP
  const verifyResetOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        backendUrl + "/api/auth/verify-reset-otp",
        { email, otp }
      );
      if (data.success) {
        toast.success("OTP verified");
        setState("ResetPassword");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Forgot Password: reset password
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(backendUrl + "/api/auth/reset-password", {
        email,
        password: newPassword,
      });
      if (data.success) {
        toast.success("Password reset successful, please login");
        clearForm();
        setOtp("");
        setNewPassword("");
        setState("Login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  useEffect(() => {
    isLoggedIn && userData && navigate("/home");
  }, [isLoggedIn, userData]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  return (
    <div className="w-full h-[100dvh] relative bg-black">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className="absolute inset-0 bg-transparent flex justify-center items-center">
        <div className="backdrop-blur-md bg-transparent px-10 py-10 rounded-3xl flex justify-center items-center flex-col border-2 border-white/25 relative">
          <h3 className="bg-transparent text-white text-3xl font-semibold mb-10">
            {state}
          </h3>

          {/* Loader */}
          {loading && (
            <div className="absolute z-50 inset-0 flex items-center justify-center bg-transparent rounded-3xl ">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin bg-transparent"></div>
            </div>
          )}

          {/* FORM STEP (Login/Register) */}
          {step === "form" && (state === "Login" || state === "Register") && (
            <form
              onSubmit={handleSubmit}
              className={`bg-transparent w-full md:w-[400px] ${
                loading ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {state === "Register" && (
                <>
                  <label className="flex flex-col bg-transparent text-white gap-2 mb-8">
                    Name
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                      placeholder="Enter your name..."
                    />
                  </label>

                  {/* Role Selector */}
                  <label className="flex flex-col bg-transparent text-white gap-2 mb-8">
                    Role
                    <div className="bg-transparent flex justify-center items-center gap-4 w-full">
                      <div
                        onClick={() => setRole("Patient")}
                        className={`border-2 border-white/25 py-3 bg-transparent rounded-xl w-full text-center cursor-pointer active:border-white ${
                          role === "Patient" ? "bg-white/75 text-black" : ""
                        } transition-all duration-150`}
                      >
                        Patient
                      </div>
                      <div
                        onClick={() => setRole("Doctor")}
                        className={`border-2 border-white/25 py-3 bg-transparent rounded-xl w-full text-center cursor-pointer active:border-white ${
                          role === "Doctor" ? "bg-white/75 text-black" : ""
                        } transition-all duration-150`}
                      >
                        Doctor
                      </div>
                      <div
                        onClick={() => setRole("Hospital")}
                        className={`border-2 border-white/25 py-3 bg-transparent rounded-xl w-full text-center cursor-pointer active:border-white ${
                          role === "Hospital" ? "bg-white/75 text-black" : ""
                        } transition-all duration-150`}
                      >
                        Hospital
                      </div>
                    </div>
                  </label>
                </>
              )}

              <label className="flex flex-col bg-transparent text-white gap-2 mb-8">
                Email
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  placeholder="Enter your email..."
                  type="email"
                />
              </label>

              <label className="flex flex-col bg-transparent text-white gap-2 mb-8">
                Password
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  placeholder="Enter your password..."
                  type="password"
                />
              </label>

              <div className="w-full flex justify-center items-center bg-transparent mb-2">
                <button
                  disabled={loading}
                  className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold disabled:opacity-50"
                >
                  {state === "Login" ? "Login" : "Register"}
                </button>
              </div>

              {/* Forgot Password */}
              {state === "Login" && (
                <p
                  onClick={() => setState("ForgotPassword")}
                  className="bg-transparent text-blue-600 cursor-pointer text-center mb-4"
                >
                  Forgot Password?
                </p>
              )}

              {/* Toggle login/register */}
              <div className="flex justify-center items-center gap-2 bg-transparent">
                <p className="bg-transparent text-center text-white">
                  {state === "Login"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </p>
                <p
                  onClick={handleState}
                  className="bg-transparent cursor-pointer text-blue-600"
                >
                  {state === "Login" ? "Register" : "Login"} here
                </p>
              </div>
            </form>
          )}

          {/* OTP STEP (Register only) */}
          {step === "otp" && state === "Register" && (
            <form
              onSubmit={handleOtp}
              className={`w-full md:w-[400px] bg-transparent ${
                loading ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <label className="flex flex-col text-white gap-2 mb-8 bg-transparent">
                Enter OTP
                <input
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  name="otp"
                  type="text"
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white text-center tracking-widest"
                  placeholder="000000"
                />
              </label>

              <div className="w-full flex justify-center bg-transparent mb-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold disabled:opacity-50"
                >
                  Verify OTP
                </button>
              </div>

              {/* Resend OTP */}
              <div className="w-full flex justify-between items-center bg-transparent">
                <div className="bg-transparent flex justify-center items-center gap-2">
                  <button
                    disabled={timer > 0 || loading}
                    onClick={resendOtp}
                    type="button"
                    className="disabled:text-blue-600 disabled:hidden text-white cursor-pointer bg-transparent"
                  >
                    Resend OTP
                  </button>
                  <p
                    className={`${
                      timer > 0 ? "" : "hidden"
                    } bg-transparent text-white `}
                  >
                    Resend OTP in {timer} sec
                  </p>
                </div>
                <p
                  onClick={() => setStep("form")}
                  className="bg-transparent text-blue-600 cursor-pointer"
                >
                  Back to Register
                </p>
              </div>
            </form>
          )}

          {/* Forgot Password - Step 1 (Send OTP) */}
          {state === "ForgotPassword" && (
            <form
              onSubmit={sendResetOtp}
              className="w-full md:w-[400px] bg-transparent"
            >
              <label className="flex flex-col text-white gap-2 mb-8 bg-transparent">
                Enter your Email
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  placeholder="Enter your email..."
                />
              </label>
              <button
                type="submit"
                className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold"
              >
                Send OTP
              </button>
              <p
                onClick={() => setState("Login")}
                className="bg-transparent text-blue-600 cursor-pointer text-center mt-4"
              >
                Back to Login
              </p>
            </form>
          )}

          {/* Forgot Password - Step 2 (Verify OTP) */}
          {state === "VerifyResetOtp" && (
            <form
              onSubmit={verifyResetOtp}
              className="w-full md:w-[400px] bg-transparent"
            >
              <label className="flex flex-col text-white gap-2 mb-4 bg-transparent">
                Enter OTP
                <input
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  type="text"
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white text-center"
                  placeholder="000000"
                />
              </label>
              <div className="w-full flex justify-between items-center bg-transparent mb-4">
                <div className="bg-transparent flex justify-center items-center gap-2">
                  <button
                    disabled={timer > 0 || loading}
                    onClick={resendResetOtp}
                    type="button"
                    className="disabled:text-blue-600 disabled:hidden text-white cursor-pointer bg-transparent"
                  >
                    Resend OTP
                  </button>
                  <p
                    className={`${
                      timer > 0 ? "" : "hidden"
                    } bg-transparent text-white `}
                  >
                    Resend OTP in {timer} sec
                  </p>
                </div>
                <p
                  onClick={() => setStep("form")}
                  className="bg-transparent text-blue-600 cursor-pointer"
                >
                  Back to Register
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold"
              >
                Verify OTP
              </button>
            </form>
          )}

          {/* Forgot Password - Step 3 (Reset Password) */}
          {state === "ResetPassword" && (
            <form
              onSubmit={resetPasswordHandler}
              className="w-full md:w-[400px] bg-transparent"
            >
              <label className="flex flex-col text-white gap-2 mb-8 bg-transparent">
                New Password
                <input
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  type="password"
                  className="bg-transparent rounded-xl border-2 border-white/25 p-3 outline-none focus:border-white"
                  placeholder="Enter new password..."
                />
              </label>
              <button
                type="submit"
                className="w-full text-white text-xl border-2 border-white/50 px-5 py-3 rounded-2xl hover:bg-white/75 hover:text-black transition-all duration-150 font-semibold"
              >
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
