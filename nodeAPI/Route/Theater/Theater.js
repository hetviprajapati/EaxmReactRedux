var express = require('express');
var router = express.Router();
var chalk = require('chalk');
var Theater = require('../../Schema/Theater');
var Movies = require('../../Schema/movies');
var Ticket = require('../../Schema/ticket');

var cors = require('cors');

router.use(express.json());
router.use(cors());

router.get('/get', async function (req, res) {
   try {
      var theater = await Theater.find({});
      res.status(200).json(theater);
   } catch (err) {
      console.log(chalk.red("Error Occured"));
      res.status(400).send("Error while retriving record")
   }
})

// router.get('/movieget',async function(req,res){
//    try{
//       var movie=await Movies.find({});
//       res.status(200).json(movie);
//    }catch(err){
//       console.log(chalk.red("Error Occured"));
//       res.status(400).send("Error while retriving record")
//    }
// })

router.get('/movie/:id', async function (req, res) {
   var arr = [];
   try {
      var theater = await Theater.find({ _id: req.params.id });
      theater.map(result => {
         arr.push(result.movies);
      })
      arr.map(result => {
         Movies.find({ _id: result }).then(data => {
            res.status(200).json(data);
         });
      })
   } catch (err) {
      console.log(chalk.red("Error Occured"));
      res.status(400).send("Error while retriving record" + err)
   }
})

router.get('/ticketget/:id/:date', async function (req, res) {
   try {
      var ticket = await Ticket.findOne({ mid: req.params.id, date: req.params.date });
      res.status(200).json(ticket);
   } catch (err) {
      console.log(chalk.red("Error Occured"));
      res.status(400).send("Error while retriving record")
   }
})

router.put('/update/:id/:date', async function (req, res) {
   try {
      await Ticket.findOneAndUpdate({ mid: req.params.id, date: req.params.date }, req.body)
      res.status(200).send("Data updated");
   } catch (err) {
      console.log(chalk.red("Error Occured"));
      res.status(400).send("Error while retriving record" + err);
   }
})

module.exports = router;