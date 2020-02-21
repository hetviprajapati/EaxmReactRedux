var mongoose=require('mongoose');
var express=require('express');
var app=express();
var chalk=require('chalk');

var theater=require('./Route/Theater/Theater');
app.use('/theater',theater);

mongoose.connect('mongodb://localhost:27017/ReactDemo',{});
mongoose.connection.on('error',function(err){
    console.log(chalk.red("An error occured while making an connection"));
}).once('open',function(){
    console.log(chalk.green("Connction successfully established"));
})

app.listen(3000,(error)=>{
    if(error)
    {
       console.log(chalk.red("Error occured while running on port 3000"));
       return
    }
    console.log(chalk.green("Server started on 3001"));
});
          