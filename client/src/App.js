import './App.css';
import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import axios from "axios";
import PirateDisplay from "./Views/PirateDisplay"
import PirateAdd from "./Views/PirateAdd"

function App() {
  const [pirates, setPirates] = useState([]);
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates")
      .then((res) => setPirates(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="App">
      <Router>
        <PirateDisplay path="/"  pirates={pirates}  refresh={refresh} setRefresh={setRefresh}/>
        <PirateAdd path="pirate/add" refresh={refresh} setRefresh={setRefresh} />
      </Router>
    </div>
  );
}

export default App;
