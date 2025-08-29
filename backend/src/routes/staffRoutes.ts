import Router from 'express';
import { StaffController } from '../controllers/StaffController';

const router = Router();
const staffController = new StaffController();

router.get('/staff', staffController.getAllStaff);

router.get('/staff/:staff_id', staffController.getStaffById);

export {
    router as staffRoutes
};