import { useEffect, useState } from "react"
import React from "react"

const AllNotes = () => {
    const [notes, setNotes] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/notes", {
            headers: {   
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>{console.log(err)})

    },[])






    return (
        <>
            <h1>All the notes are in console</h1>
            {notes?notes.map((ele)=>{
                return(
                    <>
                    <h2>Title:{ele.title}</h2>
                    <p>Note:{ele.note}</p>
                    <button>Delete</button>
                    <hr />
                    </>
                )
            }):<h1>No notes</h1>}

        </>

    )
}

export default AllNotes