import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Pages/Home/Home";


function App() {
  

  return (
    <div className="App">
     <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route index Component={Home}></Route>        
        <Route  path="movie/:id" element={<h1>Movie Detail Page</h1>}></Route>
        <Route  path="movies/:type" element={<h1>Movie List Page</h1>}></Route>
        <Route path="/" element={<h1>Error Page</h1>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
