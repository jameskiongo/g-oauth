import './App.css';
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () =>{
  const user = true;
  return (
  <div>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Login' element={user? <Navigate to="/" />:<Login />} />
      <Route path='/post/:id' element={user ? <Post />: <Navigate to="/login" />} />
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
