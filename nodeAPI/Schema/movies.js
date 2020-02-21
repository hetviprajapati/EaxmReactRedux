var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var movieSchema=new Schema({
    moviename:{
        type:String,
        require:true,
        trim:true
    },
    date:{
        type:Array,
        require:true
    }
},{
    collection:'movie',
    timestamps:true
})

module.exports=mongoose.model('movie',movieSchema);