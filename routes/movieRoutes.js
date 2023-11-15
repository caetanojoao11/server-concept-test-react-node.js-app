
const express = require("express");
const router = express.Router();
const MovieController = require('../controllers/movieController')

router.get("/", async (req, res) => {
    try {
        res.json({ response : await MovieController.getAllMovies() }); // Send the movies as a JSON response
    } catch (error) {
        console.error(error); // Log the error if an exception is thrown
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/", (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    
    MovieController.createMovie(movieName, movieReview)
    .then(() => {
        res.status(200).json({ message: 'Movie inserted successfully' });
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error inserting movie' });
    });
});

module.exports = router;



