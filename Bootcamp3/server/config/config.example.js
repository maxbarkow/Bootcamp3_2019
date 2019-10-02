//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://maxbarkow:5sCe9DUTIdEjPy5z@cluster0-6mgad.mongodb.net/Bootcamp2?retryWrites=true&w=majority',
  },
  openCage: {
    key: '55108ffb58f14d84b942274fb9ef1854' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
