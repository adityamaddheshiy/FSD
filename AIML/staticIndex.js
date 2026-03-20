const { error } = require('console');
const express = require('express')
const app = express();
const  PORT = 5000;

const path = require('path')

app.use('/',express.static(path.join(__dirname,'static')));


app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is successfully running on, ${PORT}`);
    }else{
        console.log(`Server is not running Currently`);
    }
});