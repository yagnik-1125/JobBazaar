// import React from 'react'
// import { Button } from './ui/button'
// import { Bookmark } from 'lucide-react'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Badge } from './ui/badge'
// import { useNavigate } from 'react-router-dom'

// function Job({job}) {
//     const navigate = useNavigate();
//     // const jobId = '85da1f51ag6'; //from mongoDB job id was fatched

//     const daysAgo = (mondodbTime) =>{
//         const createdAt = new Date(mondodbTime);
//         const currentTime = new Date();
//         const timeDiff = currentTime - createdAt;
//         return Math.floor(timeDiff / (1000*24*60*60));

//     }

//     return (
//         <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
//             <div className='flex items-center justify-between'>
//                 <p className='text-sm text-gray-500'>{daysAgo(job?.updatedAt)==0 ? "today" : `${daysAgo(job?.updatedAt)} Day's Ago`}</p>
//                 <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>

//             </div>
//             <div className='flex items-center gap-2 my-2'>
//                 <Button className='p-6' variant='outline' size='icon'>
//                     <Avatar>
//                         <AvatarImage src={job?.company?.logo} />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
//                     <p className='text-sm text-gray-500'>{job?.location}</p>
//                 </div>

//             </div>
//             <div >
//                 <h1 className='font-bold text-lg my-2 '>{job?.title}</h1>
//                 <p className='text-sm text-gray-600'>{job?.description}</p>
//             </div>
//             <div className='flex items-center gap-2 mt-4'>
//                 <Badge className='text-cyan-500 font-bold' variant='ghost'>{job?.position} Positions</Badge>
//                 <Badge className='text-red-500 font-bold' variant='ghost'>{job?.jobType}</Badge>
//                 <Badge className='text-purple-600 font-bold' variant='ghost'>{job?.salary} LPA</Badge>
//             </div>
//             <div className='flex items-center gap-4 mt-4'>
//                 <Button onClick={()=> navigate(`/description/${job?._id}`)} variant='outline' className='cursor-pointer'>Details</Button>
//                 <Button className='bg-cyan-400 cursor-pointer hover:bg-cyan-600'>Save</Button>
//             </div>
//         </div>
//     )
// }

// export default Job

import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function Job({job}) {
    const navigate = useNavigate();
    // const jobId = '85da1f51ag6'; //from mongoDB job id was fatched

    const daysAgo = (mondodbTime) =>{
        const createdAt = new Date(mondodbTime);
        const currentTime = new Date();
        const timeDiff = currentTime - createdAt;
        return Math.floor(timeDiff / (1000*24*60*60));
    }

    return (
        <div className='p-3 sm:p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-200'>
            <div className='flex items-center justify-between'>
                <p className='text-xs sm:text-sm text-gray-500'>{daysAgo(job?.updatedAt)==0 ? "today" : `${daysAgo(job?.updatedAt)} Day's Ago`}</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className='p-4 sm:p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-base sm:text-lg'>{job?.company?.name}</h1>
                    <p className='text-xs sm:text-sm text-gray-500'>{job?.location}</p>
                </div>
            </div>
            <div >
                <h1 className='font-bold text-base sm:text-lg my-2 '>{job?.title}</h1>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-3'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-cyan-500 font-bold text-xs sm:text-sm' variant='ghost'>{job?.position} Positions</Badge>
                <Badge className='text-red-500 font-bold text-xs sm:text-sm' variant='ghost'>{job?.jobType}</Badge>
                <Badge className='text-purple-600 font-bold text-xs sm:text-sm' variant='ghost'>{job?.salary} LPA</Badge>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant='outline' className='cursor-pointer w-full sm:w-auto'>Details</Button>
                <Button className='bg-cyan-400 cursor-pointer hover:bg-cyan-600 w-full sm:w-auto'>Save</Button>
            </div>
        </div>
    )
}

export default Job
