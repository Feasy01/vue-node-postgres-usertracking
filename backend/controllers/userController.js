const { createUser, updateUserSeenAvatar, getUsersCount } = require('../models/userModel')


//save new user session on website entry
async function handleCreateUser(req, res) {
    try {
        const { uid } = req.body
        const newUser = await createUser(uid)
        res.json({ message: 'User saved successfully', user: newUser })
    }
    catch (error) {
        console.error(error)
        res.status(400).json({ error: "Error saving user" })
    }
}

//update if the avatar has been seen
async function handleUserSeenAvatar(req, res) {
    try {
        const { uid } = req.body;

        if (!uid) {
            return res.status(400).json({ error: 'Error sending userID' });
        }

        const updatedUser = await updateUserSeenAvatar(uid);

        res.json({ message: 'User avatar seen and timestamp updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user avatar seen and timestamp:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
async function handleGetUsersCount(req, res) {
    try {
        const userCount = await getUsersCount();
        res.json({ userCount: userCount, message: 'successfuly got number of users' })
    }
    catch (error) {
        console.error('Error getting users count')
        res.status(500).json({ error: 'Internal server error' })
    }


}
module.exports = {
    handleCreateUser,
    handleUserSeenAvatar,
    handleGetUsersCount
};