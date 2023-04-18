var express = require('express');
var router = express.Router();
var studentmodel = require('../models/students');

//GET Teste -> Obter todos os estudantes
router.get('/', async function (req, res, next) {
  console.log("Retrieving all students");
  let result = await studentmodel.getStudents();
  console.log(result);
  res.send(result);
});

module.exports = router;
