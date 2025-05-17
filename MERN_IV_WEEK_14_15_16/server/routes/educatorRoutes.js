import express from 'express';
import { addCourse, updateRoleEducator } from '../controllers/educatorController.js';
import { protectEducator } from '../midldlewares/authMiddleware.js';

const educatorRouter = express.Router();

//add Educator Role
educatorRouter.get('/update-role' , updateRoleEducator);
educatorRouter.post('/add-course' , upload.single('image') , protectEducator , addCourse);

export default educatorRouter;