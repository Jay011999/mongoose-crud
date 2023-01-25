const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

const fruitSchema  =new mongoose.Schema({
  name:String,
  rating:Number
});

const item= mongoose.model("First",fruitSchema);


item.find(function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        data.forEach(function(data){
            console.log(data.name);
        });
    }
})
