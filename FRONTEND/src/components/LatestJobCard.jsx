// import { useNavigate } from 'react-router-dom';
// import { Badge } from './ui/badge'
// import React from 'react'

// function LatestJobCard({job}) {
//   const navigate = useNavigate();
//   return (
//     <div onClick={() => navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
//         <div>
//         <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//         <p className='text-sm text-gray-500'>{job?.location}</p>

//         </div>
//         <div>
//             <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
//             <p className='text-sm text-gray-600'>{job?.description}</p>
//         </div>
//         <div className='flex items-center gap-2 mt-4'>
//             <Badge className='text-cyan-500 font-bold' variant='ghost'>{job?.position} Positions</Badge>
//             <Badge className='text-red-500 font-bold' variant='ghost'>{job?.jobType}</Badge>
//             <Badge className='text-purple-600 font-bold' variant='ghost'>{job?.salary} LPA</Badge>
//         </div>
//     </div>
//   )
// }

// export default LatestJobCard    

import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge'
import React from 'react'

function LatestJobCard({job}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/description/${job._id}`)} className='p-3 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow duration-200'>
        <div>
        <h1 className='font-medium text-base sm:text-lg'>{job?.company?.name}</h1>
        <p className='text-xs sm:text-sm text-gray-500'>{job?.location}</p>
        </div>
        <div>
            <h1 className='font-bold text-base sm:text-lg my-2'>{job?.title}</h1>
            <p className='text-xs sm:text-sm text-gray-600 line-clamp-3'>{job?.description}</p>
        </div>
        <div className='flex flex-wrap items-center gap-2 mt-4'>
            <Badge className='text-cyan-500 font-bold text-xs sm:text-sm' variant='ghost'>{job?.position} Positions</Badge>
            <Badge className='text-red-500 font-bold text-xs sm:text-sm' variant='ghost'>{job?.jobType}</Badge>
            <Badge className='text-purple-600 font-bold text-xs sm:text-sm' variant='ghost'>{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCard