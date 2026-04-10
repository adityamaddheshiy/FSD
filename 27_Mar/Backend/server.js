const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Mongo Database is connected ;
mongoose.connect('mongodb+srv://adityamaddheshiya669_db_user:zu1mBqXH4NZSc5Sx@cluster.wrpwvfb.mongodb.net/?appName=Cluster')
.then(()=>console.log("DB connected"))
.catch(error=> console.log(error));


app.listen(3000,()=>{
    console.log(`Database is connected `);
})