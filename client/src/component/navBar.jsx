function NavBar(){
    return(
        <>
            <div>
                <ul style={{listStyle:"none"}}>
                    <li style={{display:"block"}}><a href="/home">home</a></li>
                    <li style={{display:"block"}}><a href="/users">users</a></li>
                    <li style={{display:"block"}}><a href="/register">register</a></li>

                </ul>
            </div>
        </>
    )
}
export default NavBar