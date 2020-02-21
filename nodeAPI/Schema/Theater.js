var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var theaterSchema=new Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    movies:{
        type:Array,
        trim:true
    }
},{
    collection:'theater',
    timestamps:true
})

module.exports=mongoose.model('theater',theaterSchema);