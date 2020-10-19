
const express = require('express')
var bodyParser = require('body-parser');

var calc = require('./routes/caclc');   
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile('/home/amruta/Desktop/Angular/assignment2/Calculator/index.html');
});

app.use('/calculate', calc);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
