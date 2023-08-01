import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar"
import Textform from "./components/Textform";
import React, {useState} from 'react' ;
import Alert from "./components/Alert"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  let[mode, setmode] = useState('light');

    const[alert, setAlert] = useState(null);

    const showalert = (message,type) => {
       setAlert({
         msg: message ,
         type: type 
       })
       setTimeout(() => {
        setAlert(null);
       }, 3000);
    }

  const toggleMode = () => {
   if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = 'grey';
    showalert("Dark mode has been enabled", "sucess");
  }
    else{
      setmode = ('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "sucess");
      }

  }
  return (
    
    
   
<>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/About" element={<About/>} >
            </Route>
            <Route exact path="/home" element={<Textform showalert={showalert} heading="Enter your text to Analyse below" mode={mode}/>}>
            </Route>
          </Routes>
      </div>
      </Router> 


    </>

  );
}

export default App;
