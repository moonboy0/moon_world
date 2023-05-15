import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

function User(){
    const {id} = useParams()
    let [user,setUser] = useState({})
    useEffect(()=>{
        async function get(){
            let response = await axios.get(`http://127.0.0.1:5000/users/${id}`)
            setUser(response.data.data)
        }
        get()
    },[]) 
    return(
        <>
            <h1>{user.first_name} {user.last_name}</h1>
            <h2>{user.user_name}</h2>
        </>
    )
}

export default User