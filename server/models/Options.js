// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*  
==============================================
  Options Collection  
  Fields:
    Name of feild             Description
    option_text     --->   List of Options
    corr_option     --->   This field show the Correct Option
============================================== 
*/



const Options = new Schema({
  
  option_text: [{
    type: String
  }],

  corr_option: {
      type: String,
      required: true
  }

});

// Model of Option Collection 
const OptionsModel = mongoose.model("options", Options);

// Exporting Model
module.exports = OptionsModel;
