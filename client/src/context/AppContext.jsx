import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

axios.defaults.withCredentials = true; // always send cookies

export const AppContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:4000";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);
  const [hospitals, setHospitals] = useState(null);

  // Fetch user data if authenticated
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/user-data`);
      if (data.success) {
        setUserData(data.userData);
      } else {
        setUserData(null);
        console.log("User data error:", data.message);
      }
    } catch (err) {
      console.error("Error fetching user data:", err.message);
    }
  };

  // Check auth status
  const checkAuth = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
      if (data.success) {
        setIsLoggedIn(true);
        await fetchUserData(); 
        await fetchAllHospitals();
        
        // fetch user data only if logged in
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } catch (err) {
      setIsLoggedIn(false);
      setUserData(null);
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

    const fetchAllHospitals = async()=>{
    try {
      const {data} = await axios.get(backendUrl+"/api/hospital/all");
      if(data.success){
        setHospitals(data.hospitals)
      }else{
        console.log(data.message);
      }
    } catch (error) {
      setError(error.message)
    }
  }

  // Run once on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const contextValue = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    loading,
    error,
    hospitals,
    checkAuth,
    refreshAuth: checkAuth, // optional: manually refresh auth
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
