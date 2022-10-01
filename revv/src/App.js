import logo from './logo.svg';
import Navbar from"./Component/Navbar";
import Middle from "./Component/Middle";
import Footer from "./Component/Footer";
import Signup from './Component/Signup';
import Login from "./Component/Login";
import './App.css';
import Signup from './Component/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <Footer/>
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
