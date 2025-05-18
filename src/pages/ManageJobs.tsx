import  { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const ManageJobs = () => {
  const navigate = useNavigate();
  const { backendUrl, companyToken } : any = useContext(AppContext);
  const [jobs, setJobs] = useState<any>([]);
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setJobs(data.jobsData.reverse());
      } else{
        toast.error(data.message)
      }
    } catch (error : any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  const changeJobVisibility = async (id : any) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibilty",
        {
          id,
        },
        {
          headers: {
            token: companyToken,
          },
        }
      );
      if(data.success){
        toast.success('Job Changed Successfully')
      }
    } catch (error : any) {
      toast.error(error.message)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-300  rounded max-sm:text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Job Title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Date</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Applicants</th>
              <th className="py-2 px-4 text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job : any, index : any) => (
              <tr className="text-gray-700" key={index}>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <div className="flex items-center">
                    <span>{job.title}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {job.date}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <p> {job.applicants}</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 relative">
                  <div className="relative inline-block text-left group">
                    <input
                      onChange={() => changeJobVisibility(job._id)}
                      type="checkbox"
                      checked={job.visible}
                      className="scale-150"
                    />
                    {/* <button className="text-gray-500 action-button"></button>
                        <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow   group-hover:block">
                            <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">Accept</button>
                            <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Reject</button>
                        </div> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
