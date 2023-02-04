import axios from "axios"
import { ADDNEW_TODO } from "./actionsTypes"
const API_URL="http://localhost:8080"

export const addnewTodo=(data)=>async(dispatch)=>{
    try{
       const res= await axios.post(`${API_URL}/todos`,{data})

        dispatch({type:ADDNEW_TODO,payload:res.data})
    }catch(err){
        console.log(err)
    }
  
}