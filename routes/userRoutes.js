import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

// Route to display all users
router.get("/users/all", UserController.index);

// Route to display the form
router.get("/users/form", UserController.showForm);

// Route to display the edit form with user data
router.get("/user/edit/:id", UserController.showEditForm);

// Route to create a new user
router.post("/users/new", UserController.storage);

// Route to delete a user
router.delete("/users/delete/:id", UserController.deleteUser);

// Route to edit a user
router.post("/user/edit", UserController.updateUser);

// Route to show user details in JSON format
router.get("/user/details/:id", UserController.showUserById);

export default router;
