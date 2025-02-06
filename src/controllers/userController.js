import UserModel from "../models/UserModel.js";

class UserController {
    // Method to display the form
    showForm(_req, res) {
        res.render("userForm");
    }

    // Method to display the edit form with user data
    async showEditForm(req, res) {
        try {
            const user = await UserModel.findUser(req.params.id);
            if (user) {
                res.render("editForm", { user });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            res.status(500).json({
                error: "Error loading user data.",
            });
        }
    }

    // Method to create a user in the database
    async storage(req, res) {
        try {
            await UserModel.create(req.body);
            res.redirect("/users/all");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Method to delete a user
    async deleteUser(req, res) {
        try {
            const user = await UserModel.deleteUser(req.params.id);
            if (user) {
                res.status(200).json({
                    message: "User deleted successfully",
                });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error deleting user" });
        }
    }

    // Method to update a user
    async updateUser(req, res) {
        try {
            const updatedData = req.body;
            const user = await UserModel.updateUser(req.body.id, updatedData);
            if (user) {
                res.redirect("/users/all"); // Redirect to the main table
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Error updating user" });
        }
    }

    // Method to list all users
    async index(_req, res) {
        try {
            const users = await UserModel.findAll();
            res.status(200).render("userTable", { users });
        } catch (error) {
            res.status(500).json({ error: "Error fetching all users" });
        }
    }

    // Method to view user details
    async showUserById(req, res) {
        try {
            const user = await UserModel.findUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({
                error: "Error fetching user data.",
            });
        }
    }
}

export default new UserController();
