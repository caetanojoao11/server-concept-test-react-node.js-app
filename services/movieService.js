const database = require('../models/dbConnection');

exports.createMovie = (movieName, movieReview) => {
    const sqlInsert = "INSERT INTO movies (moviename, moviereview) VALUES (?,?)"
    database.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result);
    });
};

exports.getAllMovies = () => {
    const sqlSelect = "SELECT * FROM movies";
    return new Promise((resolve, reject) => {
        database.query(sqlSelect, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};