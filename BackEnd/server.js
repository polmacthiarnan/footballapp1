const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://admin:admin@cluster0.fhdlp.mongodb.net/players?retryWrites=true&w=majority';//connects to mongodb
mongoose.connect(strConnection, { useNewUrlParser: true });

const Schema = mongoose.Schema;
const playerSchema = new Schema({
    Name: String,
    Age: String,
    Team: String,
    Poster: String
})

const playerModel = mongoose.model('player', playerSchema);

app.get('/', (req, res) => {
    res.send('Hello World!') //prints hellow world to port 4000
})

app.get('/api/players', (req, res) => {

    playerModel.find((err, data) => {
        res.json(data);
    })
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"

})

app.get('/api/players/:id', (req, res) => {

    console.log(req.params.id);

    playerModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})
app.put('/api/players/:id', function (req, res) {
    console.log("Update Player " + req.params.id);
    console.log(req.body);
    playerModel.findByIdAndUpdate(req.params.id, req.body, { new: true },//finds the player by id and update
        (err, data) => {
            res.send(data);
        })
})


app.delete('/api/players/:id', (req, res) => {
    console.log(req.params.id);

    playerModel.findByIdAndDelete({ _id: req.params.id },//finds the player to delete
        (err, data) => {
            res.send(data);
        })
})


app.post('/api/players', (req, res) => {
    console.log(req.body);

    playerModel.pick({ //player model will contain player name, age, team and Poster
        Name: req.body.Name,
        Age: req.body.Age,
        Team: req.body.Team,
        Poster: req.body.Poster
    })
        .then()
        .catch();

    res.send('Data Recieved!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})