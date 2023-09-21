import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SingleCountry from "./pages/SingleCountry";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode) 
  }

  return (  
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-light_mode_bg dark:bg-dark_mode_bg text-light_mode_text dark:text-white">
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/name/:name" element={<SingleCountry />} />
        </Routes>
      </Router>
      </div>
    </div>
    
  )
}

export default App;
