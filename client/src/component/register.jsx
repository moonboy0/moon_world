import axios from "axios"
import { useState } from "react"

function Register(){
    let [value,setValue] = useState({
        first_name : "",
        last_name : "",
        user_name : "",
        password : ""
    })
    async function submited(e){
        e.preventDefault()
        let user = await axios.post("http://127.0.0.1:5000/users",value)
        console.log(user);
    }
    return(
        <>
            <from>
                <label>
                    enter your first name 
                    <input onChange={changed} value={value.first_name} name={"first_name"} type={"text"}/>
                    

                </label>
                <label>
                    enter your last name 

                <input onChange={changed} value={value.last_name} name={"last_name"} type={"text"}/>

                </label>

                <label>
                    enter your username

                <input onChange={changed} value={value.user_name} name={"user_name"} type={"text"}/>
                </label>
                

                <label>
                    enter your password 
                <input onChange={changed} value={value.password} name={"password"} type={"password"}/>

                </label>
                <button onClick={submited}>submited</button>

            </from>
        </>
    )
    function changed(e){
        let input = e.currentTarget 
        let newValue = {...value}
        newValue[input.name] = input.value 
        setValue(newValue)
    }
}

export default Register