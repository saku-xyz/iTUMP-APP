var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET home page. */
router.get('/', function (req, res, next) {

  connection.query('SELECT * FROM user', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

router.post('/addUser', function (req, res) {
  const userdata = {
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    name: req.body.name,
    status: req.body.status
  }
  connection.query("INSERT INTO user set ?", userdata, function (err, result) {
    if (err) throw err;
    res.send('Data Inserted!');
    res.send(result);
  });
});

router.delete('/deleteUser/:id', function (req,res) {

  var userid = req.params.id;

  connection.query("DELETE FROM user WHERE id = ?",[userid],function (err, rows) {
    if (err) throw err;
    res.send('Data Deleted!');
  });
});

router.put('/updateUser/:id', function (req,res) {
  
  var userid = req.params.id;
  const userdata = {
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    name: req.body.name,
    status: req.body.status
  }
  connection.query("UPDATE user set email = ?, password = ?, phone = ?, name = ?, status = ? WHERE id = ?", [userdata.email, userdata.password, userdata.phone, userdata.name, userdata.status, userid], function (err, result) {
    if (err) throw err;
    res.send('User Updated!');
  });
});

module.exports = router;