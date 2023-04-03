import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/titles")
      .then((res) => res.json())
      .then((titles) => setData(titles))
      .catch((err) => console.log("ERROR:", err));
  }, []);

  const handleClick = () => {
    let matches = data.filter(
      (movie) => movie.title.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matches.length === 0) {
      setSearchData(["Sorry, no matches found"]);
    } else {
      setSearchData(matches);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {searchData.length
          ? searchData.map((movie, index) =>
              movie.title ? (
                <p key={index}>Title: {movie.title}</p>
              ) : (
                <p>{searchData}</p>
              )
            )
          : data.map((movie, index) => {
              return <p key={index}>Title: {movie.title}</p>;
            })}
        <input
          type="text"
          placeholder={"Search a Movie"}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
