const express = require('express');
const { getStudentController } = require('../controllers/studentController');

const router = express.Router();

//GET ALL STUDENT LIST
router.get('/getAllStudents', getStudentController);


module.exports = router;