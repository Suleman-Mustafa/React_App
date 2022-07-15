// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*  
==============================================
  Discipline Collection  
  Fields:
    Name of feild       Description
    dis_name  --->  Name of Discipline
    dis_desc  --->  This field shows the Discription of Discipline 
============================================== 
*/

const DisciplineSchema = new Schema({ 
  
  dis_name: {
    type: String,
    trim: true,
    required: true
  },

  dis_desc: {
    type: String,
    trim: true,
    required: true,
  },

});

// Model of DisciplineSchema
const DisciplineModel = mongoose.model("disciplines", DisciplineSchema);

// Exporting Model
module.exports = DisciplineModel;
