import { Router } from "express";
import { registerCompany ,getCompany, getCompanyById, updateCompany } from "../controller/company..controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = Router();

router.route("/register").post(verifyJWT,registerCompany);

router.route("/get").get(verifyJWT,getCompany);

router.route("/get/:id").get(verifyJWT,getCompanyById);

router.route("/update/:id").put(verifyJWT,singleUpload,updateCompany);


export default router;