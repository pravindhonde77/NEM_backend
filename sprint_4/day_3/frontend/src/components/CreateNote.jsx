import React, { useState } from 'react'

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit=()=>{
        const payload={
            title,
            note,
            category,
            
        }
        console.log(payload);
        fetch("http://localhost:8080/notes/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <div>Create Note</div>
            <input type="text"  placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text"  placeholder='Enter Note' value={note}  onChange={(e)=>setNote(e.target.value)}/>
            <input type="text"  placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <button onClick={handleSubmit}>ADD NOTE</button>
        </>

    )
}
 
export default CreateNote