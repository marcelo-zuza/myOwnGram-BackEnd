import mongoose from "mongoose";
import { Schema } from "mongoose";

const photoSchema = new Schema({
    title: String,
    image: String,
    likes: Array,
    comments: Array,
    userId: mongoose.Types.ObjectId,
    userName: String,
}, {
    timestamps: true
});

const Photo = mongoose.model("Photo", photoSchema);
export default Photo
