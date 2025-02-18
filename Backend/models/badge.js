const mongoose=require('mongoose');

const badgeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    criteria:{type:String, required:true},
    image:{type:String,required:true}
});

module.exports=mongoose.model('badge',badgeSchema);