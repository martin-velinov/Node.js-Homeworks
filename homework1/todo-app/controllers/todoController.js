var bodyParser = require('body-parser');
var mongoose =require('mongoose');

//connect to database
// mongoose.connect('mongodb+srv://username:password@cluster0.dxfsh.mongodb.net/?retryWrites=true&w=majority')


//create a schema-blueprint
var todoSchema= new mongoose.Schema({
    item:String
})

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne= Todo({item:'get flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item-saved');
// })


var data = [{item:'get milk'}, {item:'walk dog'}, {item:'kick some coding ass'}]
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports= function(app){
    
    app.get('/todo', function(req,res){
        //get data from mongo db and pass it to view
        Todo.find({}, function(err,data){
            if (err) throw err;
            res.render('todo', {todos:data});
        });
        
    });

    app.post('/todo',urlencodedParser, function(req,res){
        //get data from the view and add it to mongodb
        var newTodo= Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
        })

        // data.push(req.body);
        // res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
        //delete requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        })
        data=data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data)
    });
};