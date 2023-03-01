import { useState, useRef } from "react";

function App() {
  const [movie, setMovie] = useState();
  const inputRef = useRef();

  async function fetchData(e) {
    e.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?t=${inputRef.current.value}&apikey=88fae847`
    );
    setMovie(await response.json());
    inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={(e) => fetchData(e)}>
        <input type="text" ref={inputRef} placeholder="Movie Name" />
        <button onClick={(e) => fetchData(e)}>search</button>
      </form>
      <br />
      <br />
      <img src={movie != undefined ? movie.Poster : ""} alt="" />
      <h1>{movie != undefined && movie.Title}</h1>
      <h2>{movie != undefined && movie.Year}</h2>
      <h2>{movie != undefined && movie.Released}</h2>
      <h2>{movie != undefined && movie.Genre}</h2>
      <h2>{movie != undefined && movie.Actors}</h2>
      <p>{movie != undefined && movie.Plot}</p>
    </div>
  );
}

export default App;
