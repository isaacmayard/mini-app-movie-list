import logo from "./logo.svg";
import "./App.css";
import React from "react";

const movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {movies.map((movie, index) => {
          console.log(movie.title);
          return <p key={index}>Title: {movie.title}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
