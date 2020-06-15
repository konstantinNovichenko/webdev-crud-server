const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {type: Sequelize.STRING, allowNull: false },
  GPA: {type: Sequelize.DECIMAL}
});

module.exports = Student;
