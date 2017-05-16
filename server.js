'use strict';

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
app.use(express.static('./public'));

app.get('/index.html', function(request, response){
  console.log('Index HTML');
  response.sendFile('index.html', { root: './public'});
})

app.listen(PORT, function() {
  console.log('The port we are using is ' + PORT)
});
