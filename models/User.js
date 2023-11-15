

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: true, // Use notNull for non-string fields
                isInt: {
                    msg: 'Age must be an integer' // Additional validation to ensure it's an integer
                }
            },
        },
    });

    return User;
};
