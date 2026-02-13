const mongosse = require("mongoose");
const { number } = require("prop-types");

const bookSchema = new mongosse.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price : {
    type: Number,
    required: true,
  },
  rank :{
    type:number
  }

}) 


var Book = mongosse.model("Book", bookSchema);
module.exports = Book; 