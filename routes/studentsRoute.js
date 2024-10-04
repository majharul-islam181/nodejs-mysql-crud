const express = require('express');
const { getStudentController, getStudentByIdController } = require('../controllers/studentController');

const router = express.Router();

//GET ALL STUDENT LIST
router.get('/getAllStudents', getStudentController);

//GET STUDENT BY ID
router.get('/getStudent/:id', getStudentByIdController)


module.exports = router;