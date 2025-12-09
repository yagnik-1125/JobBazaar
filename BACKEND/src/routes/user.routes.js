import { Router } from "express";
import { changeCurrentPassword, login, logout, refreshAccessToken, register ,updateProfile} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = Router();

router.route("/register").post(singleUpload,register)

router.route("/login").post(login)

router.route("/profile/update").post(verifyJWT,singleUpload,updateProfile)   

router.route("/logout").post(logout)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

export default router;
