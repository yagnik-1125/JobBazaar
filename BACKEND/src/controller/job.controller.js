import { Job } from "../models/job.model.js";
import { ApiResponse } from "../utils/ApiResponce.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Application } from "../models/application.model.js";

export const postJob = asyncHandler(async (req, res) => {

    const { title, description, requirements, location, salary, jobType, experience, position, companyId } = req.body;
    const userId = req.user._id;


    if ([title, description, requirements, jobType, location, salary, experience, position, companyId].some((fields) => fields?.trim() === "")) {
        return res.status(404).json({
        message: "All fields are required.",
        success: false
      });
    }


    const job = await Job.create({
        title,
        description,
        requirements: requirements.split(','),
        location,
        salary: Number(salary),
        jobType,
        experience,
        position,
        company: companyId,
        created_By: userId,

    });

    if (!job) {
        throw new ApiError(500, "Unable to create job");
    }

    return res.status(201).json({
        message: "New job created successfully.",
        job,
        success: true
    });

})

export const getAllJobs = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword || "";
    const query = {
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
            // { location: { $regex: keyword, $options: "i" } },
            // { jobType: { $regex: keyword, $options: "i" } },
            // { position: { $regex: keyword, $options: "i" } },
            // { requirements: { $regex: keyword, $options: "i" } },
        ],
    }
    const jobs = await Job.find(query).populate({
        path: 'company',
    }).sort({ createdAt: -1 });
    if (jobs.length === 0) {
        throw new ApiError(404, "No jobs found");
    }
    return res
        .status(200)
        .json(new ApiResponse(200, jobs, "All Jobs fetched successfully"));
})

export const getJobById = asyncHandler(async (req, res) => {
    const jobId = req.params.id
    const job = await Job.findById(jobId).populate({
        path: "applications"
    })
    if (!job) {
        throw new ApiError(404, "Job not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, job, "Job fetched successfully"));
})

export const getMyJobs = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const jobs = await Job.find({ created_By: userId }).populate({
        path: 'company',
        createdAt: -1
    }) //.populate('company','name email website').populate('created_By','name email');
    if (jobs.length === 0) {
        throw new ApiError(404, "No jobs found for this user");
    }
    return res
        .status(200)
        .json(new ApiResponse(200, jobs, "Admin Jobs fetched successfully"));
})


// export const deleteJob = asyncHandler(async (req, res, next) => {
//     const { id } = req.params;
//     const job = await Job.findById(id);
//     if (!job) {
//         return next(new ErrorHandler("Oops! Job not found.", 404));
//     }

//     // if (job.postedBy.toString() !== req.user._id.toString()) {
//     //     throw new ApiError(403, 'You are not authorized to delete this job');
//     // }

//     const result = await Application.deleteMany({ job: id });
//     console.log("Deleted applications:", result);

//     await job.deleteOne();
//     return res
//         .status(204)
//         .json(new ApiResponse(200, "Job Deleted Successfully"))
// });

import mongoose from "mongoose";
// import { Job } from "../models/job.model.js";
// import { Application } from "../models/application.model.js";
// import { ApiResponse } from "../utils/ApiResponce.js";
// import { ApiError } from "../utils/ApiError.js";
// import { asyncHandler } from "../utils/asyncHandler.js";

export const deleteJob = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid job ID");
  }

  const job = await Job.findById(id);
  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  console.log("Deleting job, id:", id);

  const matchCount = await Application.countDocuments({ job: id });
  console.log("Applications matching for job:", id, matchCount);

  const result = await Application.deleteMany({ job: id });
  console.log("deleteMany result:", result);

  await job.deleteOne(); // or Job.findByIdAndDelete(id)

  return res.status(200).json(new ApiResponse(200, {}, "Job and applications deleted successfully"));
});

