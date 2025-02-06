import { DataTypes, Model } from "sequelize";
import connection from "../database/connection.js";

class UserModel extends Model {
    // Static method to initialize the UserModel with its columns and settings
    static initModel() {
        UserModel.init(
            {
                firstName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize: connection,
                modelName: "User",
                tableName: "users",
            }
        );
    }

    // Static method to delete a user
    static async deleteUser(id) {
        try {
            const result = await UserModel.destroy({ where: { id } });
            return result;
        } catch (error) {
            console.error("UserModel: Delete User Error", error);
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }

    // Static method to update a user
    static async updateUser(id, updatedData) {
        try {
            const result = await UserModel.update(updatedData, {
                where: { id },
            });
            return result;
        } catch (error) {
            console.error("UserModel: Update User Error", error);
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    // Static method to list all users
    static async showAll() {
        try {
            const result = await UserModel.findAll();
            return result;
        } catch (error) {
            console.error("UserModel: Find User Error", error);
            throw new Error(`Error fetching all users: ${error.message}`);
        }
    }

    // Static method to find a specific user
    static async findUser(id) {
        try {
            const result = await UserModel.findByPk(id);
            return result;
        } catch (error) {
            console.error("UserModel: Find User Error", error);
            throw new Error(`Error fetching user: ${error.message}`);
        }
    }
}

// Initialize the model
UserModel.initModel();

export default UserModel;
