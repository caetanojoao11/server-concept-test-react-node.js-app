const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./models/User.js'); // Ensure the correct path to the User model file


// Establish the Sequelize connection
const sequelize = require('./config/database');

const userRoute = require('./routes/userRoutes.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.use('/userRoutes', userRoute);

// app.post("/insert", async (req, res) => {
//     try {
//         // console.log(req.body);
//         const { firstName, age } = req.body;
//         console.log(firstName, age); // Use a comma to separate firstName and age in the console.log

//         await userService.createNewUser(firstName, age);
        
//         // Respond to the client upon successful user creation
//         res.status(201).send("User created successfully");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("An error occurred while creating the user");
//     }
// });


// app.get("/select", async (req, res) => {
    
// });



// Sync the model with the database
sequelize.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log("Running on port 3001");
    });
  })
  .catch(err => {
    console.error('Database sync error:', err);
  });
