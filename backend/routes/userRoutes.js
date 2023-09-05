const express = require('express');
const router = express.Router();

// Import user controller
const { handleCreateUser,
    handleUserSeenAvatar,
    handleGetUsersCount } = require('../controllers/userController');

router.post('/create', handleCreateUser);
router.post('/seenAvatar', handleUserSeenAvatar);
router.get('/getUsersCount', handleGetUsersCount)


module.exports = router;