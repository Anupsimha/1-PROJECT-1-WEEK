import { clerkClient } from '@clerk/express';
import Course from '../models/Course.js';
import {v2 as cloudinary} from 'cloudinary';

//Update role to educator
export const updateRoleEducator = async (req , res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId , {
            publicMetadata: {
                role: 'educator'
            }
        })

        res.json({
            success: true,
            message: 'You can publish a new course now'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Add New Course

export const addCourse = async (req , res) => {
    try {
        const {courseData} = req.body;
        const imgFile = req.file;
        const educatorId = req.auth.userId;
        
        if(!imgFile){
            return res.json({success: false, message: 'Thumbnail not attached'})
        }

        const parsedCourseData = await JSON.parse(courseData);
        parsedCourseData.educator = educatorId;
        const newCourse = await Course.create(parsedCourseData);
        const imgUpload = await cloudinary.uploader.upload(imgFile.path);
        newCourse.courseThumbnail = imgUpload.secure_url
        await newCourse.save();

        res.json({success: true, message: 'Course Added'})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Get Educator Courses

export const getEducatorCourses = async (req , res) => {
    
}