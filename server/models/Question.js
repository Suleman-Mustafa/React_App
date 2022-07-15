// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*  
==============================================
  Collection of Questions with reference of Discipline and Options collection
  Fields:
    Name of feild               Description
      q_name          --->   Question statement
      q_discipline    --->   Question's Area of Specialization
      q_option        --->   Shows all Question's Options 
============================================== 
*/


const Question_model = new Schema({
  q_name: {
    type: String,
    trim: true,
    required: true
  },

  q_discipline: [{ type: Schema.Types.ObjectId, ref: 'disciplines' }],

  option: [{ type: Schema.Types.ObjectId, ref: 'options' }]
 
});

/* Model of Question Collection */

const questionModel = mongoose.model("questions", Question_model);

// // //////////////////////////////////

// Exporting Model
module.exports = questionModel;

























// Input Data


// const createDocumnet = async () => {
//   try {
//     const dis_data = new DisciplineModel({
//       dis_name: "Computer Science", 
//       dis_desc: "This is Computer Science Field"
//      });
//     let result = await dis_data.save();
//     console.log(result);

//     const op_data = new OptionsModel( {
//       option_text: ["a", "b", "c", "d"],
//       corr_option: "c"
//     });
//     result = await op_data.save();
//     console.log(result);

    
//     const q_data = new questionModel({
//       q_name: "What is Pandas",
//       q_discipline: dis_data._id,
//       option: op_data._id
//     });

//     result = await q_data.save();
//     console.log(result);

//   } catch (error) {
//      console.log(error);
//   }
// }

// createDocumnet();