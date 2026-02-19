const fs = require("fs");

fs.readFile(`foo.txt`,function (err,data){
    if(err){
        console.log();
    }
    else{
        console.log(data.toString());
    }
    
});
console.log("program Ended");
