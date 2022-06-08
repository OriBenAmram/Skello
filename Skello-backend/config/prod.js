const {dbPassword} = require('../private/privateKeys.service');
const {dbUserName} = require('../private/privateKeys.service');

module.exports = {
  dbURL: `mongodb+srv://${dbUserName}:${dbPassword}@skello-proj.3ysvn.mongodb.net/skelloDB?retryWrites=true&w=majority`,
};
