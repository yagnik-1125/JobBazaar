import { Router } from "express";
import {createProfile, getMyProfile, updateMyProfile} from "../controller/profile.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT,createProfile)

router.route("/me").get(verifyJWT,getMyProfile)

router.route("/update-profile").put(verifyJWT,updateMyProfile)


export default router;      