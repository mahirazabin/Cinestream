import { useEffect } from "react";

// 65875f04

const API_URL = "http://www.omdb.com?apikey=65875f04";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <h1>App</h1>;
};

export default App;
