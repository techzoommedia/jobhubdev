/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContextType } from "../../types/interfaces";



// Context can be null initially
export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState<any>([]);

  const [showRecruiterLogin, setShowRecuiterLogin] = useState(false);

  const [companyToken, setCompanyToken] = useState<string | any>(null);
  const [companyData, setCompanyData] = useState(null);



  //Function to fetch company data
  const fetchCompanyData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/jobs", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setCompanyData(data.company);
      } else {
        toast.error(data.message);
      }
    } catch (error : any) {
      toast.error(error.message);
    }
  };

  //   //Function to fetch jobs data
  // const fetchJobs = async () => {
  //   try {
  //     const { data } = await axios.get(backendUrl + "/api/jobs", {
  //       headers: { token: companyToken },
  //     });

  //     if (data.success) {
  //       setCompanyData(data.company);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

     //Function to fetch jobs data
  // const fetchUserData = async () => {
  //   try {
  //     const { data } = await axios.get(backendUrl + "/api/users/user", {
  //       headers: { Authorization: `Bearer ${companyToken}`},
  //     });

  //     if (data.success) {
  //       setCompanyData(data.company);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };


    const fetchJobs = () => {
    setJobs(jobsData);
  };

  useEffect(()=> {
    if(companyToken) {
      fetchCompanyData()
    }
  })
  useEffect(() => {
    fetchJobs();

    const storedCompanyToken = localStorage.getItem("companyToken");

    if (storedCompanyToken) {
      setCompanyToken(storedCompanyToken);
    }
  }, []);

  const value: AppContextType = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruiterLogin,
    setShowRecuiterLogin,
    companyToken,
    companyData,
    setCompanyToken,
    setCompanyData,
    backendUrl,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
