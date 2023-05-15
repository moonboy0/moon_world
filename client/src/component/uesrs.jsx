import  axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Users(){
    let [users,setUsers] = useState([])

    useEffect(()=>{
        async function get(){
            let response = await axios.get("http://127.0.0.1:5000/users")
            setUsers(response.data.data)
        }
        get()
    },[])
    return(
    <>
        {users.map(user=>{
            return <div>
                <a href={`/user/${user._id}`}>{user.first_name} {user.last_name}</a>
                <br/>
                <button onClick={()=>{onDelete(user._id)}}>delete</button>
                <button>update</button>

            </div>
        })}
    </>)
    async function onDelete(id){
        let response = await axios.delete(`http://127.0.0.1:5000/users/${id}`)
        console.log(response);
        let newUsers = users.filter(u=>u._id !== id)
        setUsers(newUsers)
    }
}

export default Users