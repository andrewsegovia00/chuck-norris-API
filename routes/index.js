const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const joke = data.value;
      res.render('jokes/showJoke', { joke: joke });
    })
    .catch(function(error) {
      console.log(error);
      res.render('jokes/showJoke', { joke: null });
    });
});


module.exports = router;
