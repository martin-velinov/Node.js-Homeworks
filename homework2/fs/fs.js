
//CORE MODULE 2
var fs = require('fs');

fs.mkdir("directory",function(){

  fs.writeFile('./directory/newFile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');

    fs.appendFile('./directory/newFile.txt', ' This is my text.', function (err) {
      if (err) throw err;
      console.log('Updated!');

      fs.rename('./directory/newFile.txt', './directory/newestFile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
    });
    
   
  });
  
});


