import dbService from "../services/dbService";

class UserController {

    async addUser(user) {
        try {

        } catch (error) {

        }
    }

    async getAllUsers() {
        try {
            const users = await dbService.getAll('Users')
            return {
                users
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
}

export default UserController;