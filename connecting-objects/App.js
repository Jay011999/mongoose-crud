const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

const fruitSchema  =new mongoose.Schema({
  name:{ type:String},
  rating:{
    type:Number
  }
});

const personSchema  =new mongoose.Schema({
    name:{ type:String},
    age:{type:Number},
    fav:fruitSchema
  });

const item= mongoose.model("First",fruitSchema);
const item1= mongoose.model("favperson",personSchema);

const element= new item({
    name:"Cherry",
    rating:9
}
);

element.save();
const person1= new item1({
    name:"amy",
    age:21,
    fav:element
})

person1.save();
