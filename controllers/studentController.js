const database = require("../config/db");

//GET ALL STUDENTS
const getStudentController = async (req, res) => {
  try {
    const data = await database.query(" SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No record found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Students Records",
      totalStudents: data[0].length,
      studentsList: data[0],
    });
  } catch (error) {
    console.log(error),
      res.status(500).send({
        success: false,
        message: "Error in Get All Student Api",
        error,
      });
  }
};

//GET STUDENT BY ID
const getStudentByIdController = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalide or Provide wrong Student Id",
      });
    }

    const data = await database.query(`SELECT * FROM students WHERE students_id=?`, [
      studentId,
    ]);
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "No record Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Get Student Data",
      studentDetails: data[0],
    });
  } catch (error) {
    console.log(error),
      res.status(500).send({
        success: false,
        message: "Error in Get Student by their Id Api",
        error,
      });
  }
};

module.exports = {
  getStudentController,
  getStudentByIdController,
};
