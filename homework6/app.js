const express = require('express')
var indexRouter = require('./routes/index');


// init app & middleware
const app = express()
app.use(express.json())


app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);



app.listen(3000)
module.exports = app;