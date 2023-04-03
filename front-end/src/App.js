import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/titles")
      .then((res) => res.json())
      .then((titles) => setData(titles));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.map((movie, index) => {
          return <p key={index}>Title: {movie.title}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
