import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './component/navBar'
import Home from './component/home'
import NotFound from './component/notFound'
import Users from './component/uesrs'
import User from './component/user'
import Register from './component/register'
function App(){
    return(
        <>

    <Router>
    <NavBar/>

        <Routes>

            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/user/:id' element={<User/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
    </>
    )
}

export default App