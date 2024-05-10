import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import Quiz from "./components/Quiz";
import Final from "./components/Final"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Category />} />  {/* Rota para a página inicial */}
      <Route path="/category" element={<Category />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="/final" element={<Final />} />  {/* Rota para casos sem correspondência */}
    </Routes>
  </Router>
);

export default App;
