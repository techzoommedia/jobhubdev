import { useContext, useState } from "react";
import { JobCategories, JobLocations } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner levl");
  const [salary, setSalary] = useState<any>(0);
  const [description, setDescription] = useState("");

  const { backendUrl, companyToken } : any = useContext(AppContext);
  const onSubmitHandler = async (e : any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/post-job",
        { title, description, location, salary, category, level },
        { headers: { token: companyToken } }
      );
      if (data.success) { 
        toast.success(data.message);
        setTitle('')
        setSalary(0)
        setDescription('')
      }
      toast.success(data.message);
    } catch (error : any) {
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="container p-4 flex flex-col w-full items-start gap-3"
    >
      <div className="w-full">
        <p className="mb-2">Job Tile</p>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded outline-none"
        />
      </div>
      <div className="w-full">
        <p className="mb-2"> Job Description</p>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded "
            onChange={(e) => setCategory(e.target.value)}
            name="job-category"
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Job Location</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded "
            onChange={(e) => setLocation(e.target.value)}
            name="job-location"
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Job Level</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded "
            onChange={(e) => setLevel(e.target.value)}
            name="job-level"
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>

      <div>
        <p>Job Salary</p>
        <input
          min={0}
          className="w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          type="Number"
          placeholder="25000"
        />
      </div>
      <button
        className="w-28 py-2 px-4 bg-black text-white rounded"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddJob;
