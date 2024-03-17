const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Write POST endpoint to get the sum of two number
app.post('/add',(req,res)=>{
   const {num1,num2} = req.body;
   const result =  num1+num2;
   if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
     return res.status(400).send({"status":"error", "message": "Underflow"});
    }
    else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
      return res.status(400).send({"status":"error", "message": "Overflow"});
    }else if(typeof(num1) !== "number" || typeof(num2) !== "number") {
      return res.status(400).send({"status":"error", "message": "Invalid data types"});
  
    }
    return res.status(200).send({"result": result});
   
});


//Write POST endpoint to get the differance of two number
app.post('/subtract',(req,res)=>{
  const {num1,num2} = req.body;
  const result =  num1-num2
  if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
    return res.status(400).send({"status":"error", "message": "Underflow"});
   }
   else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
    return res.status(400).send({"status":"error", "message": "Overflow"});
  }else if(typeof(num1) !== "number" || typeof(num2) !== "number") {
    return res.status(400).send({"status":"error", "message": "Invalid data types"});

  }
   return res.status(200).send({"result": result});
  
})

//Write POST endpoint to get the multiplication of two number
app.post('/multiply',(req,res)=>{
  const {num1,num2} = req.body;
  const result =  num1*num2
  if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
    return res.status(400).send({"status":"error", "message": "Underflow"});
   }
   else if(num1 > 1000000 || num2 > 1000000 || result> 1000000){
    return res.status(400).send({"status":"error", "message": "Overflow"});
  }else if(typeof(num1) !== "number" || typeof(num2) !== "number") {
    return res.status(400).send({"status":"error", "message": "Invalid data types"});

  }
   return res.status(200).send({"result": result});
  
})

//Write POST endpoint to check if the num2 is 0 or not and to get the result after dividing two number
app.post('/divide',(req,res)=>{
  const {num1,num2} = req.body;
  const result =  num1/num2
  if(num2  === 0){
     return res.status(400).send({"error": 'Cannot divide by zero'});
   }
  if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
    return res.status(400).send({"status":"error", "message": "Underflow"});
   }
 if(num1 > 1000000 || num2 > 1000000 || result> 1000000){
    return res.status(400).send({"status":"error", "message": "Overflow"});
  }
 if(typeof(num1) !== "number" || typeof(num2) !== "number") {
    return res.status(400).send({"status":"error", "message": "Invalid data types"});

  }
   return res.status(200).send({"result": result});
  
})
      

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
    
module.exports = app;