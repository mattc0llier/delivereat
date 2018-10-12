const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

const menu = {
  1: {
    id: 1,
    name: "Gamma Ray",
    brewery: "Beavertown",
    price: 400,
    image: "./static/img/gamma_1600x1600.jpg",
    quantityInStock: 5
  },
  2: {
    id: 2,
    name: "Neck Oil",
    brewery: "Beavertown",
    price: 500,
    image: "./static/img/neck_oil_1600x1600.jpg",
    quantityInStock: 5
  },
  3: {
    id: 3,
    name: "Export Stout",
    brewery: "Kernel",
    price: 600,
    image: "./static/img/lpuloid_1600x1600.jpg",
    quantityInStock: 5
  },
  4: {
    id: 4,
    name: "Camden Hells",
    brewery: "Camden Brewery",
    price: 300,
    image: "./static/img/8_ball_1600x1600.jpg",
    quantityInStock: 5
  }
};

const order = {
  1: {
    id: 1,
    menuItems: [],
    orderTotal: 0
  }
}

//first request goes to this whn going to local host
// render template in view folder with index
//
app.get('/', function(req, res){
  res.render('index');
});

app.get('/delivereat', function(req, res){
  res.json(menu)
})

app.listen(8080, function(){
  console.log('Listening on port 8080');
});
