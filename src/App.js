import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SingleCountry from "./pages/SingleCountry";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (  
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/name/:name" element={<SingleCountry />} />
      </Routes>
    </Router>
  )
}

export default App;
