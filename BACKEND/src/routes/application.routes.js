import { Router } from "express";
import { postApplication ,getAppliedJobs, getApplicants, updateStatus, deleteApplication} from "../controller/application.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route('/apply/:id').post(verifyJWT,postApplication)
router.route('/delete/:id').delete(verifyJWT,deleteApplication)
router.route('/get').get(verifyJWT,getAppliedJobs)
router.route('/:id/applicants').get(verifyJWT,getApplicants)
router.route('/status/:id/update').post(verifyJWT,updateStatus)

export default router;