import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobCard = ({job} : {job:any}) => {
  const navigate = useNavigate()
  return (
    <div className='border border-gray-300 p-6 shadow rounded-lg'>
        <div className='flex justify-between items-center'>
            <img className='h-8' src={assets.company_icon} alt='' />
        </div>
        <h4 className='text-xl font-medium mt-2'>{job.title}</h4>
        <div className='flex items-center gap-3 mt-2 text-xs'>
          <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{job.location}</span>
          <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{job.level}</span>
        </div>
        <p className='mt-4 text-gray-500 text-sm' dangerouslySetInnerHTML={{__html : job.description.slice(0,150)}}></p>
        <div className='mt-4 flex gap-4 text-sm'>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}}  className='bg-blue-600 px-4 py-2 text-white rounded border-none'>Apply Now</button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='px-4 py-2 rounded border border-gray-300'>Learn More</button>
        </div>
    </div>
  )
}

export default JobCard