import mongoose, { Schema } from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements:[{
        type: String,
    }],
    location: {
        type: String,
    },
    salary: {
        type: Number,
        required: false 
    },
    experience: {
        type: Number,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Temporary', 'Internship'], 
        required: true
    },
    position:{
        type:Number,
        required:true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_By: {
        type: Schema.Types.ObjectId,
        ref: 'User ',
        required: true,
    },
    applications: [{
        type: Schema.Types.ObjectId,
        ref: 'Application' 
    }]
},
{
    timestamps: true 
}
);

export const Job = mongoose.model("Job", jobSchema);
