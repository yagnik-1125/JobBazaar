import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema(
    {
        job: {
            type: Schema.Types.ObjectId,
            ref: 'Job', 
            required: true
        },
        applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User ',  // no trailing spaces here
            required: true,
        },
        resume: {
            type: String
        },
        status: {
            type: String,
            enum: ['Pending','Reviewed','Rejected','Accepted'], 
            default: 'Pending' 
        },
        appliedAt: {
            type: Date, 
        }
    },
    {
        timestamps: true
    }
)

export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
// export const Application = mongoose.model("application",applicationSchema);