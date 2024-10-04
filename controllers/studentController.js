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

    const data = await database.query(
      `SELECT * FROM students WHERE students_id=?`,
      [studentId]
    );
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

//CREATE STUDENT
const createStudentController = async (req, res) => {
  try {
    const { name, roll_no,fees, className} = req.body;
    if ((!name, !roll_no, !className)) {
      return res.status(500).send({
        message: "Please Provide all information",
        success: false,
      });
    }

    const data = await database.query(
      `INSERT INTO students (name,roll_no,fees,className) VALUES (? , ? , ? , ?)`,
      [name, roll_no, fees , className]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in INSERT QUERY",
      });
    }
    res.status(200).send({
      success: true,
      message: "New studnet Recorded created.",
    });
  } catch (error) {
    console.log(error),
      res.status(500).send({
        success: false,
        message: "Error in Create Student Api",
        error,
      });
  }
};

//UPDATE STUDENTS
const updateStudentController = async (req, res) =>{
  try {

    const studentId = req.params.id;

    if(!studentId){
      return res.status(404).send({
        success: false,
        message: "Invalid ID or provide id",
      })
    }

    const {name,roll_no, fees, className} = req.body
    const data = await database.query(`UPDATE students SET name= ?, roll_no= ? , fees= ?, className = ? WHERE students_id = ? `,[name,roll_no,fees,className, studentId])
    if(!data){
      return res.status(500).send({
        success: false,
        message: "Error in update api",
      })
    }
    res.status(200).send({
      success: true,
      message: "Student details updated"
    })

    
  } catch (error) {

    console.log(error),
    res.status(500).send({
      success: false,
      message: "Error in Update Student Api",
      error,
    });
    
  }
}


//DELETE STUEDNT
const deleteStudentController = async (req, res) =>{

  try {
    const studentId = req.params.id;

    if(!studentId){
      return res.status(404).send({
        success:false,
        message: "Please provide student Id or valid student id",
      })
    }

    await database.query(`DELETE FROM students WHERE students_id = ?`, [studentId]);
    res.status(201).send({
      success: true,
      message: "Deleted successfully",
    })
    
  } catch (error) {
    console.log(error),
    res.status(500).send({
      success: false,
      message: "Error in Delete Student Api",
      error,
    });
    
  }

}
module.exports = {
  getStudentController,
  getStudentByIdController,
  createStudentController,
  updateStudentController,
  deleteStudentController
};
