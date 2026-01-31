const express=require('express')
const router=express.Router()
const employeeControllers=require('../controller/EmployeeController')
const Employee=require('../model/Employee')

// get,post,put/patch,delete

router.post('/add-employee',employeeControllers.createEmployee)
router.get('/getemployee',employeeControllers.getEmployee)
router.get('/employee/:id',employeeControllers.singleEmployee)
router.put('/updateemployee/:id',employeeControllers.updateEmployee)
router.delete('/deleteemployee/:id',employeeControllers.deleteEmployee)

module.exports=router;