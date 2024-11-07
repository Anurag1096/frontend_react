
import {Login} from './components/Login'
import {Signup} from './components/Signup'
import './App.css'
import { Home } from './components/Home'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
 
     
      {/*<Login/>*/}


   <div className='main-wrapper'>
   <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>}/>
        {/* <Route path="/about"  element={<About/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/> */}

      </Routes>
    </Router>
      
   </div>
    </>
  )
}

export default App
