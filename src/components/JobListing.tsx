import  { Key, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  JobCategories,
  JobLocations,
} from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } : any =
    useContext(AppContext);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<any>([])
  const [selectedLocations, setSelectedLocations] = useState<any>([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleCategoryChange = (category: any) => {
    setSelectedCategories((prev : any)=> prev.includes(category)? prev.filter((c : any) => c!== category) : [...prev, category])
  }

  const handleLocationChange = (location: any) => {
    setSelectedLocations((prev : any)=> prev.includes(location)? prev.filter((c : any) => c!== location) : [...prev, location])
  }

  useEffect(()=>{
    const matchesCategory = (job: { category: any; }) => selectedCategories.length === 0 || selectedCategories.includes(job.category)
    const matchesLocation = (job: { location: any; }) => selectedLocations.length === 0 || selectedLocations.includes(job.location)
    const matchesTitle = (job: { title: string; }) => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase)
    const matchesSearchLocation = (job: { location: string; }) => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.title.toLowerCase)
    const newFilteredJobs = jobs.slice().reverse().filter(
      (      job: any) => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
    )
    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  },[jobs, selectedCategories, selectedLocations, searchFilter])
  
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search Filter from Hero Component  */}

        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center  justify-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded ">
                    {searchFilter.title}{" "}
                    <img
                      onClick={() =>
                        setSearchFilter((prev: any) => ({ ...prev, title: "" }))
                      }
                      className="h-4 cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center  justify-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded ">
                    {searchFilter.location}{" "}
                    <img
                      onClick={() =>
                        setSearchFilter((prev: any) => ({
                          ...prev,
                          location: "",
                        }))
                      }
                      className="h-4 cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}
        <button
          className="px-4 py-1.5 border border-gray-300 rounded mb-4 lg:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Close " : "Filters"}
        </button>
        {/* Category Filter */}
        <div className={showFilters ? "mb-14" : "max-lg:hidden mb-14"}>
          <h3 className="font-medium text-lg mb-4">Search by Categories</h3>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex items-center gap-3" key={index}>
                <input onChange={()=>handleCategoryChange(category)} checked={selectedCategories.includes(category)}  className="scale-125" type="checkbox" /> {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilters ? "mb-14" : "max-lg:hidden mb-14"}>
          <h3 className="font-medium text-lg mb-4">Search by Location</h3>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex items-center gap-3" key={index}>
                <input onChange={()=>handleLocationChange(location)} checked={selectedLocations.includes(location)} className="scale-125" type="checkbox" /> {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p>Get your desired job from top companies</p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {filteredJobs.slice((currentPage - 1) * 6 , currentPage*6).map((job: unknown, index: Key | null | undefined) => (
            <JobCard job={job} key={index} />
          ))}
        </div>
        {/* Pagination  */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img onClick={()=> setCurrentPage(Math.max(currentPage - 1))} src={assets.left_arrow_icon} alt="" />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index)=>(
              <a href="#job-list">
                <button onClick={()=>setCurrentPage(index+1)} className={`w-10 h-10 flex items-center justify-center border border-gray rounded ${currentPage === index + 1 ? "bg-blue-100 text-blue-500" : "text-gray-500"}`}>{index + 1}</button>
              </a>
            ))}
              <a href="#job-list">
              <img  onClick={()=> setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))} src={assets.right_arrow_icon} alt="" />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
