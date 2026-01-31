const Employee=require('../model/Employee')

const createEmployee=async(req,res)=>{
    try{
        const{name,email,phone,age,password}=req.body;
        const existingUser = await Employee.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

        const employee=new Employee({
            name,
            email,
            phone,
            age,
            password

        })
        await employee.save()
        res.status(201).json(employee)
    }
    catch(error){
        console.log("there is an error :",error)
        res.status(500).json({message:'server error'})
    }
};

const getEmployee=async(req,res)=>{
    try{
        const employee=await Employee.find()
        res.status(200).json(employee)
    }
    catch(error){
        console.error("there is an error :",error)
        res.status(500).json({message:'server error'})
    }
}

const singleEmployee=async(req,res)=>{
    try{
        const employee=await Employee.findById(req.params.id);

        if(!employee)
            res.status(500).json({message:"user does not exit"})
        else
            res.status(200).json(employee);

    }
    catch(error)
    {
        console.error("there is an error :",error)
        res.status(500).json({message:'server error'})
    }
}
const updateEmployee=async(req,res)=>{
    try{
        const{name,email,phone,age,password}=req.body;
        const employee=await Employee.findByIdAndUpdate(req.params.id,{name,email,phone,age,phone});
        if(!employee)
        {
            res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employee)

         if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
         }
         res.status(200).json(employee);
    }
    catch(error)
    {
        console.error("there is an error :",error)
        res.status(500).json({message:'server error'})
    }
}

const deleteEmployee= async (req,res)=>{
    try{
        const employee=await Employee.findByIdAndDelete(req.params.id)
        if(!employee)
        {
            res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json({message:"deleted succesfully"})
    }
    catch(error)
    {
        console.error("there is an error :",error)
        res.status(500).json({message:'server error'}) 
    }
}

module.exports={ createEmployee,getEmployee,singleEmployee,updateEmployee,deleteEmployee}