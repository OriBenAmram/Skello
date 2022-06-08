const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  query,
  getByUsername,
  getById,
  add,
};

async function query() {
  try {
    const collection = await dbService.getCollection('user');
    var users = await collection.find({}).toArray();
    users = users.map(user => {
      delete user.password;
      return user;
    });
    return users;
  } catch (err) {
    logger.error('Cannot find users', err);
    throw err;
  }
}

async function getByUsername(username) {
  try {
    const collection = await dbService.getCollection('user');
    const user = await collection.findOne({username});
    return user;
  } catch (err) {
    logger.error(`Cannot finding user ${username}`, err);
    throw err;
  }
}

async function getById(userId) {
  try {
    const collection = await dbService.getCollection('user');
    const user = await collection.findOne({_id: ObjectId(userId)});
    return user;
  } catch (err) {
    logger.error(`Cannot find user with Id ${userId}`, err);
    throw err;
  }
}

async function add({username, password, fullname, imgUrl}) {
  try {
    // peek only updatable fields!
    const userToAdd = {
      username,
      password,
      fullname,
      imgUrl,
    };
    const collection = await dbService.getCollection('user');
    await collection.insertOne(userToAdd);
    return userToAdd;
  } catch (err) {
    logger.error('Cannot insert user', err);
    throw err;
  }
}
