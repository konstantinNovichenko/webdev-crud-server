const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {type: Sequelize.STRING, allowNull: false },
  email: {type: Sequelize.STRING, allowNull: false },
  gpa: {type: Sequelize.DECIMAL},
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  }  
});

module.exports = Student;
