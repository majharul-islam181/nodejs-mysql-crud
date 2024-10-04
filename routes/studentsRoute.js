const express = require('express');
const { getStudentController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController } = require('../controllers/studentController');

const router = express.Router();

//GET ALL STUDENT LIST
router.get('/getAllStudents', getStudentController);

//GET STUDENT BY ID
router.get('/getStudent/:id', getStudentByIdController);


//CREATE STUDENT
router.post("/create", createStudentController);

//UPDATE STUDENT
router.put('/update/:id', updateStudentController);


//DELETE STUEDENT
router.delete("/delete/:id", deleteStudentController);


module.exports = router;