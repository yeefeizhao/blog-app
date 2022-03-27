import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Login from './Login.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Register';
import Reset from './Reset';
import Blogs from './Blogs';
import Create from './Create';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/login' element = {<Login />}/>
          <Route path = '/register' element = {<Register />}/>
          <Route path = '/reset' element = {<Reset />}/>
          <Route path = '/blogs' element = {<Blogs />}/>
          <Route path = '/create' element = {<Create />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
