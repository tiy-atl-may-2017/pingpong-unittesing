const express = require('express');
const router  = express.Router();
const Models = require('../models');

router.get('/', function(req, res) {
  res.redirect('/matches');
});

router.get('/matches', function(req, res) {
  res.send('Done.');
});

router.get('/matches/:id', function(req, res) {
  res.send('Done.');
});

router.post('/matches', function(req, res) {
  res.send('Done.');
});

router.put('/matches/:id', function(req, res) {
  res.send('Done.');
});

router.delete('/matches/:id', function(req, res) {
  res.send('Done.');
});

module.exports = router;
