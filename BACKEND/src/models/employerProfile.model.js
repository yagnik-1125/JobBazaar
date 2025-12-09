import mongoose,{Schema} from "mongoose";

const employerProfileSchema = new Schema(
    {
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        companyName:{
            type: String,
            required: true,
        },
        website:{
            type: String,
            required: true,
        },
        industry:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true 
    }
)

// export const EmployerProfile = mongoose.model("employerProfile", employerProfileSchema)
export const EmployerProfile = mongoose.models.EmployerProfile || mongoose.model('EmployerProfile', employerProfileSchema);
   
//    import mongoose, { Schema } from 'mongoose';

//    const employerProfileSchema = new Schema({
//        user: {
//            type: Schema.Types.ObjectId,
//            ref: 'User ', 
//            required: true
//        },
//        companyName: {
//            type: String,
//            required: true,
//        },
//        website: {
//            type: String,
//            required: true,
//        },
//        industry: {
//            type: String,
//            required: true,
//        },
       
//    }, {
//        timestamps: true
//    });

//    export const EmployerProfile = mongoose.models.EmployerProfile || mongoose.model('EmployerProfile', employerProfileSchema);

   
   