import mongoose, { Schema } from "mongoose";


const gallerySchema = new Schema({
    profile: {
        type: String,
        required :true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoURL: {
        type: String,
        required:true,
      
    },
}, {
    timestamps: true,
})

const Profiles = mongoose.models.Profiles || mongoose.model("Profiles", gallerySchema);
export default Profiles;