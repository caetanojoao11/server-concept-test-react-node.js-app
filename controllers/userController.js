const userService = require("../services/userService");

exports.createUser = async (firstName, age) => {
    try {
        await userService.createNewUser(firstName, age);
    } catch (error) {
        throw error; // Propagate the error
    }
};

exports.getUsers = async () => {
    try {
        return await userService.getUsers();
    } catch (error) {
        throw error; // Propagate the error
    }
};

exports.deleteUser = async (idUser) => {
    try {
        return await userService.deleteUser(idUser);
    } catch (error) {
        throw error;
    }
}


