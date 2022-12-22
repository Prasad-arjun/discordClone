import "./App.css";
import Dashboard from "./comp/dashboard";
import Home from "./comp/home";
import LogIn from "./comp/logIn";
import Register from "./comp/register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/login/register" element={<Register />}></Route>
          <Route exact path="/login/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/login/register/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/login/register/login" element={<LogIn />}></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
