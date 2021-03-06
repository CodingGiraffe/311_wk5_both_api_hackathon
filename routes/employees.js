const express = require("express");
const employeesController = require("../controllers/employees");
const router = express.Router();

router.get("/", employeesController.getAllEmployees);
router.get("/:emp_no", employeesController.getEmployeeById);
router.get("/first_name/:first_name", employeesController.getEmployeesByFirstName);

module.exports = router;
