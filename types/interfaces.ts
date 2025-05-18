import { createContext } from "react";

export interface AppContextType {
  searchFilter: {
    title: string;
    location: string;
  };
  setSearchFilter: React.Dispatch<React.SetStateAction<any>>;
  isSearched: boolean;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
  jobs: any;
  setJobs: React.Dispatch<React.SetStateAction<any>>;
  showRecruiterLogin: boolean;
  setShowRecuiterLogin: React.Dispatch<React.SetStateAction<boolean>>;
  companyToken: string;
  setCompanyToken: React.Dispatch<React.SetStateAction<string>>;
  companyData: any;
  setCompanyData: React.Dispatch<React.SetStateAction<any>>;
  backendUrl: string;
}

// Default value is null, so context type includes null
export const AppContext = createContext<AppContextType | null>(null);
