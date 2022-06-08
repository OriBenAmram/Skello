const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

async function query() {
  try {
    const collection = await dbService.getCollection('board');
    const boards = await collection.find({}).toArray();
    return boards;
  } catch (err) {
    logger.error('cannot find boards', err);
    throw err;
  }
}

async function getById(boardId) {
  try {
    const collection = await dbService.getCollection('board');
    const board = collection.findOne({_id: ObjectId(boardId)});
    return board;
  } catch (err) {
    logger.error(`while finding board: ${boardId}`, err);
    throw err;
  }
}

async function remove(boardId) {
  try {
    const collection = await dbService.getCollection('board');
    await collection.deleteOne({_id: ObjectId(boardId)});
    return boardId;
  } catch (err) {
    logger.error(`cannot remove board ${boardId}`, err);
    throw err;
  }
}

async function add(board) {
  try {
    const collection = await dbService.getCollection('board');
    await collection.insertOne(board);
    return board;
  } catch (err) {
    logger.error('cannot insert board', err);
    throw err;
  }
}

async function update(board) {
  try {
    let id = ObjectId(board._id);
    const collection = await dbService.getCollection('board');
    delete board._id;
    await collection.updateOne({_id: id}, {$set: {...board}});
    return board;
  } catch (err) {
    logger.error(`cannot update board ${id}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};
