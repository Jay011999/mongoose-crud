const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

const fruitSchema  =new mongoose.Schema({
  name:String,
  rating:Number
});

const item= mongoose.model("First",fruitSchema);
const element= new item({
    name:"Apple",
    rating:10
});

const element1= new item({
    name:"Mango",
    rating:9
});

const element2= new item({
    name:"Grapes",
    rating:10
});

item.insertMany([element,element1,element2],function(err){
    if(err){
        console.log(err);
    }else{
        console.log("inserted");
    }
})