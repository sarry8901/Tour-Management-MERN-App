import  express  from "express";
import { updateUser,getSingleUser,getAllUser,deleteUser} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router= express.Router()

// update new User
router.put('/:id',verifyUser,updateUser)

// delete a User
router.delete('/:id',verifyUser,deleteUser)

// get single User
router.get('/:id',verifyUser,getSingleUser)

// get all Users
router.get('/',verifyAdmin,getAllUser)

export default router;
