const express = require("express");
require("../src/db/conn");

// const MensRanking=require("../src/modules/mens"); 
const router=require("./routers/men.js"); 

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});


