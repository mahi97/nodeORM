const sqlize = require('sequelize');

// const sequelize = new sqlize.Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
//
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//
//   // SQLite only
//   storage: 'path/to/database.sqlite'
// });

// Or you can simply use a connection uri
const sequelize = new sqlize.Sequelize('postgres://Rahimi@localhost:5431/Rahimi');

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
  firstName: {
    type: sqlize.STRING
  },
  lastName: {
    type: sqlize.STRING
  },
  

});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
