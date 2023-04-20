const express = require("express");
require("../src/db/conn");

const MensRanking=require("../src/modules/mens.js"); 

const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.get("/", async (req, res) => {
  res.send("Hello my name is deepak");
});

//post Request
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
//Get Request
//Read database + express.json()
app.get("/mens", async(req,res)=>{
    try{
      //we will get data in feature
      const getMens = await MensRanking.find({})
      res.send(getMens);
    }
    catch(e){
      res.status(400).send(e);
    }
})
//Get Request
//we will handle get req of individual
app.get("/mens/:id", async(req,res)=>{
    try{
      //we will get data in feature
      const _id = req.params.id;
      const getMen = await MensRanking.findById({_id})
      // const getMens = await MensRanking.findById({_id:_id})
      res.send(getMen);
    }
    catch(e){
      res.status(400).send(e);
    }
})

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});


