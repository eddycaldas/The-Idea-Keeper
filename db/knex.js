module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db/ideas.db'
    },
    useNullAsDefault: true
  }

};



var config = require('../knexfile')['development'];
var knex = require('knex')(config);

module.exports = knex;
