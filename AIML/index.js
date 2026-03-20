const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("TEST  CASE 1 is running ")
});

app.get('/about',(req,res)=>{
    res.send("test case 2")
})
app.post('/',(req,res)=>{
    const {name}=req.body;
    res.send('Welcome  to AIML',+{name});
})

app.listen(PORT,(error)=>{
    if(!error)
        console.log(`server is running  succesfully on port no,${PORT}`);
    else
        console.log("server is not running ");  
})