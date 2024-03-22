import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
// 65875f04

const API_URL = "http://www.omdbapi.com?apikey=65875f04";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Cinestream</h1>;
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
    </div>
  );
};

export default App;
