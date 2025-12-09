import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {JobSeekerProfile} from "../models/jobSeekerProfile.model.js";
import {EmployerProfile} from "../models/employerProfile.model.js";
import {ApiResponse} from "../utils/ApiResponce.js";


const createProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const { role } = req.user; //fatch role from current login user

    let profile;
    if (role === 'jobseeker') {
        profile = await JobSeekerProfile.create({ user: userId, ...req.body });
    } else if (role === 'employer') {
        profile = await EmployerProfile.create({ user: userId, ...req.body });
    } else {
        throw new ApiError(400, "Invalid user role");
    }

    
    await User.findByIdAndUpdate(userId, { profile: profile._id });

    return res
        .status(201)
        .json(new ApiResponse(200, profile, "Profile created successfully"));
});


const getMyProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    const user = await User.findById(userId).populate('profile'); //automatically replaces the profile field to user

    if (!user || !user.profile) {
        throw new ApiError(404, "Profile not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, user.profile, "Profile retrieved successfully"));
});


const updateMyProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id; 
    //populate(path, select, model, match, options)
    const user = await User.findById(userId).populate('profile');

    if (!user || !user.profile) {
        throw new ApiError(404, "Profile not found");
    }

 
    Object.assign(user.profile, req.body);
    await user.profile.save();

    return res
    .status(200)
    .json(new ApiResponse(200, user.profile, "Profile updated successfully"));
});

export {
    createProfile,
    getMyProfile,
    updateMyProfile
};
