import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const postApplication = asyncHandler(async(req,res)=>{ //job seeker only create application
    
    const userId = req.user._id;
    const jobId = req.params.id;
    if(!userId){
        throw new ApiError(401,"user not authenticated");
    }
    if(!jobId){
        // throw new ApiError(400,"jobID is required")
        return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
    }
    const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
    if (existingApplication) {
        // throw new ApiError(400, 'You have already applied for this job');
        return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
    }
    const job = await Job.findById(jobId);
    if(!job){
        // throw new ApiError(404,"Job not found")
        return res.status(404).json({
                message: "Job not found",  
                success: false
            })
    }

    const application = await Application.create({
        job:jobId,
        applicant:userId,
        appliedAt:Date.now()
    });
    //push application id into job model
    job.applications.push(application._id);
    await job.save();

    return res
    .status(200)
    .json(new ApiResponse(201,application,"Application created successfully"))

    // const { jobId } = req.params;
    
    // if(!req.user){
    //     throw new ApiError(401,"user not authenticated");
    // }
    
    // const applicantId = req.user._id;
    
    // if(!jobId){
    //     throw new ApiError(400,"jobID is required")
    // }
    
    // const application = await Application.create({
    //     job:jobId,
    //     applicant:applicantId,
    //     appliedAt:Date.now()
    // })
    
    // if(!application){
    //     throw new ApiError(500,"application not create")
    // }

    // await Job.findByIdAndUpdate(jobId, { $push: { applicants: application._id } });


});

export const deleteApplication = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const appId = req.params.id;
    if(!userId){
        throw new ApiError(401,"user not authenticated");
    }   
    if(!appId){
        throw new ApiError(400,"application ID is required")
    }
    const application = await Application.findByIdAndDelete(appId);
    if(!application){
        throw new ApiError(404,"Application not found")
    }
    return res.status(200).json(new ApiResponse(200, application, "Application deleted successfully")); 
});

export const getAppliedJobs = asyncHandler(async(req,res)=>{ 
    const userId = req.user._id;
    if(!userId){
        throw new ApiError(401,"user not authenticated");
    }
    const application = await Application.find({ applicant: userId}).sort({ createdAt: -1 }).populate({
        path: 'job',
        options: { sort: { createdAt: -1 } },
        populate: { path: 'company', options: { sort: { createdAt: -1 } },
        },
    });
    if(!application || application.length === 0){
        throw new ApiError(401,"Application is not define")
    }
    // console.log(application);
    
    return res
    .status(200)
    .json(new ApiResponse(201,application))
});

// for admin to check how many application received for a particular job
export const getApplicants = asyncHandler(async (req, res) => {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
        path: 'applications',
        options: { sort: { createdAt: -1 } },
        populate: {
            path: 'applicant'
        }
    });
    if (!job) {
        throw new ApiError(404, "Job not defined");
    }
    // Return the populated applications from the job document
    return res.status(200).json(new ApiResponse(200, job.applications));
});

export const updateStatus = asyncHandler(async (req, res) => {
    // const { appId } = req.params;
    const { status } = req.body;
    const appId = req.params.id;
    if(!status){
        throw new ApiError(400,"status is required")
    }

    const application = await Application.findById(appId);
    if (!application) {
        throw new ApiError(404, 'Application not found');
    }

    application.status = status;
    await application.save();
    return res.status(200).json({
        status: 'success',
        data: application,
    });
});

