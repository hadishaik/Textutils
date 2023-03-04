import React, { useState } from "react";
import Navbar from './Navbar';
import Textform from './Textform';
import About from './About';
import Alert from './Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert('You have Enabled the Dark Mode', 'Success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('You have Disabled the Dark Mode', 'Success')
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
      <div>
        <Router>
      <Navbar title='Textutils' about='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Textform mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
