import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([])
  const [q, setQ] = useState("")

  return (
    <div className="App">
      <div>Filter goes here.</div>
      <div>Datetable goes here.</div>
    </div>
  );
}

export default App;
