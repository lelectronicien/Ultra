import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
