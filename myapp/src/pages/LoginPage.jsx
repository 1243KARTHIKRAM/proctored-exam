import React from 'react';
import {useState} from 'react'
const LoginPage = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[phone,setPhone]=useState(0);
const[age,setAge]=useState(0);
const[password,setPassword]=useState("");





    const submit=async (e)=>{
        e.preventDefault()
    const userdetails={name,email,phone,age,password};
    try{
    const api="http://localhost:5500/employees/add-employee"
    const res=await fetch(api,
              { method:"POST",
                headers:{
               "Content-Type":'application/json'},
               body:JSON.stringify(userdetails)
            }
        );

if (res.status === 409) {
  alert("User already exists");
} else {
  alert("Employee Saved Successfully");
}
setName("");
  setEmail("");
  setPhone("");
  setAge("");
  setPassword("");

    }
    catch(error){
        alert("error to submit")
    }
}


    
  return (
    <div>
        <h1>SIGN UP</h1>
      <div>
        <form onSubmit={submit} className='loginform'>
           
            <label>UserName</label>
            <input type="text" value={name} placeholder='Username' onChange={(e)=>setName(e.target.value)}/><br />
            <label>Email</label>
            <input type="email"value={email} placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Phone</label>
            <input type="tel" value={phone} placeholder='PhoneNumber'onChange={(e)=>setPhone(e.target.value)}/><br />
            <label>age</label>
            <input type="number" value={age} placeholder='age'onChange={(e)=>setAge(e.target.value)}/><br />
            <label>Password</label>
            <input type="text" value={password} placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
            
      </div>
    </div>
  );
}

export default LoginPage;
