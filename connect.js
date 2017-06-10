const sqlize = require('sequelize');

const sequelize = new sqlize.Sequelize('postgres://Rahimi@localhost:5431/Rahimi');

const User = sequelize.define('user', {
  userID : {
    type : sqlize.INTEGER.UNSIGNED,
    primaryKey : true,
    autoIncrement: true
  },
  Username : {
    type : sqlize.STRING,
    unique : true,
    allowNull : false
  },
  password: {
    type : sqlize.STRING,
    allowNull : false
  },
  firstName: {
    type: sqlize.STRING,
    allowNull : false
  },
  lastName: {
    type: sqlize.STRING,
    allowNull : false
  },
  email : {
    type: sqlize.STRING,
    allowNull : false
  },
  tel : {
    type : sqlize.STRING
  },
  page : {
    type : sqlize.STRING,
    isUrl : true
  },
  age : {
    type : sqlize.INTEGER.UNSIGNED
  },
  job : {
    type : sqlize.STRING
  }
});

exports.creatTable = function () {

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  User.sync({force: true}).then(() => {
    User.create({
     firstName: 'John',
     lastName: 'Hancock',
     Username: "Mahi2",
     password: "Adsf",
     email: "AsdfADSf.asdf"
   });
  });
};


exports.addUser = function (
  _Username,
  _password,
  _firstName,
  _lastName,
  _email,
  _tele,
  _pg,
  _age,
  _job,
  callback) {
  User.create({
   firstName: _firstName,
   lastName: _lastName,
   Username: _Username,
   password: _password,
   email: _email,
   tel : _tele,
   page : _pg,
   age : _age,
   job : _job
 }).then(() => {
   console.log("Added");
 }).catch(function (e) {
   callback(e);
   console.log("Err : Can't add User to DataBase");
 });
};
