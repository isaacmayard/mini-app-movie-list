import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/EditPage.css";

const EditPage = () => {
  const navigate = useNavigate();
  const [movieToDelete, setMovieToDelete] = useState("");
  const [movieToAdd, setMovieToAdd] = useState("");

  const addRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ title: movieToAdd }),
  };

  const deleteRequestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: movieToDelete }),
  };

  const handleAddClick = () => {
    fetch("http://localhost:8080/titles", addRequestOptions)
      .then((response) => response.json())
      .then((data) => alert(`Successfully added!`))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = () => {
    fetch("http://localhost:8080/titles", deleteRequestOptions)
      .then((response) => response.json())
      .then((data) => alert(`Successfully deleted!`))
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <header className="header">
        <h5 onClick={() => navigate("/")}>Return to home</h5>
        <span>Delete</span>
        <input
          type="text"
          placeholder={"Enter movie to delete"}
          onChange={(event) => setMovieToDelete(event.target.value)}
        />
        <button type="button" onClick={handleDeleteClick}>
          Submit
        </button>
        <br></br>
        <span>Add</span>
        <input
          type="text"
          placeholder={"Enter movie to add"}
          onChange={(event) => setMovieToAdd(event.target.value)}
        />
        <button type="button" onClick={handleAddClick}>
          Submit
        </button>
      </header>
    </div>
  );
};

export default EditPage;
