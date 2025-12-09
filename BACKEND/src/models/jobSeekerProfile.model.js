import mongoose ,{Schema} from "mongoose";

const jobSeekerProfileSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        firstName: {
            type: String,
            required :true,
        },
        lastName: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        skills: [String],
        experience: {
            type: String
        }
    },
    {
        timestamps: true 
    }  
)

// export const JobSeekerProfile = mongoose.model("jobseekerprofile", jobSeekerProfileSchema)

export const JobSeekerProfile = mongoose.models.JobSeekerProfile || mongoose.model('JobSeekerProfile', jobSeekerProfileSchema);
