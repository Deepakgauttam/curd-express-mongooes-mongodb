const express = require("express");
const router = new express.Router();
const MensRanking=require("../modules/mens")
  
  //post Request
  //create database + express.json()
  router.post("/mens", async(req,res)=>{
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
  router.get("/mens", async(req,res)=>{
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
  router.get("/mens/:id", async(req,res)=>{
      try{
        //we will get data in feature
        const _id = req.params.id;
        const getMen = await MensRanking.findById({}).sort({"ranking":1})
        // const getMens = await MensRanking.findById({_id:_id})
        res.send(getMen);
      }
      catch(e){
        res.status(400).send(e);
      }
  })
  //Get Request
  //we will handle patch req of individual update
  router.patch("/mens/:id", async(req,res)=>{
      try{
        //we will get data in feature
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
          new:true   // to update in postman 
        })
        // const getMens = await MensRanking.findById({_id:_id})
        res.send(updateMen);
      }
      catch(e){
        res.status(500).send(e);     // server error
      }
  })
  // Delete Request
  // we will handle delete req of individual 
  router.delete("/mens/:id", async(req,res)=>{
      try{
        //we will get data in feature
        const deleteMen = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(deleteMen);
      }
      catch(e){
        res.status(500).send(e);     // server error
      }
  })
  
  // app.delete("/mens/:id", async(req,res)=>{
  //   try{
  //     const _id = req.params.id;
  //     const deleteMen = await MensRanking.findByIdAndDelete(_id);
  //     if(!deleteMen) {
  //       return res.status(404).send('No record found.');
  //     }
  //     res.status(200).send(deleteMen);
  //   }
  //   catch(e){
  //     res.status(500).send(e);     // server error
  //   }
  // })
  
module.exports=router;