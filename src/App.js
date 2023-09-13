import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import SingleCountry from "./pages/SingleCountry";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (  
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/name/:name" element={<SingleCountry />} />
      </Routes>
    </Router>
  )
}

export default App;
