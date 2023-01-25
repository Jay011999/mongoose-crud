
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

item.deleteOne({name:"Apple"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Deleted")
    }
})

item.updateOne({_id:"63d15a406ca0b19952d13380"},{rating:6},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Success!!")
    }
})
