var fs = require('fs');

//delete file
fs.unlink('writeMe.txt');

//make directory
fs.mkdirSync('stuff');

//remove directory
fs.rmdirSync('stuff');


//make dir async way
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt','utf8', function(err,data){
        fs.writeFile('./stuff/writeMe.txt', data)
    });
});

// remove dir async way
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});


