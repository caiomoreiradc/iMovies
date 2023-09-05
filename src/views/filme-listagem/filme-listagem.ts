import "bootstrap";

import "./filme-listagem.css";

function obterFilmesApi() {
  fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTAzMzM1YjlmMTAxYjQzODNhOWQ4ZjAxNmRiNGM1ZiIsInN1YiI6IjY0YWVlNjliNjZhMGQzMDBjNjcwZjdlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.maqe-EQttCKGgwuXNLSalnq-BseNByKVa64rRPW8EGI",
    },
  })
    .then((res) => res.json())
    .then((obj) => console.log(obj));
}

obterFilmesApi();
