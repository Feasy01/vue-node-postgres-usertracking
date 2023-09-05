const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming you've set up your database connection

// Define the User model
const User = sequelize.define('users', {
    uid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    seenavatar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
});


async function createUser(uid) {
    try {
        const user = await User.create({ uid });
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}


async function updateUserSeenAvatar(uid) {
    try {
        const [updatedRowsCount, updatedRows] = await User.update(
            { seenavatar: true, timestamp: new Date() },
            {
                where: { uid },
                returning: true, // Get the updated user record
            }
        );

        if (updatedRowsCount === 0) {
            throw new Error('User not found'); // Handle if the user doesn't exist
        }

        return updatedRows[0];
    } catch (error) {
        throw new Error('Error updating user avatar seen and timestamp: ' + error.message);
    }
}
async function getUsersCount() {
    try {
        const countFalse = await User.count({ where: { seenavatar: false } });
        const countTrue = await User.count({ where: { seenavatar: true } });
        return ({ countFalse, countTrue })

    }
    catch (error) {
        throw new Error('Error counting users')
    }
}
module.exports = {
    User,
    createUser,
    updateUserSeenAvatar,
    getUsersCount
};