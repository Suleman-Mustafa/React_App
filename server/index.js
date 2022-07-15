/////////////
///Import express and connecting to Database
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const questionModel = require('./models/Question');
const DisciplineModel = require('./models/Discipline');
const OptionsModel = require("./models/Options");

// Connecting to mongodb Data Using Mongoose
mongoose.connect("mongodb+srv://mebi:mahB00bali@firstappcluster.wksaqjp.mongodb.net/db?retryWrites=true&w=majority")
app.use(express.json()); 
/////////////



/*  
==============================================
API for Options data. Use OptionsModel From 
Options Collections to Extract data for Options.
============================================== 
*/

app.get('/options', async(req, res) => {
   
   try {
      const data = await OptionsModel.find({});
      res.status(200).json(data);
   } catch (error) {
      res.status(200).json({
         error: "Request is not Valid."
      });
   }

 });




 /*  
==============================================
API for Discipline data. Use DisciplineModel 
From Discipline Collections to Extract data 
for Disciplines.
============================================== 
*/

 app.get('/discipline', async(req, res) => {
   try {
      const data = await DisciplineModel.find({});
      res.status(200).json(data);
   } catch (error) {
      res.status(200).json({
         error: "Request is not Valid."
      });
   }

 });

 
/*  
==============================================
API for Question data.Use questionModel 
From Questions Collections to Extract data 
for Questions.
============================================== 
*/
app.get('/question', async(req, res) => {
   try {
      const data = await questionModel.find({});
      res.status(200).json(data);
   } catch (error) {
      res.status(200).json({
         error: "Request is not Valid."
      });
   }
 });




//// /////
//  Server Connecting
 app.listen(3002, () => {
    console.log(`Server is running`);
 });
 /////////
