var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.post('/submit-order', function(req, res) {
  var db = req.db;
  var orderCollection = db.get('ordercollection');
  var design = req.body.design;
  orderCollection.insert(
    {'design': design},
    function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.send("success");
      }
    }
  );
});

module.exports = router;
