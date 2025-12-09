import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    location: {
        type: String,   
    },
    website: {
        type: String,
    },
    logo: {
        type: String, // URL or file path to the logo
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        // unique: true
    }

},
{ timestamps: true }
); 
export const Company = mongoose.model("Company", companySchema);