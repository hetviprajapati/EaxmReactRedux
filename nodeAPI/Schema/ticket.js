var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var ticketSchema=new Schema({
    mid:{
        type:String,
        require:true,
        trim:true
    },
    date:{
        type:String,
        trim:true
    },
    booked:{
        type:Array,
        require:true
    }
},{
    collection:'ticket',
    timestamps:true
})

module.exports=mongoose.model('ticket',ticketSchema);