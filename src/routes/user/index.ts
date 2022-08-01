import express from "express";
import { userController } from "../../controllers";
import { returnValidationErrors } from "../../helper";
const { createUser, searchUser, updateUser } = userController;
/** middlewares */
import {
  validatePostRequest,
  validatePutRequest,
} from "../../middlewares/validation/user";

/** user main routes */
const router = express.Router();
router
  .route("/")
  .post(validatePostRequest, returnValidationErrors, createUser)
  .put(validatePutRequest, returnValidationErrors, updateUser);

router.route("/search").get(searchUser);

export default router;
