var express = require('express');
var router = express.Router();

/* GET results for query */
router.get('/', function(req, res, next) {

  let char1 = req.query.char1
  let char2 = req.query.char2
  let char3 = req.query.char3
  let char4 = req.query.char4
  let char5 = req.query.char5

  res.render('results', { 
                            title: 'Wordle Helper',
                            query: `char1=${char1} char2=${char2} char3=${char3} char4=${char4} char5=${char5}`
                         });
});

module.exports = router;