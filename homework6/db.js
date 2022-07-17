const { MongoClient } = require('mongodb')

let dbConnection
let uri='mongodb+srv://bookstore-user:bookstore123@cluster0.0d7vc.mongodb.net/?retryWrites=true&w=majority';
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
    // MongoClient.connect('mongodb://localhost:27017/bookstore')
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}

