'use strict';
// const requestProxy = require('express-request-proxy');
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

app.get('*', function(request, response){
  console.log('Index HTML');
  response.sendFile('index.html', { root: './public'});
})

function proxyGitHub(request, response) {
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
