const express = require("express");
require("../src/db/conn");

const MensRanking=require("../src/modules/mens.js");

const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.get("/", async (req, res) => {
  res.send("Hello my name is deepak");
});

//create database + express.json()
app.post("/mens", async(req,res)=>{
    try{
     const addingMensRecords= new MensRanking(req.body)
     console.log(req.body)
      const insertMens=await addingMensRecords.save();
      res.status(201).send(insertMens);
    }
    catch(e){
      res.status(400).send(e);
    }
})

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});


