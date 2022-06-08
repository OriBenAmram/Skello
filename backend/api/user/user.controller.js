const userService = require('./user.service');
const logger = require('../../services/logger.service');

async function getUsers(req, res) {
  try {
    const users = await userService.query();
    res.send(users);
  } catch (err) {
    logger.error('Failed to get users', err);
    res.status(500).send({err: 'Failed to get users'});
  }
}

async function getUserById(req, res) {
  try {
    const userId = req.params.id
    const user = await userService.getById(userId);
    res.send(user);
  } catch (err) {
    logger.error('Failed to get user', err);
    res.status(500).send({err: 'Failed to get user'});
  }
}

module.exports = {
  getUsers,
  getUserById
};
