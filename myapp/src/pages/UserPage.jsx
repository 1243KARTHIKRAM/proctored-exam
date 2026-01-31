import React, { useState,useEffect } from 'react'

const UserPage = () => {
    const [user,setUser]=useState([])
    const getuser=async(e)=>{
    const api=await fetch("http://localhost:5500/employees/getemployee")
    const res= await api.json()
    setUser(res);
    }

    useEffect(()=>{
       getuser();
    },[])
  return (
    <div className='container'>
     {
        user.map((item)=>{
            return(
                <div className='allusers'>
                <div>Name:{item.name}</div>
                <div>Email:{item.email}</div>
                <div>Phone:{item.phone}</div>
                </div>
            )
        }
           
                
        )
     }
    </div>
  )
}

export default UserPage
