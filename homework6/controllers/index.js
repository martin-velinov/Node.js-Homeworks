
const { getDb, connectToDb } = require('../db')
const { ObjectId } = require('mongodb')

// db connection
let db


connectToDb((err) => {
  if(err){
    console.log('error');
  }
    db = getDb()
  
})


module.exports = {
    
    
    viewBooks: (req, res) => {
     
        const page = req.query.p || 0
        const booksPerPage = 3
    
        let books = []

        db.collection('books')
        .find()
        .sort({author: 1})
        .skip(page * booksPerPage)
        .limit(booksPerPage)
        .forEach(book => books.push(book))
        .then(() => {
        res.status(200).json(books)
        })
        .catch(() => {
        res.status(500).json({error: 'Could not fetch the documents'})
        })
        
        
    },

    viewBook: (req, res) => {
        if (ObjectId.isValid(req.params.id)) {

            db.collection('books')
              .findOne({_id: new ObjectId(req.params.id)})
              .then(doc => {
                res.status(200).json(doc)
              })
              .catch(err => {
                res.status(500).json({error: 'Could not fetch the document'})
              })
              
          } else {
            res.status(500).json({error: 'Could not fetch the document'})
          }

        
    },

    createBook: (req, res) => {
        const book = req.body

        db.collection('books')
        .insertOne(book)
        .then(result => {
        res.status(201).json(result)
        })
        .catch(err => {
        res.status(500).json({err: 'Could not create new document'})
        })

        
    },

    patchBook: (req, res) => {
        const updates = req.body

        if (ObjectId.isValid(req.params.id)) {
      
          db.collection('books')
            .updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})
            .then(result => {
              res.status(200).json(result)
            })
            .catch(err => {
              res.status(500).json({error: 'Could not update document'})
            })
      
        } else {
          res.status(500).json({error: 'Could not update document'})
        }

        
    },

    deleteBook: (req, res) => {
       
        if (ObjectId.isValid(req.params.id)) {

        db.collection('books')
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not delete document'})
        })
    
        } else {
        res.status(500).json({error: 'Could not delete document'})
        }

        
    }

    

}
