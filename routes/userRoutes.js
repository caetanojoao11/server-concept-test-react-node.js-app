
const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController')

router.get("/select", async (req, res) => {
    try {
        res.json({ response : await UserController.getUsers() }); // Send the movies as a JSON response
    } catch (error) {
        console.error(error); // Log the error if an exception is thrown
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/insert", (req, res) => {
    const { firstName, age } = req.body;
    
    UserController.createUser(firstName, age)
    .then(() => {
        res.status(200).json({ message: 'Movie inserted successfully' });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error inserting movie' });
    });
});

router.delete("/delete/:id", (req, res) => {
    const userId = req.params.id;

    UserController.deleteUser(userId)
    .then(() => {
        res.status(200).json({ message: 'User deleted successfully' });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user' });
    });
});

module.exports = router;



