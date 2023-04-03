import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
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

  const handleFave = (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(event);
  };
  return (
    <div className="App">
      <header className="App-header">
        {searchData.length
          ? searchData.map((movie, index) =>
              movie.title ? (
                <p key={index}>
                  Title: {movie.title}{" "}
                  <button
                    className="favorite-button"
                    onClick={handleFave}
                  ></button>
                </p>
              ) : (
                <p>{searchData}</p>
              )
            )
          : data.map((movie, index) => {
              return (
                <p key={index}>
                  Title: {movie.title}{" "}
                  <button
                    className="favorite-button"
                    onClick={handleFave}
                  ></button>
                </p>
              );
            })}
        <input
          type="text"
          placeholder={"Search a Movie"}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
        <h4 onClick={() => navigate("/edit")}>
          Click here to add/delete movies!
        </h4>
      </header>
    </div>
  );
}

export default App;
