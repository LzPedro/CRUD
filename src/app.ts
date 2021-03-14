const express = require('express')
const app = express()
const mongoose = require('mongoose')
const axios = require('axios').default;
var bodyParser = require('body-parser')

const port = process.env.PORT || 8080
const url_mongo = process.env.MONGODB_URI || 'mongodb+srv://lzpedro:YVDFw2aeEvhJk6T@cluster0.kxup2.mongodb.net/rosangela?retryWrites=true&w=majority';
const Letter = require('./letter');
var jsonParser = bodyParser.json()

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url_mongo)// faz a conexão com o banco de dados
  .then(_ => {
    console.log("Connected to MongoDB")
  })

//CREATE
app.post('/send',jsonParser, (req, res, next) => {
  let the_letter = new Letter(req.body)
  console.log("/send")
  the_letter.save();
  res.json(the_letter)
})
//READ ALL
app.get('/letter',jsonParser, (req, res, next) => {
  let the_letter = new Letter(req.body)
  console.log("/letter")
  the_letter.find().then(letters=>{
    res.status(200)
    res.json(letters)
    return next()
})
})
//READ ONE
app.get('/letter/:letter_id([0-9a-fA-F]{24})',jsonParser, (req, res, next) => {
  let the_letter = new Letter(req.body)
  the_letter.findById(req.params.letter_id).then(letters=>{
    if(letters){//Caso o resultado não seja nulo, quer dizer que encontramos um registro para mostrar
        res.status(200)
        res.json(letters)
    }
    else{//Caso contrário, quer dizer que não encontramos um registro
        res.status(404)
        res.json({message: 'not found'})
    }
    return next()
})
})
// //UPDATE
// app.post('/send',jsonParser, (req, res, next) => {
//   let the_letter = new Letter(req.body)
//   console.log(the_letter)
//   the_letter.save().then(

//   );
//   res.json(the_letter)
// })
// //DELETE
// app.post('/send',jsonParser, (req, res, next) => {
//   let the_letter = new Letter(req.body)
//   console.log(the_letter)
//   the_letter.save().then(

//   );
//   res.json(the_letter)
// })






app.get('/', (req, res) => {
  res.send('Hello There!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


console.log("Hello There!")