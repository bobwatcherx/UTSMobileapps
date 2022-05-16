import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Landing from './pages/Landing.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App(){
  const loguser = localStorage.getItem("user")
  return(
     <BrowserRouter>
    <Routes>
    <Route path="/" element={loguser !== null ? <Landing/> :<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/landing" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    )
}