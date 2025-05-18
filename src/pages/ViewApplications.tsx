
import { assets, viewApplicatonsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <table className="w-full max-w-4xl bg-white border border-gray-300  rounded max-sm:text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">User name</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Job title</th>
              <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 text-left">Resume</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicatonsPageData.map((applicant, index) => (
              <tr className="text-gray-700" key={index}>
                <td className="py-2 px-4 border-b border-gray-300 text-center">{index+1}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                    <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-3 max-sm:hidden" src={assets.company_icon} alt="" />
                    <span>{applicant.name}</span>
                    </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {applicant.jobTitle}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {applicant.location}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                    <a className="bg-blue-50 text-blue-400 px-3 py-1 rounded" href="" target="_blank">
                        Resume
                    </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 relative">
                    <div className="relative inline-block text-left group">
                        <button className="text-gray-500 action-button">...</button>
                        <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow   group-hover:block">
                            <button className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100">Accept</button>
                            <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Reject</button>
                        </div>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
