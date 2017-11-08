var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/getSpellsList', function(req, res) {
  console.log('in server getting dem clients');
  console.log('CURRENT USER ID', req.user.id);

  pool.connect(function(err, client, done, next) {
    if(err) {
      console.log("Error connecting: ", err);
      //next(err);
    }
    //join client, staff, and users to filter all cleints from user login
    client.query("SELECT * FROM spells ORDER BY name;",
        function (err, result) {
          done();
          if(err) {
            console.log("Error inserting data: ", err);
            //next(err);
          } else {
            console.log('Results:', result.rows);
            res.send(result.rows);
          }
        });
  });
});


module.exports = router;
