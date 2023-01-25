
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

const fruitSchema  =new mongoose.Schema({
  name:{ type:String,
required:{true:'enter name of fruit'}},
  rating:{
    type:Number,
    min:1,
    max:10
  }
});

const item= mongoose.model("First",fruitSchema);

const element= new item({
    rating:10
});

element.save();
