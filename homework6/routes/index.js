var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');




router
      .get('/books', indexController.viewBooks)
      .get('/books/:id', indexController.viewBook) 
      .post('/books', indexController.createBook)
      .patch('/books/:id', indexController.patchBook)
      .delete('/books/:id', indexController.deleteBook)
      
module.exports = router;
