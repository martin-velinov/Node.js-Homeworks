var fs = require('fs');

// var readMe =fs.readFileSync('readMe.txt', 'utf8');

//async way
fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('writeMe.txt', data);
});

// console.log('test');

// fs.writeFileSync('writeMe.txt', readMe);
// console.log(readMe);




