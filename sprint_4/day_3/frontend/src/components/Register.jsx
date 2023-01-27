import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");


    const handleSubmit=()=>{
        const payload={
            name,
            email,
            pass,
            age
        }
        console.log(payload);
        fetch("http://localhost:8080/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div>Register</div>
            <input type="text"  placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text"  placeholder='Enter Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"  placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <input type="text"  placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </>

    )
}
 
export default Register