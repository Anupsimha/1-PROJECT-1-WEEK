import Post from "../models/postModels.js";
import User from "../models/userModel.js";
import {v2 as cloudinary} from 'cloudinary';

export const createPost = async (req, res) => {
    try {
        const {text} = req.body;
        const {img} = req.body;
        const userId = req.user._id.toString();

        const user = await User.findById(userId);
        if(!user) return res.status(400).json({message : "User not found"});

        if(!text && !img){
            return res.status(400).json({error : "Post must have text or image"});
        }

        if(img){
            const uploadedResponse = await cloudinary.uploader.upload(img);
            img = uploadedResponse.secure_url;
        }

        const newPost = new Post({
            user : userId,
            text,
            img
        })

        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({error : "Internal Server Error"});
        console.log("Error in createPost controller : " , error);
    }
}

export const deletePost = async (req, res) => {}