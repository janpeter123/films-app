import "../Styles/Filmes.css";
import { useEffect, useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Route, Link, BrowserRouter , useParams} from "react-router-dom";
import Detalhes from "./Detalhes";

function Filmes() {
  const [movies, setMovies] = useState([{ backdrop_path: "null" }]);
  const [hero, setHero] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c9680c5e8dedd8ce95289c14748165f9"
      );
      const data = await res.json();
      setMovies(data.results);
    }

    async function getTrendingSeries() {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=c9680c5e8dedd8ce95289c14748165f9"
      );
      const data = await res.json();
      setSeries(data.results);
    }

    getTrendingMovies();
    getTrendingSeries();
  }, []);

  if (movies) {
    return (
      <section>
        {/* */}
        <div id="div_hero">
        <div
          id="backdrop"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}")`,
            opacity: "0.6",
          }}
        ></div>
          <Link to={`/detalhes/${movies[0].id}`}>
            <h1 id="title_hero">{movies[0].original_title}</h1>
          </Link>
        </div>
        <section>
          <div className="titulo" id="section">
            <h1 className="tituloFilmes">Trending Movies</h1>
          </div>
          <div className="Filmes">
            {movies.map((movie) => {
              return (
                <Link to={`/detalhes/${movie.id}`} key={movie.id}>
                  <div className="Filme">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                      width="160px"
                      height="236px"
                    />
                    <div className="ratings">
                      <StarRateRoundedIcon style={{ color: "gold" }} />
                      <p className="ratingAvg">
                        {(movie.vote_average / 2) * 1.0}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="titulo">
            <h1 className="tituloFilmes">Trending TV shows</h1>
          </div>
          <div className="Series">
            {series.map((serie) => {
              return (
                <Link
                  to={`/detalhes/${serie.id}`}
                  key={serie.id}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="Filme">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + serie.poster_path
                      }
                      width="160px"
                      height="236px"
                    />
                    <div className="ratings">
                      <StarRateRoundedIcon style={{ color: "gold" }} />
                      <p className="ratingAvg">
                        {(serie.vote_average / 2) * 1.0}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    );
  } else {
    return <p>Carregando...</p>;
  }
}

export default Filmes;
