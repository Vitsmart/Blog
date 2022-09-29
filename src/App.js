import Navigation from "./components/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Settings from "./settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

function App() {

const user = true;

  return (
    <>
    <Navigation />
   <BrowserRouter>  
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='register' element=
     {user ? <Home/> : <Register />} />
     <Route path='login' element={user ? <Home/> :<Login/>} />
     <Route path='write' element={user ? <Home/> :<Write/>} />
     <Route path='settings' element={user ? <Home/> :<Settings />} />
     <Route path='post/:postId' element={<Single />} />

    
    </Routes>
    </BrowserRouter>
    </>
  
  )
}

export default App;
