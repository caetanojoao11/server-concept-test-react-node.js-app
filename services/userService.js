const express = require("express").application;
  
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserModel = require('../models/User'); // Ensure the correct path to the User model file
const User = UserModel(sequelize, DataTypes); // Initialize the User model

exports.createNewUser = async (firstName1, age1) => {
    try {
        const newUser = await User.create({
          firstName: firstName1,
          age: age1,
        });
        console.log('New user created:', newUser.toJSON());
        // res.send('User created successfully');
      } catch (error) {
        console.error(error);
      }
}

exports.getUsers = async () => {
    try {
        const response = await User.findAll(); // Await the asynchronous operation
        // console.log(response); // Print the fetched users
        return response; // Return the fetched users (if this function is intended to be used elsewhere)
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error if needed
    }
};

exports.deleteUser = async (id) => {
  try {
    // Find the user by ID
    const userToDelete = await User.findByPk(id);

    // If the user does not exist, throw an error
    if (!userToDelete) {
      throw new Error('User not found');
    }

    // Perform the delete operation
    await userToDelete.destroy();

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    throw error;
  }
};

