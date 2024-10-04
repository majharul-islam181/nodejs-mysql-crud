const database = require("../config/db");

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

    })
  } catch (error) {
    console.log(error),
      res.status(500).send({
        success: false,
        message: "Error in Get All Student Api",
        error,
      });
  }
};

module.exports = {
  getStudentController,
};
