const express = require('express');
const {getUsers, getUserById} = require('./user.controller');
// const {getUser, getUsers, deleteUser, updateUser} = require('./user.controller')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')

const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getUsers);
router.get('/:id', getUserById)

// router.put('/:id', requireAuth, requireAdmin,  updateUser)
// router.post('/', requireAuth, requireAdmin, addUser)
// router.delete('/:id', requireAuth, requireAdmin, deleteUser)

module.exports = router;
