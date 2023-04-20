const mongoose = require('mongoose')

// local mongodb connection  127.0.0.1:27017
mongoose.connect('mongodb://127.0.0.1:27017/olympics')
.then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("no connection")
})

