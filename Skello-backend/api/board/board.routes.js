const express = require('express');
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const {getBoards, getBoardById, addBoard, updateBoard, removeToy} = require('./board.controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getBoards);
router.get('/:id', getBoardById);
router.post('/', addBoard);
router.put('/', updateBoard);
// router.delete('/:id', requireAuth, requireAdmin, remove)

module.exports = router;
